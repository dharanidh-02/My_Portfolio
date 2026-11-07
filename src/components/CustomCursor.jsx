import React, { useEffect, useRef, useState } from 'react'
import { Play, ChevronLeft, ChevronRight, Eye } from 'lucide-react'

const CustomCursor = () => {
  const cursorCoreRef = useRef(null)
  const cursorAuraRef = useRef(null)
  const rippleRef = useRef(null)

  // Mouse & smooth positions
  const mousePos = useRef({ x: -100, y: -100 })
  const auraPos = useRef({ x: -100, y: -100 })
  const isVisible = useRef(false)
  const isMouseDown = useRef(false)
  const [clickRipple, setClickRipple] = useState(null)

  // Cursor mode: 'normal' | 'button' | 'project' | 'link' | 'arrow-left' | 'arrow-right' | 'tab'
  const [cursorMode, setCursorMode] = useState('normal')
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    // Only enable on fine pointer devices (desktops/laptops with a mouse/trackpad)
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isTouch || prefersReducedMotion) {
      setIsEnabled(false)
      return
    }

    setIsEnabled(true)

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      if (!isVisible.current) {
        isVisible.current = true
        auraPos.current = { x: e.clientX, y: e.clientY }
      }

      // Detect interactive hover target
      const target = e.target

      // 1. Carousel Arrow Buttons
      const arrowBtn = target.closest('button[aria-label*="Scroll"], button[aria-label*="scroll"]')
      if (arrowBtn) {
        const label = (arrowBtn.getAttribute('aria-label') || '').toLowerCase()
        if (label.includes('left')) {
          setCursorMode('arrow-left')
          return
        }
        if (label.includes('right')) {
          setCursorMode('arrow-right')
          return
        }
      }

      // 2. Project Card or Video Tile
      const projectCard = target.closest('.series-rail-card, [data-project-card]')
      if (projectCard && !target.closest('button, a')) {
        setCursorMode('project')
        return
      }

      // 3. Category Tabs / Skill Chips
      const skillPill = target.closest('[data-skill-pill], [role="tab"]')
      if (skillPill) {
        setCursorMode('tab')
        return
      }

      // 4. Links
      const link = target.closest('a')
      if (link) {
        setCursorMode('link')
        return
      }

      // 5. Buttons
      const button = target.closest('button, [role="button"]')
      if (button) {
        setCursorMode('button')
        return
      }

      // Default
      setCursorMode('normal')
    }

    const handleMouseDown = (e) => {
      isMouseDown.current = true
      setClickRipple({ x: e.clientX, y: e.clientY, id: Date.now() })
    }

    const handleMouseUp = () => {
      isMouseDown.current = false
    }

    const handleMouseLeave = () => {
      isVisible.current = false
      if (cursorCoreRef.current) cursorCoreRef.current.style.opacity = '0'
      if (cursorAuraRef.current) cursorAuraRef.current.style.opacity = '0'
    }

    const handleMouseEnter = () => {
      isVisible.current = true
      if (cursorCoreRef.current) cursorCoreRef.current.style.opacity = '1'
      if (cursorAuraRef.current) cursorAuraRef.current.style.opacity = '1'
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // Fluid physics loop using requestAnimationFrame
    let animationFrameId
    const render = () => {
      // Smooth lerp for trailing aura (0.16 factor for silky weighted inertia)
      const lerp = 0.16
      auraPos.current.x += (mousePos.current.x - auraPos.current.x) * lerp
      auraPos.current.y += (mousePos.current.y - auraPos.current.y) * lerp

      // Direct tracking for core laser dot
      if (cursorCoreRef.current && isVisible.current) {
        cursorCoreRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`
        cursorCoreRef.current.style.opacity = '1'
      }

      // Fluid trailing aura
      if (cursorAuraRef.current && isVisible.current) {
        const scale = isMouseDown.current ? 0.88 : 1
        cursorAuraRef.current.style.transform = `translate3d(${auraPos.current.x}px, ${auraPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`
        cursorAuraRef.current.style.opacity = '1'
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  if (!isEnabled) return null

  // Aura styling based on cursor mode
  const getAuraClass = () => {
    switch (cursorMode) {
      case 'project':
        return 'w-24 h-9 rounded-full bg-black/80 border border-[#E50914] shadow-[0_0_25px_rgba(229,9,20,0.7)]'
      case 'button':
        return 'w-12 h-12 rounded-full bg-[#E50914]/20 border border-[#E50914] shadow-[0_0_20px_rgba(229,9,20,0.8)]'
      case 'tab':
        return 'w-10 h-10 rounded-full bg-[#E50914]/15 border border-[#E50914]/70 shadow-[0_0_15px_rgba(229,9,20,0.5)]'
      case 'link':
        return 'w-9 h-9 rounded-full bg-transparent border-2 border-[#E50914] shadow-[0_0_18px_#E50914]'
      case 'arrow-left':
      case 'arrow-right':
        return 'w-11 h-11 rounded-full bg-[#161616]/95 border border-white/60 shadow-[0_0_18px_rgba(229,9,20,0.4)]'
      case 'normal':
      default:
        return 'w-8 h-8 rounded-full bg-[#E50914]/[0.08] border border-[#E50914]/50 shadow-[0_0_14px_rgba(229,9,20,0.45)]'
    }
  }

  return (
    <>
      {/* 1. Trailing Netflix Cinematic Aura / Viewfinder Lens */}
      <div
        ref={cursorAuraRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[999999] transition-[width,height,border-radius,background-color,border-color,box-shadow] duration-200 ease-out flex items-center justify-center opacity-0 ${getAuraClass()}`}
        style={{ willChange: 'transform' }}
      >
        {/* Project Card State: "▶ PLAY" Pill */}
        {cursorMode === 'project' && (
          <div className="flex items-center gap-1.5 px-2.5 text-white">
            <Play size={11} fill="#E50914" className="text-[#E50914] animate-pulse shrink-0" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">PLAY</span>
          </div>
        )}

        {/* Carousel Arrow Navigation */}
        {cursorMode === 'arrow-left' && (
          <ChevronLeft size={16} className="text-white drop-shadow-[0_0_6px_#E50914]" />
        )}
        {cursorMode === 'arrow-right' && (
          <ChevronRight size={16} className="text-white drop-shadow-[0_0_6px_#E50914]" />
        )}

        {/* Normal Mode Viewfinder Corner Accents */}
        {cursorMode === 'normal' && (
          <>
            <span className="absolute top-0.5 left-0.5 h-1 w-1 border-t border-l border-[#E50914]/80" />
            <span className="absolute top-0.5 right-0.5 h-1 w-1 border-t border-r border-[#E50914]/80" />
            <span className="absolute bottom-0.5 left-0.5 h-1 w-1 border-b border-l border-[#E50914]/80" />
            <span className="absolute bottom-0.5 right-0.5 h-1 w-1 border-b border-r border-[#E50914]/80" />
          </>
        )}
      </div>

      {/* 2. Razor-Sharp Netflix Crimson Core Dot */}
      <div
        ref={cursorCoreRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[999999] rounded-full transition-[width,height,opacity,background-color] duration-150 ease-out opacity-0 ${
          cursorMode === 'project' || cursorMode === 'arrow-left' || cursorMode === 'arrow-right'
            ? 'opacity-0 scale-0'
            : cursorMode === 'button' || cursorMode === 'link' || cursorMode === 'tab'
            ? 'h-2 w-2 bg-white shadow-[0_0_8px_#ffffff]'
            : 'h-1.5 w-1.5 bg-[#E50914] shadow-[0_0_8px_#E50914,0_0_14px_rgba(229,9,20,0.8)]'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* 3. Click Pulse Shockwave Ripple */}
      {clickRipple && (
        <span
          key={clickRipple.id}
          className="pointer-events-none fixed z-[999998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E50914] shadow-[0_0_16px_#E50914] animate-ping"
          style={{
            left: clickRipple.x,
            top: clickRipple.y,
            width: 28,
            height: 28,
            animationDuration: '0.45s',
            animationIterationCount: 1,
          }}
          onAnimationEnd={() => setClickRipple(null)}
        />
      )}
    </>
  )
}

export default CustomCursor
