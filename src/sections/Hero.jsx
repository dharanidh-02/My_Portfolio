import { motion } from 'framer-motion'
import { Play, Info, Mail, Code2 } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { playTudum } from '../utils/tudum'
import heroImage from '../assets/resume.png'

const metrics = [
  { value: '1150+', label: 'SkillRack Solved' },
  { value: '290+', label: 'LeetCode Solved' },
  { value: '49+', label: 'Cloud Badges' },
  { value: '8.30', label: 'B.E. CGPA' },
]

const Hero = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#080808] flex items-center pt-24 sm:pt-20 lg:pt-0">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 h-[550px] w-[550px] rounded-full bg-[#E50914]/15 blur-[160px]" />
        <div className="absolute -bottom-20 left-10 h-[400px] w-[400px] rounded-full bg-[#E50914]/10 blur-[130px]" />
      </div>

      {/* Cinematic Right Portrait: Occupies 45-50% width on desktop */}
      <div className="absolute inset-y-0 right-0 z-0 w-full md:w-[50%] lg:w-[48%] xl:w-[46%] pointer-events-none overflow-hidden">
        <div className="relative h-full w-full">
          {/* Real Photo */}
          <img
            src={heroImage}
            alt="Dharanidharan T"
            className="h-full w-full object-cover object-[center_12%] sm:object-[center_15%] filter brightness-95 contrast-105"
          />

          {/* Deep Cinematic Gradient Overlays to seamlessly blend into #080808 */}
          {/* Left blend towards text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-transparent md:via-[#080808]/40" />

          {/* Bottom blend towards next section */}
          <div className="absolute inset-x-0 bottom-0 h-44 sm:h-72 bg-gradient-to-t from-[#080808] via-[#080808]/90 to-transparent" />

          {/* Top blend for navbar */}
          <div className="absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#080808]/90 to-transparent" />

          {/* Right edge vignette */}
          <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808]/60 to-transparent" />

          {/* Subtle Netflix Red Rim Accent Glow */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#E50914]/5 to-transparent mix-blend-screen" />
        </div>
      </div>

      {/* Hero Text Content (Left 50-55%) */}
      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-5 sm:px-10 lg:px-14 py-12 lg:py-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Netflix Series Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="flex items-center gap-1.5">
              <span
                className="text-2xl sm:text-3xl font-black text-[#E50914] tracking-tighter drop-shadow-[0_0_10px_rgba(229,9,20,0.8)]"
                style={{ fontFamily: 'Impact, sans-serif' }}
              >
                N
              </span>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#B3B3B3]">
                DEVELOPER SHOWCASE
              </span>
            </div>

            <span className="text-gray-600">•</span>

            {/* Availability Pill */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-0.5 text-xs font-bold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Internships & Full-Time
            </span>
          </motion.div>

          {/* Large Cinematic Title */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-4 text-5xl font-black tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.95]"
            style={{
              fontFamily: '"Inter", -apple-system, sans-serif',
              textShadow: '0 4px 30px rgba(0,0,0,0.95)',
            }}
          >
            Dharanidharan T.
          </motion.h1>

          {/* Designation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-4 flex flex-wrap items-center gap-2 text-sm sm:text-base md:text-lg font-bold text-[#E50914]"
          >
            <span>AI/ML Engineer</span>
            <span className="text-gray-600">|</span>
            <span>Full Stack Developer</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300">DevOps Enthusiast</span>
          </motion.div>

          {/* Streaming Metadata Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold"
          >
            <span className="font-extrabold text-[#46d369]">99% Match</span>
            <span className="text-gray-400">2026</span>
            <span className="rounded border border-white/30 px-1.5 py-0.5 text-[10px] font-bold text-gray-300">
              B.E. CSBS
            </span>
            <span className="rounded border border-white/30 px-1.5 py-0.5 text-[10px] font-bold text-gray-300">
              4K ULTRA HD
            </span>
            <span className="rounded border border-white/30 px-1.5 py-0.5 text-[10px] font-bold text-gray-300">
              5.1 DOLBY
            </span>
            <span className="rounded bg-white/20 px-1.5 py-0.5 text-[10px] font-extrabold text-white">
              TOP 10
            </span>
          </motion.div>

          {/* #1 in Tech Innovation Billboard Tag */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 flex items-center gap-2.5"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded bg-[#E50914] text-xs font-black text-white shadow-[0_0_10px_#E50914]">
              #1
            </div>
            <span className="text-sm font-bold text-white tracking-wide">
              #1 In Engineering & AI Innovation Today
            </span>
          </motion.div>

          {/* Pitch Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#B3B3B3] sm:leading-8"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.95)' }}
          >
            &ldquo;I build intelligent systems, scalable applications and cloud-native solutions that turn complex problems into practical technology.&rdquo;
          </motion.p>

          {/* Netflix Big Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
          >
            <a
              href="#projects"
              onClick={playTudum}
              className="netflix-button-play"
            >
              <Play size={20} fill="currentColor" />
              <span>Explore Projects</span>
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="netflix-button-info"
            >
              <Info size={20} />
              <span>View Resume</span>
            </button>
          </motion.div>

          {/* Social Channels */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <span className="text-xs uppercase tracking-widest text-gray-400 font-bold mr-1">
              Connect:
            </span>
            <a
              href="https://github.com/dharanidh-02"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gray-300 transition-all hover:border-[#E50914] hover:bg-[#E50914]/20 hover:text-white"
            >
              <FaGithub size={14} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dharanidharan-t-180a79321/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gray-300 transition-all hover:border-[#E50914] hover:bg-[#E50914]/20 hover:text-white"
            >
              <FaLinkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:dharanidh02@gmail.com"
              className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gray-300 transition-all hover:border-[#E50914] hover:bg-[#E50914]/20 hover:text-white"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
            <a
              href="https://leetcode.com/u/dharanidh_02/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gray-300 transition-all hover:border-[#E50914] hover:bg-[#E50914]/20 hover:text-white"
            >
              <Code2 size={14} />
              <span>LeetCode</span>
            </a>
          </motion.div>

          {/* Verified Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.54 }}
            className="mt-8 grid max-w-xl grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-5"
          >
            {metrics.map((m) => (
              <div key={m.label} className="border-l border-white/10 pl-3 first:border-0 first:pl-0">
                <p className="text-2xl sm:text-3xl font-black text-white">{m.value}</p>
                <p className="text-[10px] uppercase tracking-wider text-[#B3B3B3] font-bold mt-0.5">
                  {m.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
