import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { portfolioProjects } from '../data/projects'
import { ProjectArtwork } from '../components/ProjectArtworks'
import HorizontalCarousel from '../components/HorizontalCarousel'

const topPicks = ['prism', 'pofd-net', 'rocksense', 'agrisense', 'cardiomind']
  .map((id) => portfolioProjects.find((project) => project.id === id))
  .filter(Boolean)

const TopPicks = () => {
  const [selectedPick, setSelectedPick] = useState(null)

  useEffect(() => {
    if (!selectedPick) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedPick(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [selectedPick])

  return (
    <section id="top-picks" className="relative border-t border-white/5 bg-[#080808]">
      <div className="mx-auto w-full max-w-[1700px]">
        <HorizontalCarousel
          ariaLabel="Dharanidharan top picks"
          header={
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E50914]">The editor&apos;s selection</p>
              <h2 className="series-display mt-1 text-4xl tracking-wide text-white sm:text-5xl md:text-6xl">Dharanidharan&apos;s Top Picks</h2>
              <p className="mt-1 text-xs text-white/55">Strict Priority 01–05: PRISM, POFD-Net, RockSense, AgriSense & CardioMind AI.</p>
            </div>
          }
          className="mx-auto w-full max-w-[1700px]"
          trackClassName="py-6 pl-2 sm:pl-6 pr-12 sm:pr-24"
        >
          {topPicks.map((project, index) => (
            <div key={project.id} className="series-rail-card group relative flex shrink-0 items-end pb-1">
              <span aria-hidden="true" className="series-display relative z-0 -mr-9 text-[100px] leading-[0.8] text-white/30 transition-colors group-hover:text-[#E50914]/50 sm:-mr-12 sm:text-[220px]">{String(index + 1).padStart(2, '0')}</span>
              <article className="relative z-10 flex h-[290px] w-[205px] shrink-0 flex-col justify-between overflow-hidden rounded-lg border border-white/15 bg-[#141414] shadow-2xl transition duration-300 group-hover:scale-[1.035] group-hover:border-white/40 sm:h-[355px] sm:w-[270px]">
                <div className="absolute inset-0"><ProjectArtwork id={project.id} title={project.title} category={project.category} /></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
                <div className="relative z-10 flex items-center justify-between p-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/75">D Originals</span>
                  <span className="rounded bg-[#E50914] px-2 py-0.5 text-[9px] font-bold tracking-wide text-white">#{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="relative z-10 p-4 sm:p-5">
                  <h3 className="series-display text-3xl tracking-wide text-white sm:text-4xl">{project.title}</h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/70">{project.subtitle}</p>
                  <button type="button" onClick={() => setSelectedPick(project)} className="mt-4 rounded bg-white px-3.5 py-1.5 text-[11px] font-extrabold text-black transition hover:bg-white/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914]">Details</button>
                </div>
              </article>
            </div>
          ))}
        </HorizontalCarousel>
      </div>

      <AnimatePresence>
        {selectedPick && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6">
            <motion.button type="button" aria-label="Close top pick details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPick(null)} className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
            <motion.div role="dialog" aria-modal="true" aria-labelledby="top-pick-title" initial={{ opacity: 0, scale: 0.96, y: 14 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 14 }} className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl border border-white/15 bg-[#151518] shadow-2xl">
              <div className="relative h-52 sm:h-64">
                <ProjectArtwork id={selectedPick.id} title={selectedPick.title} category={selectedPick.category} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151518] via-black/10 to-transparent" />
                <button type="button" onClick={() => setSelectedPick(null)} aria-label="Close top pick details" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/65 text-white hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914]"><X size={18} /></button>
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">Featured project</p>
                  <h3 id="top-pick-title" className="series-display mt-1 text-4xl tracking-wide text-white">{selectedPick.title}</h3>
                </div>
              </div>
              <div className="p-5 sm:p-7">
                <p className="text-sm leading-7 text-white/75">{selectedPick.description}</p>
                {selectedPick.tech?.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{selectedPick.tech.map((technology) => <span key={technology} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">{technology}</span>)}</div>}
                {selectedPick.github && <a href={selectedPick.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded bg-white px-4 py-2 text-xs font-bold text-black transition hover:bg-white/85"><FaGithub size={15} /> GitHub repository</a>}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default TopPicks
