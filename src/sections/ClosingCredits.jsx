import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const ClosingCredits = () => (
  <section id="closing-credits" className="relative flex min-h-[82vh] w-full flex-col items-center justify-center overflow-hidden border-t border-white/5 bg-[#080808] px-5 py-20 text-center sm:min-h-screen sm:px-8">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-[48%] h-[38rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(143,13,37,0.18),rgba(71,8,37,0.1)_42%,transparent_73%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.78)_100%)]" />
    </div>

    <div className="relative z-10 mx-auto max-w-4xl">
      <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#E50914] sm:text-xs">
        The next chapter
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.08 }} className="series-display mt-4 text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] tracking-wide text-white [text-shadow:0_4px_34px_rgba(0,0,0,0.8)]">
        To Be Continued...
      </motion.h2>
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.18 }} className="mt-6">
        <p className="text-xl font-bold uppercase tracking-[0.14em] text-white sm:text-2xl">Dharanidharan T.</p>
        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.21em] text-white/50 sm:text-xs">AI/ML Engineer · Full Stack Developer · DevOps Enthusiast</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.28 }} className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a href="mailto:dharanidh02@gmail.com" className="inline-flex items-center gap-2 rounded bg-[#E50914] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:scale-[1.025] hover:bg-[#b80710] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6">
          <Mail size={15} /> Get in touch
        </a>
        <a href="https://www.linkedin.com/in/t-dharanidharan/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914] sm:px-6">
          <FaLinkedin size={15} /> LinkedIn
        </a>
        <a href="https://github.com/dharanidh-02" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded border border-white/20 bg-white/[0.04] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition hover:border-white/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914] sm:px-6">
          <FaGithub size={15} /> GitHub
        </a>
      </motion.div>
    </div>

    <p className="absolute bottom-6 z-10 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">Dharanidharan T. · The Series</p>
  </section>
)

export default ClosingCredits
