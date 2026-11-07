import { ArrowUp, FileText } from 'lucide-react'

const footerLinks = [
  ['Home', '#home'],
  ['My Profile', '#the-full-story'],
  ['Journey', '#my-journey'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Skills', '#technical-skills'],
  ['Achievements', '#achievements'],
  ['Contact', '#closing-credits'],
]

const Footer = ({ onOpenResume }) => (
  <footer className="relative border-t border-white/10 bg-[#080808] py-10 text-xs text-white/55 sm:py-12">
    <div className="mx-auto flex w-full max-w-[1700px] flex-col gap-8 px-5 sm:px-10 lg:px-14">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="series-display text-3xl tracking-wide text-white">DHARANIDHARAN — THE SERIES</p>
          <a href="mailto:dharanidh02@gmail.com" className="mt-1 inline-block transition hover:text-white">dharanidh02@gmail.com</a>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {footerLinks.map(([label, href]) => <a key={href} href={href} className="transition hover:text-white">{label}</a>)}
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Dharanidharan T. · Streaming-inspired personal portfolio.</p>
        <div className="flex items-center gap-4">
          <button type="button" onClick={onOpenResume} className="inline-flex items-center gap-1.5 transition hover:text-white"><FileText size={13} /> Resume</button>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-1.5 transition hover:text-white"><ArrowUp size={13} /> Back to top</button>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
