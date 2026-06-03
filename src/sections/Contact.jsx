import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiKaggle, SiLeetcode } from 'react-icons/si'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const socialLinks = [
    { icon: FaEnvelope, href: 'mailto:dharanidh02@gmail.com', label: 'Gmail' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/dharanidharan-t-180a79321/', label: 'LinkedIn' },
    { icon: FaGithub, href: 'https://github.com/dharanidh-02', label: 'GitHub' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/dharanidh_02/', label: 'LeetCode' },
    { icon: SiKaggle, href: 'https://www.kaggle.com/dharanidharant', label: 'Kaggle' },
    { icon: () => <span className="text-xs font-black">SR</span>, href: 'https://www.skillrack.com/faces/resume.xhtml?id=514797&key=79cd5fc9a977158524d4eaee835e8e0bcb367584', label: 'SkillRack' },
  ]

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = formData.subject || 'Portfolio Contact Message'
    const body = [
      `Name: ${formData.name || 'Not provided'}`,
      `Email: ${formData.email || 'Not provided'}`,
      '',
      'Message:',
      formData.message || 'Not provided',
    ].join('\n')

    window.location.href = `mailto:dharanidh02@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-glow/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div className="relative min-h-[620px] space-y-12 lg:min-h-[680px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 0.9, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
              className="contact-robot-frame pointer-events-none absolute left-[35%] top-[210px] z-0 h-[390px] w-[min(420px,62vw)] sm:left-[41%] sm:top-[205px] sm:h-[460px] sm:w-[440px] lg:left-[47%] lg:top-[195px] lg:h-[510px] lg:w-[430px]"
              aria-hidden="true"
            >
              <spline-viewer
                url="https://prod.spline.design/TosAiFXXYUvw8Ucs/scene.splinecode"
                className="contact-robot-spline"
                loading="lazy"
              ></spline-viewer>
              <div className="spline-watermark-cover"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-4"
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Let's <span className="text-cyan-glow">Connect</span>.
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                I'm always open to discussing innovative projects, AI research opportunities, or new ventures.
              </p>
            </motion.div>

            <div className="relative z-10 space-y-8">
              {[
                { icon: FaEnvelope, label: 'Email', value: 'dharanidh02@gmail.com' },
                { icon: FaPhone, label: 'Phone', value: '+91 6374788857' },
                { icon: FaMapMarkerAlt, label: 'Location', value: 'Pollachi, India' },
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-6"
                >
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan-glow">
                    <info.icon />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{info.label}</p>
                    <p className="text-lg font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={social.label}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-cyan-glow hover:text-background transition-all"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 relative overflow-hidden"
          >
            {/* Form Particles */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
               {[...Array(5)].map((_, i) => (
                 <motion.div
                   key={i}
                   animate={{ y: [-10, 10, -10], opacity: [0.1, 0.3, 0.1] }}
                   transition={{ duration: 3 + i, repeat: Infinity }}
                   className="absolute bg-cyan-glow w-1 h-1 rounded-full"
                   style={{ top: `${20 * i}%`, left: `${15 * i}%` }}
                 ></motion.div>
               ))}
            </div>

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Name</label>
                  <input name="name" type="text" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-glow/50 focus:outline-none transition-all placeholder:text-gray-700" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Email</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-glow/50 focus:outline-none transition-all placeholder:text-gray-700" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Subject</label>
                <input name="subject" type="text" value={formData.subject} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-glow/50 focus:outline-none transition-all placeholder:text-gray-700" placeholder="Collaboration Opportunity" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Message</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-glow/50 focus:outline-none transition-all placeholder:text-gray-700" placeholder="Hello, I would like to..." />
              </div>
              <button className="w-full py-4 bg-cyan-glow text-background font-bold rounded-xl hover:shadow-[0_0_20px_rgba(163,230,53,0.5)] transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
