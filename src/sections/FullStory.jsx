import { motion } from 'framer-motion'
import { Brain, Cloud, FileText, Layers } from 'lucide-react'
import profileImage from '../assets/resume.png'

const interests = [
  { title: 'AI & Machine Learning', detail: 'Deep learning, computer vision and intelligent systems.', icon: Brain, color: '#e50914' },
  { title: 'Full-Stack Development', detail: 'Building web applications from interface to API.', icon: Layers, color: '#79b9ff' },
  { title: 'Cloud & DevOps', detail: 'Cloud computing, containers and delivery workflows.', icon: Cloud, color: '#61d4c1' },
]

const FullStory = ({ onOpenResume }) => (
  <section id="the-full-story" className="relative border-t border-white/5 bg-[#080808] py-20 sm:py-28">
    <div className="mx-auto w-full max-w-[1700px] px-5 sm:px-10 lg:px-14">
      <div className="mb-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E50914]">The full story</p>
        <h2 className="series-display mt-1 text-4xl tracking-wide text-white sm:text-5xl md:text-6xl">Dharanidharan T.</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/60 sm:text-base">Computer Science and Business Systems student, building across AI, software and cloud.</p>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(290px,420px)_1fr] lg:gap-14">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111114] p-4 sm:p-5">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-black">
            <img src={profileImage} alt="Portrait of Dharanidharan T" loading="lazy" className="h-full w-full object-cover object-[center_16%] transition-transform duration-700 hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-white/60">The creator</p>
              <h3 className="series-display text-3xl tracking-wide text-white">Dharanidharan T.</h3>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-white/[0.035] p-3">
              <p className="text-lg font-bold text-white">B.E. CSBS</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/45">2024–2028</p>
            </div>
            <div className="rounded-lg bg-white/[0.035] p-3">
              <p className="text-lg font-bold text-white">8.30</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-wider text-white/45">Current CGPA</p>
            </div>
          </div>

          <button type="button" onClick={onOpenResume} className="mt-4 flex w-full items-center justify-center gap-2 rounded bg-[#E50914] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#b80710] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <FileText size={15} /> View resume
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-8">
          <div className="max-w-3xl space-y-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            <p>
              I&apos;m pursuing a <strong className="font-semibold text-white">B.E. in Computer Science and Business Systems</strong> at <strong className="font-semibold text-white">Sri Eshwar College of Engineering</strong> (2024–2028).
            </p>
            <p>
              My interests span artificial intelligence, machine learning, deep learning, computer vision, full-stack development, cloud computing and DevOps. I enjoy turning ideas into working software and learning through projects.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {interests.map(({ title, detail, icon: Icon, color }) => (
              <article key={title} className="rounded-xl border border-white/10 bg-[#111114] p-4 sm:p-5">
                <Icon size={21} style={{ color }} />
                <h3 className="mt-3 text-sm font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/50">{detail}</p>
              </article>
            ))}
          </div>

          <div className="rounded-xl border border-white/10 bg-[#111114] p-5 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-[#E50914]">Experience</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm font-bold text-white">Full Stack Development Intern</p>
                <p className="mt-1 text-xs text-white/55">BYTS India</p>
              </div>
              <div>
                <p className="text-sm font-bold text-white">DevOps Intern</p>
                <p className="mt-1 text-xs text-white/55">VSPHERE Technologies</p>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-[#E50914] pl-4 sm:pl-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-white/45">Selected milestones</p>
            <p className="mt-2 text-sm leading-7 text-white/70">
              ICPC Asia West Amritapuri Student Ambassador · IEEE SmartAlthon Finalist · PALS InnoWAH! Finalist · SkillRack Department Rank 1
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default FullStory
