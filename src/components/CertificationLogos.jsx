import { FaAws } from 'react-icons/fa'
import { SiCoursera, SiInfosys } from 'react-icons/si'

export const IssuerLogo = ({ issuer, className = 'h-8 w-auto' }) => {
  const normalizedIssuer = (issuer || '').toLowerCase()

  if (normalizedIssuer.includes('amazon') || normalizedIssuer.includes('aws')) {
    return <FaAws aria-label="Amazon Web Services" className={className} style={{ color: '#ff9900' }} />
  }

  if (normalizedIssuer.includes('coursera')) {
    return <SiCoursera aria-label="Coursera" className={className} style={{ color: '#0056d2' }} />
  }

  if (normalizedIssuer.includes('infosys')) {
    return <SiInfosys aria-label="Infosys" className={className} style={{ color: '#007cc3' }} />
  }

  return (
    <span className={`inline-flex max-w-full items-center rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/70 ${className}`}>
      {issuer}
    </span>
  )
}
