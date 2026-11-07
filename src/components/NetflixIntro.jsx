import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { playTudum } from '../utils/tudum'

const NetflixIntro = ({ onComplete, forceShow = false }) => {
  const [show, setShow] = useState(() => {
    if (forceShow) return true
    if (typeof window !== 'undefined') {
      const seen = sessionStorage.getItem('netflix_intro_seen')
      if (seen) return false
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReduced) return false
    }
    return true
  })

  useEffect(() => {
    if (!show) {
      onComplete?.()
      return
    }

    // Play signature Netflix chime immediately on start
    playTudum()

    // Rapid, non-blocking 800ms reveal then fade out into homepage
    const timer = setTimeout(() => {
      setShow(false)
      sessionStorage.setItem('netflix_intro_seen', 'true')
      onComplete?.()
    }, 850)

    return () => clearTimeout(timer)
  }, [show, onComplete])

  if (!show) return null

  return (
    <AnimatePresence>
      <motion.div
        key="quick-netflix-brand-reveal"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#000000] select-none pointer-events-none"
      >
        {/* Subtle Netflix Red Ambient Pulse */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.45, scale: 1.15 }}
          exit={{ opacity: 0, scale: 1.3 }}
          transition={{ duration: 0.7 }}
          className="absolute h-96 w-96 rounded-full bg-[#E50914] blur-[140px] pointer-events-none"
        />

        {/* Crisp Netflix Red Logo Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.65 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.12 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center"
        >
          <span
            className="text-7xl sm:text-8xl md:text-9xl font-black text-[#E50914] tracking-tighter drop-shadow-[0_0_40px_rgba(229,9,20,0.85)]"
            style={{ fontFamily: 'Impact, -apple-system, sans-serif' }}
          >
            N
          </span>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="mt-3 text-center"
          >
            <p className="text-xs sm:text-sm font-black uppercase tracking-[0.35em] text-white">
              DHARANIDHARAN
            </p>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E50914] mt-0.5">
              SERIES
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default NetflixIntro