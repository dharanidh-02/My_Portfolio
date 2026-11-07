import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, ExternalLink, FileText, X } from 'lucide-react'

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return undefined
    const closeOnEscape = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-3 sm:p-6 md:p-10">
          <motion.button type="button" aria-label="Close resume preview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/85 backdrop-blur-md" />
          <motion.div role="dialog" aria-modal="true" aria-labelledby="resume-title" initial={{ opacity: 0, scale: 0.96, y: 14 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: 14 }} className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-white/15 bg-[#141416] shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-[#E50914] text-white"><FileText size={18} /></span>
                <div className="min-w-0">
                  <h2 id="resume-title" className="truncate text-sm font-bold text-white sm:text-base">Dharanidharan T. — Resume</h2>
                  <p className="truncate text-[10px] text-white/50 sm:text-xs">B.E. Computer Science and Business Systems</p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a href="/resume.pdf" download="Dharanidharan_T_Resume.pdf" className="inline-flex items-center gap-1.5 rounded bg-[#E50914] px-3 py-2 text-[10px] font-bold text-white transition hover:bg-[#b80710] sm:text-xs"><Download size={14} /> <span className="hidden sm:inline">Download PDF</span></a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" aria-label="Open resume PDF in a new tab" className="grid h-9 w-9 place-items-center rounded border border-white/15 bg-white/5 text-white/70 transition hover:border-white/35 hover:text-white"><ExternalLink size={15} /></a>
                <button type="button" onClick={onClose} aria-label="Close resume preview" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E50914]"><X size={18} /></button>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-auto bg-[#0e0e10] p-2 sm:p-4">
              <img src="/resume-preview.png" alt="First page of Dharanidharan T.'s resume" className="mx-auto h-auto w-full max-w-[760px] rounded border border-white/10 bg-white" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ResumeModal
