import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SmoothScroll from './components/SmoothScroll'
import CustomCursor from './components/CustomCursor'
import PageLoader from './components/PageLoader'
import IntroScene from './components/IntroScene'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Certifications from './sections/Certifications'
import ProfileCards from './sections/ProfileCards'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
      window.scrollTo({ top: 0, behavior: 'auto' })
      if (window.location.hash && window.location.hash !== '#home') {
        window.history.replaceState(null, '', window.location.pathname)
      }
    }, 6200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <SmoothScroll>
      <div className="bg-background text-white min-h-screen">
        <PageLoader />
        <IntroScene visible={showIntro} />
        <CustomCursor />
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: 28, filter: 'blur(16px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 6.2 }}
        >
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
            <Certifications />
            <ProfileCards />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </div>
    </SmoothScroll>
  )
}

export default App
