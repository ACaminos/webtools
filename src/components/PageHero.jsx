import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import tools from '../resources/tools';

const categoryConfig = {
  'iconos': {
    gradient: 'from-violet-700 via-violet-800/70 to-indigo-950',
    accent: 'from-violet-400 to-indigo-300',
    icon: 'fa-solid fa-desktop',
    pattern: 'circles',
  },
  'banco de imagenes': {
    gradient: 'from-blue-700 via-blue-800/70 to-sky-950',
    accent: 'from-blue-400 to-cyan-300',
    icon: 'fa-regular fa-images',
    pattern: 'mountains',
  },
  'spinners': {
    gradient: 'from-emerald-700 via-emerald-800/70 to-teal-950',
    accent: 'from-emerald-400 to-teal-300',
    icon: 'fa-solid fa-spinner',
    pattern: 'rings',
  },
  'github': {
    gradient: 'from-gray-800 via-slate-800/70 to-gray-950',
    accent: 'from-gray-300 to-slate-200',
    icon: 'fa-brands fa-github',
    pattern: 'hexagons',
  },
  'apis': {
    gradient: 'from-amber-700 via-amber-800/70 to-yellow-950',
    accent: 'from-amber-400 to-orange-300',
    icon: 'fa-solid fa-network-wired',
    pattern: 'network',
  },
  'datatables': {
    gradient: 'from-cyan-700 via-cyan-800/70 to-cyan-950',
    accent: 'from-cyan-400 to-sky-300',
    icon: 'fa-solid fa-table-columns',
    pattern: 'grid',
  },
  'dashboards': {
    gradient: 'from-rose-700 via-rose-800/70 to-rose-950',
    accent: 'from-rose-400 to-pink-300',
    icon: 'fa-solid fa-table-list',
    pattern: 'chart',
  },
  'skeleton': {
    gradient: 'from-indigo-700 via-indigo-800/70 to-indigo-950',
    accent: 'from-indigo-400 to-blue-300',
    icon: 'fa-solid fa-bars-progress',
    pattern: 'blocks',
  },
  'divisores secciones web': {
    gradient: 'from-pink-700 via-pink-800/70 to-pink-950',
    accent: 'from-pink-400 to-rose-300',
    icon: 'fa-solid fa-table-cells-large',
    pattern: 'waves',
  },
  'json': {
    gradient: 'from-green-700 via-green-800/70 to-green-950',
    accent: 'from-green-400 to-emerald-300',
    icon: 'fa-regular fa-file-code',
    pattern: 'brackets',
  },
  'animaciones': {
    gradient: 'from-orange-700 via-orange-800/70 to-orange-950',
    accent: 'from-orange-400 to-amber-300',
    icon: 'fa-solid fa-person-running',
    pattern: 'curves',
  },
  'librerias': {
    gradient: 'from-purple-700 via-purple-800/70 to-purple-950',
    accent: 'from-purple-400 to-fuchsia-300',
    icon: 'fa-regular fa-bookmark',
    pattern: 'squares',
  },
  'ia': {
    gradient: 'from-teal-700 via-teal-800/70 to-teal-950',
    accent: 'from-teal-400 to-emerald-300',
    icon: 'fa-solid fa-robot',
    pattern: 'nodes',
  },
  'frameworks': {
    gradient: 'from-red-700 via-red-800/70 to-red-950',
    accent: 'from-red-400 to-rose-300',
    icon: 'fa-solid fa-code',
    pattern: 'layers',
  },
  'deployment & hosting': {
    gradient: 'from-sky-700 via-sky-800/70 to-sky-950',
    accent: 'from-sky-400 to-blue-300',
    icon: 'fas fa-server',
    pattern: 'rocket',
  },
  "generadores de ui's basados en ai": {
    gradient: 'from-fuchsia-700 via-fuchsia-800/70 to-fuchsia-950',
    accent: 'from-fuchsia-400 to-pink-300',
    icon: 'fab fa-figma',
    pattern: 'shapes',
  },
  'componentes ui': {
    gradient: 'from-indigo-700 via-indigo-800/70 to-violet-950',
    accent: 'from-indigo-400 to-purple-300',
    icon: 'fa-solid fa-puzzle-piece',
    pattern: 'squares',
  },
  'herramientas': {
    gradient: 'from-amber-700 via-orange-800/70 to-yellow-950',
    accent: 'from-amber-400 to-yellow-300',
    icon: 'fa-solid fa-screwdriver-wrench',
    pattern: 'sparkle',
  },
  'recursos varios': {
    gradient: 'from-slate-700 via-slate-800/70 to-slate-950',
    accent: 'from-slate-400 to-gray-300',
    icon: 'fa-solid fa-plus',
    pattern: 'sparkle',
  },
}

// eslint-disable-next-line react/prop-types
const BackgroundIllustration = ({ type }) => {
  const cls = 'absolute inset-0 pointer-events-none overflow-hidden'

  const randomData = useMemo(() => {
    const networkPoints = [[100,80],[250,150],[150,280],[400,60],[550,120],[650,250],[500,320],[350,220],[700,80],[300,350]]
    const networkLines = networkPoints.map((point, i) => {
      return networkPoints.slice(i + 1).filter(() => Math.random() > 0.6).map(target => ({ from: point, to: target }))
    })
    const chartBars = Array.from({ length: 10 }, () => ({ height: Math.random() * 180 + 30, offset: Math.random() * 180 }))
    const blocks = Array.from({ length: 30 }, () => ({ width: 60 + Math.random() * 80, height: 12 + Math.random() * 16 }))
    const nodes = Array.from({ length: 40 }, () => ({ r: 3 + Math.random() * 4, opacity: 0.2 + Math.random() * 0.3 }))
    const rocketStars = Array.from({ length: 8 }, () => ({
      x: 200 + Math.random() * 400,
      y: 30 + Math.random() * 150,
      r: 1.5 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.3,
    }))
    const sparkleStars = Array.from({ length: 13 }, () => ({
      x: 40 + Math.random() * 720,
      y: 30 + Math.random() * 340,
      s: 6 + Math.random() * 12,
      o1: 0.3 + Math.random() * 0.3,
      o2: 0.15 + Math.random() * 0.2,
    }))
    return { networkPoints, networkLines, chartBars, blocks, nodes, rocketStars, sparkleStars }
  }, [])

  switch (type) {
    case 'circles':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.06]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <defs><radialGradient id="c1"><stop offset="0%" stopColor="white" stopOpacity="1"/><stop offset="100%" stopColor="white" stopOpacity="0"/></radialGradient></defs>
            {[120,80,60,40,30,20].map((r,i) => (
              <circle key={i} cx={150 + i*120} cy={80 + i*50} r={r} fill="none" stroke="white" strokeWidth="1.5" opacity={0.5 - i*0.05}/>
            ))}
            {[100,70,50,35].map((r,i) => (
              <circle key={`f-${i}`} cx={600 + i*60} cy={280 - i*40} r={r} fill="white" opacity={0.04 - i*0.008}/>
            ))}
            <circle cx="400" cy="200" r="300" fill="url(#c1)" opacity="0.08"/>
          </svg>
        </div>
      )
    case 'mountains':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <path d="M0,300 L100,180 L200,250 L320,120 L420,200 L520,80 L620,180 L750,100 L800,150 L800,400 L0,400 Z" fill="white"/>
            <path d="M0,350 L80,260 L180,310 L280,200 L380,280 L480,170 L580,240 L700,160 L800,220 L800,400 L0,400 Z" fill="white" opacity="0.5"/>
            <path d="M0,400 L50,340 L150,370 L250,290 L350,340 L450,260 L550,320 L650,240 L800,290 L800,400 L0,400 Z" fill="white" opacity="0.3"/>
          </svg>
        </div>
      )
    case 'rings':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <g transform="translate(400,200)">
              {[180,150,120,90,60,30].map((r,i) => (
                <circle key={i} cx="0" cy="0" r={r} fill="none" stroke="white" strokeWidth="2" opacity={0.5 - i*0.07}
                  strokeDasharray={`${r*0.5} ${r*0.3}`}/>
              ))}
              <line x1="-200" y1="0" x2="200" y2="0" stroke="white" strokeWidth="1" opacity="0.3"/>
              <line x1="0" y1="-200" x2="0" y2="200" stroke="white" strokeWidth="1" opacity="0.3"/>
            </g>
          </svg>
        </div>
      )
    case 'hexagons':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.06]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            {[0,1,2,3,4].map(row =>
              [0,1,2,3,4,5].map(col => {
                const x = col * 80 + (row % 2) * 40 + 40
                const y = row * 70 + 35
                return (
                  <polygon key={`${row}-${col}`} points={`${x},${y-30} ${x+26},${y-15} ${x+26},${y+15} ${x},${y+30} ${x-26},${y+15} ${x-26},${y-15}`}
                    fill="none" stroke="white" strokeWidth="1" opacity={0.3 - Math.abs(row-2)*0.05}/>
                )
              })
            )}
          </svg>
        </div>
      )
    case 'network':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            {randomData.networkPoints.map(([cx,cy],i) => (
              randomData.networkLines[i].map(({to: [ox,oy]},j) => (
                <line key={`${i}-${j}`} x1={cx} y1={cy} x2={ox} y2={oy} stroke="white" strokeWidth="0.8" opacity="0.2"/>
              ))
            ))}
            {randomData.networkPoints.map(([cx,cy],i) => (
              <circle key={i} cx={cx} cy={cy} r="6" fill="white" opacity="0.4"/>
            ))}
          </svg>
        </div>
      )
    case 'grid':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.06]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <defs><pattern id="g" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1"/></pattern></defs>
            <rect width="800" height="400" fill="url(#g)"/>
            {[0,1,2,3,4,5,6,7].map(i => (
              <rect key={i} x={i*100 + 20} y={i*50 + 15} width="60" height="25" rx="3" fill="white" opacity={0.05 + i*0.008}/>
            ))}
            {[0,1,2,3].map(i => (
              <rect key={`h-${i}`} x={i*200 + 30} y={300 + i*10} width="150" height="8" rx="2" fill="white" opacity="0.04"/>
            ))}
          </svg>
        </div>
      )
    case 'chart':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <g transform="translate(50,300)">
              {randomData.chartBars.map((bar, i) => (
                <rect key={i} x={i*75} y={-bar.offset - 30} width="40" height={bar.height + 30} rx="4" fill="white" opacity={0.15 + (i * 0.015)}/>
              ))}
              <line x1="-10" y1="5" x2="760" y2="5" stroke="white" strokeWidth="1" opacity="0.2"/>
            </g>
            <path d="M0,200 Q100,150 200,180 T400,100 T600,140 T800,60" fill="none" stroke="white" strokeWidth="2" opacity="0.15"/>
            <path d="M0,220 Q100,180 200,200 T400,140 T600,170 T800,100" fill="none" stroke="white" strokeWidth="1" opacity="0.08"/>
          </svg>
        </div>
      )
    case 'blocks':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            {[0,1,2,3,4,5].map(row =>
              [0,1,2,3,4].map(col => {
                const idx = row * 5 + col
                const block = randomData.blocks[idx] || { width: 60, height: 12 }
                return (
                  <rect key={`${row}-${col}`} x={col*170 + 20} y={row*65 + 15} width={block.width} height={block.height} rx="4" fill="white" opacity={0.15 - row*0.02}/>
                )
              })
            )}
          </svg>
        </div>
      )
    case 'waves':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            {[0,1,2,3,4,5].map((w,i) => (
              <path key={i} d={`M0,${200 + i*10} Q${100 + i*20},${80 + i*15} ${200 + i*15},${200 + i*10} T${400 + i*10},${180 + i*12} T${600 + i*5},${200 + i*8} T800,${190 + i*10}`}
                fill="none" stroke="white" strokeWidth="1.5" opacity={0.2 - i*0.025}/>
            ))}
          </svg>
        </div>
      )
    case 'brackets':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.06]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <text x="80" y="140" fill="white" fontSize="180" fontWeight="100" fontFamily="monospace" opacity="0.15">{'{ }'}</text>
            <text x="450" y="280" fill="white" fontSize="100" fontWeight="100" fontFamily="monospace" opacity="0.08">[ ]</text>
            <text x="600" y="100" fill="white" fontSize="60" fontWeight="100" fontFamily="monospace" opacity="0.06">{'< >'}</text>
            {[0,1,2,3,4,5].map(i => (
              <rect key={i} x={50 + i*130} y={250 + i*8} width="80" height="4" rx="2" fill="white" opacity={0.1 - i*0.012}/>
            ))}
          </svg>
        </div>
      )
    case 'curves':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            {[0,1,2,3,4,5,6,7].map(i => (
              <path key={i} d={`M${i*100},400 C${i*100 + 50},100 ${i*100 + 100},300 ${i*100 + 150},50`}
                fill="none" stroke="white" strokeWidth="1.5" opacity={0.25 - i*0.025}/>
            ))}
          </svg>
        </div>
      )
    case 'squares':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.06]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            {[20,50,30,60,40,70,25,55,45].map((size,i) => (
              <rect key={i} x={80 + i*80} y={50 + (i%3)*80} width={size} height={size} rx={size*0.15}
                fill="none" stroke="white" strokeWidth="1.5" opacity={0.3 - i*0.02}
                transform={`rotate(${i*15}, ${80 + i*80 + size/2}, ${50 + (i%3)*80 + size/2})`}/>
            ))}
          </svg>
        </div>
      )
    case 'nodes':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            {[0,1,2,3,4,5,6,7].map(i =>
              [0,1,2,3,4].map(j => {
                const x = 80 + i*90 + (j%2)*20
                const y = 60 + j*70
                const node = randomData.nodes[i * 5 + j] || { r: 3, opacity: 0.3 }
                return (
                  <circle key={`${i}-${j}`} cx={x} cy={y} r={node.r} fill="white" opacity={node.opacity}/>
                )
              })
            )}
            {[0,1,2,3,4,5,6].map(i =>
              <line key={i} x1={80 + i*90 + 30} y1={60} x2={80 + (i+1)*90 + 10} y2={130} stroke="white" strokeWidth="0.5" opacity="0.15"/>
            )}
          </svg>
        </div>
      )
    case 'layers':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            {[0,1,2,3,4,5].map(i => (
              <rect key={i} x={120 - i*15} y={50 + i*50} width={560 + i*30} height={40} rx="8"
                fill="none" stroke="white" strokeWidth="1.5" opacity={0.35 - i*0.05}/>
            ))}
          </svg>
        </div>
      )
    case 'rocket':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <path d="M400,300 L380,240 L360,200 L380,160 L400,100 L420,160 L440,200 L420,240 Z" fill="none" stroke="white" strokeWidth="2"/>
            <path d="M360,200 L320,220 L370,210 Z" fill="none" stroke="white" strokeWidth="1.5"/>
            <path d="M440,200 L480,220 L430,210 Z" fill="none" stroke="white" strokeWidth="1.5"/>
            <path d="M400,100 L400,50" stroke="white" strokeWidth="1.5" strokeDasharray="4,6"/>
            {randomData.rocketStars.map((star, i) => (
              <circle key={i} cx={star.x} cy={star.y} r={star.r} fill="white" opacity={star.opacity}/>
            ))}
          </svg>
        </div>
      )
    case 'shapes':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            <rect x="100" y="60" width="80" height="80" rx="20" fill="none" stroke="white" strokeWidth="2"/>
            <circle cx="300" cy="100" r="40" fill="none" stroke="white" strokeWidth="2"/>
            <polygon points="480,140 520,60 560,140" fill="none" stroke="white" strokeWidth="2"/>
            <rect x="620" y="60" width="60" height="60" rx="30" fill="none" stroke="white" strokeWidth="2" transform="rotate(45,650,90)"/>
            <rect x="150" y="220" width="100" height="60" rx="10" fill="none" stroke="white" strokeWidth="1.5"/>
            <circle cx="400" cy="250" r="30" fill="none" stroke="white" strokeWidth="1.5"/>
            <polygon points="600,280 640,200 680,280" fill="none" stroke="white" strokeWidth="1.5"/>
          </svg>
        </div>
      )
    case 'sparkle':
      return (
        <div className={cls}>
          <svg className="w-full h-full opacity-[0.07]" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
            {randomData.sparkleStars.map((star, i) => (
              <g key={i} transform={`translate(${star.x},${star.y})`}>
                <line x1={-star.s} y1="0" x2={star.s} y2="0" stroke="white" strokeWidth="1.5" opacity={star.o1}/>
                <line x1="0" y1={-star.s} x2="0" y2={star.s} stroke="white" strokeWidth="1.5" opacity={star.o1}/>
                <line x1={-star.s*0.7} y1={-star.s*0.7} x2={star.s*0.7} y2={star.s*0.7} stroke="white" strokeWidth="0.8" opacity={star.o2}/>
                <line x1={star.s*0.7} y1={-star.s*0.7} x2={-star.s*0.7} y2={star.s*0.7} stroke="white" strokeWidth="0.8" opacity={star.o2}/>
              </g>
            ))}
          </svg>
        </div>
      )
    default:
      return null
  }
}

const FloatingShapes = () => {
  const shapes = [
    { size: 'w-20 h-20', pos: 'top-[10%] left-[8%]', delay: '0s', duration: '7s', rotate: 'rotate-12', type: 'circle' },
    { size: 'w-16 h-16', pos: 'top-[5%] right-[12%]', delay: '1s', duration: '9s', rotate: '-rotate-12', type: 'square' },
    { size: 'w-12 h-12', pos: 'bottom-[25%] left-[5%]', delay: '2s', duration: '8s', rotate: 'rotate-45', type: 'diamond' },
    { size: 'w-14 h-14', pos: 'bottom-[35%] right-[8%]', delay: '0.5s', duration: '10s', rotate: '-rotate-6', type: 'circle' },
    { size: 'w-10 h-10', pos: 'top-[45%] left-[15%]', delay: '3s', duration: '6s', rotate: 'rotate-[30deg]', type: 'square' },
    { size: 'w-8 h-8', pos: 'top-[30%] right-[5%]', delay: '1.5s', duration: '11s', rotate: '', type: 'circle' },
    { size: 'w-24 h-24', pos: 'bottom-[10%] right-[20%]', delay: '4s', duration: '12s', rotate: '-rotate-[20deg]', type: 'square' },
    { size: 'w-6 h-6', pos: 'top-[60%] left-[3%]', delay: '2.5s', duration: '5s', rotate: '', type: 'circle' },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {shapes.map((s, i) => (
        <div
          key={i}
          className={`absolute ${s.pos} ${s.size} border border-white/10 animate-float ${s.rotate}`}
          style={{
            animationDuration: s.duration,
            animationDelay: s.delay,
            borderRadius: s.type === 'circle' ? '50%' : s.type === 'diamond' ? '4px' : '8px',
            background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
            backdropFilter: 'blur(4px)',
          }}
        />
      ))}
    </div>
  )
}

const Particles = () => {
  const particles = useMemo(() => Array.from({ length: 20 }).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${15 + Math.random() * 20}s`,
    animationDelay: `${Math.random() * 10}s`,
    opacity: 0.1 + Math.random() * 0.25,
    width: `${1 + Math.random() * 2}px`,
    height: `${1 + Math.random() * 2}px`,
  })), [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((style, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20 animate-drift"
          style={style}
        />
      ))}
    </div>
  )
}

const Shimmer = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer" />
  </div>
)

const WaveDivider = () => (
  <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
    <svg className="w-full h-[60px] md:h-[80px]" viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,80 C360,40 720,60 1080,20 L1440,50 L1440,80 L0,80 Z" fill="url(#waveGradLight)" opacity="0.15" className="dark:hidden"/>
      <path d="M0,80 C240,55 480,35 720,50 C960,65 1200,30 1440,45 L1440,80 L0,80 Z" fill="url(#waveGradLight)" opacity="0.1" className="dark:hidden"/>
      <path d="M0,80 C360,40 720,60 1080,20 L1440,50 L1440,80 L0,80 Z" fill="url(#waveGradDark)" opacity="0.15" className="hidden dark:block"/>
      <path d="M0,80 C240,55 480,35 720,50 C960,65 1200,30 1440,45 L1440,80 L0,80 Z" fill="url(#waveGradDark)" opacity="0.1" className="hidden dark:block"/>
      <defs>
        <linearGradient id="waveGradLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="transparent"/>
          <stop offset="100%" stopColor="#ffffff"/>
        </linearGradient>
        <linearGradient id="waveGradDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="transparent"/>
          <stop offset="100%" stopColor="#1f1f1f"/>
        </linearGradient>
      </defs>
    </svg>
  </div>
)

export const PageHero = () => {
    const { category } = useParams()
    const key = category?.toLowerCase()
    const config = categoryConfig[key] || categoryConfig['others']
    const categoryData = tools.find(t => t.category.toLowerCase() === key)

    const accentColor = config.accent.split(' ')[0]?.replace('from-', '') || 'brand'

    return (
        <section className="relative overflow-hidden min-h-[320px] md:min-h-[360px] flex items-center">
            <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} bg-300% animate-gradient`} />
            <div className="absolute inset-0 bg-grid opacity-[0.08]" />

            <BackgroundIllustration type={config.pattern} />
            <FloatingShapes accent={accentColor} />
            <Particles />
            <Shimmer />

            <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-white/[0.04] blur-[100px] animate-float-slow" />
            <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] rounded-full bg-white/[0.03] blur-[80px] animate-float-reverse" />
            <div className="absolute top-1/3 left-1/2 w-[200px] h-[200px] rounded-full bg-white/[0.02] blur-[60px] animate-float-slow" style={{ animationDelay: '-3s' }} />

            <div className="relative w-full py-16 md:py-20">
                <div className="text-center px-4 max-w-3xl mx-auto">
                    <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl animate-bounce-soft">
                        <i className={`${config.icon} fa-2x text-white drop-shadow-lg`}></i>
                    </div>

                    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold capitalize drop-shadow-xl animate-fade-in">
                        {category}
                    </h1>

                    {categoryData?.description && (
                        <p className="mt-4 text-white/60 text-sm md:text-base lg:text-lg max-w-xl mx-auto leading-relaxed animate-slide-up">
                            {categoryData.description}
                        </p>
                    )}

                    <div className="mt-6 flex items-center justify-center gap-3 animate-fade-in">
                        <span className="w-12 h-[2px] bg-white/20 rounded-full" />
                        <span className="w-2 h-2 bg-white/40 rounded-full" />
                        <span className="w-2 h-2 bg-white/30 rounded-full" />
                        <span className="w-2 h-2 bg-white/40 rounded-full" />
                        <span className="w-12 h-[2px] bg-white/20 rounded-full" />
                    </div>
                </div>
            </div>

            <WaveDivider />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-surface" />
        </section>
    )
}
