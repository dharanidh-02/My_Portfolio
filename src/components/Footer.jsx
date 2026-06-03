import React from 'react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter gradient-text">DHARANIDHARAN T</h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Building the next generation of AI-powered solutions and scalable digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-sm text-gray-400">
            <a href="#home" className="hover:text-cyan-glow transition-colors font-medium uppercase tracking-widest">Home</a>
            <a href="#about" className="hover:text-cyan-glow transition-colors font-medium uppercase tracking-widest">About</a>
            <a href="#projects" className="hover:text-cyan-glow transition-colors font-medium uppercase tracking-widest">Projects</a>
            <a href="#contact" className="hover:text-cyan-glow transition-colors font-medium uppercase tracking-widest">Contact</a>
          </div>

          <div className="text-right">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
            <p className="text-xs text-gray-600 mt-2 font-mono">
              Designed & Developed by Dharanidharan T
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
