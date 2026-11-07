import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ExternalLink, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import HorizontalCarousel from '../components/HorizontalCarousel'

const experienceEntries = [
  {
    id: 'byts-india',
    company: 'BYTS INDIA',
    monogram: 'BYTS',
    role: 'Full Stack Development Intern',
    period: '2025',
    summary: 'Contributed to a College CRM with role-based access, attendance workflows and report exports.',
    contributions: [
      'Built responsive interfaces with React, Tailwind CSS and Ant Design.',
      'Implemented API routes with Node.js and Express, backed by MongoDB Atlas.',
      'Worked on attendance tracking and PDF or spreadsheet report exports.',
      'Deployed application services on AWS.',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB Atlas', 'AWS'],
    repository: 'https://github.com/dharanidh-02/Mern_CRM',
    accent: '#e50914',
  },
  {
    id: 'vsphere-technologies',
    company: 'VSPHERE TECHNOLOGIES',
    monogram: 'V',
    role: 'DevOps Intern',
    period: '2025–2026',
    summary: 'Worked with deployment workflows, containers and cloud infrastructure.',
    contributions: [
      'Built familiarity with CI/CD workflows and container image builds.',
      'Worked with Docker and Kubernetes deployment concepts.',
      'Used Linux and AWS cloud tooling in infrastructure workflows.',
      'Explored GitOps deployment patterns with Argo CD.',
    ],
    technologies: ['Docker', 'Kubernetes', 'AWS', 'GitLab CI/CD', 'Argo CD', 'Linux'],
    accent: '#92a8bf',
  },
]

const ExperienceDetails = ({ entry, onClose }) => {
  useEffect(() => {
    if (!entry) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [entry, onClose])

  return (
    <AnimatePresence>
      {entry && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6">
          <motion.button type="button" aria-label="Close experience details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
          <motion.div role="dialog" aria-modal="true" aria-labelledby="experience-title" initial={{ opacity: 0, scale: 0.97, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97, y: 12 }} className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-white/15 bg-[#151619] shadow-2xl">
            <div className="flex items-start gap-4 border-b border-white/10 p-5 sm:p-7">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg border border-white/10 bg-black/35 text-lg font-black tracking-wide" style={{ color: entry.accent }}>{entry.monogram}</span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">{entry.company} · {entry.period}</p>
                <h2 id="experience-title" className="series-display mt-1 text-3xl tracking-wide text-white sm:text-4xl">{entry.role}</h2>
              </div>
              <button type="button" onClick={onClose} aria-label="Close experience details" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"><X size={17} /></button>
            </div>
            <div className="p-5 sm:p-7">
              <p className="text-sm leading-6 text-white/65">{entry.summary}</p>
              <ul className="mt-5 space-y-3">
                {entry.contributions.map((contribution) => (
                  <li key={contribution} className="flex gap-2.5 text-sm leading-6 text-white/75"><Check size={16} className="mt-1 shrink-0" style={{ color: entry.accent }} /><span>{contribution}</span></li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {entry.technologies.map((technology) => <span key={technology} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/65">{technology}</span>)}
              </div>
              {entry.repository && <a href={entry.repository} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-white/85"><FaGithub size={15} /> View related repository <ExternalLink size={13} /></a>}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

const Experience = () => {
  const [selectedEntry, setSelectedEntry] = useState(null)

  return (
    <section id="experience" className="relative border-t border-white/5 bg-[#080808]">
      <div className="mx-auto w-full max-w-[1700px]">
        <HorizontalCarousel
          ariaLabel="Professional experience"
          header={
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#a7bacd]">Professional experience</p>
              <h2 className="series-display mt-1 text-4xl tracking-wide text-white sm:text-5xl md:text-6xl">Work & Internships</h2>
              <p className="mt-2 max-w-2xl text-sm text-white/60">Roles and hands-on work across full-stack development and DevOps.</p>
            </div>
          }
          className="mx-auto w-full max-w-[1700px]"
          trackClassName="py-4"
        >
        {experienceEntries.map((entry, index) => (
          <motion.article key={entry.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="series-rail-card group relative flex h-[275px] w-full max-w-[360px] shrink-0 flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-[#141518] p-5 transition duration-300 hover:border-white/25 hover:shadow-xl sm:h-[290px] sm:w-[360px]">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1 opacity-70" style={{ backgroundColor: entry.accent }} />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <span className="grid h-12 min-w-12 place-items-center rounded-md border border-white/10 bg-black/35 px-2 text-xs font-black tracking-wide" style={{ color: entry.accent }}>{entry.monogram}</span>
              <span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white/45">{entry.period}</span>
            </div>
            <div className="relative z-10">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">{entry.company}</p>
              <h3 className="series-display mt-1 text-2xl tracking-wide text-white">{entry.role}</h3>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/55">{entry.summary}</p>
            </div>
            <div className="relative z-10 flex items-end justify-between gap-3 border-t border-white/10 pt-3">
              <div className="flex flex-wrap gap-1.5">{entry.technologies.slice(0, 3).map((technology) => <span key={technology} className="rounded-sm bg-white/[0.05] px-1.5 py-1 text-[9px] text-white/55">{technology}</span>)}</div>
              <button type="button" onClick={() => setSelectedEntry(entry)} className="shrink-0 rounded border border-white/15 px-3 py-1.5 text-[10px] font-bold text-white/75 transition hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914]">Details</button>
            </div>
          </motion.article>
        ))}
        </HorizontalCarousel>
      </div>

      <ExperienceDetails entry={selectedEntry} onClose={() => setSelectedEntry(null)} />
    </section>
  )
}

export default Experience
