import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const experiences = [
  {
    company: 'College CRM System',
    role: 'MERN Intern',
    period: '2025',
    description: 'Developed a scalable College CRM system with role-based authentication for Admins, Faculty, and Teachers. Built responsive dashboards using React.js, Tailwind CSS, Ant Design, Node.js, and MongoDB Atlas. Implemented attendance management, report generation, and user administration workflows. Deployed the platform on AWS cloud infrastructure.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'AWS', 'Ant Design'],
    github: 'https://github.com/dharanidh-02/Mern_CRM',
    link: 'https://clg-crm.netlify.app/',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary-bg/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter"
          >
            Professional <span className="text-cyan-glow">Journey</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start">
                {/* Period */}
                <div className="md:col-span-1 text-cyan-glow font-bold text-xl md:text-right pt-2">
                  {exp.period}
                </div>

                {/* Content */}
                <div className="md:col-span-4 glass-card p-8 relative">
                  {/* Timeline Dot */}
                  <div className="absolute top-8 left-[-45px] md:left-[-41px] w-4 h-4 bg-cyan-glow rounded-full border-4 border-background z-10 shadow-[0_0_10px_#a3e635]"></div>
                  {/* Timeline Line */}
                  <div className="absolute top-0 bottom-0 left-[-37px] md:left-[-33px] w-[2px] bg-white/5 md:hidden"></div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <span className="px-4 py-1 glass rounded-full text-xs font-bold text-cyan-glow uppercase tracking-widest">{exp.role}</span>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-[10px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-md text-gray-500 hover:text-cyan-glow transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <a href={exp.github} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-6 py-2 glass rounded-full hover:bg-white/10 transition-all">
                      <FaGithub />
                      <span className="text-sm font-bold">GitHub</span>
                    </a>
                    <a href={exp.link} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-6 py-2 bg-white text-background rounded-full hover:bg-cyan-glow hover:text-background transition-all font-bold">
                      <FaExternalLinkAlt className="text-sm" />
                      <span className="text-sm">Website</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
