import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    const glow = glowRef.current

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        xPercent: -50,
        yPercent: -50,
        duration: 0.05,
        overwrite: 'auto',
      })
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        xPercent: -50,
        yPercent: -50,
        duration: 0.16,
        ease: 'power3.out',
        overwrite: 'auto',
      })
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        xPercent: -50,
        yPercent: -50,
        duration: 0.28,
        ease: 'power3.out',
        overwrite: 'auto',
      })
    }

    const onEnterInteractive = () => {
      gsap.to(follower, { scale: 1.8, borderColor: 'rgba(139, 92, 246, 0.8)', duration: 0.2 })
      gsap.to(cursor, { scale: 0.7, backgroundColor: '#8b5cf6', duration: 0.2 })
    }

    const onLeaveInteractive = () => {
      gsap.to(follower, { scale: 1, borderColor: 'rgba(163, 230, 53, 0.6)', duration: 0.2 })
      gsap.to(cursor, { scale: 1, backgroundColor: '#a3e635', duration: 0.2 })
    }

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]')
    window.addEventListener('mousemove', onMouseMove)
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', onEnterInteractive)
      element.addEventListener('mouseleave', onLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', onEnterInteractive)
        element.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-[9997] bg-cyan-glow/10 blur-xl"
      ></div>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-glow rounded-full pointer-events-none z-[9999] shadow-[0_0_16px_rgba(163,230,53,0.95)]"
      >
        <span className="absolute left-1/2 top-[-10px] h-2 w-px -translate-x-1/2 bg-cyan-glow/80"></span>
        <span className="absolute left-1/2 bottom-[-10px] h-2 w-px -translate-x-1/2 bg-cyan-glow/80"></span>
        <span className="absolute top-1/2 left-[-10px] h-px w-2 -translate-y-1/2 bg-cyan-glow/80"></span>
        <span className="absolute top-1/2 right-[-10px] h-px w-2 -translate-y-1/2 bg-cyan-glow/80"></span>
      </div>
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-cyan-glow/60 rounded-full pointer-events-none z-[9998] shadow-[0_0_24px_rgba(163,230,53,0.35)]"
      ></div>
    </>
  )
}

export default CustomCursor
