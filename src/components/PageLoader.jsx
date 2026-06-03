import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PageLoader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-background"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(163,230,53,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "120%" }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
            className="absolute left-0 top-0 h-28 w-full bg-gradient-to-b from-transparent via-cyan-glow/10 to-transparent"
          ></motion.div>

          <div className="relative flex h-72 w-72 items-center justify-center md:h-96 md:w-96">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-cyan-glow/20 border-t-cyan-glow/80"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, ease: "linear", repeat: Infinity }}
              className="absolute inset-8 rounded-full border border-purple-accent/20 border-b-purple-accent/80"
            ></motion.div>
            <div className="absolute inset-16 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl"></div>

            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative text-center"
            >
              <div className="text-6xl font-black tracking-tighter text-white md:text-8xl">
                DD
              </div>
              <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.45em] text-cyan-glow">
                System Online
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: "easeInOut", delay: 0.15 }}
              className="absolute bottom-12 h-px w-48 origin-left bg-cyan-glow md:bottom-16"
            ></motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader
