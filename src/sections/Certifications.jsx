import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, X } from 'lucide-react'
import { IssuerLogo } from '../components/CertificationLogos'
import HorizontalCarousel from '../components/HorizontalCarousel'

const certifications = [
  {
    id: 'aws-ccp',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026',
    status: 'Official Credential',
    category: 'Cloud Architecture & Infrastructure',
    badge: 'AWS OFFICIAL',
    color: '#FF9900',
    description:
      'Validated comprehensive foundational understanding of AWS Cloud concepts, core security, global infrastructure, AWS services architecture, billing, and pricing models.',
    skills: ['AWS IAM', 'Amazon EC2', 'Amazon S3', 'AWS Lambda', 'CloudWatch', 'VPC Architecture'],
  },
  {
    id: 'aws-aip',
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026',
    status: 'AI Credential',
    category: 'Applied Artificial Intelligence & LLMs',
    badge: 'AWS AI',
    color: '#FF9900',
    description:
      'Validated foundational artificial intelligence, machine learning concepts, and generative AI services on AWS, including Amazon Bedrock, SageMaker pipelines, and ethical AI deployment.',
    skills: ['Amazon Bedrock', 'SageMaker', 'Generative AI', 'Responsible AI', 'Model Tuning'],
  },
  {
    id: 'nptel-cpp',
    title: 'Programming in Modern C++',
    issuer: 'NPTEL (IIT Kharagpur)',
    year: '2025',
    status: 'Elite Certification',
    category: 'Systems & High-Performance Computing',
    badge: 'NPTEL ELITE',
    color: '#00D1FF',
    description:
      'Rigorous 12-week national program covering modern C++11/14/17 paradigms, object-oriented systems design, template metaprogramming, and STL algorithms under IIT faculty.',
    skills: ['Modern C++', 'STL', 'Memory Management', 'Data Structures', 'OOP Architecture'],
  },
  {
    id: 'iit-bombay-c-cpp',
    title: 'C & CPP Training Program',
    issuer: 'IIT Bombay',
    year: '2024',
    status: 'Certified with Distinction',
    category: 'Core Computer Science',
    badge: 'IIT BOMBAY',
    color: '#E50914',
    description:
      'Comprehensive institutional hands-on training covering pointer arithmetic, system calls, dynamic allocation, and algorithm complexity analysis conducted by IIT Bombay.',
    skills: ['C Systems', 'Pointers', 'Dynamic Memory', 'Standard Libraries', 'Algorithms'],
  },
  {
    id: 'coursera-segmentation',
    title: 'Deep Learning with PyTorch: Image Segmentation',
    issuer: 'Coursera',
    year: '2025',
    status: 'Deep Learning Specialization',
    category: 'Computer Vision & Medical Imaging',
    badge: 'COURSERA',
    color: '#0056D2',
    description:
      'Implemented fully convolutional neural networks, U-Net architectures, and dice coefficient loss functions for pixel-level semantic mask segmentation on medical and aerial datasets.',
    skills: ['PyTorch', 'U-Net', 'Semantic Segmentation', 'Loss Optimization', 'OpenCV'],
  },
  {
    id: 'coursera-localization',
    title: 'Deep Learning with PyTorch: Object Localization',
    issuer: 'Coursera',
    year: '2025',
    status: 'Deep Learning Specialization',
    category: 'Computer Vision & Object Detection',
    badge: 'COURSERA',
    color: '#0056D2',
    description:
      'Built multi-task convolutional networks predicting both bounding box coordinates and object class probabilities with Intersection-over-Union (IoU) evaluation.',
    skills: ['PyTorch', 'Bounding Box Regression', 'IoU Metrics', 'Feature Backbones'],
  },
  {
    id: 'swayam-genai',
    title: 'Generative AI in Everyday Life',
    issuer: 'SWAYAM IGNOU',
    year: '2026',
    status: 'Govt. Accredited',
    category: 'Generative AI & LLM Systems',
    badge: 'SWAYAM',
    color: '#10B981',
    description:
      'Ministry of Education national certification exploring prompt engineering, diffusion models, generative transformer architectures, and real-world ethical deployment.',
    skills: ['Prompt Engineering', 'Diffusion Models', 'LLMs', 'AI Safety & Ethics'],
  },
  {
    id: 'coursera-yuva',
    title: 'YUVA AI for ALL',
    issuer: 'Coursera',
    year: '2026',
    status: 'Completed',
    category: 'Applied AI & Leadership',
    badge: 'COURSERA',
    color: '#0056D2',
    description:
      'Foundational curriculum covering societal AI applications, enterprise ML transformation, and data-driven problem solving across critical industry domains.',
    skills: ['AI Ecosystems', 'Data Pipelines', 'Machine Learning Life Cycle'],
  },
  {
    id: 'infosys-fullstack',
    title: 'Enterprise Full Stack & Cloud Foundations',
    issuer: 'Infosys Springboard',
    year: '2025',
    status: 'Industry Certified',
    category: 'Enterprise Web & Distributed Systems',
    badge: 'INFOSYS',
    color: '#0070AD',
    description:
      'In-depth enterprise curriculum focusing on scalable backend architecture, REST API design, database normalization, and continuous integration workflows.',
    skills: ['Node.js', 'Express.js', 'SQL / NoSQL', 'CI/CD Pipelines', 'REST APIs'],
  },
  {
    id: 'udemy-figma',
    title: 'Figma for Web & Mobile Interfaces',
    issuer: 'Udemy',
    year: '2026',
    status: 'UI/UX Mastery',
    category: 'Interface & Motion Design',
    badge: 'DESIGN',
    color: '#A435F0',
    description:
      'Mastered atomic design systems, interactive micro-prototyping, auto-layout hierarchies, and design-to-code component mapping for responsive web applications.',
    skills: ['Figma', 'Design Systems', 'Micro-Interactions', 'Prototyping', 'Auto-Layout'],
  },
]

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="certifications" className="relative bg-[#080808] border-t border-white/5">
      <div className="mx-auto w-full max-w-[1700px]">
        {/* Pinned Horizontal Scroll Section */}
        <HorizontalCarousel
          pinned={true}
          ariaLabel="Official certifications and credentials"
          header={
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914] animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#E50914]">
                  D Originals · Accreditations & Licenses
                </p>
              </div>
              <h2 className="series-display text-4xl tracking-wide text-white sm:text-5xl md:text-6xl">
                Official Certifications
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-white/55">
                Verified industry credentials from Amazon Web Services, NPTEL, IIT Bombay, Coursera & Infosys.
              </p>
            </div>
          }
          className="mx-auto w-full max-w-[1700px]"
          trackClassName="py-4 pl-2 sm:pl-6 pr-12 sm:pr-24"
        >
          {certifications.map((cert) => (
            <article
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="series-rail-card group relative flex h-[240px] w-full max-w-[340px] shrink-0 cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#141414] p-5 transition duration-300 hover:scale-[1.025] hover:border-[#E50914]/60 hover:shadow-[0_0_25px_rgba(229,9,20,0.3)] sm:h-[250px] sm:w-[340px]"
            >
              {/* Background Glow Overlay */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-35"
                style={{ backgroundColor: cert.color }}
              />

              {/* Top Header: Authentic Brand Logo + Year */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <IssuerLogo issuer={cert.issuer} className="h-7 w-auto" />
                </div>
                <span className="rounded bg-[#E50914] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow">
                  {cert.badge}
                </span>
              </div>

              {/* Center Content: Title & Category */}
              <div className="relative z-10 my-2">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E50914]">
                  {cert.category}
                </span>
                <h4 className="mt-1 text-base sm:text-lg font-black leading-snug text-white group-hover:text-white transition-colors line-clamp-2">
                  {cert.title}
                </h4>
                <p className="mt-1 text-xs font-semibold text-gray-400">
                  Issued by {cert.issuer} • {cert.year}
                </p>
              </div>

              {/* Bottom Footer: Verification & Action */}
              <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="flex items-center gap-1.5 text-xs font-bold text-[#46d369]">
                  <ShieldCheck size={15} />
                  <span>{cert.status}</span>
                </span>
                <span className="text-[11px] font-bold text-gray-400 group-hover:text-white transition-colors">
                  Details →
                </span>
              </div>
            </article>
          ))}
        </HorizontalCarousel>
      </div>

      {/* Credential Details Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-xl overflow-hidden rounded-xl border border-white/20 bg-[#161616] p-6 shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-[#E50914] px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white">
                      {selectedCert.badge}
                    </span>
                    <span className="text-xs text-[#B3B3B3]">{selectedCert.year}</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-black text-white">{selectedCert.title}</h3>
                  <p className="text-sm font-semibold text-gray-400">Issued by {selectedCert.issuer}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#B3B3B3]">{selectedCert.description}</p>

              <div className="mt-6">
                <p className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                  Validated Competencies
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="rounded bg-white px-5 py-2 text-xs font-black text-black hover:bg-white/90 transition-colors"
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

export default Certifications
