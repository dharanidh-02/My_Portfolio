import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IntroScene = ({ visible }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9990] overflow-hidden bg-background"
        >
          <spline-viewer
            url="https://prod.spline.design/M3Ljuk1AONxmb-MC/scene.splinecode"
            className="intro-spline"
          ></spline-viewer>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/80 via-transparent to-background/30"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-background to-transparent"></div>
          <div className="intro-watermark-cover"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroScene
