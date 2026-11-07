import { useEffect, useMemo, useState } from 'react'
import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  FileText,
  Film,
  GraduationCap,
  Home,
  Mail,
  Sparkles,
  UserRound,
} from 'lucide-react'
import Dock from './Dock'

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'Profile', href: '#about', icon: UserRound },
  { name: 'Projects', href: '#projects', icon: Film },
  { name: 'Experience', href: '#experience', icon: BriefcaseBusiness },
  { name: 'Skills', href: '#skills', icon: Sparkles },
  { name: 'Awards', href: '#achievements', icon: Award },
  { name: 'Certificates', href: '#certifications', icon: BadgeCheck },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
]

const DockNavigation = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let ticking = false

    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + window.innerHeight * 0.36
      let currentSection = 'home'

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href)
        if (section && section.offsetTop <= scrollMarker) {
          currentSection = link.href.slice(1)
        }
      })

      setActiveSection(currentSection)
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection)
        ticking = true
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const items = useMemo(() => {
    const sectionItems = navLinks.map((link) => {
      const Icon = link.icon
      return {
        label: link.name,
        active: activeSection === link.href.slice(1),
        icon: <Icon size={18} strokeWidth={2.2} />,
        onClick: () => {
          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
      }
    })

    return [
      ...sectionItems,
      {
        label: 'Resume',
        icon: <FileText size={18} strokeWidth={2.2} />,
        onClick: onOpenResume,
      },
    ]
  }, [activeSection, onOpenResume])

  return (
    <div className="hidden sm:block">
      <Dock items={items} panelHeight={64} baseItemSize={44} magnification={62} />
    </div>
  )
}

export default DockNavigation
