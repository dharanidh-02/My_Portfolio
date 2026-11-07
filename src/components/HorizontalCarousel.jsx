import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const HorizontalCarousel = ({
  header,
  ariaLabel,
  children,
  className = '',
  trackClassName = '',
  regionRole = 'region',
  ariaLabelledBy,
  id,
  pinned = true,
}) => {
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const scrollTriggerRef = useRef(null)

  const generatedId = useId()
  const railId = id || generatedId
  const prefersReducedMotion = useReducedMotion()

  const [isMobile, setIsMobile] = useState(() => (
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  ))
  const [scrollState, setScrollState] = useState({ canScrollLeft: false, canScrollRight: true })

  // Check screen width for mobile fallback
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // 1. PINNED HORIZONTAL SCROLL ANIMATION (NETFLIX CINEMATIC EXPERIENCE)
  useEffect(() => {
    // Fallback to native touch scroll on mobile screens or if user requested reduced motion
    if (!pinned || isMobile || prefersReducedMotion) {
      return undefined
    }

    const section = sectionRef.current
    const container = containerRef.current
    const track = trackRef.current

    if (!section || !container || !track) return undefined

    // Layout-based pixel calculation: guarantees that the last card is 100% visible with comfortable breathing room
    const getTravelDistance = () => {
      if (!track || !container) return 0
      const lastChild = track.lastElementChild
      if (!lastChild) {
        return Math.max(0, track.scrollWidth - container.clientWidth + 60)
      }

      // Exact untransformed right edge of the last child inside track
      const lastChildEndInTrack = lastChild.offsetLeft + lastChild.offsetWidth
      const trackOffsetInContainer = track.offsetLeft || 0
      const totalContentWidth = lastChildEndInTrack + trackOffsetInContainer

      // Desired margin inside the container's right edge so the last card has generous breathing room
      const rightMargin = window.innerWidth >= 1024 ? 96 : (window.innerWidth >= 640 ? 56 : 28)
      const targetRight = container.clientWidth - rightMargin

      return Math.max(0, Math.round(totalContentWidth - targetRight))
    }

    const distance = getTravelDistance()
    if (distance <= 20) {
      // Content already fits comfortably within the viewport; no need to pin
      setScrollState({ canScrollLeft: false, canScrollRight: false })
      return undefined
    }

    const ctx = gsap.context(() => {
      // Ensure track strictly starts at position 0 so Card 1 is fully visible
      gsap.set(track, { x: 0 })

      // travelScroll: vertical scroll distance required for horizontal card travel
      const travelScroll = Math.max(Math.round(distance * 1.35), 900)

      // Symmetrical buffers for smooth bi-directional scrolling (top-to-bottom and bottom-to-top)
      // startHoldScroll: ensures the section reaches and rests on Card 1 first before moving
      const startHoldScroll = Math.max(Math.round(travelScroll * 0.22), 260)
      // endHoldScroll: ensures final card rests at the end before releasing to the next section
      const endHoldScroll = Math.max(Math.round(travelScroll * 0.48), 540)

      const totalScroll = startHoldScroll + travelScroll + endHoldScroll
      const startFraction = startHoldScroll / totalScroll
      const endFraction = (startHoldScroll + travelScroll) / totalScroll

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          scrub: 0.8, // Smooth, weighted scrub
          start: 'top top', // Centered section pins as soon as it occupies the viewport
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true,
          onUpdate: (self) => {
            scrollTriggerRef.current = self
            const prog = self.progress
            setScrollState({
              canScrollLeft: prog > (startFraction + 0.02),
              // Right arrow turns off when cards have reached the final position
              canScrollRight: prog < (endFraction - 0.02),
            })
          },
        },
      })

      // Phase 1: Resting hold at start (Card 1 visible, stable on both forward and reverse scrolling)
      tl.to({}, {
        duration: startHoldScroll / travelScroll,
      })

      // Phase 2: Translate cards horizontally until the last card is fully in view
      tl.to(track, {
        x: () => -getTravelDistance(),
        ease: 'none',
        duration: 1,
      })

      // Phase 3: Resting hold at the end!
      // The cards remain stationary at the end of the rail.
      // The section stays locked in the middle of the viewport while the user continues scrolling.
      // Only when the user scrolls past this hold does the timeline reach 100% and unpin to the next section!
      tl.to({}, {
        duration: endHoldScroll / travelScroll,
      })
    }, section)

    return () => {
      ctx.revert()
      scrollTriggerRef.current = null
    }
  }, [pinned, isMobile, prefersReducedMotion])

  // 2. MOBILE TOUCH SCROLL STATE UPDATE
  const updateMobileScrollState = useCallback(() => {
    const container = containerRef.current
    if (!container || !isMobile) return

    const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth)
    setScrollState({
      canScrollLeft: container.scrollLeft > 2,
      canScrollRight: container.scrollLeft < maxScroll - 2,
    })
  }, [isMobile])

  // 3. SYNCHRONIZED ARROW NAVIGATION
  const handleScroll = (direction) => {
    // Mobile or reduced motion: scroll container element directly
    if (!pinned || isMobile || prefersReducedMotion || !scrollTriggerRef.current) {
      if (containerRef.current) {
        const step = containerRef.current.clientWidth * 0.8
        containerRef.current.scrollBy({ left: direction * step, behavior: 'smooth' })
      }
      return
    }

    // Desktop/Tablet pinned mode: smoothly scroll the window by 1 card step along the ScrollTrigger timeline
    const st = scrollTriggerRef.current
    if (!st) return

    const childCount = trackRef.current ? Math.max(1, trackRef.current.children.length - 1) : 4
    const totalScroll = st.end - st.start
    const cardStep = Math.round(totalScroll / childCount)

    const targetScrollY = clamp(window.scrollY + direction * cardStep, st.start, st.end)

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    })
  }

  const arrowClass =
    'carousel-arrow grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-[#141414]/90 text-white shadow-lg transition duration-200 hover:scale-110 hover:border-white/50 hover:bg-[#222222] active:scale-95 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:scale-100 sm:h-10 sm:w-10'

  return (
    <div
      ref={sectionRef}
      className={`relative w-full ${
        pinned && !isMobile && !prefersReducedMotion
          ? 'h-screen min-h-[620px] max-h-[1080px] flex flex-col justify-center'
          : 'py-8 sm:py-16'
      } ${className}`}
    >
      {/* Netflix Section Header with Controls */}
      {header && (
        <div className="mb-5 flex items-end justify-between px-5 sm:px-10 lg:px-14">
          <div className="flex-1 min-w-0 pr-4">{header}</div>
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              aria-label={`Scroll ${ariaLabel || 'carousel'} left`}
              aria-controls={railId}
              disabled={!scrollState.canScrollLeft}
              onClick={() => handleScroll(-1)}
              className={arrowClass}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={`Scroll ${ariaLabel || 'carousel'} right`}
              aria-controls={railId}
              disabled={!scrollState.canScrollRight}
              onClick={() => handleScroll(1)}
              className={arrowClass}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* Main Track Viewport */}
      <div className="relative w-full">
        {/* If no external header was provided, render controls as overlay buttons */}
        {!header && (
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-30 flex items-center justify-between px-3 sm:px-6">
            <button
              type="button"
              aria-label={`Scroll ${ariaLabel || 'carousel'} left`}
              aria-controls={railId}
              disabled={!scrollState.canScrollLeft}
              onClick={() => handleScroll(-1)}
              className={`pointer-events-auto ${arrowClass}`}
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={`Scroll ${ariaLabel || 'carousel'} right`}
              aria-controls={railId}
              disabled={!scrollState.canScrollRight}
              onClick={() => handleScroll(1)}
              className={`pointer-events-auto ${arrowClass}`}
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        )}

        {/* Viewport Container */}
        <div
          id={railId}
          ref={containerRef}
          role={regionRole}
          aria-roledescription="carousel"
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          tabIndex={0}
          onScroll={isMobile ? updateMobileScrollState : undefined}
          className={`w-full ${
            !pinned || isMobile || prefersReducedMotion
              ? 'netflix-rail overflow-x-auto cursor-grab active:cursor-grabbing px-5 sm:px-10 lg:px-14'
              : 'overflow-hidden px-5 sm:px-10 lg:px-14'
          }`}
        >
          {/* Horizontally Moving Card Track */}
          <div
            ref={trackRef}
            className={`flex flex-nowrap items-stretch gap-4 sm:gap-6 py-4 pr-10 sm:pr-16 lg:pr-24 ${
              !pinned || isMobile || prefersReducedMotion ? '' : 'will-change-transform'
            } ${trackClassName}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HorizontalCarousel
