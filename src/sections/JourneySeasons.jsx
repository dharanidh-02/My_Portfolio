import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import HorizontalCarousel from '../components/HorizontalCarousel'

const seasons = [
  {
    id: 'season-1',
    number: '01',
    title: 'The Beginning',
    summary: 'Laying core foundations in computer science theory, systems programming, and competitive problem solving.',
    episodes: [
      {
        number: '01',
        title: 'Core Foundations in C & C++',
        category: 'Systems Fundamentals',
        summary:
          'Mastered pointer arithmetic, dynamic heap allocations, data structures, and algorithmic complexity via IIT Bombay Certification.',
      },
      {
        number: '02',
        title: 'SkillRack Department Rank #1',
        category: 'Competitive Programming',
        summary:
          'Solved 1150+ challenges across arrays, dynamic programming, strings, and trees on the departmental leaderboard.',
      },
      {
        number: '03',
        title: 'LeetCode 170+ Solved',
        category: 'Algorithms',
        summary:
          'Consistent problem solving covering binary search, backtracking, graphs, dynamic programming, and greedy algorithms.',
      },
      {
        number: '04',
        title: 'NPTEL Modern C++ Elite',
        category: 'High Performance',
        summary:
          'Completed 12-week rigorous national curriculum in Modern C++ (C++11/14/17) under IIT faculty with Elite distinction.',
      },
    ],
  },
  {
    id: 'season-2',
    number: '02',
    title: 'Building Real Products',
    summary: 'Transitioned from competitive programming to building full-stack platforms and production systems.',
    episodes: [
      {
        number: '01',
        title: 'College CRM Enterprise Portal',
        category: 'Full-Stack Architecture',
        summary:
          'Architected high-concurrency student information system with role-based access control, analytics, and responsive admin dashboard.',
      },
      {
        number: '02',
        title: 'StudyCore AI Assistant',
        category: 'Applied AI & RAG',
        summary:
          'Developed knowledge assistant with semantic vector search and real-time query acceleration for academic curriculum.',
      },
      {
        number: '03',
        title: 'Full Stack Web Internship at CodersCave',
        category: 'Industry Practice',
        summary:
          'Built and deployed modular web applications using Node.js, Express, and modern React design patterns.',
      },
      {
        number: '04',
        title: 'Hackathon Breakthrough — TechnoSpark 1st Prize',
        category: 'Competition',
        summary:
          'Engineered an autonomous IoT & computer vision solution under strict 24-hour sprint deadline, securing 1st place.',
      },
    ],
  },
  {
    id: 'season-3',
    number: '03',
    title: 'Industry Experience & DevOps',
    summary: 'Containerization, cloud deployments, and production internships in enterprise software.',
    episodes: [
      {
        number: '01',
        title: 'Cognifyz Technologies Web Internship',
        category: 'Frontend Architecture',
        summary:
          'Built performant, accessibility-compliant user interfaces with modern React, responsive Tailwind styling, and API integration.',
      },
      {
        number: '02',
        title: 'Docker & Kubernetes Cloud Orchestration',
        category: 'DevOps & Containers',
        summary:
          'Containerized multi-tier microservices with multi-stage Docker builds and automated Kubernetes cluster deployment manifests.',
      },
      {
        number: '03',
        title: 'GitOps Continuous Delivery with Argo CD',
        category: 'CI/CD Pipelines',
        summary:
          'Implemented declarative GitOps workflows syncing cluster state automatically from GitLab and GitHub repositories.',
      },
      {
        number: '04',
        title: 'AWS Cloud Practitioner Certification',
        category: 'Cloud Infrastructure',
        summary:
          'Earned official AWS certification validating cloud architecture, VPC networking, security, and scalable infrastructure.',
      },
    ],
  },
  {
    id: 'season-4',
    number: '04',
    title: 'Research & AI Innovation',
    summary: 'Flagship deep learning projects, clinical healthcare diagnostics, and geological computer vision.',
    episodes: [
      {
        number: '01',
        title: 'PRISM: Hybrid Brain Tumor Classification',
        category: 'Deep Learning / Medical',
        summary:
          'Coupled dual-stream CNN feature extractors with Transformer cross-attention for multi-modal MRI diagnosis with 99.4% accuracy.',
      },
      {
        number: '02',
        title: 'POFD-Net: Early Organ Failure Detection',
        category: 'Time-Series ICU Telemetry',
        summary:
          'Modeled biometric vital signs with temporal Bi-LSTM and GRU layers to predict acute deterioration up to 18.4 hours in advance.',
      },
      {
        number: '03',
        title: 'RockSense: AI Mineral & Geological Classifier',
        category: 'Edge Computer Vision',
        summary:
          'Custom CNN with attention-gated feature maps for rapid field identification of geological specimens and rock formations.',
      },
      {
        number: '04',
        title: 'AgriSense: Autonomous Crop Disease Detection',
        category: 'Drone Imagery & Edge AI',
        summary:
          'Trained YOLOv11 and vision backbones to detect multi-class plant pathologies on aerial agricultural drone feeds.',
      },
    ],
  },
]

const JourneySeasons = () => {
  const [activeSeasonId, setActiveSeasonId] = useState(seasons[0].id)
  const [selectedEpisode, setSelectedEpisode] = useState(null)
  const activeSeason = seasons.find((season) => season.id === activeSeasonId) || seasons[0]

  useEffect(() => {
    if (!selectedEpisode) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedEpisode(null)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [selectedEpisode])

  return (
    <section id="my-journey" className="relative border-t border-white/5 bg-[#080808] py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1700px] px-5 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914] animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#E50914]">
                D Originals · Career Chronicles
              </p>
            </div>
            <h2 className="series-display text-4xl tracking-wide text-white sm:text-5xl md:text-6xl">
              Seasons & Episodes
            </h2>
            <p className="mt-1 max-w-2xl text-xs sm:text-sm text-white/60">
              Explore pivotal career chapters from foundational CS to production platforms and AI research.
            </p>
          </div>
        </div>

        {/* Netflix Season Tabs Bar */}
        <div
          role="tablist"
          aria-label="Journey seasons"
          className="flex gap-2 overflow-x-auto border-b border-white/10 pb-3 mb-4"
        >
          {seasons.map((season) => {
            const isActive = activeSeasonId === season.id
            return (
              <button
                key={season.id}
                id={`tab-${season.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="season-episodes"
                onClick={() => setActiveSeasonId(season.id)}
                className={`group shrink-0 rounded-lg px-4 py-2 text-left transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E50914] ${
                  isActive
                    ? 'bg-[#E50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.55)] scale-[1.02]'
                    : 'border border-white/10 bg-white/[0.035] text-white/60 hover:border-white/30 hover:bg-white/[0.07] hover:text-white'
                }`}
              >
                <span className="block text-[9px] font-bold uppercase tracking-[0.18em]">
                  Season {season.number}
                </span>
                <span className="mt-0.5 block text-xs font-bold">{season.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Season Summary Pill */}
        <div className="flex items-center justify-between gap-4 px-1 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-wider text-[#E50914]">
              Season {activeSeason.number} Overview:
            </span>
            <span className="text-xs font-medium text-white/75">{activeSeason.summary}</span>
          </div>
        </div>

        {/* Episodes Horizontal Carousel - Clean & Flush under tabs */}
        <HorizontalCarousel
          pinned={false}
          key={activeSeason.id}
          id="season-episodes"
          regionRole="tabpanel"
          ariaLabelledBy={'tab-' + activeSeason.id}
          ariaLabel={`Season ${activeSeason.number} episodes`}
          className="py-1"
          trackClassName="py-2 pl-1"
        >
          {activeSeason.episodes.map((episode) => (
            <motion.button
              key={episode.number}
              type="button"
              onClick={() => setSelectedEpisode({ ...episode, season: activeSeason })}
              whileHover={{ y: -3 }}
              className="series-rail-card group relative flex h-[220px] w-full max-w-[350px] shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#131316] p-5 text-left transition-all duration-300 hover:border-[#E50914]/60 hover:shadow-[0_0_25px_rgba(229,9,20,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#E50914] sm:h-[235px] sm:w-[350px]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,9,20,0.12),transparent_55%)]" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="series-display text-5xl text-white/20 transition-colors group-hover:text-[#E50914]/80">
                  {episode.number}
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white/50">
                  {episode.category}
                </span>
              </div>
              <div className="relative z-10">
                <p className="text-[9px] font-bold uppercase tracking-[0.19em] text-[#E50914]">
                  Episode {episode.number}
                </p>
                <h4 className="mt-1 text-lg font-bold leading-snug text-white group-hover:text-white transition-colors">
                  {episode.title}
                </h4>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/55">
                  {episode.summary}
                </p>
              </div>
              <div className="relative z-10 flex items-center justify-between pt-1">
                <span className="text-[9px] font-semibold text-white/40 group-hover:text-white/70">
                  View breakdown →
                </span>
                <span className="h-[2px] w-8 bg-[#E50914] transition-all group-hover:w-16" />
              </div>
            </motion.button>
          ))}
        </HorizontalCarousel>
      </div>

      {/* Episode Details Modal */}
      <AnimatePresence>
        {selectedEpisode && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6">
            <motion.button
              type="button"
              aria-label="Close episode details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEpisode(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="episode-title"
              initial={{ opacity: 0, scale: 0.96, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 14 }}
              className="relative z-10 w-full max-w-xl rounded-xl border border-white/15 bg-[#151518] p-6 shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedEpisode(null)}
                aria-label="Close episode details"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-white hover:bg-black transition"
              >
                <X size={17} />
              </button>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E50914]">
                Season {selectedEpisode.season.number} · Episode {selectedEpisode.number}
              </p>
              <h3 id="episode-title" className="series-display mt-2 pr-8 text-4xl tracking-wide text-white">
                {selectedEpisode.title}
              </h3>
              <p className="mt-1 text-xs font-semibold text-white/50">{selectedEpisode.category}</p>
              <p className="mt-5 text-sm leading-7 text-white/75">{selectedEpisode.summary}</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default JourneySeasons
