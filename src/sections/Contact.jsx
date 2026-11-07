import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Download,
  FileText,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiKaggle } from 'react-icons/si'

const Contact = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = formData.subject || 'Portfolio Inquiry / Collaboration'
    const body = [
      `Name: ${formData.name || 'Not provided'}`,
      `Email: ${formData.email || 'Not provided'}`,
      '',
      'Message:',
      formData.message || 'Not provided',
    ].join('\n')

    window.location.href = `mailto:dharanidh02@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  }

  const contactChannels = [
    {
      icon: Mail,
      label: 'Primary Email',
      value: 'dharanidh02@gmail.com',
      href: 'mailto:dharanidh02@gmail.com',
      badge: 'DIRECT INBOX',
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+91 6374788857',
      href: 'tel:+916374788857',
      badge: 'DIRECT CALL',
    },
    {
      icon: Mail,
      label: 'Academic Email',
      value: 'dharanidharan.t2024csbs@sece.ac.in',
      href: 'mailto:dharanidharan.t2024csbs@sece.ac.in',
      badge: 'COLLEGE DOMAIN',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pollachi / Coimbatore, Tamil Nadu, India',
      href: 'https://maps.google.com/?q=Pollachi,+Tamil+Nadu',
      badge: 'REMOTE & ON-SITE',
    },
  ]

  const streamingLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dharanidharan-t-180a79321/', icon: FaLinkedin },
    { label: 'GitHub', href: 'https://github.com/dharanidh-02', icon: FaGithub },
    { label: 'LeetCode', href: 'https://leetcode.com/u/dharanidh_02/', icon: SiLeetcode },
    { label: 'Kaggle', href: 'https://www.kaggle.com/dharanidharant', icon: SiKaggle },
  ]

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-[#080808] border-t border-white/5">
      {/* Dark Red Cinematic Flare Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[550px] w-[900px] rounded-full bg-gradient-to-b from-[#E50914]/20 via-[#E50914]/5 to-transparent blur-[160px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#E50914]/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-5 sm:px-10 lg:px-14">
        {/* Cinematic Headline & Supporting Text */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E50914]/40 bg-[#E50914]/10 px-4 py-1 text-xs font-black uppercase tracking-widest text-[#E50914] mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E50914] animate-ping" />
            FINAL ACT • INITIATE CONTACT
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow-md">
            Ready for the next chapter?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B3B3B3] leading-relaxed">
            Let&apos;s build something extraordinary together.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={onOpenResume}
              className="netflix-button-red"
            >
              <FileText size={18} />
              <span>Inspect Official Resume</span>
            </button>
            <a
              href="/resume.pdf"
              download="Dharanidharan_T_Resume.pdf"
              className="netflix-button-info"
            >
              <Download size={18} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Contact Grid: Direct Info + Message Form */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Left Column: Direct Communication Channels */}
          <div className="space-y-4">
            <h3 className="text-xl font-black uppercase tracking-tight text-white mb-4">
              Direct Communication Channels
            </h3>

            {contactChannels.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto:') || c.href.startsWith('tel:') ? undefined : '_blank'}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-[#141414] p-5 transition-all duration-300 hover:scale-[1.02] hover:border-[#E50914] hover:bg-[#1a1a1a]"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                        {c.label}
                      </span>
                      <p className="text-sm sm:text-base font-bold text-white group-hover:text-[#E50914] transition-colors">
                        {c.value}
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-block rounded bg-white/5 border border-white/10 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-gray-400 group-hover:text-white">
                    {c.badge}
                  </span>
                </motion.a>
              )
            })}

            {/* Social Streaming Strip */}
            <div className="rounded-xl border border-white/10 bg-[#141414] p-5 pt-4">
              <p className="text-xs font-black uppercase tracking-wider text-gray-400 mb-3">
                Social Profiles & Repositories:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {streamingLinks.map((s) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#1c1c1c] px-4 py-2 text-xs font-bold text-gray-200 transition-all hover:border-[#E50914] hover:bg-[#E50914]/20 hover:text-white"
                    >
                      <Icon size={14} />
                      <span>{s.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Transmission Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-[#141414] p-6 sm:p-8 shadow-2xl relative"
          >
            <div className="mb-6">
              <h3 className="text-xl font-black uppercase tracking-tight text-white">
                Transmit Message
              </h3>
              <p className="mt-1 text-xs text-[#B3B3B3]">
                Dispatches straight to Dharanidharan&apos;s personal inbox with instant acknowledgment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Morgan"
                    className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#E50914] focus:outline-none focus:ring-1 focus:ring-[#E50914]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@company.com"
                    className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#E50914] focus:outline-none focus:ring-1 focus:ring-[#E50914]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Collaboration"
                  className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#E50914] focus:outline-none focus:ring-1 focus:ring-[#E50914]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Share details regarding your team, stack, or project..."
                  className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#E50914] focus:outline-none focus:ring-1 focus:ring-[#E50914]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#E50914] py-3.5 text-sm font-black uppercase tracking-wider text-white transition-all hover:bg-[#b80710] shadow-[0_4px_20px_rgba(229,9,20,0.4)] hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send size={16} />
                <span>Transmit Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
