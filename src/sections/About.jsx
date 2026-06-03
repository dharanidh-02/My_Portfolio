import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaBrain, FaCloud, FaRocket, FaPaintBrush, FaLightbulb } from 'react-icons/fa'
import profileImage from '../components/image.png'

const stats = [
  { label: 'LeetCode Problems', value: '250+' },
  { label: 'Skillrack Problems', value: '1150+' },
  { label: 'Google Cloud Badges', value: '49+' },
]

const highlights = [
  { icon: FaCode, title: 'MERN Stack Development' },
  { icon: FaBrain, title: 'AI/ML Integration' },
  { icon: FaCloud, title: 'Kubernetes & Docker' },
  { icon: FaCloud, title: 'Cloud Deployment' },
  { icon: FaBrain, title: 'Deep Learning' },
  { icon: FaLightbulb, title: 'Problem Solving' },
  { icon: FaPaintBrush, title: 'UI/UX Design' },
  { icon: FaRocket, title: 'Research Innovation' },
]

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Context */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="mx-auto aspect-square max-w-[430px] rounded-3xl overflow-hidden glass p-4 rotate-3 hover:rotate-0 transition-transform duration-500 lg:mx-0">
              <div className="w-full h-full bg-secondary-bg/50 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden">
                 <img
                   src={profileImage}
                   alt="Dharanidharan T"
                   className="h-full w-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"></div>
              </div>
            </div>
            {/* Floating Glass Frame */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 w-48 h-48 glass rounded-2xl border border-cyan-glow/20 z-10 flex items-center justify-center p-6 text-center"
            >
               <span className="text-sm font-medium gradient-text uppercase tracking-tighter">CSBS Student @ SECE</span>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Engineering <span className="text-cyan-glow">Intelligence</span>, <br />
                Designing the Future.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Passionate Computer Science and Business Systems student with strong expertise in Full Stack Development, Artificial Intelligence, Machine Learning, and Cloud Technologies. Experienced in building scalable web platforms, AI-based safety systems, and intelligent automation solutions through internships, hackathons, and real-world projects.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 glass-card p-4 hover:border-cyan-glow/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-glow/10 flex items-center justify-center text-cyan-glow">
                    <item.icon />
                  </div>
                  <span className="font-medium text-sm">{item.title}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-1"
                >
                  <h3 className="text-3xl font-bold text-white tracking-tighter">{stat.value}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
