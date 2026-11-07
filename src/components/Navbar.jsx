import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Bell, ExternalLink, FileText, ChevronDown, Menu, X, RotateCcw } from 'lucide-react'
import { playTudum } from '../utils/tudum'
import profileAvatar from '../assets/resume.png'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'My Profile', href: '#profile' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = ({ onOpenResume, onReplayIntro }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let ticking = false

    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + window.innerHeight * 0.35
      let current = 'home'

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href)
        if (section && section.offsetTop <= scrollMarker) {
          current = link.href.slice(1)
        }
      })

      setActiveSection(current)
      ticking = false
    }

    const handleScrollThrottled = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection)
        ticking = true
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScrollThrottled, { passive: true })
    window.addEventListener('resize', handleScrollThrottled)

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled)
      window.removeEventListener('resize', handleScrollThrottled)
    }
  }, [])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    const q = searchQuery.toLowerCase().trim()
    const match = navLinks.find((l) => l.name.toLowerCase().includes(q))
    if (match) {
      document.querySelector(match.href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
    }
    setShowSearchInput(false)
  }

  return (
    <nav
      className={`fixed left-0 top-0 z-[1000] w-full transition-all duration-500 ${
        scrolled
          ? 'bg-[#141414] shadow-[0_8px_30px_rgba(0,0,0,0.85)] border-b border-white/5 py-3'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1700px] items-center justify-between px-5 sm:px-10 lg:px-14">
        {/* Left: Netflix Red Brand Logo */}
        <div className="flex items-center gap-8 lg:gap-12">
          <a
            href="#home"
            onClick={playTudum}
            className="group flex items-center gap-2 tracking-tight transition-transform duration-200 hover:scale-105"
            title="Dharanidharan Series — Play Chime"
          >
            <span
              className="text-2xl sm:text-3xl font-black tracking-tighter text-[#E50914] drop-shadow-[0_2px_12px_rgba(229,9,20,0.7)]"
              style={{ fontFamily: 'Impact, -apple-system, sans-serif' }}
            >
              DHARANIDHARAN
            </span>
            <span className="rounded bg-[#E50914]/20 border border-[#E50914]/40 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-[#E50914] hidden sm:inline-block">
              SERIES
            </span>
          </a>

          {/* Centre: Netflix Nav Items */}
          <div className="hidden items-center gap-5 md:flex lg:gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[13px] font-medium transition-colors duration-200 hover:text-white relative py-1 ${
                    isActive ? 'text-white font-bold' : 'text-[#B3B3B3]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="netflix-nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E50914] shadow-[0_0_8px_#E50914]"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </a>
              )
            })}
          </div>
        </div>

        {/* Right: Search, Notification, Resume Button, Profile Avatar */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Trigger */}
          <div className="relative">
            {showSearchInput ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center">
                <input
                  type="text"
                  placeholder="Titles, stacks, skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  onBlur={() => !searchQuery && setShowSearchInput(false)}
                  className="w-36 sm:w-56 rounded border border-white/30 bg-black/90 px-3 py-1.5 text-xs text-white placeholder-gray-400 focus:border-[#E50914] focus:outline-none"
                />
                <button type="submit" className="ml-1.5 text-gray-300 hover:text-white" aria-label="Search">
                  <Search size={16} />
                </button>
              </form>
            ) : (
              <button
                type="button"
                onClick={() => setShowSearchInput(true)}
                className="text-gray-300 transition-colors hover:text-white"
                aria-label="Search portfolio"
                title="Search portfolio"
              >
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Notifications Icon with dot */}
          <a
            href="#achievements"
            className="relative text-gray-300 transition-colors hover:text-white"
            title="Latest achievements & recognitions"
            aria-label="View achievements"
          >
            <Bell size={18} />
            <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E50914] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E50914]"></span>
            </span>
          </a>

          {/* Red Resume Button */}
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 rounded bg-[#E50914] px-4 py-1.5 text-xs font-bold text-white transition-all duration-200 hover:bg-[#b80710] shadow-[0_2px_12px_rgba(229,9,20,0.35)]"
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>

          {/* Profile Avatar / Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              onMouseEnter={() => setShowProfileDropdown(true)}
              className="flex items-center gap-1.5 rounded focus:outline-none"
              aria-label="Developer profile menu"
            >
              <div className="h-8 w-8 overflow-hidden rounded border border-white/20 bg-[#141414] shadow-[0_0_10px_rgba(229,9,20,0.4)]">
                <img
                  src={profileAvatar}
                  alt="Dharanidharan T"
                  className="h-full w-full object-cover object-[center_16%]"
                />
              </div>
              <ChevronDown
                size={14}
                className={`text-gray-400 transition-transform duration-200 ${
                  showProfileDropdown ? 'rotate-180 text-white' : ''
                }`}
              />
            </button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {showProfileDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.16 }}
                  onMouseLeave={() => setShowProfileDropdown(false)}
                  className="absolute right-0 top-full mt-2 w-72 rounded-md border border-white/10 bg-[#141414] p-4 text-xs shadow-2xl backdrop-blur-xl z-50"
                >
                  <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                    <img
                      src={profileAvatar}
                      alt="Dharanidharan"
                      className="h-10 w-10 rounded object-cover object-[center_16%] border border-[#E50914]"
                    />
                    <div>
                      <p className="font-bold text-white">Dharanidharan T</p>
                      <p className="text-[10px] text-gray-400">AI / Full-Stack Engineer</p>
                      <span className="inline-block mt-0.5 rounded bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-400">
                        Available for Internships
                      </span>
                    </div>
                  </div>

                  <div className="py-2.5 space-y-1">
                    <a
                      href="#profile"
                      onClick={() => setShowProfileDropdown(false)}
                      className="block rounded px-2.5 py-1.5 text-gray-300 hover:bg-white/10 hover:text-white"
                    >
                      My Developer Profile
                    </a>
                    <a
                      href="#projects"
                      onClick={() => setShowProfileDropdown(false)}
                      className="block rounded px-2.5 py-1.5 text-gray-300 hover:bg-white/10 hover:text-white"
                    >
                      Browse Featured Work
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setShowProfileDropdown(false)
                        onOpenResume?.()
                      }}
                      className="w-full text-left rounded px-2.5 py-1.5 text-gray-300 hover:bg-white/10 hover:text-white"
                    >
                      View & Download Resume
                    </button>
                    {onReplayIntro && (
                      <button
                        type="button"
                        onClick={() => {
                          setShowProfileDropdown(false)
                          onReplayIntro()
                        }}
                        className="w-full text-left flex items-center gap-1.5 rounded px-2.5 py-1.5 text-gray-300 hover:bg-white/10 hover:text-white"
                      >
                        <RotateCcw size={12} className="text-[#E50914]" />
                        <span>Replay Netflix Startup Intro</span>
                      </button>
                    )}
                  </div>

                  <div className="border-t border-white/10 pt-2.5 flex items-center justify-between text-[11px] text-gray-400">
                    <a
                      href="https://github.com/dharanidh-02"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white flex items-center gap-1"
                    >
                      GitHub <ExternalLink size={10} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dharanidharan-t-180a79321/"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white flex items-center gap-1"
                    >
                      LinkedIn <ExternalLink size={10} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid h-9 w-9 place-items-center rounded border border-white/20 bg-black/60 text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/10 bg-[#141414] px-6 py-5 md:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'border-l-4 border-[#E50914] bg-white/5 text-white pl-4'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}

              <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenResume?.()
                  }}
                  className="w-full rounded bg-[#E50914] py-2.5 text-center text-xs font-bold text-white shadow-lg"
                >
                  View Official Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar