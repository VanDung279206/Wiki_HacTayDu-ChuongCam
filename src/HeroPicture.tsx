import { Globe2 } from 'lucide-react'
import { useState } from 'react'
import { tierSheets } from './data'
import type { Hero, HeroPortrait } from './data'
import { enhancedPortrait } from './portraitEnhancement'

export function ImagePortrait({ portrait, name, small = false, enhanced = true }: { portrait: HeroPortrait; name: string; small?: boolean; enhanced?: boolean }) {
  const sheet = tierSheets.find(item => item.id === portrait.sheet)!
  const variant = enhanced ? enhancedPortrait(portrait) : undefined
  const crop = variant || portrait
  return <svg className="roster-portrait" viewBox={`${crop.x} ${crop.y} ${crop.width} ${small ? crop.width : crop.height}`} preserveAspectRatio="xMidYMid slice" role={small ? undefined : 'img'} aria-label={small ? undefined : `Chân dung ${name} · ${enhanced ? 'bản tăng nét' : 'ảnh gốc'}`} aria-hidden={small || undefined}>
    <image href={`${import.meta.env.BASE_URL}${variant?.path || sheet.path}`} width={variant?.sheetWidth || sheet.width} height={variant?.sheetHeight || sheet.height} />
  </svg>
}

export default function HeroPicture({ hero, small = false }: { hero: Hero; small?: boolean }) {
  const [enhanced, setEnhanced] = useState(true)
  return <><div className={`portrait ${hero.portrait ? 'sheet-portrait' : hero.art === 'wukong' ? 'wukong' : ''} ${small ? 'small' : ''}`} style={hero.portrait && !small ? { aspectRatio: `${hero.portrait.width} / ${hero.portrait.height}` } : undefined}>
    {hero.portrait ? <ImagePortrait portrait={hero.portrait} name={hero.name} small={small} enhanced={enhanced} /> : hero.art ? <img src={`${import.meta.env.BASE_URL}assets/${hero.art === 'wukong' ? 'bg-page1.jpg' : hero.art}`} alt={small ? '' : hero.name} /> : <span className="portrait-empty"><Globe2 size={small ? 23 : 44} strokeWidth={1} />{!small && <small>Chưa có hình ảnh</small>}</span>}
  </div>{hero.portrait && !small && <div className="portrait-controls" role="group" aria-label={`Chọn phiên bản ảnh của ${hero.name}`}><button type="button" aria-pressed={enhanced} onClick={() => setEnhanced(true)}>Bản tăng nét</button><button type="button" aria-pressed={!enhanced} onClick={() => setEnhanced(false)}>Ảnh gốc</button></div>}</>
}
