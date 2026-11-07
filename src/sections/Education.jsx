import { motion } from 'framer-motion'
import { GraduationCap, School, Calendar, CheckCircle2 } from 'lucide-react'

const educationHistory = [
  {
    institution: 'Sri Eshwar College of Engineering',
    degree: 'B.E. Computer Science and Business Systems (CSBS)',
    period: '2024 – 2028',
    score: 'CGPA: 8.30',
    type: 'Undergraduate Engineering',
    highlight: 'Pre-Final Year Engineering',
    description:
      'Curriculum bridging software engineering, deep learning, data structures, algorithms, cloud platforms, and modern enterprise business technologies. Active leader in departmental hackathons, expos, and research initiatives.',
    icon: GraduationCap,
    badge: 'UNDERGRADUATE',
    status: 'In Progress (Sem 4+)',
  },
  {
    institution: 'Oxford Matric Higher Secondary School',
    degree: 'Higher Secondary Certificate (HSC) — Class 12',
    period: '2023 – 2024',
    score: '80%',
    type: 'Higher Secondary Education',
    highlight: 'Distinction in Science & Maths',
    description:
      'Rigorous foundational training in mathematics, physics, chemistry, and introductory computer science fundamentals, building core logical problem-solving foundations.',
    icon: School,
    badge: 'HSC',
    status: 'Graduated',
  },
  {
    institution: 'Vidya Nethrra Matric Higher Secondary School',
    degree: 'Secondary School Leaving Certificate (SSLC) — Class 10',
    period: '2021 – 2022',
    score: '75%',
    type: 'Secondary Education',
    highlight: 'Foundational Studies',
    description:
      'Comprehensive secondary schooling with strong grounding in scientific principles, mathematics, and extracurricular computational activities.',
    icon: School,
    badge: 'SSLC',
    status: 'Graduated',
  },
]

const Education = () => {
  return (
    <section id="education" className="relative py-20 sm:py-28 bg-[#080808] border-t border-white/5">
      <div className="mx-auto w-full max-w-[1700px] px-5 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#E50914]" />
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#E50914]">
              ORIGIN STORY
            </p>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Education Timeline
          </h2>
          <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-[#B3B3B3]">
            Chronological academic journey from secondary foundations to advanced engineering specialization.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-[#E50914]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {educationHistory.map((edu, index) => {
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-6 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#080808] bg-[#E50914] shadow-[0_0_12px_#E50914]">
                  <div className="h-2 w-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="group rounded-xl border border-white/10 bg-[#141414] p-6 sm:p-8 transition-all duration-300 hover:border-[#E50914]/60 hover:bg-[#1a1a1a] shadow-xl">
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-[#E50914] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
                          {edu.badge}
                        </span>
                        <span className="text-xs font-bold text-gray-400">
                          {edu.type}
                        </span>
                      </div>
                      <h3 className="mt-2 text-xl sm:text-2xl font-black text-white group-hover:text-[#E50914] transition-colors">
                        {edu.institution}
                      </h3>
                      <p className="mt-0.5 text-sm font-bold text-gray-300">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5 sm:text-right">
                      <span className="inline-flex items-center gap-1 rounded border border-white/15 bg-white/5 px-3 py-1 text-xs font-bold text-gray-300">
                        <Calendar size={13} />
                        {edu.period}
                      </span>
                      <span className="rounded bg-[#E50914]/20 border border-[#E50914]/40 px-3 py-1 text-xs font-black text-[#E50914]">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-[#B3B3B3]">
                    {edu.description}
                  </p>

                  {/* Bottom Verification */}
                  <div className="mt-5 flex items-center justify-between text-xs text-gray-400 border-t border-white/5 pt-3">
                    <span className="flex items-center gap-1 text-[#46d369] font-bold text-[11px]">
                      <CheckCircle2 size={13} /> {edu.status}
                    </span>
                    <span className="text-gray-400 font-semibold text-[11px]">
                      {edu.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Education
