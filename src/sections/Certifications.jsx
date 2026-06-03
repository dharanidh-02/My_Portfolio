import React from 'react'
import { motion } from 'framer-motion'

const certifications = [
  { title: 'C & CPP Training', status: 'Successfully Certified', issuer: 'IIT Bombay', year: '2024' },
  { title: 'Programming in Modern C++', status: 'Successfully Certified', issuer: 'NPTEL', year: '2025' },
  { title: 'App Development with Zero Coding', status: 'Participated', issuer: 'Zenkidz', year: '2025' },
  { title: 'PyTorch: Image Segmentation', status: 'Deep Learning', issuer: 'Coursera', year: '2025' },
  { title: 'PyTorch: Object Localization', status: 'Deep Learning', issuer: 'Coursera', year: '2025' },
  { title: 'Figma for Web & Mobile Interfaces', status: 'UI/UX Design Mastery', issuer: 'Udemy', year: '2026' },
  { title: 'YUVA AI for ALL', status: 'Successfully Completed', issuer: 'Coursera', year: '2026' },
  { title: 'Generative AI in Everyday Life', status: 'Certified', issuer: 'SWYAM IGNOU', year: '2026' },
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter"
          >
            Professional <span className="text-cyan-glow">Certifications</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-cyan-glow/40 hover:bg-white/[0.055]"
            >
              <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-glow to-purple-accent"></div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="rounded-full border border-cyan-glow/20 bg-cyan-glow/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-cyan-glow">
                  {cert.status}
                </span>
                <span className="text-sm font-bold text-gray-400">{cert.year}</span>
              </div>
              <h4 className="text-lg font-bold leading-snug transition-colors group-hover:text-cyan-glow">
                {cert.title}
              </h4>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Issuer</span>
                <span className="text-sm font-black uppercase tracking-wide text-white">{cert.issuer}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
