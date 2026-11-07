import { motion } from 'framer-motion'
import {
  GraduationCap,
  Sparkles,
  Layers,
  Cpu,
  Brain,
  Eye,
  Globe,
  Cloud,
  Terminal,
  CheckCircle2,
  Calendar,
  Award,
} from 'lucide-react'
import profileImage from '../assets/resume.png'

const technicalInterests = [
  { name: 'Artificial Intelligence', icon: Brain, color: '#E50914' },
  { name: 'Machine Learning', icon: Cpu, color: '#ff4d58' },
  { name: 'Deep Learning', icon: Layers, color: '#ff6b74' },
  { name: 'Computer Vision', icon: Eye, color: '#E50914' },
  { name: 'Full Stack Development', icon: Globe, color: '#46d369' },
  { name: 'Cloud Computing', icon: Cloud, color: '#00D1FF' },
  { name: 'DevOps', icon: Terminal, color: '#FFA116' },
]

const strengths = [
  'Full-Stack Architecture (React.js, Node.js, Express.js, MongoDB Atlas, AWS)',
  'Applied Deep Learning (YOLOv11, CNNs, Image Segmentation, PyTorch, TensorFlow)',
  'Containerization & Cloud Infrastructure (Docker, Kubernetes, AWS, Linux, GitLab CI/CD)',
  'Generative AI & Intelligent Systems (RAG, Gemini API, IBM Granite)',
  'Algorithmic Problem Solving (1150+ SkillRack, 290+ LeetCode problems)',
  'National Hackathon Leadership (PALS InnoWAH! & SIH Finalist)',
]

const About = ({ onOpenResume }) => {
  return (
    <section id="profile" className="relative py-24 sm:py-32 bg-[#080808] border-t border-white/5">
      <div id="about" className="sr-only">About section anchor</div>
      <div className="mx-auto w-full max-w-[1700px] px-5 sm:px-10 lg:px-14">
        {/* Netflix Who's Watching Title */}
        <div className="mb-14">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#E50914]" />
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#E50914]">
              DEVELOPER DOSSIER
            </p>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Who&apos;s Engineering?
          </h2>
          <p className="mt-2.5 max-w-3xl text-sm sm:text-base text-[#B3B3B3]">
            A practical software engineer combining modern full-stack development, applied deep learning,
            and cloud infrastructure to build scalable technology.
          </p>
        </div>

        {/* Cinematic Netflix Profile Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] items-start">
          {/* Left Column: Netflix Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-[#141414] p-7 text-center lg:text-left shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 h-40 w-40 bg-[#E50914]/10 blur-[60px] pointer-events-none" />

            {/* Profile Avatar Frame */}
            <div className="group relative mx-auto lg:mx-0 w-52 sm:w-60 overflow-hidden rounded-xl border-2 border-[#E50914] shadow-[0_0_30px_rgba(229,9,20,0.4)]">
              <img
                src={profileImage}
                alt="Dharanidharan T"
                className="aspect-[3/4] w-full object-cover object-[center_16%] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-3 rounded bg-[#E50914] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow">
                LEAD PROFILE
              </span>
            </div>

            {/* Profile Info */}
            <div className="mt-6">
              <h3 className="text-2xl font-black text-white">Dharanidharan T</h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#E50914]">
                AI/ML Engineer & Full Stack Developer
              </p>

              <div className="mt-5 space-y-3 border-y border-white/10 py-4 text-xs text-gray-300">
                <div className="flex items-center justify-between">
                  <span className="text-[#B3B3B3]">Status</span>
                  <span className="font-bold text-emerald-400">🟢 Available for Internships</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#B3B3B3]">Focus</span>
                  <span className="font-semibold text-white">Intelligent Systems & Cloud</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#B3B3B3]">Location</span>
                  <span className="text-white">Pollachi / Coimbatore, India</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={onOpenResume}
                className="mt-6 w-full rounded bg-[#E50914] py-3 text-xs font-black uppercase tracking-wider text-white transition-all hover:bg-[#b80710] shadow-[0_4px_20px_rgba(229,9,20,0.35)] hover:scale-[1.02]"
              >
                Inspect Official Resume
              </button>
            </div>
          </motion.div>

          {/* Right Column: Detailed Panels */}
          <div className="space-y-8">
            {/* Academic Foundation Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#141414] p-7 sm:p-9 shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E50914]">
                <GraduationCap size={18} />
                <span>Academic Foundation</span>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">
                    Sri Eshwar College of Engineering
                  </h4>
                  <p className="mt-1 text-sm font-semibold text-gray-300">
                    B.E. Computer Science and Business Systems (CSBS)
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1 rounded border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-gray-300">
                    <Calendar size={13} />
                    2024 – 2028
                  </span>
                  <span className="rounded bg-[#E50914]/20 border border-[#E50914]/40 px-3 py-1 text-xs font-black text-[#E50914]">
                    CGPA: 8.30
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#B3B3B3]">
                Rigorous training in computer science, business systems, software development life cycles,
                and applied artificial intelligence. Active contributor to departmental project expos,
                coding platforms, and national hackathons.
              </p>
            </motion.div>

            {/* Technical Interests (Netflix Genres) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#141414] p-7 sm:p-9 shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E50914]">
                <Sparkles size={18} />
                <span>Specialized Engineering Genres</span>
              </div>
              <h4 className="mt-2 text-xl font-black text-white">Technical Interests</h4>
              <p className="mt-1 text-xs sm:text-sm text-[#B3B3B3]">
                Primary areas of deep focus and continuous exploration.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {technicalInterests.map((interest) => {
                  const Icon = interest.icon
                  return (
                    <div
                      key={interest.name}
                      className="group flex items-center gap-2.5 rounded-lg border border-white/10 bg-[#1c1c1c] px-4 py-2.5 transition-all duration-300 hover:border-[#E50914] hover:bg-[#E50914]/15 hover:scale-105"
                    >
                      <Icon size={16} className="text-[#E50914] transition-colors group-hover:text-white" />
                      <span className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-white">
                        {interest.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* Production Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-[#141414] p-7 sm:p-9 shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E50914]">
                <Award size={18} />
                <span>Production Strengths</span>
              </div>
              <h4 className="mt-2 text-xl font-black text-white">Key Capabilities</h4>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-lg border border-white/5 bg-[#1c1c1c] p-3.5"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#E50914]" />
                    <span className="text-xs leading-relaxed text-gray-300">{str}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About