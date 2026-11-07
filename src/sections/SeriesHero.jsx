import { motion } from 'framer-motion'
import { FileText, Info, Play } from 'lucide-react'
import heroImage from '../assets/resume.png'

const SeriesHero = ({ onOpenResume, onOpenInfo }) => (
  <section id="home" className="relative flex min-h-[88vh] w-full items-center overflow-hidden bg-[#080808] pt-24 sm:min-h-screen sm:pt-20">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute left-[35%] top-[28%] h-[34rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(111,14,51,0.22),rgba(70,8,33,0.09)_40%,transparent_74%)] blur-3xl" />
      <div className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-[#e50914]/10 blur-[120px]" />
    </div>

    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full overflow-hidden md:w-[58%] lg:w-[54%]">
      <img src={heroImage} alt="" fetchPriority="high" className="h-full w-full object-cover object-[center_12%] brightness-90 contrast-105 sm:object-[center_15%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-transparent md:via-[#080808]/35" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent sm:h-64" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080808]/90 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#080808]/55 to-transparent" />
    </div>

    <div className="relative z-10 mx-auto w-full max-w-[1700px] px-5 py-14 sm:px-10 sm:py-20 lg:px-14">
      <div className="max-w-2xl lg:max-w-[58%]">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex items-center gap-2.5">
          <span className="series-display text-3xl leading-none text-[#E50914]">D</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E50914] sm:text-xs">Original productions</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="series-display mt-3 text-[clamp(3.25rem,9.5vw,8.5rem)] leading-[0.82] tracking-wide text-white [text-shadow:0_4px_34px_rgba(0,0,0,0.7)]">
          Dharanidharan
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18 }} className="mt-3 text-sm font-bold uppercase tracking-[0.42em] text-[#E50914] drop-shadow-[0_0_12px_rgba(229,9,20,0.35)] sm:text-lg">
          The Series
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }} className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-xs">
          AI/ML Engineer · Full Stack Developer · DevOps Enthusiast
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="mt-5 flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70 sm:text-xs">
          <span>B.E. CSBS · Sri Eshwar College of Engineering · 2024–2028</span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.33 }} className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
          Computer Science and Business Systems student at Sri Eshwar College of Engineering, exploring AI/ML, full-stack development, cloud computing and DevOps through hands-on projects.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-7 flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded bg-white px-5 py-3 text-sm font-extrabold text-black transition hover:scale-[1.025] hover:bg-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914]">
            <Play size={17} fill="currentColor" /> Explore Projects
          </a>
          <button type="button" onClick={onOpenResume} className="inline-flex items-center gap-2 rounded border border-white/25 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-white/45 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914]">
            <FileText size={17} /> View Resume
          </button>
          <a href="#the-full-story" onClick={(event) => { event.preventDefault(); onOpenInfo?.() }} className="inline-flex items-center gap-2 rounded px-3 py-3 text-xs font-bold text-white/65 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914]">
            <Info size={16} /> More Information
          </a>
        </motion.div>
      </div>
    </div>
  </section>
)

export default SeriesHero
