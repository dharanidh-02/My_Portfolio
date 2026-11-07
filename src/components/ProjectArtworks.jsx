import { useId } from 'react'

const palettes = {
  prism: ['#351252', '#13081f', '#d78eff'],
  rocksense: ['#12313b', '#071319', '#75d8e6'],
  compatiq: ['#152944', '#08111e', '#88b6ff'],
  'pofd-net': ['#3d1b16', '#160907', '#ff9277'],
  agrisense: ['#174826', '#08180c', '#96e97d'],
  cardiomind: ['#47121c', '#18060b', '#ff778e'],
  aquagrid: ['#10384b', '#06131d', '#79d6f0'],
  crm: ['#342047', '#110b18', '#c89cff'],
  studycore: ['#36301c', '#151208', '#ead27d'],
  gigshield: ['#172c48', '#080d17', '#82aaff'],
}

function ArtworkShape({ id, accent }) {
  if (id === 'prism') {
    return <g fill="none" stroke={accent} strokeOpacity=".55" strokeWidth="1.4"><circle cx="340" cy="128" r="82" /><circle cx="340" cy="128" r="56" /><path d="M340 30v196M242 128h196M270 58l140 140M410 58 270 198" /><path d="m340 70 48 58-48 58-48-58z" strokeWidth="2" /></g>
  }
  if (id === 'rocksense') {
    return <g><path d="m0 212 80-60 68 33 84-104 63 61 48-39 137 98v69H0z" fill={accent} fillOpacity=".1" stroke={accent} strokeOpacity=".48" /><path d="m224 84 14 31-17 13 24 28-12 36" fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" /><circle cx="240" cy="150" r="65" fill="none" stroke={accent} strokeOpacity=".25" strokeDasharray="3 6" /></g>
  }
  if (id === 'compatiq') {
    return <g><rect x="276" y="43" width="110" height="158" rx="8" fill="#fff" fillOpacity=".035" stroke={accent} strokeOpacity=".55" /><path d="M297 77h67M297 93h52M297 121h67M297 137h42M297 166h67" stroke={accent} strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" /><path d="m365 57 30 27v84" fill="none" stroke={accent} strokeOpacity=".28" strokeWidth="2" /><circle cx="344" cy="145" r="74" fill="none" stroke={accent} strokeOpacity=".18" /></g>
  }
  if (id === 'pofd-net') {
    return <g fill="none" stroke={accent} strokeOpacity=".58"><path d="M264 75 329 48l67 47-20 79-70 35-60-56z" strokeWidth="1.5" /><path d="m264 75 42 78 90-58m-90 58 70 21m-70-21-40 42m40-42-43-61" strokeWidth="1.5" /><g fill={accent} stroke="none"><circle cx="264" cy="75" r="6"/><circle cx="329" cy="48" r="7"/><circle cx="396" cy="95" r="5"/><circle cx="376" cy="174" r="7"/><circle cx="306" cy="209" r="5"/><circle cx="246" cy="153" r="6"/><circle cx="306" cy="153" r="8"/></g></g>
  }
  if (id === 'agrisense') {
    return <g fill="none" stroke={accent} strokeOpacity=".7"><path d="M322 195c-5-66 18-110 76-126-1 58-21 103-76 126Z" fill={accent} fillOpacity=".12" strokeWidth="2" /><path d="M323 195c18-43 39-72 69-99M321 200c-54-39-61-83-28-131 39 30 52 72 28 131Z" fill={accent} fillOpacity=".09" strokeWidth="2" /><path d="M52 218h396M92 196h300M145 174h194" strokeOpacity=".25" /></g>
  }
  if (id === 'cardiomind') {
    return <g fill="none" stroke={accent} strokeOpacity=".75"><path d="M225 133h40l17-30 25 74 24-109 27 92 17-27h57" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><path d="M342 195c-25-22-72-58-72-92 0-22 16-37 37-37 15 0 28 8 35 21 7-13 20-21 35-21 21 0 37 15 37 37 0 34-47 70-72 92Z" strokeOpacity=".23" strokeWidth="1.5" /></g>
  }
  if (id === 'aquagrid') {
    return <g fill="none" stroke={accent} strokeOpacity=".66"><path d="M255 80h150v44H255zM284 124v67h92v-67m-46-44v111M236 191h194" strokeWidth="2" /><circle cx="255" cy="102" r="8" fill={accent} fillOpacity=".48"/><circle cx="330" cy="102" r="8" fill={accent} fillOpacity=".48"/><circle cx="405" cy="102" r="8" fill={accent} fillOpacity=".48"/><path d="M306 52c0 11-9 20-20 20s-20-9-20-20 20-33 20-33 20 22 20 33Z" fill={accent} fillOpacity=".12" /></g>
  }
  if (id === 'crm') {
    return <g fill="#fff" fillOpacity=".035" stroke={accent} strokeOpacity=".58"><rect x="251" y="61" width="80" height="118" rx="8"/><rect x="344" y="82" width="80" height="118" rx="8"/><path d="M269 88h44m-44 15h34m-34 31h44m-26 15h26M362 109h44m-44 15h34m-34 31h44m-26 15h26" strokeWidth="2" strokeLinecap="round" /></g>
  }
  if (id === 'studycore') {
    return <g fill="none" stroke={accent} strokeOpacity=".62" strokeWidth="2"><path d="M244 72c40-18 68-13 94 3 26-16 54-21 94-3v118c-40-18-68-13-94 3-26-16-54-21-94-3z" fill={accent} fillOpacity=".08"/><path d="M338 75v118M264 99c20-7 37-6 54 0m-54 18c20-7 37-6 54 0m40-18c20-7 37-6 54 0m-54 18c20-7 37-6 54 0" strokeLinecap="round" /></g>
  }
  if (id === 'gigshield') {
    return <g fill="none" stroke={accent} strokeOpacity=".62" strokeWidth="2"><path d="M338 44 410 70v53c0 45-28 76-72 99-44-23-72-54-72-99V70z" fill={accent} fillOpacity=".08"/><path d="m298 131 27 27 54-58" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><circle cx="338" cy="133" r="94" strokeOpacity=".18" /></g>
  }
  return <g fill="none" stroke={accent} strokeOpacity=".45"><circle cx="340" cy="128" r="72"/><path d="M268 128h144M340 56v144"/></g>
}

export function ProjectArtwork({ id, title, category }) {
  const gradientId = `project-art-${useId().replace(/:/g, '')}`
  const [start, end, accent] = palettes[id] || ['#312020', '#100808', '#e50914']

  return (
    <svg viewBox="0 0 480 270" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={start} />
          <stop offset="1" stopColor={end} />
        </linearGradient>
        <radialGradient id={`${gradientId}-glow`} cx="75%" cy="45%" r="70%">
          <stop offset="0" stopColor={accent} stopOpacity=".3" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="480" height="270" fill={`url(#${gradientId})`} />
      <rect width="480" height="270" fill={`url(#${gradientId}-glow)`} />
      <g opacity=".12" stroke="#fff" strokeWidth="1">
        <path d="M0 45h480M0 90h480M0 135h480M0 180h480M0 225h480" />
        <path d="M48 0v270M96 0v270M144 0v270M192 0v270M240 0v270M288 0v270M336 0v270M384 0v270M432 0v270" />
      </g>
      <ArtworkShape id={id} accent={accent} />
      <text x="24" y="34" fill={accent} fontSize="10" fontWeight="700" letterSpacing="2.2" fontFamily="Arial, sans-serif">{category.toUpperCase()}</text>
      <text x="24" y="243" fill="#fff" fillOpacity=".88" fontSize="17" fontWeight="700" letterSpacing="1.3" fontFamily="Arial, sans-serif">{title.toUpperCase()}</text>
      <rect x="24" y="254" width="52" height="2" rx="1" fill={accent} />
    </svg>
  )
}
