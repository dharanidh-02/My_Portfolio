import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Play } from 'lucide-react'
import profileImage from '../assets/resume-transparent.png'

const revealSteps = [
  [1, 400],
  [2, 1120],
  [3, 1780],
  [4, 2760],
  [5, 4020],
  [6, 4480],
]

const CinematicIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0)
  const [isLeaving, setIsLeaving] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const introRef = useRef(null)
  const leavingRef = useRef(false)
  const leaveTimerRef = useRef(null)

  useEffect(() => {
    const intro = introRef.current
    const siblings = intro?.parentElement
      ? Array.from(intro.parentElement.children).filter((element) => element !== intro)
      : []
    const previousStates = siblings.map((element) => ({
      element,
      ariaHidden: element.getAttribute('aria-hidden'),
      inert: element.inert,
    }))

    previousStates.forEach(({ element }) => {
      element.setAttribute('aria-hidden', 'true')
      element.inert = true
    })
    intro?.focus({ preventScroll: true })

    return () => {
      previousStates.forEach(({ element, ariaHidden, inert }) => {
        if (ariaHidden === null) element.removeAttribute('aria-hidden')
        else element.setAttribute('aria-hidden', ariaHidden)
        element.inert = inert
      })
    }
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem('series_intro_seen') === 'true') {
      onComplete()
      return undefined
    }

    if (prefersReducedMotion) {
      sessionStorage.setItem('series_intro_seen', 'true')
      onComplete()
      return undefined
    }

    const timers = revealSteps.map(([nextPhase, delay]) => (
      window.setTimeout(() => setPhase(nextPhase), delay)
    ))

    return () => {
      timers.forEach(window.clearTimeout)
      window.clearTimeout(leaveTimerRef.current)
    }
  }, [onComplete, prefersReducedMotion])

  const handleContinue = () => {
    if (leavingRef.current) return

    leavingRef.current = true
    setIsLeaving(true)
    leaveTimerRef.current = window.setTimeout(() => {
      sessionStorage.setItem('series_intro_seen', 'true')
      onComplete()
    }, prefersReducedMotion ? 0 : 520)
  }

  const portraitTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 1.25, ease: [0.2, 0.82, 0.27, 1] }

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: isLeaving ? 0 : 1, scale: isLeaving ? 1.035 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.55, ease: 'easeInOut' }}
      ref={introRef}
      tabIndex={-1}
      className="fixed inset-0 z-[9999] isolate overflow-hidden bg-[#080B18]"
      role="dialog"
      aria-modal="true"
      aria-label="Dharanidharan — The Series opening"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 25%, rgba(48, 25, 72, 0.28), transparent 58%), radial-gradient(ellipse at 50% 76%, rgba(126, 12, 36, 0.12), transparent 48%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 22%, rgba(0, 0, 0, 0.58) 100%)' }}
      />

      {phase >= 4 && (
        <motion.div
          initial={{ opacity: 0, y: '26vh', scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={portraitTransition}
          className="absolute bottom-0 left-1/2 z-10 h-[74vh] w-[min(94vw,42rem)]"
          style={{ x: '-50%' }}
          aria-hidden="true"
        >
          <div
            className="absolute inset-x-[8%] top-[2%] h-[72%] rounded-full blur-[76px]"
            style={{ background: 'radial-gradient(ellipse at 50% 22%, rgba(117, 16, 43, 0.17), rgba(53, 24, 78, 0.12) 42%, transparent 76%)' }}
          />
          <div
            className="absolute inset-x-[5%] bottom-[8%] h-[58%] rounded-full blur-[88px]"
            style={{ background: 'radial-gradient(ellipse at 50% 18%, rgba(133, 15, 42, 0.13), rgba(53, 24, 78, 0.1) 46%, transparent 78%)' }}
          />
          <img
            src={profileImage}
            alt=""
            draggable="false"
            className="relative h-full w-full select-none object-contain object-bottom drop-shadow-[0_0_28px_rgba(108,10,32,0.16)]"
            style={{
              maskImage: 'radial-gradient(ellipse 104% 108% at 50% 0%, #000 62%, rgba(0,0,0,0.94) 70%, rgba(0,0,0,0.68) 82%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 104% 108% at 50% 0%, #000 62%, rgba(0,0,0,0.94) 70%, rgba(0,0,0,0.68) 82%, transparent 100%)',
            }}
          />
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{
          opacity: phase >= 1 && !isLeaving ? 1 : 0,
          y: phase >= 3 ? '-39vh' : 0,
          scale: phase >= 3 ? 0.72 : 1,
        }}
        transition={{
          opacity: { duration: prefersReducedMotion ? 0 : 0.72, ease: 'easeOut' },
          y: { duration: prefersReducedMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] },
          scale: { duration: prefersReducedMotion ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] },
        }}
        className="absolute left-1/2 top-1/2 z-20 w-full px-4 text-center"
        style={{ x: '-50%' }}
      >
        <h1 className="series-display whitespace-nowrap text-[clamp(2.1rem,9.4vw,8.5rem)] leading-[0.86] tracking-[0.035em] text-white [text-shadow:0_0_28px_rgba(255,255,255,0.14),0_4px_36px_rgba(0,0,0,0.8)]">
          DHARANIDHARAN
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 8, letterSpacing: '0.24em' }}
          animate={{
            opacity: phase >= 2 && !isLeaving ? 1 : 0,
            y: phase >= 2 ? 0 : 8,
            letterSpacing: phase >= 2 ? '0.58em' : '0.24em',
          }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.62, ease: 'easeOut' }}
          className="mt-3 text-[10px] font-semibold uppercase text-[#ef3348] drop-shadow-[0_0_14px_rgba(229,9,20,0.45)] sm:text-xs sm:tracking-[0.72em]"
        >
          The Series
        </motion.p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: phase >= 5 && !isLeaving ? 1 : 0, y: phase >= 5 ? 0 : 12 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.65, ease: 'easeOut' }}
        className="absolute bottom-[6.3rem] left-1/2 z-30 w-full -translate-x-1/2 px-4 text-center text-[9px] font-medium uppercase tracking-[0.18em] text-white/75 sm:bottom-28 sm:text-xs sm:tracking-[0.28em]"
      >
        AI/ML Engineer <span className="px-1.5 text-[#ef3348]">•</span> Full Stack Developer <span className="px-1.5 text-[#ef3348]">•</span> DevOps Enthusiast
      </motion.p>

      {phase >= 6 && (
        <motion.button
          type="button"
          onClick={handleContinue}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isLeaving ? 0 : 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.48, ease: 'easeOut' }}
          className="absolute bottom-5 left-1/2 z-40 inline-flex -translate-x-1/2 items-center gap-2 rounded-sm bg-white px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] text-black shadow-[0_0_28px_rgba(255,255,255,0.16)] transition-colors hover:bg-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E50914] sm:bottom-7"
        >
          <Play size={14} fill="currentColor" aria-hidden="true" />
          Play
        </motion.button>
      )}
      {phase >= 4 && (
        <motion.button
          type="button"
          onClick={handleContinue}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: isLeaving ? 0 : 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4, ease: 'easeOut' }}
          className="absolute right-4 top-4 z-50 rounded-full border border-white/25 bg-black/35 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/75 transition-colors hover:border-white/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E50914] sm:right-8 sm:top-8 sm:text-[10px]"
        >
          Skip intro
        </motion.button>
      )}
    </motion.div>
  )
}

export default CinematicIntro
