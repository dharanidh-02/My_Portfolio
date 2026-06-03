import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa'

const achievements = [
  { title: 'Smart India Hackathon', detail: 'Round 3 Selection', icon: FaTrophy },
  { title: 'PALS InnoWah', detail: 'National Finalist', icon: FaMedal },
  { title: 'Freshaton', detail: '2nd Prize Winner', icon: FaStar },
  { title: 'Skillrack Department Leaderboard', detail: 'Won 1st Prize', icon: FaTrophy },
  { title: 'Eshwarite', detail: 'Secured 2nd Prize in "Sell It"', icon: FaMedal },
]

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative bg-secondary-bg/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter"
          >
            Milestones & <span className="text-cyan-glow">Victories</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 border-white/5 hover:border-cyan-glow/50 relative group"
            >
              <div className="w-12 h-12 bg-cyan-glow/10 rounded-xl flex items-center justify-center text-cyan-glow mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="text-2xl" />
              </div>
              <h4 className="text-lg font-bold mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500 font-mono uppercase tracking-widest">{item.detail}</p>
              
              <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-glow to-purple-accent opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity blur-sm pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
