import { useRef, useState } from 'react'
import type { KeyboardEvent, PointerEvent, ReactNode } from 'react'
import { Check, Plus, X } from 'lucide-react'
import { heroes, normalize } from './data'
import type { Hero } from './data'
import { clampCoordinate, defaultPosition, moveWithinBounds } from './formation'
import type { FormationPoint, FormationPositions } from './formation'

const factions = ['Tiên Gia', 'Yêu Tộc', 'Chúng Sinh', 'Chưa rõ phe']
const factionOf = (hero: Hero) => hero.faction || 'Chưa rõ phe'

type Props = {
  team: string[]
  positions: FormationPositions
  onMove: (id: string, position: FormationPoint) => void
  onToggle: (id: string) => void
  onClear: () => void
  renderPortrait: (hero: Hero) => ReactNode
}

export default function FormationBuilder({ team, positions, onMove, onToggle, onClear, renderPortrait }: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const [faction, setFaction] = useState('Tất cả')
  const [query, setQuery] = useState('')
  const areaRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{ id: string; pointerId: number; clientX: number; clientY: number; point: FormationPoint; width: number; height: number } | null>(null)
  const members = team.flatMap(id => { const hero = heroes.find(h => h.id === id); return hero ? [hero] : [] })
  const selectedHero = members.find(h => h.id === selected)
  const selectedPoint = selectedHero ? positions[selectedHero.id] : undefined
  const matches = heroes.filter(h => (faction === 'Tất cả' || factionOf(h) === faction) && normalize(`${h.name} ${h.title} ${(h.aliases || []).join(' ')} ${h.role || ''}`).includes(normalize(query.trim())))

  const startDrag = (event: PointerEvent<HTMLButtonElement>, id: string) => {
    if (event.button !== 0 || !event.isPrimary || dragRef.current) return
    const bounds = areaRef.current?.getBoundingClientRect()
    if (!bounds?.width || !bounds.height) return
    event.stopPropagation()
    event.currentTarget.focus({ preventScroll: true })
    event.currentTarget.setPointerCapture(event.pointerId)
    setSelected(id)
    dragRef.current = { id, pointerId: event.pointerId, clientX: event.clientX, clientY: event.clientY, point: positions[id], width: bounds.width, height: bounds.height }
  }
  const drag = (event: PointerEvent<HTMLButtonElement>) => {
    const current = dragRef.current
    if (!current || current.pointerId !== event.pointerId) return
    onMove(current.id, moveWithinBounds(current.point, (event.clientX - current.clientX) / current.width, (event.clientY - current.clientY) / current.height))
  }
  const endDrag = (event: PointerEvent<HTMLButtonElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return
    dragRef.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }
  const keyMove = (event: KeyboardEvent<HTMLButtonElement>, id: string) => {
    const step = event.shiftKey ? 0.1 : 0.02
    const delta: Record<string, [number, number]> = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }
    if (delta[event.key]) {
      event.preventDefault()
      setSelected(id)
      onMove(id, moveWithinBounds(positions[id], ...delta[event.key]))
    }
  }

  return <>
    <p>Bố trí tối đa sáu tướng ở bất kỳ điểm nào trong vùng dưới đây, kể cả cùng một vị trí. Sơ đồ được lưu trên trình duyệt này.</p>
    <section id="content" className="wiki-section formation-section" tabIndex={-1}>
      <h2>Vùng bố trận <span className="formation-count">{team.length}/6 tướng</span></h2>
      <p id="formation-help" className="formation-help">Kéo tướng để di chuyển. Hoặc chọn tướng rồi chạm vào vùng bố trận. Khi tướng có tiêu điểm, dùng phím mũi tên; giữ Shift để di chuyển xa hơn.</p>
      <div className="formation-board" role="group" aria-label="Vùng bố trận tự do" aria-describedby="formation-help" onPointerDown={event => {
        if (event.target !== event.currentTarget || !selectedHero || !event.isPrimary || event.button !== 0) return
        const bounds = areaRef.current?.getBoundingClientRect()
        if (bounds?.width && bounds.height) onMove(selectedHero.id, { x: clampCoordinate((event.clientX - bounds.left) / bounds.width), y: clampCoordinate((event.clientY - bounds.top) / bounds.height) })
      }}>
        <span className="formation-boundary-label">Vùng bố trận tự do</span>
        {!team.length && <div className="formation-empty"><strong>Chưa có tướng trong đội hình</strong><span>Chọn tướng trong danh sách bên dưới để bắt đầu.</span></div>}
        <div className="formation-area" ref={areaRef}>
          {members.map((h, index) => {
            const point = positions[h.id] || defaultPosition(index)
            return <button key={h.id} type="button" className={`formation-token ${selected === h.id ? 'selected' : ''}`} style={{ left: `${point.x * 100}%`, top: `${point.y * 100}%`, zIndex: selected === h.id ? 10 : index + 1 }} aria-label={`${h.name} trên vùng bố trận`} aria-pressed={selected === h.id} onFocus={() => setSelected(h.id)} onClick={() => setSelected(h.id)} onDragStart={event => event.preventDefault()} onPointerDown={e => startDrag(e, h.id)} onPointerMove={drag} onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={() => { dragRef.current = null }} onKeyDown={e => keyMove(e, h.id)}>
              {h.portrait || h.art ? renderPortrait(h) : <span className="formation-initials" aria-hidden="true">{h.name.split(' ').map(word => word[0]).slice(0, 3).join('')}</span>}
              <span className="formation-token-name">{h.name}</span>
            </button>
          })}
        </div>
      </div>
      {selectedHero && selectedPoint && <div className="formation-editor" aria-label={`Chỉnh vị trí ${selectedHero.name}`}>
        <div><strong>{selectedHero.name}</strong><small>{factionOf(selectedHero)}</small></div>
        <label>Ngang <span>{Math.round(selectedPoint.x * 100)}%</span><input type="range" min="0" max="100" step="1" value={Math.round(selectedPoint.x * 100)} aria-label={`Vị trí ngang của ${selectedHero.name}`} onChange={e => onMove(selectedHero.id, { ...selectedPoint, x: Number(e.target.value) / 100 })} /></label>
        <label>Dọc <span>{Math.round(selectedPoint.y * 100)}%</span><input type="range" min="0" max="100" step="1" value={Math.round(selectedPoint.y * 100)} aria-label={`Vị trí dọc của ${selectedHero.name}`} onChange={e => onMove(selectedHero.id, { ...selectedPoint, y: Number(e.target.value) / 100 })} /></label>
        <a href={`#hero/${selectedHero.id}`}>Hồ sơ tướng</a>
      </div>}
      {members.length > 0 && <ul className="formation-roster" aria-label="Tướng trong đội hình">{members.map(h => <li key={h.id}><button type="button" aria-pressed={selected === h.id} onClick={() => setSelected(h.id)}>{h.name}<small>{factionOf(h)}</small></button><button type="button" className="icon-button" onClick={() => onToggle(h.id)} aria-label={`Xóa ${h.name} khỏi đội hình`}><X size={16} /></button></li>)}</ul>}
      <div className="formation-actions"><button type="button" className="button secondary" disabled={!team.length} onClick={onClear}>Xóa đội hình</button><p className="table-note">Sơ đồ minh họa cách sắp xếp, không mô phỏng chiến đấu hoặc tỉ lệ sân trong game.</p></div>
    </section>
    <section id="choose-heroes" className="wiki-section" tabIndex={-1}>
      <h2>Chọn tướng theo phe</h2>
      <div className="catalog-controls"><label>Tìm tướng để thêm<input value={query} onChange={e => setQuery(e.target.value)} placeholder="Tên, danh hiệu hoặc vai trò..." /></label><label>Phe<select value={faction} onChange={e => setFaction(e.target.value)}>{['Tất cả', ...factions].map(name => <option key={name}>{name}</option>)}</select></label><span aria-live="polite">{matches.length} tướng</span></div>
      {team.length === 6 && <p className="notice">Đội hình đã đủ sáu tướng. Bỏ một tướng để chọn tướng khác.</p>}
      {!matches.length ? <div className="empty-state compact"><p>Không có tướng phù hợp.</p><button type="button" onClick={() => { setQuery(''); setFaction('Tất cả') }}>Xóa bộ lọc tướng</button></div> : factions.map(name => {
        const group = matches.filter(h => factionOf(h) === name)
        return group.length ? <section key={name} className="formation-faction" aria-label={`Tướng phe ${name}`}><h3>{name} <small>{group.length} tướng</small></h3><div className="team-options">{group.map(h => {
          const chosen = team.includes(h.id)
          return <button key={h.id} type="button" aria-pressed={chosen} aria-label={`${chosen ? 'Bỏ' : 'Chọn'} ${h.name}`} disabled={!chosen && team.length >= 6} onClick={() => onToggle(h.id)} className={chosen ? 'chosen' : ''}><span>{h.name}<small>{h.imageOnly ? `${h.kind === 'thanh-ton' ? 'Thánh Tôn · ' : ''}Hồ sơ từ ảnh test` : h.role || 'Chưa có vai trò'}</small></span>{chosen ? <Check size={17} /> : <Plus size={17} />}</button>
        })}</div></section> : null
      })}
    </section>
  </>
}
