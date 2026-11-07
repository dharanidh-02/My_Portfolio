import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  FileText,
  UserCheck,
  ChevronDown,
  ExternalLink,
  Search,
} from 'lucide-react'
import profileImage from '../assets/resume.png'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'My Profile', href: '#the-full-story' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#technical-skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#closing-credits' },
]

const SeriesNavbar = ({ onOpenResume, onChangeProfile, activePersona }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e?.preventDefault?.()
    setMobileMenuOpen(false)
    setSearchOpen(false)
    setSearchValue('')
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        aria-label="Portfolio navigation"
        className={`fixed top-0 left-0 right-0 z-[1000] transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#080808]/95 shadow-[0_4px_30px_rgba(0,0,0,0.9)] backdrop-blur-md'
            : 'bg-gradient-to-b from-[#080808]/95 via-[#080808]/60 to-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 sm:h-20 w-full max-w-[1700px] items-center justify-between px-5 sm:px-10 lg:px-14">
          {/* Left: red series mark and title */}
          <div className="flex items-center gap-7 lg:gap-10">
            <a
              href="#home"
              onClick={(e) => {
                handleLinkClick(e, '#home')
              }}
              className="group flex items-center gap-2.5 focus:outline-none"
            >
              <span
                className="text-3xl sm:text-4xl font-black text-[#E50914] tracking-tighter drop-shadow-[0_0_12px_rgba(229,9,20,0.85)] transition-transform duration-300 group-hover:scale-105"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                D
              </span>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-black uppercase tracking-wider text-white leading-none">
                  Dharanidharan
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#E50914] leading-tight">
                  The Series
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center gap-5 text-xs font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-gray-300 transition-colors duration-200 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Actions & Profile Menu */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative hidden lg:flex items-center">
              {searchOpen && (
                <>
                  <input
                    type="search"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' && searchValue.trim()) {
                        const result = navLinks.find((link) => link.name.toLowerCase().includes(searchValue.trim().toLowerCase()))
                        if (result) handleLinkClick(event, result.href)
                      }
                      if (event.key === 'Escape') {
                        setSearchOpen(false)
                        setSearchValue('')
                      }
                    }}
                    autoFocus
                    aria-label="Search portfolio sections"
                    placeholder="Search sections"
                    className="h-9 w-44 rounded-l border border-white/25 bg-black/90 px-3 text-xs text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
                  />
                  {searchValue.trim() && (
                    <div id="portfolio-search-results" className="absolute right-0 top-11 z-50 min-w-52 rounded border border-white/15 bg-[#141414] p-1.5 shadow-2xl">
                      {navLinks.filter((link) => link.name.toLowerCase().includes(searchValue.trim().toLowerCase())).length ? (
                        navLinks.filter((link) => link.name.toLowerCase().includes(searchValue.trim().toLowerCase())).map((link) => (
                          <button
                            key={link.href}
                            type="button"
                            onClick={() => handleLinkClick(null, link.href)}
                            className="block w-full rounded px-3 py-2 text-left text-xs font-semibold text-gray-200 hover:bg-white/10 hover:text-white"
                          >
                            {link.name}
                          </button>
                        ))
                      ) : (
                        <p className="px-3 py-2 text-xs text-gray-400">No matching section</p>
                      )}
                    </div>
                  )}
                </>
              )}
              <button
                type="button"
                onClick={() => {
                  setSearchOpen((open) => !open)
                  setSearchValue('')
                }}
                aria-label={searchOpen ? 'Close section search' : 'Search portfolio sections'}
                aria-expanded={searchOpen}
                aria-controls="portfolio-search-results"
                className="grid h-9 w-9 place-items-center rounded border border-white/15 bg-white/5 text-gray-200 transition-colors hover:border-white/40 hover:text-white"
              >
                <Search size={16} />
              </button>
            </div>

            {/* View Resume Button */}
            <button
              type="button"
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 rounded bg-[#E50914] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white transition-all hover:bg-[#b80710] shadow-[0_2px_15px_rgba(229,9,20,0.4)]"
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>

            {/* Change Profile Trigger Button */}
            <button
              type="button"
              onClick={onChangeProfile}
              className="hidden md:inline-flex items-center gap-1.5 rounded border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-bold text-gray-300 hover:border-white hover:text-white transition-all"
              title="Switch profile (Recruiter / Developer / Creator)"
            >
              <UserCheck size={14} className="text-[#E50914]" />
              <span>
                {activePersona ? activePersona.name : 'Switch Profile'}
              </span>
            </button>

            {/* Profile Avatar Frame with Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="group flex items-center gap-1 rounded focus:outline-none"
                aria-label="Profile actions"
                aria-expanded={profileDropdownOpen}
                aria-haspopup="menu"
              >
                <div className="h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded border border-white/30 bg-[#E50914]/20 transition-transform group-hover:scale-105">
                  <img
                    src={profileImage}
                    alt="Dharanidharan"
                    className="h-full w-full object-cover object-[center_16%]"
                  />
                </div>
                <ChevronDown
                  size={14}
                  className={`text-gray-400 transition-transform duration-200 group-hover:text-white ${
                    profileDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Profile Dropdown Menu */}
              <AnimatePresence>
                {profileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-12 w-56 rounded-lg border border-white/15 bg-[#141414] p-3 shadow-2xl z-50 text-xs"
                    role="menu"
                  >
                    <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
                      <div className="h-8 w-8 overflow-hidden rounded">
                        <img
                          src={profileImage}
                          alt="Dharanidharan"
                          className="h-full w-full object-cover object-[center_16%]"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-white">Dharanidharan T</p>
                        <p className="text-[10px] text-gray-400 font-semibold">B.E. CSBS · 2024–2028</p>
                      </div>
                    </div>

                    <div className="py-2 space-y-1">
                      <button
                        type="button"
                        onClick={() => {
                          setProfileDropdownOpen(false)
                          onChangeProfile()
                        }}
                        className="w-full text-left rounded px-2.5 py-1.5 font-bold text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                        role="menuitem"
                      >
                        Change Persona...
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setProfileDropdownOpen(false)
                          onOpenResume()
                        }}
                        className="w-full text-left rounded px-2.5 py-1.5 font-bold text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                        role="menuitem"
                      >
                        View Official Resume
                      </button>
                      <a
                        href="https://github.com/dharanidh-02"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded px-2.5 py-1.5 font-bold text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                        role="menuitem"
                      >
                        <span>GitHub Profile</span>
                        <ExternalLink size={12} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/t-dharanidharan/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded px-2.5 py-1.5 font-bold text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                        role="menuitem"
                      >
                        <span>LinkedIn</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="grid h-9 w-9 place-items-center rounded border border-white/20 bg-white/5 text-white xl:hidden hover:bg-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-b border-white/15 bg-[#080808]/98 px-6 py-6 xl:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-3 text-sm font-bold">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-300 hover:text-[#E50914] transition-colors py-1 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-3 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      onOpenResume()
                    }}
                    className="w-full rounded bg-[#E50914] py-2.5 text-xs font-black uppercase tracking-wider text-white"
                  >
                    View Official Resume
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      onChangeProfile()
                    }}
                    className="w-full rounded border border-white/20 py-2.5 text-xs font-bold text-gray-300"
                  >
                    Change Profile Persona
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default SeriesNavbar

