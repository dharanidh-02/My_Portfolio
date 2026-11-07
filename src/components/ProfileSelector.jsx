import { motion } from 'framer-motion'
import { Code2, Sparkles, UserCheck } from 'lucide-react'
import profileImage from '../assets/resume.png'

const profiles = [
  {
    id: 'dharanidharan',
    name: 'Dharanidharan',
    subtitle: 'The Full Story',
    type: 'original',
    image: profileImage,
    glow: 'rgba(229, 9, 20, 0.45)',
    border: 'hover:border-[#E50914]',
    tag: 'CREATOR',
    targetSection: '#home',
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    subtitle: 'Experience, achievements and resume',
    type: 'icon',
    icon: UserCheck,
    bgGradient: 'from-blue-900/60 to-cyan-950/80',
    iconColor: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.45)',
    border: 'hover:border-cyan-400',
    tag: 'FAST TRACK',
    targetSection: '#my-journey',
  },
  {
    id: 'developer',
    name: 'Developer',
    subtitle: 'Projects, architecture and skills',
    type: 'icon',
    icon: Code2,
    bgGradient: 'from-emerald-950/70 to-teal-950/80',
    iconColor: '#4ade80',
    glow: 'rgba(74, 222, 128, 0.45)',
    border: 'hover:border-emerald-400',
    tag: 'CODE & AI',
    targetSection: '#projects',
  },
  {
    id: 'guest',
    name: 'Guest',
    subtitle: 'Explore everything',
    type: 'icon',
    icon: Sparkles,
    bgGradient: 'from-amber-950/70 to-orange-950/80',
    iconColor: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.45)',
    border: 'hover:border-amber-400',
    tag: 'ALL ACCESS',
    targetSection: '#home',
  },
]

const ProfileSelector = ({ onSelectProfile }) => {
  const handleSelect = (profile) => {
    sessionStorage.setItem('series_profile', profile.id)
    onSelectProfile(profile)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9990] flex flex-col items-center justify-center overflow-x-hidden overflow-y-auto bg-[#080808] px-4 py-8"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[800px] rounded-full bg-[#E50914]/15 blur-[150px]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black/95" />
      </div>

      <div className="relative z-10 w-full max-w-5xl text-center">
        {/* Netflix Red Logo */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-3 flex items-center justify-center gap-2"
        >
          <span
            className="text-4xl font-black text-[#E50914] drop-shadow-[0_0_12px_rgba(229,9,20,0.8)]"
            style={{ fontFamily: 'Impact, sans-serif' }}
          >
            D
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="series-display text-4xl sm:text-6xl md:text-7xl text-white tracking-wide"
        >
          Who&apos;s watching?
        </motion.h2>

        <p className="mt-2 text-sm sm:text-base text-[#B3B3B3] font-medium">
          Select your profile to customize the streaming narrative.
        </p>

        {/* 4 Large Profile Cards */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 max-w-4xl mx-auto">
          {profiles.map((p, index) => {
            const Icon = p.icon
            return (
              <motion.button
                key={p.id}
                type="button"
                onClick={() => handleSelect(p)}
                aria-label={`Choose ${p.name} profile: ${p.subtitle}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="group flex flex-col items-center text-center rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E50914]"
              >
                {/* Avatar Box */}
                <div
                  className={`relative h-32 w-32 sm:h-44 sm:w-44 overflow-hidden rounded-xl border-2 border-white/20 bg-[#181818] transition-all duration-300 ${p.border} group-hover:shadow-[0_12px_35px_rgba(0,0,0,0.85)]`}
                  style={{
                    boxShadow: `0 0 0 0 ${p.glow}`,
                  }}
                >
                  {p.type === 'original' ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-108"
                    />
                  ) : (
                    <div
                      className={`h-full w-full bg-gradient-to-br ${p.bgGradient} flex flex-col items-center justify-center p-4 transition-transform duration-500 group-hover:scale-108`}
                    >
                      <div
                        className="grid h-16 w-16 place-items-center rounded-2xl bg-black/40 border border-white/10 shadow-lg text-3xl"
                        style={{ color: p.iconColor }}
                      >
                        <Icon size={34} />
                      </div>
                    </div>
                  )}

                  {/* Top Badge Tag */}
                  <span className="absolute top-2 left-2 rounded bg-black/75 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-white border border-white/15">
                    {p.tag}
                  </span>
                </div>

                {/* Profile Name & Subtitle */}
                <h3 className="mt-3.5 text-base sm:text-lg font-black text-[#B3B3B3] transition-colors group-hover:text-white">
                  {p.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-[11px] sm:text-xs text-gray-500 transition-colors group-hover:text-gray-300 max-w-[150px]">
                  {p.subtitle}
                </p>
              </motion.button>
            )
          })}
        </div>

        {/* Manage Profiles / Continue as Guest Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 sm:mt-16"
        >
          <button
            type="button"
            onClick={() => handleSelect(profiles[0])}
            className="rounded border border-white/30 bg-transparent px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-gray-400 hover:border-white hover:text-white transition-all hover:bg-white/5"
          >
            Direct Series Access
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProfileSelector

