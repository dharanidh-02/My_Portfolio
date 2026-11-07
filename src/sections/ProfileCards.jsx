import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiKaggle } from 'react-icons/si'

const profiles = [
  { name: 'GitHub', focus: 'Projects & source code', href: 'https://github.com/dharanidh-02', icon: FaGithub, color: '#f3f4f6' },
  { name: 'Kaggle', focus: 'Data science & AI', href: 'https://www.kaggle.com/dharanidharaant', icon: SiKaggle, color: '#20beff' },
  { name: 'SkillRack', focus: 'Programming profile', href: 'https://www.skillrack.com/faces/resume.xhtml?id=514797&key=79cd5fc9a977158524d4eaee835e8e0bcb367584', mark: 'SR', color: '#e1b75c' },
  { name: 'LinkedIn', focus: 'Professional profile', href: 'https://www.linkedin.com/in/t-dharanidharan/', icon: FaLinkedin, color: '#0a66c2' },
]

const ProfileCards = () => (
  <section id="profiles" className="relative border-t border-white/5 bg-[#080808] py-20 sm:py-28">
    <div className="mx-auto w-full max-w-[1700px] px-5 sm:px-10 lg:px-14">
      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E50914]">Find me online</p>
      <h2 className="series-display mt-1 text-4xl tracking-wide text-white sm:text-5xl md:text-6xl">Developer Profiles</h2>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map(({ name, focus, href, icon: Icon, mark, color }, index) => (
          <motion.a key={name} href={href} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className="group flex min-h-24 items-center gap-4 rounded-xl border border-white/10 bg-[#121215] p-4 transition hover:border-white/30 hover:bg-[#17171a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914]">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-black/40 text-2xl" style={{ color }}>
              {Icon ? <Icon aria-hidden="true" /> : <span className="text-sm font-black">{mark}</span>}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold text-white">{name}</span>
              <span className="mt-1 block text-xs text-white/50">{focus}</span>
            </span>
            <ExternalLink size={15} className="shrink-0 text-white/35 transition group-hover:text-white" />
          </motion.a>
        ))}
      </div>
    </div>
  </section>
)

export default ProfileCards
