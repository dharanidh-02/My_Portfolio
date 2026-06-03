import React from 'react'
import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaDatabase,
  FaRocket,
  FaGithub,
  FaCode,
  FaChartBar,
  FaBookOpen,
  FaPaintBrush,
  FaWordpress,
  FaLaptopCode,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiKubernetes,
  SiFirebase,
  SiGooglecloud,
  SiMysql,
  SiFigma,
  SiKaggle,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: FaCode, color: '#a3e635', level: '88%' },
      { name: 'C++', icon: FaCode, color: '#8b5cf6', level: '86%' },
      { name: 'Java', icon: FaJava, color: '#007396', level: '82%' },
      { name: 'Python', icon: FaPython, color: '#3776AB', level: '90%' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: '88%' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: '#E34F26', level: '92%' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', level: '90%' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: '90%' },
      { name: 'React.js', icon: FaReact, color: '#61DAFB', level: '88%' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: '86%' },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff', level: '84%' },
      { name: 'Django', icon: SiDjango, color: '#44B78B', level: '78%' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F', level: '76%' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: '86%' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: '82%' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: '80%' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', icon: FaDocker, color: '#2496ED', level: '82%' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', level: '78%' },
      { name: 'AWS', icon: FaAws, color: '#FF9900', level: '80%' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: '84%' },
      { name: 'GCP', icon: SiGooglecloud, color: '#4285F4', level: '86%' },
      { name: 'Google Vertex AI', icon: SiGooglecloud, color: '#34A853', level: '82%' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', icon: FaGithub, color: '#ffffff', level: '90%' },
      { name: 'VS Code', icon: FaCode, color: '#a3e635', level: '90%' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: '76%' },
      { name: 'Power BI', icon: FaChartBar, color: '#F2C811', level: '78%' },
      { name: 'Jupyter Notebook', icon: FaBookOpen, color: '#F37626', level: '82%' },
      { name: 'Google Colab', icon: FaLaptopCode, color: '#F9AB00', level: '80%' },
      { name: 'Kaggle', icon: SiKaggle, color: '#20BEFF', level: '76%' },
      { name: 'Ultralytics', icon: FaDatabase, color: '#8b5cf6', level: '74%' },
      { name: 'Canva', icon: FaPaintBrush, color: '#00C4CC', level: '78%' },
      { name: 'WordPress', icon: FaWordpress, color: '#21759B', level: '72%' },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-left shadow-[0_0_60px_rgba(163,230,53,0.08)] md:px-8"
          >
            <span className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.35em] text-cyan-glow">
              <span className="h-2 w-2 rounded-full bg-cyan-glow shadow-[0_0_16px_rgba(163,230,53,0.8)]"></span>
              Capability Matrix
            </span>
            <span className="block text-4xl font-bold tracking-tighter md:text-6xl">
              Technical <span className="text-white/35">Arsenal</span>
            </span>
            <span className="mt-5 grid gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 sm:grid-cols-3">
              <span className="rounded-lg border border-white/10 bg-background/60 px-4 py-3">
                Full Stack
              </span>
              <span className="rounded-lg border border-white/10 bg-background/60 px-4 py-3">
                AI Systems
              </span>
              <span className="rounded-lg border border-white/10 bg-background/60 px-4 py-3">
                Cloud Ready
              </span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-4xl text-left text-xs font-bold uppercase tracking-widest text-gray-500"
          >
            Powering innovations with the latest technologies
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-glow/40 hover:bg-white/[0.055]"
            >
              <div className="absolute right-5 top-5 opacity-5 transition-opacity group-hover:opacity-15">
                <FaRocket className="text-6xl -rotate-12" />
              </div>

              <div className="relative mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-glow">
                    Stack {String(catIndex + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1 text-xl font-bold">{category.title}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-background/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  {category.skills.length} tools
                </span>
              </div>

              <div className="relative flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/45 px-3 py-2 transition-all duration-300 hover:border-cyan-glow/40 hover:bg-cyan-glow/10"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.04]">
                      <skill.icon style={{ color: skill.color }} className="text-lg shrink-0" />
                    </span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
