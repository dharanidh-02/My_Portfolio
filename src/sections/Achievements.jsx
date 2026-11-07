import { motion } from 'framer-motion'
import { Trophy, Medal, Award, Star, Flame, Crown, CheckCircle2 } from 'lucide-react'

const verifiedAwards = [
  {
    title: 'ICPC Asia West Amritapuri',
    subtitle: 'Student Ambassador',
    year: '2025–26',
    category: 'Competitive Programming',
    organization: 'International Collegiate Programming Contest',
    highlight: 'Student Ambassador',
    description:
      'Selected as the official Student Ambassador for the ICPC Asia West Amritapuri regional contest, driving student competitive programming participation and algorithmic championships.',
    icon: Crown,
    badge: 'HONOR',
    stats: 'Ambassador',
  },
  {
    title: 'PALS InnoWAH! Hackathon',
    subtitle: 'National Finalist @ IIT Madras',
    year: '2026',
    category: 'Hardware & AI Innovation',
    organization: 'IIT Madras PALS Initiative',
    highlight: 'Top 64 Teams',
    description:
      'Ranked among the Top 64 engineering teams across South India at IIT Madras for developing RockSense — an AI and YOLOv11 powered rockfall warning system for open-pit mines.',
    icon: Trophy,
    badge: 'FINALIST',
    stats: 'Top 64 Teams',
  },
  {
    title: 'IEEE SmartAlthon',
    subtitle: 'National Level Finalist',
    year: '2025–26',
    category: 'Smart Systems Hackathon',
    organization: 'IEEE Student Branch',
    highlight: 'Finalist',
    description:
      'Shortlisted as a national finalist in the IEEE SmartAlthon for designing real-time AI and IoT edge safety systems with automated alert websockets.',
    icon: Medal,
    badge: 'FINALIST',
    stats: 'National Finalist',
  },
  {
    title: 'Smart India Hackathon (SIH)',
    subtitle: 'Internal College Selection Round',
    year: '2025',
    category: 'National Hackathon',
    organization: 'Ministry of Education Innovation Cell',
    highlight: 'Top 50 Selection',
    description:
      'Advanced through Round 3 selection, ranking among the Top 50 teams at Sri Eshwar College of Engineering selection round for open-pit mining safety.',
    icon: Flame,
    badge: 'TOP 50',
    stats: 'Top 50 Round 3',
  },
  {
    title: 'SkillRack Leaderboard',
    subtitle: 'Department Level Rank 1',
    year: '2025',
    category: 'Algorithmic Problem Solving',
    organization: 'SkillRack Global Coding Platform',
    highlight: 'Rank #1',
    description:
      'Secured 1st Position in the Department Level leaderboard on SkillRack with over 1150+ problems solved, 14 verified certificates, and 325+ bronzes.',
    icon: Trophy,
    badge: 'RANK #1',
    stats: '1150+ Solved',
  },
  {
    title: 'Freshathon Project Expo',
    subtitle: '2nd Place Winner',
    year: '2025',
    category: 'Department Innovation Expo',
    organization: 'Sri Eshwar College of Engineering',
    highlight: '2nd Place',
    description:
      'Awarded 2nd Place in the Freshathon departmental project exhibition for architecting and deploying interactive software prototypes.',
    icon: Star,
    badge: 'RUNNER UP',
    stats: '2nd Prize',
  },
  {
    title: 'Eshwarite "Sell It"',
    subtitle: '3rd Place Winner',
    year: '2024',
    category: 'Product Pitch & Innovation',
    organization: 'Sri Eshwar College of Engineering',
    highlight: '3rd Place',
    description:
      'Won 3rd Place in the campus-wide product presentation and technical value pitching competition demonstrating market readiness for tech prototypes.',
    icon: Award,
    badge: 'PODIUM',
    stats: '3rd Prize',
  },
]

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-20 sm:py-28 bg-[#080808] border-t border-white/5">
      <div className="mx-auto w-full max-w-[1700px] px-5 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#E50914]" />
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#E50914]">
              CRITICALLY ACCLAIMED
            </p>
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
            Achievements & Awards
          </h2>
          <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-[#B3B3B3]">
            Verified competitive programming titles, national hackathon podiums, and leadership recognitions.
          </p>
        </div>

        {/* Awards Poster Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {verifiedAwards.map((award, index) => {
            const Icon = award.icon
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#141414] p-6 transition-all duration-300 hover:scale-105 hover:border-[#E50914] hover:bg-[#1a1a1a] hover:shadow-[0_16px_50px_rgba(0,0,0,0.9),0_0_20px_rgba(229,9,20,0.3)]"
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914]">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#B3B3B3]">
                        {award.category}
                      </span>
                    </div>

                    <span className="rounded bg-[#E50914] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow">
                      {award.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mt-4">
                    <h3 className="text-xl font-black text-white group-hover:text-[#E50914] transition-colors leading-tight">
                      {award.title}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-gray-300">
                      {award.subtitle}
                    </p>
                    <p className="mt-0.5 text-[11px] text-gray-400 font-medium">
                      {award.organization} • {award.year}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-xs leading-relaxed text-[#B3B3B3]">
                    {award.description}
                  </p>
                </div>

                {/* Bottom Verified Stat */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-3 text-[11px]">
                  <span className="flex items-center gap-1 font-bold text-[#46d369]">
                    <CheckCircle2 size={13} /> Verified
                  </span>
                  <span className="rounded bg-white/10 px-2 py-0.5 font-black text-white">
                    {award.stats}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements