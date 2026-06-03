import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'RockSense',
    subtitle: 'AI-Based Rockfall Prediction & Alert System',
    description: 'An AI-powered mining safety platform developed for Smart India Hackathon and PALS InnoWah. The system uses YOLO-based crack detection, deep learning models, real-time hazard classification, Raspberry Pi hardware integration, sensor monitoring, and automated safety alerts for open-pit mines.',
    tech: ['YOLO', 'OpenCV', 'Python', 'Raspberry Pi', 'WebSocket', 'Deep Learning'],
    link: '#',
    github: 'https://github.com/sudharshan-s-1286/ai_rockfall-main',
    gradient: 'from-amber-400 to-rose-500',
  },
  {
    title: 'AquaGrid AI',
    subtitle: 'Intelligent Water Stress Prediction Platform',
    description: 'Developed an IoT-enabled smart water monitoring and management platform featuring leak detection, automated billing, real-time analytics dashboards, role-based administration, and predictive water stress optimization.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Firebase', 'IoT', 'Chart.js'],
    link: 'https://aqua-grid-frontend.vercel.app/',
    github: 'https://github.com/dharanidh-02/AquaGrid',
    gradient: 'from-sky-400 to-fuchsia-500',
  },
  {
    title: 'AgriSense',
    subtitle: 'AI-Powered Agricultural Decision Intelligence Platform',
    description: 'Developed an AI-based agricultural mobile application for crop recommendation, plant disease detection, weather analysis, water monitoring, and market prediction to support smart and sustainable farming decisions.',
    tech: ['Flutter', 'Node.js', 'TensorFlow', 'PlantNet API', 'Gemini AI', 'Weather Analysis', 'Market Prediction'],
    link: '#',
    github: 'https://github.com/dharanidh-02/AgriSense',
    gradient: 'from-emerald-400 to-yellow-300',
  },
  {
    title: 'StudyCore',
    subtitle: 'AI Study Assistant',
    description: 'Platform extracting questions from PDFs and providing AI-powered answers using IBM Granite and Gemini AI models.',
    tech: ['Generative AI', 'IBM Granite', 'Gemini AI', 'Python', 'React.js'],
    link: '#',
    github: 'https://github.com/dharanidh-02/StudyCore',
    gradient: 'from-violet-400 to-orange-400',
  },
  {
    title: 'GigShield',
    subtitle: 'ML Parametric Insurance',
    description: 'AI-powered insurance platform for gig economy workers with dynamic premium calculation and fraud detection.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Python', 'Machine Learning'],
    link: '#',
    github: 'https://github.com/Ivis7vj/gigsheild',
    gradient: 'from-teal-300 to-indigo-500',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tighter"
            >
              Featured <span className="text-cyan-glow">Creations</span>
            </motion.h2>
            <p className="text-gray-400 max-w-lg">
              A showcase of my engineering prowess in AI, Full Stack development, and real-world problem solving.
            </p>
          </div>
          <a href="https://github.com/dharanidh-02" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-cyan-glow font-bold hover:underline">
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="project-journey-line absolute left-4 top-0 bottom-0 w-px md:left-1/2"></div>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-8 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)]' : 'md:pl-[calc(50%+2rem)]'}`}
            >
              <div className={`absolute left-0 top-7 h-8 w-8 rounded-full border border-white/20 bg-gradient-to-br ${project.gradient} shadow-[0_0_24px_rgba(251,146,60,0.22)] md:left-1/2 md:-translate-x-1/2`}>
                <span className="absolute inset-2 rounded-full bg-background/80"></span>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-cyan-glow/40 hover:bg-white/[0.055]">
                <div className={`absolute inset-y-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-1 bg-gradient-to-b ${project.gradient}`}></div>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-cyan-glow font-bold text-[10px] uppercase tracking-widest mb-2">{project.subtitle}</h4>
                    <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                  </div>
                  <span className="shrink-0 text-3xl font-black tracking-tighter text-white/10">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="text-gray-400 mb-5 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold px-3 py-1 glass rounded-md text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-4 py-2 glass rounded-full hover:bg-white/10 transition-all">
                    <FaGithub />
                    <span className="text-sm font-bold">Code</span>
                  </a>
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-white text-background rounded-full hover:bg-cyan-glow hover:text-background transition-all font-bold">
                      <FaExternalLinkAlt className="text-sm" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
