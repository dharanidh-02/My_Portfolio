import { ReactLenis } from 'lenis/react'
import { useEffect } from 'react'

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.1, smoothWheel: true, wheelMultiplier: 0.9 }}>
      {children}
    </ReactLenis>
  )
}
