import { motion } from 'framer-motion'
import {
  Award,
  Compass,
  Cpu,
  Layers,
  Play,
  UserRound,
} from 'lucide-react'
import HorizontalCarousel from '../components/HorizontalCarousel'

const exploreItems = [
  {
    id: 'projects',
    title: 'My Projects',
    category: 'Originals',
    subtitle: 'PRISM, POFD-Net, RockSense, AgriSense & flagship builds.',
    target: '#projects',
    gradient: 'from-[#4a080d] via-[#1a0406] to-[#0a0203]',
    accent: '#e50914',
    icon: Layers,
  },
  {
    id: 'about',
    title: 'About Me',
    category: 'Profile',
    subtitle: 'Education, interests and the story behind the work.',
    target: '#the-full-story',
    gradient: 'from-[#2b0836] via-[#120317] to-[#0a0203]',
    accent: '#b56be0',
    icon: UserRound,
  },
  {
    id: 'journey',
    title: 'My Journey',
    category: 'Episodes',
    subtitle: 'Learning, building and gaining industry experience.',
    target: '#my-journey',
    gradient: 'from-[#082b3d] via-[#04121a] to-[#0a0203]',
    accent: '#06b6d4',
    icon: Compass,
  },
  {
    id: 'experience',
    title: 'Experience',
    category: 'Professional Story',
    subtitle: 'Internships and hands-on engineering work.',
    target: '#experience',
    gradient: 'from-[#20242a] via-[#101419] to-[#08090b]',
    accent: '#a7bacd',
    icon: UserRound,
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    category: 'Toolkit',
    subtitle: 'Languages, frameworks, AI, data and DevOps.',
    target: '#technical-skills',
    gradient: 'from-[#3a2004] via-[#170c02] to-[#0a0203]',
    accent: '#f59e0b',
    icon: Cpu,
  },
  {
    id: 'certifications',
    title: 'Certifications',
    category: 'Credentials',
    subtitle: 'Training and certification records.',
    target: '#certifications',
    gradient: 'from-[#062d2b] via-[#041411] to-[#0a0203]',
    accent: '#10b981',
    icon: Award,
  },
  {
    id: 'achievements',
    title: 'Achievements',
    category: 'Recognition',
    subtitle: 'Hackathons, programming and project exhibitions.',
    target: '#achievements',
    gradient: 'from-[#2d1b05] via-[#171003] to-[#0a0203]',
    accent: '#eab308',
    icon: Award,
  },
]

const ContinueExploring = () => {
  const openSection = (target) => {
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="continue-exploring" className="relative border-t border-white/5 bg-[#080808]">
      <div className="mx-auto w-full max-w-[1700px]">
        <HorizontalCarousel
          ariaLabel="Explore portfolio sections"
          header={
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#E50914]">
                Browse the collection
              </p>
              <h2 className="series-display text-3xl tracking-wide text-white sm:text-4xl">
                Continue Exploring
              </h2>
            </div>
          }
          trackClassName="py-4"
        >
          {exploreItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => openSection(item.target)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.035, y: -4 }}
                className="series-rail-card group relative flex h-[210px] w-full max-w-[350px] shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#141414] p-5 text-left transition-colors hover:border-white/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E50914] sm:h-[230px] sm:w-[350px]"
                aria-label={`Explore ${item.title}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-110`} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_55%,rgba(0,0,0,0.9)_100%)]" />
                <div className="pointer-events-none absolute -bottom-7 -right-5 opacity-[0.12] transition-opacity group-hover:opacity-25">
                  <Icon size={150} style={{ color: item.accent }} />
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">{item.category}</span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-black transition-colors group-hover:bg-[#E50914] group-hover:text-white">
                    <Play size={14} fill="currentColor" className="ml-0.5" />
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="series-display text-3xl tracking-wide text-white sm:text-4xl">{item.title}</h3>
                  <p className="mt-1 max-w-[260px] text-xs leading-relaxed text-white/65">{item.subtitle}</p>
                </div>

                <div aria-hidden="true" className="relative z-10 h-[2px] w-12 bg-[#E50914] transition-all duration-500 group-hover:w-24" />
              </motion.button>
            )
          })}
        </HorizontalCarousel>
      </div>
    </section>
  )
}

export default ContinueExploring
