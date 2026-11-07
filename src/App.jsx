import { useState } from 'react'
import { motion, AnimatePresence, MotionConfig } from 'framer-motion'
import SmoothScroll from './components/SmoothScroll'
import SoftAurora from './components/SoftAurora'
import CustomCursor from './components/CustomCursor'
import CinematicIntro from './components/CinematicIntro'
import ProfileSelector from './components/ProfileSelector'
import SeriesNavbar from './components/SeriesNavbar'
import SeriesHero from './sections/SeriesHero'
import ContinueExploring from './sections/ContinueExploring'
import FullStory from './sections/FullStory'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import JourneySeasons from './sections/JourneySeasons'
import Education from './sections/Education'
import Certifications from './sections/Certifications'
import Achievements from './sections/Achievements'
import TopPicks from './sections/TopPicks'
import ProfileCards from './sections/ProfileCards'
import ClosingCredits from './sections/ClosingCredits'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'

const personaNames = {
  dharanidharan: 'Dharanidharan',
  recruiter: 'Recruiter',
  developer: 'Developer',
  guest: 'Guest',
}

function App() {
  const [showIntro, setShowIntro] = useState(() => sessionStorage.getItem('series_intro_seen') !== 'true')
  const [showProfileSelector, setShowProfileSelector] = useState(() => (
    sessionStorage.getItem('series_intro_seen') === 'true' && !sessionStorage.getItem('series_profile')
  ))
  const [activePersona, setActivePersona] = useState(() => {
    const savedProfile = sessionStorage.getItem('series_profile')
    return savedProfile ? { id: savedProfile, name: personaNames[savedProfile] || 'Guest' } : null
  })
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const handleIntroComplete = () => {
    setShowIntro(false)
    const savedProfile = sessionStorage.getItem('series_profile')
    if (!savedProfile) {
      setShowProfileSelector(true)
    } else {
      setActivePersona({ id: savedProfile, name: personaNames[savedProfile] || 'Guest' })
    }
  }

  const handleProfileSelected = (profile) => {
    setActivePersona(profile)
    setShowProfileSelector(false)

    // Route / auto-scroll according to persona smoothly
    setTimeout(() => {
      if (profile.targetSection && profile.targetSection !== '#home') {
        const el = document.querySelector(profile.targetSection)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }, 400)
  }

  const handleChangeProfile = () => {
    setShowProfileSelector(true)
  }

  const handleOpenResume = () => setIsResumeOpen(true)
  const handleCloseResume = () => setIsResumeOpen(false)

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <div className="relative min-h-screen overflow-x-hidden bg-[#080808] text-white selection:bg-[#E50914]/40 selection:text-white">
          {/* Custom Netflix Red Cursor */}
          <CustomCursor />

          {/* PHASE 2: Cinematic Title Intro */}
          <AnimatePresence>
            {showIntro && (
              <CinematicIntro onComplete={handleIntroComplete} />
            )}
          </AnimatePresence>

          {/* PHASE 3: Who's Watching? Profile Selection */}
          <AnimatePresence>
            {showProfileSelector && (
              <ProfileSelector onSelectProfile={handleProfileSelected} />
            )}
          </AnimatePresence>

          {/* Netflix Signature Cinematic Red Atmosphere & Volumetric Lighting */}
          <SoftAurora
            color1="#E50914"
            color2="#54050a"
            brightness={0.42}
            speed={0.18}
          />

          {/* Top Overhead Netflix Crimson Spotlight Cone */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[650px] max-w-full pointer-events-none z-[1] bg-[radial-gradient(ellipse_65%_40%_at_50%_0%,rgba(229,9,20,0.24),transparent_75%)]" />

          {/* Lateral Atmospheric Red Vignette Lighting */}
          <div className="fixed inset-0 pointer-events-none z-[1] bg-[radial-gradient(circle_at_0%_50%,rgba(229,9,20,0.06),transparent_40%),radial-gradient(circle_at_100%_50%,rgba(229,9,20,0.06),transparent_40%)]" />

          {/* Top Crimson Horizon Glow */}
          <div className="fixed top-0 inset-x-0 h-[1.5px] pointer-events-none z-[50] bg-gradient-to-r from-transparent via-[#E50914]/70 to-transparent shadow-[0_0_15px_#E50914]" />

          {/* Dark gradient backdrop to keep text ultra-crisp */}
          <div className="fixed inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/50 via-transparent to-black/85" />

          {/* Netflix Series Top Navigation */}
          <SeriesNavbar
            onOpenResume={handleOpenResume}
            onChangeProfile={handleChangeProfile}
            activePersona={activePersona}
          />

          {/* Official PDF Resume Modal */}
          <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />

          {/* Main Continuous Netflix Series Narrative Flow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <main>
              {/* 1. Main Hero (D ORIGINALS: DHARANIDHARAN — THE SERIES) */}
              <SeriesHero
                onOpenResume={handleOpenResume}
                onOpenInfo={() => {
                  const el = document.querySelector('#the-full-story')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
              />

              {/* 2. Continue Exploring (Horizontal collection shortcuts) */}
              <ContinueExploring />

              {/* 3. The Full Story (Editorial Biography & Foundations) */}
              <FullStory onOpenResume={handleOpenResume} />

              {/* 4. Featured Projects (Strict Order: PRISM, POFD-Net, RockSense, AgriSense...) */}
              <Projects />

              {/* 5. Technical Skills (Editorial Categorized Technologies, Verified Logos) */}
              <Skills />

              {/* 6. Professional Experience (Industry Internships) */}
              <Experience />

              {/* 7. My Journey: Seasons & Episodes (Seasons 01-04) */}
              <JourneySeasons />

              {/* 8. Education Timeline */}
              <Education />

              {/* 9. Official Certifications */}
              <Certifications />

              {/* 10. Achievements & Awards */}
              <Achievements />

              {/* 10. Dharanidharan's Top Picks (Top 5 Ranked with Giant Numbers) */}
              <TopPicks />

              {/* 11. Coding Profiles & Telemetry Statistics */}
              <ProfileCards />

              {/* 12. To Be Continued... (Closing Credits & Final Contact Action) */}
              <ClosingCredits onOpenResume={handleOpenResume} />
            </main>

            {/* Series Footer */}
            <Footer onOpenResume={handleOpenResume} />
          </motion.div>
        </div>
      </SmoothScroll>
    </MotionConfig>
  )
}

export default App
