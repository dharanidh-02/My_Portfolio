import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { ProjectArtwork } from '../components/ProjectArtworks'
import HorizontalCarousel from '../components/HorizontalCarousel'
import { portfolioProjects } from '../data/projects'

const ProjectCard = ({ project, onSelect }) => (
  <article className="series-rail-card group relative h-[220px] w-full max-w-[390px] shrink-0 overflow-hidden rounded-lg border border-white/10 bg-[#141414] transition duration-300 hover:z-20 hover:scale-[1.035] hover:border-white/35 hover:shadow-[0_18px_38px_rgba(0,0,0,0.65)] sm:h-[240px] sm:w-[390px]">
    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
      <ProjectArtwork id={project.id} title={project.title} category={project.category} />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/45 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/65">D Original</span>
        <span className="text-[9px] font-bold uppercase tracking-wider text-white/65">{project.category}</span>
      </div>
      <h3 className="series-display text-3xl tracking-wide text-white sm:text-4xl">{project.title}</h3>
      <p className="mt-0.5 line-clamp-1 text-xs font-medium text-white/70">{project.subtitle}</p>
      <div className="mt-2 flex min-h-5 flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold text-white/70">
        {(project.tech || []).map((technology) => <span key={technology}>{technology}</span>)}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-2.5">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="rounded bg-white px-3.5 py-1.5 text-[11px] font-extrabold text-black transition hover:bg-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914]"
        >
          View details
        </button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} on GitHub`}
            className="grid h-8 w-8 place-items-center rounded-full border border-white/25 bg-black/40 text-white transition hover:border-white hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914]"
          >
            <FaGithub size={15} />
          </a>
        )}
      </div>
    </div>
  </article>
)

const ProjectRail = ({ title, kicker, subtitle, projects, onSelect }) => {
  return (
    <HorizontalCarousel
      ariaLabel={`${title} projects`}
      header={
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E50914]">{kicker}</p>
          <h3 className="series-display mt-0.5 text-3xl tracking-wide text-white sm:text-4xl">{title}</h3>
          {subtitle && <p className="mt-1 text-xs text-white/55 sm:text-sm">{subtitle}</p>}
        </div>
      }
      className="mx-auto w-full max-w-[1700px]"
      trackClassName="py-4"
    >
      {projects.map((project) => <ProjectCard key={project.id} project={project} onSelect={onSelect} />)}
    </HorizontalCarousel>
  )
}

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [onClose, project])

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            aria-label="Close project details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 14 }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-xl border border-white/15 bg-[#151518] shadow-2xl"
          >
            <div className="relative h-48 sm:h-64">
              <ProjectArtwork id={project.id} title={project.title} category={project.category} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-black/20 to-transparent" />
              <button type="button" onClick={onClose} aria-label="Close project details" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/65 text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914]"><X size={18} /></button>
              <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-white/65">{project.category}</p>
                <h2 id="project-modal-title" className="series-display mt-1 text-4xl tracking-wide text-white sm:text-5xl">{project.title}</h2>
                <p className="text-sm text-white/75">{project.subtitle}</p>
              </div>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-5 sm:p-7">
              <p className="max-w-2xl text-sm leading-7 text-white/75">{project.description}</p>

              {/* Problem & Solution */}
              {project.problem && (
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3.5">
                    <p className="font-bold uppercase tracking-wider text-[#E50914]">Problem Statement</p>
                    <p className="mt-1 leading-relaxed text-white/75">{project.problem}</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/40 p-3.5">
                    <p className="font-bold uppercase tracking-wider text-emerald-400">Proposed Solution</p>
                    <p className="mt-1 leading-relaxed text-white/75">{project.solution}</p>
                  </div>
                </div>
              )}

              {/* Verified Metrics */}
              {project.metrics && (
                <div className="mt-3.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs">
                  <p className="font-bold uppercase tracking-wider text-emerald-400">Verified Results & Metrics</p>
                  <p className="mt-1 font-semibold text-emerald-200">{project.metrics}</p>
                </div>
              )}

              {project.tech?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => <span key={technology} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/75">{technology}</span>)}
                </div>
              )}
              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-white/85"><FaGithub size={15} /> GitHub repository</a>
                ) : (
                  <span className="text-xs text-white/45">Repository link not available yet</span>
                )}
                {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded bg-[#E50914] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#b80710]"><ExternalLink size={14} /> Live project</a>}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="relative bg-[#080808]">
      {/* Rail 1: Flagship AI & Vision Systems (Strict Priority 1 to 5) */}
      <ProjectRail
        kicker="D Original Series · Strict Priority 01–05"
        title="Featured Projects — The Originals"
        subtitle="Clinical deep learning, geological vision models, and real-time medical telemetry."
        projects={portfolioProjects.slice(0, 5)}
        onSelect={setSelectedProject}
      />

      {/* Rail 2: Full-Stack, Cloud & Enterprise (Strict Priority 6 to 10) */}
      <ProjectRail
        kicker="D Original Series · Strict Priority 06–10"
        title="Full-Stack, Cloud & Enterprise"
        subtitle="Production web platforms, autonomous agents, telemetry pipelines, and developer tooling."
        projects={portfolioProjects.slice(5, 10)}
        onSelect={setSelectedProject}
      />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects
