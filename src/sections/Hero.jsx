import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiKaggle, SiLeetcode } from 'react-icons/si'

const particles = Array.from({ length: 28 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 23) % 100}%`,
  delay: index * 0.18,
}))

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 lg:pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-cyan-glow/20 rounded-full blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-purple-accent/20 rounded-full blur-[128px] animate-pulse-slow"></div>
        {particles.map((particle, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-cyan-glow/70 shadow-[0_0_12px_rgba(163,230,53,0.8)]"
            style={{ left: particle.left, top: particle.top }}
            animate={{ opacity: [0.15, 0.9, 0.15], y: [0, -18, 0] }}
            transition={{ duration: 4 + (index % 5), repeat: Infinity, delay: particle.delay }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid min-h-[calc(100vh-6rem)] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-10 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-7 relative z-20"
        >
          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-cyan-glow font-medium tracking-widest text-sm uppercase"
            >
              Building intelligent digital experiences
            </motion.h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9]">
              DHARANIDHARAN T
            </h1>
            <div className="text-2xl md:text-4xl font-semibold text-gray-400 min-h-12">
              <span className="text-white">
                <Typewriter
                  words={[
                    'Full Stack Developer',
                    'AI Engineer',
                    'MERN Stack Developer',
                    'Cloud & DevOps Enthusiast',
                    'Research Innovator',
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
          </div>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            I build intelligent AI-powered systems, scalable full-stack applications, and real-world
            technology solutions that combine software engineering, cloud computing, and machine
            learning innovation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 sm:px-8 py-4 bg-cyan-glow text-background font-bold rounded-full hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] transition-all duration-300">
              Explore Projects
            </a>
            <a href="#contact" className="px-6 sm:px-8 py-4 glass font-bold rounded-full hover:bg-white/10 transition-all duration-300">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/drive/folders/1VlAgEF3KYee-4ltXbKjlAb_dgPuoiRbD?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-4 border border-cyan-glow/40 bg-cyan-glow/10 text-cyan-glow font-bold rounded-full hover:bg-cyan-glow/20 hover:border-cyan-glow/70 transition-all duration-300"
            >
              View My Resume
            </a>
          </div>

          <div className="flex items-center space-x-6 pt-4">
            {[
              { icon: FaEnvelope, href: 'mailto:dharanidh02@gmail.com', label: 'Email' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/dharanidharan-t-180a79321/', label: 'LinkedIn' },
              { icon: FaGithub, href: 'https://github.com/dharanidh-02', label: 'GitHub' },
              { icon: SiLeetcode, href: 'https://leetcode.com/u/dharanidh_02/', label: 'LeetCode' },
              { icon: SiKaggle, href: 'https://www.kaggle.com/dharanidharant', label: 'Kaggle' },
              { icon: () => <span className="text-base font-black">SR</span>, href: 'https://www.skillrack.com/faces/resume.xhtml?id=514797&key=79cd5fc9a977158524d4eaee835e8e0bcb367584', label: 'SkillRack' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, color: '#a3e635' }}
                className="text-gray-400 text-2xl transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${social.label}`}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative w-full h-[540px] sm:h-[660px] lg:h-[min(900px,calc(100vh-3.5rem))] lg:-ml-8 xl:-ml-16 lg:translate-y-8 xl:translate-y-10"
        >
          <div className="absolute inset-6 z-0 bg-gradient-to-b from-cyan-glow/20 via-purple-accent/10 to-transparent rounded-full blur-[90px] scale-90 animate-pulse-slow"></div>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="robot-stage relative z-10 h-full w-full cursor-grab active:cursor-grabbing"
          >
            <spline-viewer url="https://prod.spline.design/vdVJjSpFpZbHCsQe/scene.splinecode"></spline-viewer>
            <div className="spline-watermark-cover"></div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-glow to-transparent"></div>
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  )
}

export default Hero
