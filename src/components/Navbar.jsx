import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Sparkles, SunMoon, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [altTheme, setAltTheme] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let ticking = false

    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + window.innerHeight * 0.36
      let currentSection = 'home'

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href)
        if (section && section.offsetTop <= scrollMarker) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
      ticking = false
    }

    const handleSectionScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection)
        ticking = true
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', handleSectionScroll, { passive: true })
    window.addEventListener('resize', handleSectionScroll)

    return () => {
      window.removeEventListener('scroll', handleSectionScroll)
      window.removeEventListener('resize', handleSectionScroll)
    }
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    const useAltTheme = savedTheme === 'aura'
    setAltTheme(useAltTheme)
    document.documentElement.dataset.theme = useAltTheme ? 'aura' : 'default'
  }, [])

  const toggleTheme = () => {
    const nextTheme = !altTheme
    setAltTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme ? 'aura' : 'default'
    localStorage.setItem('portfolio-theme', nextTheme ? 'aura' : 'default')
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] pointer-events-none py-3">
      <div className="container mx-auto px-6">
        <div className="pointer-events-auto flex items-center justify-between gap-4 rounded-[1.25rem] border border-cyan-glow/20 bg-background/85 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-2xl transition-all duration-500">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="shrink-0"
        >
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-glow/30 bg-cyan-glow/10 text-sm font-black text-cyan-glow transition-transform group-hover:rotate-6">
              DD
            </span>
            <span className="hidden sm:block">
              <span className="block text-lg font-black tracking-tighter gradient-text">DHARANIDHARAN T</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-gray-500">Portfolio</span>
            </span>
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center rounded-2xl border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link-item relative isolate overflow-hidden rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:text-cyan-glow ${
                activeSection === link.href.slice(1)
                  ? 'nav-link-active text-white -translate-y-0.5'
                  : 'text-gray-400'
              }`}
            >
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="active-nav-glass"
                  className="nav-active-glass absolute inset-0 -z-10 rounded-xl border backdrop-blur-xl"
                  transition={{ type: 'spring', stiffness: 520, damping: 38, mass: 0.7 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="hidden h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-glow backdrop-blur-md transition-all hover:border-cyan-glow/50 hover:bg-cyan-glow/10 lg:grid"
          aria-label="Swap website color theme"
          title="Swap color theme"
        >
          <SunMoon className="h-5 w-5" />
        </button>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-cyan-glow"
            aria-label="Swap website color theme"
          >
            <SunMoon className="h-4 w-4" />
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full border-b border-white/10 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-cyan-glow">
                <Sparkles className="h-3 w-3" />
                Navigation
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`rounded-xl px-3 py-2 text-lg font-medium transition-colors hover:text-cyan-glow ${
                    activeSection === link.href.slice(1) ? 'border border-cyan-glow/30 bg-cyan-glow/10 text-cyan-glow' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
