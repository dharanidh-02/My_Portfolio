import { motion } from 'framer-motion'

const SplineSection = () => {
  return (
    <section className="h-[420px] sm:h-[500px] md:h-[560px] w-full relative overflow-hidden bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="cinematic-robot-frame"
      >
        <spline-viewer
          url="https://prod.spline.design/TosAiFXXYUvw8Ucs/scene.splinecode"
          className="cinematic-spline"
          loading="lazy"
        ></spline-viewer>
        <div className="spline-watermark-cover"></div>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-background"></div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-background/95 via-transparent to-background/95"></div>
      </motion.div>
    </section>
  )
}

export default SplineSection
