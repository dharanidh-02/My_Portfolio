import React from 'react'
import { motion } from 'framer-motion'
import { SiLeetcode, SiKaggle, SiGithub } from 'react-icons/si'

const profiles = [
  { name: 'LeetCode', icon: SiLeetcode, rating: '1500+', solved: '250+', color: '#FFA116', href: 'https://leetcode.com/u/dharanidh_02/' },
  { name: 'Skillrack', icon: () => <span className="font-extrabold">SR</span>, rating: 'Gold', solved: '1150+', color: '#00D1FF', href: 'https://www.skillrack.com/faces/resume.xhtml?id=514797&key=79cd5fc9a977158524d4eaee835e8e0bcb367584' },
  { name: 'GitHub', icon: SiGithub, rating: 'Builder', solved: 'Full-stack repos', color: '#ffffff', href: 'https://github.com/dharanidh-02' },
  { name: 'Kaggle', icon: SiKaggle, rating: '5+ Badges', solved: '8+ Works', color: '#20BEFF', href: 'https://www.kaggle.com/dharanidharant' },
]

const ProfileCards = () => {
  return (
    <section id="profiles" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter"
          >
            Coding <span className="text-cyan-glow">Profiles</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-cyan-glow/30 transition-all flex flex-col items-center text-center space-y-4"
              href={profile.href}
              target={profile.href ? '_blank' : undefined}
              rel={profile.href ? 'noreferrer' : undefined}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-2"
                style={{ backgroundColor: `${profile.color}15`, color: profile.color }}
              >
                <profile.icon />
              </div>
              <div>
                <h4 className="text-xl font-bold">{profile.name}</h4>
                <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mt-1">Platform</p>
              </div>
              <div className="w-full grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div>
                  <p className="text-xs text-gray-600 font-bold uppercase">Rating</p>
                  <p className="font-bold text-cyan-glow">{profile.rating}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-bold uppercase">Solved</p>
                  <p className="font-bold text-white">{profile.solved}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfileCards
