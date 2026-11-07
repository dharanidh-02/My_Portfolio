import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Layers,
  Cpu,
  Server,
  Code2,
  Database,
  Cloud,
  CheckCircle2,
  X,
  ExternalLink,
} from 'lucide-react'
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa'
import {
  SiAntdesign,
  SiCplusplus,
  SiDjango,
  SiExpress,
  SiFastapi,
  SiGitlab,
  SiHtml5,
  SiHuggingface,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiOpencv,
  SiArgo,
  SiPostgresql,
  SiPytorch,
  SiScikitlearn,
  SiSpringboot,
  SiSqlite,
  SiTailwindcss,
  SiTensorflow,
  SiUltralytics,
} from 'react-icons/si'

const domainCategories = [
  {
    id: 'all',
    title: 'All Technologies',
    shortTitle: 'All Stack',
    icon: Layers,
    count: 32,
    accent: '#E50914',
    highlight: 'Comprehensive tech stack spanning AI, cloud orchestration, web platforms, and distributed systems.',
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    shortTitle: 'AI & ML',
    icon: Cpu,
    count: 6,
    accent: '#E50914',
    highlight:
      'Convolutional backbones, Transformer cross-attention, temporal Bi-LSTM/GRU sequences, YOLOv11 edge vision, and production RAG pipelines.',
    deployments: ['PRISM (Brain Tumor MRI)', 'POFD-Net (ICU Telemetry)', 'RockSense (Geology)', 'AgriSense (Edge Vision)'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    shortTitle: 'DevOps & Cloud',
    icon: Cloud,
    count: 8,
    accent: '#38bdf8',
    highlight:
      'Containerized microservices, Kubernetes cluster orchestration, GitOps automation with Argo CD, and AWS cloud architecture.',
    deployments: ['Enterprise CI/CD Pipelines', 'Docker Microservice Clusters', 'AWS Production Deployments'],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    shortTitle: 'Languages',
    icon: Code2,
    count: 4,
    accent: '#f59e0b',
    highlight:
      'Polyglot engineering in Python (AI/backend), Java (Spring Boot), C++ (performance & algorithms), and modern ES6+/TypeScript.',
    deployments: ['High-throughput numerical pipelines', 'Object-oriented enterprise architectures', 'Real-time telemetry'],
  },
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    shortTitle: 'Frontend',
    icon: Layers,
    count: 5,
    accent: '#06b6d4',
    highlight:
      'Cinematic interactive interfaces, responsive design systems, Tailwind CSS utility architecture, and component state management.',
    deployments: ['Netflix Series Portfolio', 'College CRM Portal', 'StudyCore Interactive Dashboard'],
  },
  {
    id: 'backend',
    title: 'Backend Systems & APIs',
    shortTitle: 'Backend',
    icon: Server,
    count: 5,
    accent: '#10b981',
    highlight:
      'High-concurrency RESTful & asynchronous APIs with FastAPI, Node.js/Express event loops, Django ORM, and Spring Boot enterprise services.',
    deployments: ['POFD-Net FastAPI Ingestion Engine', 'College CRM Management APIs', 'CompatIQ Recommendation Service'],
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    shortTitle: 'Databases',
    icon: Database,
    count: 4,
    accent: '#a855f7',
    highlight:
      'Relational modeling in PostgreSQL & MySQL, document-oriented storage with MongoDB, and lightweight embedded SQLite caching.',
    deployments: ['Biometric ICU Time-Series Data', 'Student ERP Records', 'Vector Knowledge Store (RAG)'],
  },
]

const allSkills = [
  // AI & ML
  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'ai',
    categoryName: 'AI & ML',
    icon: SiPytorch,
    color: '#ee4c2c',
    level: 'Production Grade',
    experience: 'Core deep learning framework used for CNN-Transformer feature fusion in PRISM and Bi-LSTM sequences in POFD-Net.',
    projects: ['PRISM', 'POFD-Net', 'CardioMind AI'],
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    category: 'ai',
    categoryName: 'AI & ML',
    icon: SiTensorflow,
    color: '#ff6f00',
    level: 'Advanced',
    experience: 'Neural network training, model export to TFLite for edge devices, and benchmark comparison.',
    projects: ['RockSense', 'AgriSense'],
  },
  {
    id: 'yolov11',
    name: 'YOLOv11',
    category: 'ai',
    categoryName: 'AI & ML',
    icon: SiUltralytics,
    color: '#7655d8',
    level: 'Production Grade',
    experience: 'Real-time multi-class object detection and agricultural crop disease segmentation on drone imagery.',
    projects: ['AgriSense', 'RockSense'],
  },
  {
    id: 'opencv',
    name: 'OpenCV',
    category: 'ai',
    categoryName: 'AI & ML',
    icon: SiOpencv,
    color: '#5c3ee8',
    level: 'Advanced',
    experience: 'Computer vision preprocessing, color space thresholding, edge filtering, and Grad-CAM heatmap overlays.',
    projects: ['PRISM', 'AgriSense'],
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    category: 'ai',
    categoryName: 'AI & ML',
    icon: SiScikitlearn,
    color: '#f7931e',
    level: 'Advanced',
    experience: 'Statistical learning pipelines, feature extraction, cross-validation, and ROC-AUC clinical performance scoring.',
    projects: ['POFD-Net', 'CardioMind AI'],
  },
  {
    id: 'huggingface',
    name: 'NLP & RAG',
    category: 'ai',
    categoryName: 'AI & ML',
    icon: SiHuggingface,
    color: '#ffd21e',
    level: 'Advanced',
    experience: 'HuggingFace transformers, retrieval-augmented generation (RAG) with vector search for academic knowledge synthesis.',
    projects: ['StudyCore AI', 'CompatIQ'],
  },

  // Cloud & DevOps
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    icon: FaAws,
    color: '#ff9900',
    level: 'Production Grade',
    experience: 'EC2 instance compute provisioning, S3 bucket storage, IAM security roles, and cloud application deployment.',
    projects: ['Cloud Infrastructure', 'Enterprise Hosting'],
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    icon: FaDocker,
    color: '#2496ed',
    level: 'Production Grade',
    experience: 'Multi-stage Dockerfile builds, container network bridging, volume caching, and containerized microservice architectures.',
    projects: ['PRISM', 'College CRM', 'POFD-Net'],
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    icon: SiKubernetes,
    color: '#326ce5',
    level: 'Advanced',
    experience: 'Pod scheduling, Deployments, ClusterIP services, ingress routing, and automated self-healing orchestration.',
    projects: ['Cloud Clusters', 'Microservices'],
  },
  {
    id: 'argocd',
    name: 'Argo CD',
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    icon: SiArgo,
    color: '#ef7b4d',
    level: 'Proficient',
    experience: 'Declarative GitOps continuous delivery, synchronizing Kubernetes cluster manifests directly from Git repositories.',
    projects: ['GitOps Pipeline'],
  },
  {
    id: 'gitlab',
    name: 'GitLab CI/CD',
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    icon: SiGitlab,
    color: '#fc6d26',
    level: 'Advanced',
    experience: 'Automated test pipelines, linting, Docker image pushing to registries, and staging deployment stages.',
    projects: ['CI/CD Telemetry'],
  },
  {
    id: 'git',
    name: 'Git',
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    icon: FaGitAlt,
    color: '#f05032',
    level: 'Mastery',
    experience: 'Branching workflows, semantic versioning, interactive rebasing, merge dispute resolution, and repository hygiene.',
    projects: ['All Repositories'],
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    icon: FaGithub,
    color: '#f4f4f5',
    level: 'Mastery',
    experience: 'Open-source collaboration, GitHub Actions automation, release management, and issue tracking.',
    projects: ['Portfolio Repositories'],
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'cloud',
    categoryName: 'Cloud & DevOps',
    icon: FaLinux,
    color: '#f0c674',
    level: 'Advanced',
    experience: 'Bash scripting, systemd service management, permissions, cron jobs, network diagnostics, and remote SSH administration.',
    projects: ['Server Infrastructure', 'Deployments'],
  },

  // Programming Languages
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    categoryName: 'Programming',
    icon: FaPython,
    color: '#3776ab',
    level: 'Production Grade',
    experience: 'Primary language for machine learning, deep learning research, scientific computing (NumPy/Pandas), and backend APIs.',
    projects: ['PRISM', 'POFD-Net', 'RockSense', 'AgriSense'],
  },
  {
    id: 'java',
    name: 'Java',
    category: 'languages',
    categoryName: 'Programming',
    icon: FaJava,
    color: '#ea2d2e',
    level: 'Advanced',
    experience: 'Object-oriented software architecture, enterprise Spring Boot APIs, and core algorithms.',
    projects: ['Enterprise Services', 'NPTEL Elite Certification'],
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'languages',
    categoryName: 'Programming',
    icon: SiCplusplus,
    color: '#659ad2',
    level: 'Advanced',
    experience: 'High-performance computing, data structures, algorithm problem solving (LeetCode 170+ solved), and memory optimization.',
    projects: ['Algorithmic Engineering', 'LeetCode'],
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'languages',
    categoryName: 'Programming',
    icon: FaJs,
    color: '#f7df1e',
    level: 'Mastery',
    experience: 'Modern asynchronous JavaScript, Promises, async/await, DOM APIs, and full-stack web applications.',
    projects: ['College CRM', 'Netflix Portfolio', 'StudyCore AI'],
  },

  // Frontend Architecture
  {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    categoryName: 'Frontend',
    icon: FaReact,
    color: '#61dafb',
    level: 'Production Grade',
    experience: 'Modern functional components, hooks, custom reactive stores, context architecture, and dynamic UI animations.',
    projects: ['Netflix Developer Portfolio', 'College CRM', 'PRISM Web Portal'],
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    categoryName: 'Frontend',
    icon: SiTailwindcss,
    color: '#06b6d4',
    level: 'Mastery',
    experience: 'Utility-first responsive layouts, custom design systems, dark mode palettes, and sleek glassmorphism effects.',
    projects: ['Netflix Portfolio', 'All Web UIs'],
  },
  {
    id: 'antdesign',
    name: 'Ant Design',
    category: 'frontend',
    categoryName: 'Frontend',
    icon: SiAntdesign,
    color: '#1677ff',
    level: 'Advanced',
    experience: 'Enterprise dashboard design, complex data tables, form validation schemas, and admin telemetry interfaces.',
    projects: ['College CRM Management Portal'],
  },
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    categoryName: 'Frontend',
    icon: SiHtml5,
    color: '#e34f26',
    level: 'Mastery',
    experience: 'Semantic markup, accessibility compliance (WCAG), aria roles, and SEO-optimized document structuring.',
    projects: ['All Web Projects'],
  },
  {
    id: 'css3',
    name: 'CSS3 & Animations',
    category: 'frontend',
    categoryName: 'Frontend',
    icon: FaCss3,
    color: '#1572b6',
    level: 'Mastery',
    experience: 'Custom keyframe animations, glassmorphism, flexbox/grid architecture, and GPU-accelerated transforms.',
    projects: ['Cinematic Intro', 'Portfolio Animations'],
  },

  // Backend Systems
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    categoryName: 'Backend',
    icon: FaNodeJs,
    color: '#339933',
    level: 'Advanced',
    experience: 'Non-blocking I/O event loops, stream processing, microservice communication, and authentication middleware.',
    projects: ['College CRM Backend', 'API Gateways'],
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    categoryName: 'Backend',
    icon: SiExpress,
    color: '#f4f4f5',
    level: 'Advanced',
    experience: 'Modular REST routing, CORS configuration, JWT token security, request rate limiting, and error handling middleware.',
    projects: ['College CRM REST API', 'Microservices'],
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    categoryName: 'Backend',
    icon: SiFastapi,
    color: '#009688',
    level: 'Production Grade',
    experience: 'High-throughput async Python endpoints, Pydantic type validation, automated OpenAPI docs, and AI model inference serving.',
    projects: ['PRISM Inference API', 'POFD-Net Ingestion', 'CompatIQ Engine'],
  },
  {
    id: 'django',
    name: 'Django',
    category: 'backend',
    categoryName: 'Backend',
    icon: SiDjango,
    color: '#44b78b',
    level: 'Advanced',
    experience: 'Batteries-included full-stack development, Django ORM database migrations, admin dashboards, and user session management.',
    projects: ['Enterprise Web Apps'],
  },
  {
    id: 'springboot',
    name: 'Spring Boot',
    category: 'backend',
    categoryName: 'Backend',
    icon: SiSpringboot,
    color: '#6db33f',
    level: 'Proficient',
    experience: 'Enterprise Java backend services, dependency injection, Spring Data JPA, and RESTful controllers.',
    projects: ['Java Enterprise Practice'],
  },

  // Databases
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'databases',
    categoryName: 'Databases',
    icon: SiPostgresql,
    color: '#4169e1',
    level: 'Production Grade',
    experience: 'Relational data modeling, index optimization, complex SQL joins, ACID transactions, and connection pooling.',
    projects: ['POFD-Net Telemetry Records', 'Enterprise Database'],
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'databases',
    categoryName: 'Databases',
    icon: SiMongodb,
    color: '#47a248',
    level: 'Advanced',
    experience: 'Document schemas, aggregation pipelines, replica sets, and flexible unstructured telemetry storage.',
    projects: ['College CRM Document Store', 'StudyCore AI'],
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'databases',
    categoryName: 'Databases',
    icon: SiMysql,
    color: '#4479a1',
    level: 'Advanced',
    experience: 'Relational database administration, normalization, foreign keys, stored procedures, and query performance tuning.',
    projects: ['College CRM Relational Store'],
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    category: 'databases',
    categoryName: 'Databases',
    icon: SiSqlite,
    color: '#5a91c7',
    level: 'Mastery',
    experience: 'Embedded zero-configuration database caching, edge storage on IoT hardware, and local testing persistence.',
    projects: ['RockSense Embedded Node', 'AgriSense Edge Device'],
  },
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [inspectedSkill, setInspectedSkill] = useState(null)

  const currentDomain =
    domainCategories.find((cat) => cat.id === activeCategory) || domainCategories[0]

  const filteredSkills =
    activeCategory === 'all'
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory)

  return (
    <section id="technical-skills" className="relative border-t border-white/5 bg-[#080808] py-20 sm:py-28 overflow-hidden">
      <div id="skills" className="sr-only">Technical skills</div>

      {/* Netflix Cinematic Overhead Red Spotlight Beam */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.18),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#E50914]/50 to-transparent shadow-[0_0_15px_#E50914]" />

      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-5 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914] animate-pulse" />
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#E50914]">
                D Originals · Technical Architecture & Tooling
              </p>
            </div>
            <h2 className="series-display text-4xl tracking-wide text-white sm:text-5xl md:text-6xl">
              Skills & Technologies
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              Explore 32+ verified technologies across clinical AI, high-concurrency microservices, cloud orchestration, and responsive frontend architecture.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-[#E50914]/30 bg-[#E50914]/10 px-3.5 py-1.5 text-xs font-bold text-[#E50914] shadow-[0_0_15px_rgba(229,9,20,0.2)]">
              32 Technologies
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-bold text-white/70">
              6 Specialized Domains
            </span>
          </div>
        </div>

        {/* Netflix Domain Selector Pills Bar */}
        <div className="mb-10 flex flex-wrap gap-2 sm:gap-2.5 border-b border-white/10 pb-5">
          {domainCategories.map((cat) => {
            const isActive = activeCategory === cat.id
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                type="button"
                data-skill-pill="true"
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914] ${
                  isActive
                    ? 'bg-[#E50914] text-white shadow-[0_0_20px_rgba(229,9,20,0.55)] scale-105'
                    : 'border border-white/10 bg-[#141416] text-white/65 hover:border-white/30 hover:bg-[#1a1a1f] hover:text-white'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : 'text-white/50 group-hover:text-white'} />
                <span>{cat.shortTitle}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-extrabold ${
                    isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-white/50'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active Domain Feature Banner (Netflix Studio Spotlight) */}
        <motion.div
          key={currentDomain.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative mb-10 overflow-hidden rounded-xl border border-white/15 bg-gradient-to-r from-[#170407] via-[#12080a] to-[#0c0c0e] p-5 sm:p-7 shadow-2xl"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#E50914]/20 blur-3xl" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E50914]">
                  Domain Spotlight
                </span>
                <span className="text-white/30">·</span>
                <span className="text-xs font-semibold text-emerald-400">100% Production Verified</span>
              </div>
              <h3 className="series-display text-2xl tracking-wide text-white sm:text-3xl">
                {currentDomain.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/70">
                {currentDomain.highlight}
              </p>
            </div>

            {currentDomain.deployments && (
              <div className="shrink-0 rounded-lg border border-white/10 bg-black/40 p-4 lg:max-w-xs">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2">
                  Key Production Deployments
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {currentDomain.deployments.map((dep) => (
                    <span
                      key={dep}
                      className="rounded border border-[#E50914]/30 bg-[#E50914]/10 px-2 py-1 text-[10px] font-semibold text-white/85"
                    >
                      {dep}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Cinematic Netflix Technology Cards Matrix */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.article
                  layout
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25, delay: index * 0.015 }}
                  onClick={() => setInspectedSkill(skill)}
                  data-skill-pill="true"
                  className="group relative flex h-[155px] cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#121215]/90 p-4 transition-all duration-300 hover:scale-[1.04] hover:border-[#E50914]/70 hover:bg-[#18181d] hover:shadow-[0_0_25px_rgba(229,9,20,0.35)]"
                >
                  {/* Subtle Brand Color Radial Glow */}
                  <div
                    className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-10 blur-xl transition-opacity group-hover:opacity-30"
                    style={{ backgroundColor: skill.color }}
                  />

                  {/* Card Top: Category Tag & Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 group-hover:text-white/70 transition-colors">
                      {skill.categoryName}
                    </span>
                    <span
                      className="grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-black/40 transition-transform group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      <Icon size={16} />
                    </span>
                  </div>

                  {/* Card Middle: Tech Name & Level Badge */}
                  <div className="relative z-10">
                    <h4 className="text-base font-bold text-white group-hover:text-[#E50914] transition-colors line-clamp-1">
                      {skill.name}
                    </h4>
                    <span className="mt-1 inline-block rounded bg-white/[0.06] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white/60 group-hover:bg-[#E50914]/20 group-hover:text-white transition-colors">
                      {skill.level}
                    </span>
                  </div>

                  {/* Card Bottom: Expanding Red Accent Line */}
                  <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-2">
                    <span className="text-[9px] font-medium text-white/40 group-hover:text-white/70">
                      Tap for details
                    </span>
                    <span className="h-[2px] w-5 bg-white/20 transition-all duration-300 group-hover:w-12 group-hover:bg-[#E50914]" />
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Netflix "Behind the Scenes" Technology Inspection Modal */}
      <AnimatePresence>
        {inspectedSkill && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6">
            <motion.button
              type="button"
              aria-label="Close tech details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInspectedSkill(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="tech-title"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-xl border border-white/20 bg-[#151518] p-6 shadow-2xl sm:p-7"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-black/50"
                    style={{ color: inspectedSkill.color }}
                  >
                    <inspectedSkill.icon size={26} />
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#E50914]">
                      {inspectedSkill.categoryName}
                    </span>
                    <h3 id="tech-title" className="series-display text-2xl tracking-wide text-white">
                      {inspectedSkill.name}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setInspectedSkill(null)}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-black/40 text-white/70 hover:bg-white hover:text-black transition"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Status Badge */}
              <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-400">
                  <CheckCircle2 size={12} /> {inspectedSkill.level}
                </span>
                <span className="text-xs text-white/50">Verified in Production Repositories</span>
              </div>

              {/* Description & Experience */}
              <div className="mt-5 rounded-lg border border-white/10 bg-black/30 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1.5">
                  How Dharanidharan uses {inspectedSkill.name}
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-white/80">
                  {inspectedSkill.experience}
                </p>
              </div>

              {/* Associated Projects */}
              {inspectedSkill.projects && (
                <div className="mt-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-2">
                    Featured in Projects
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {inspectedSkill.projects.map((proj) => (
                      <span
                        key={proj}
                        className="rounded border border-[#E50914]/40 bg-[#E50914]/10 px-3 py-1 text-xs font-bold text-white shadow-[0_0_10px_rgba(229,9,20,0.2)]"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Action */}
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <a
                  href="#projects"
                  onClick={() => setInspectedSkill(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E50914] hover:text-[#ff333d] transition"
                >
                  <span>Explore related projects</span>
                  <ExternalLink size={13} />
                </a>
                <button
                  type="button"
                  onClick={() => setInspectedSkill(null)}
                  className="rounded bg-white px-4 py-1.5 text-xs font-bold text-black hover:bg-white/85 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Skills
