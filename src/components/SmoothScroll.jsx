import { ReactLenis, useLenis } from 'lenis/react'
import { useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function LenisScrollTriggerBridge() {
  useLenis(() => {
    ScrollTrigger.update()
  })

  useEffect(() => {
    // Disable GSAP lag smoothing to ensure frame-accurate sync between Lenis and ScrollTrigger in both forward and reverse scrolling
    gsap.ticker.lagSmoothing(0)

    // Refresh ScrollTrigger after initial mount and font loading
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
    }, 250)

    window.addEventListener('resize', () => ScrollTrigger.refresh())

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', () => ScrollTrigger.refresh())
    }
  }, [])

  return null
}

export default function SmoothScroll({ children }) {
  const prefersReducedMotion = useReducedMotion()
  const options = prefersReducedMotion
    ? { lerp: 1, duration: 0, smoothWheel: false, wheelMultiplier: 1 }
    : { lerp: 0.08, duration: 1.1, smoothWheel: true, wheelMultiplier: 0.9, syncTouch: true }

  return (
    <ReactLenis root options={options}>
      <LenisScrollTriggerBridge />
      {children}
    </ReactLenis>
  )
}
