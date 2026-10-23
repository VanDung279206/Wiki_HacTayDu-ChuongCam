import { useEffect, useRef, useState } from 'react'
import type { DragEvent } from 'react'
import { heroes, heroRedirects, normalize } from './data'
import { readStored, writeStored } from './storage'
import { emptyTierBoard, moveTierHero, restoreTierBoard, shiftTierHero, tierColors } from './tierBoard'
import type { TierBoard, TierRow } from './tierBoard'
import characterArt from './characterArt.json'
import { exportTierPng } from './tierExport'

const storageKey = 'htd-tier-board-v1'
const knownIds = heroes.map(hero => hero.id)
export const tierArt = characterArt as Record<string, { path: string; title: string; url: string }>

export default function TierBuilder() {
  const [board, setBoard] = useState(() => restoreTierBoard(readStored(storageKey, null), knownIds, heroRedirects))
  const [selected, setSelected] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [kind, setKind] = useState('Tất cả')
  const [faction, setFaction] = useState('Tất cả')
  const [status, setStatus] = useState('')
  const [saveFailed, setSaveFailed] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [dragged, setDragged] = useState<string | null>(null)
  const [over, setOver] = useState<string | null>(null)
  const [undo, setUndo] = useState<TierBoard | null>(null)
  const importRef = useRef<HTMLInputElement>(null)
  useEffect(() => { setSaveFailed(!writeStored({ [storageKey]: board })) }, [board])
  const ranked = new Set(board.rows.flatMap(row => row.heroIds))
  const pool = heroes.filter(hero => !ranked.has(hero.id))
  const matches = pool.filter(hero => (kind === 'Tất cả' || (hero.kind || 'than-tuong') === kind) && (faction === 'Tất cả' || (hero.faction || 'Chưa rõ') === faction) && normalize(`${hero.name} ${(hero.aliases || []).join(' ')}`).includes(normalize(query.trim())))
  const selectedHero = heroes.find(hero => hero.id === selected)
  const selectedRow = board.rows.find(row => row.heroIds.includes(selected || ''))
  const selectedIndex = selectedRow?.heroIds.indexOf(selected || '') ?? -1
  const change = (next: (current: TierBoard) => TierBoard) => { setUndo(board); setBoard(next(board)) }
  const move = (id: string, rowId: string | null, beforeId?: string) => {
    if (!knownIds.includes(id)) return
    change(current => moveTierHero(current, id, rowId, beforeId))
    setSelected(id)
    setStatus(`${heroes.find(hero => hero.id === id)?.name}: ${rowId ? board.rows.find(row => row.id === rowId)?.label || 'Hạng chưa đặt tên' : 'Chưa xếp'}.`)
  }
  const drop = (event: DragEvent, rowId: string | null, beforeId?: string) => {
    event.preventDefault(); event.stopPropagation()
    const id = dragged || event.dataTransfer.getData('text/plain')
    if (knownIds.includes(id)) move(id, rowId, beforeId)
    setDragged(null); setOver(null)
  }
  const card = (id: string, row?: TierRow) => {
    const hero = heroes.find(item => item.id === id)!
    return <button key={id} type="button" className={`tier-card ${selected === id ? 'selected' : ''} ${dragged === id ? 'dragging' : ''}`} draggable aria-label={`Chọn ${hero.name}${row ? `, hạng ${row.label}` : ', chưa xếp'}`} aria-pressed={selected === id} onClick={() => setSelected(id)} onDragStart={event => { setDragged(id); setSelected(id); event.dataTransfer.effectAllowed = 'move'; event.dataTransfer.setData('text/plain', id) }} onDragEnd={() => { setDragged(null); setOver(null) }} onDragOver={event => { event.preventDefault(); event.stopPropagation(); setOver(row?.id || 'pool') }} onDrop={event => drop(event, row?.id || null, row ? id : undefined)}>
      {tierArt[id] ? <img src={`${import.meta.env.BASE_URL}${tierArt[id].path}`} alt="" draggable={false} loading="lazy" /> : <span className="tier-no-art" aria-hidden="true">{hero.name.split(' ').map(word => word[0]).join('')}<small>Chưa có ảnh</small></span>}
      <span className="tier-card-name">{hero.name}</span>
    </button>
  }
  const downloadJson = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(board, null, 2)], { type: 'application/json' }))
    const link = document.createElement('a'); link.href = url; link.download = 'hac-tay-du-tier-list.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000)
    setStatus('Đã tải tệp bảng xếp hạng. Có thể nhập lại trên thiết bị khác.')
  }

  return <section id="tier-builder" className="wiki-section tier-builder" tabIndex={-1}>
    <h2>Tự xếp tier list <span className="formation-count">{ranked.size}/{heroes.length} tướng</span></h2>
    <p id="tier-builder-help">Kéo tướng từ danh sách vào hạng. Trên điện thoại hoặc bằng bàn phím: chọn tướng rồi chọn hạng ở thanh chỉnh tướng. Kéo lên một thẻ để đặt trước thẻ đó; thả vào vùng trống để thêm cuối hàng.</p>
    <div className="tier-toolbar">
      <label className="tier-title-field">Tên bảng<input value={board.title} maxLength={100} onChange={event => change(current => ({ ...current, title: event.target.value }))} /></label>
      <button type="button" className="button secondary" disabled={exporting} onClick={async () => { setExporting(true); setStatus('Đang tạo ảnh…'); try { const missing = await exportTierPng(board, heroes, tierArt); setStatus(missing ? `Đã tải ảnh; ${missing} ảnh tướng không tải được, đã dùng tên thay thế.` : 'Đã tải ảnh PNG.') } catch { setStatus('Chưa tạo được ảnh. Hãy thử lại hoặc tải tệp bảng.') } finally { setExporting(false) } }}>{exporting ? 'Đang tạo ảnh…' : 'Tải ảnh PNG'}</button>
      <button type="button" className="button secondary" onClick={downloadJson}>Tải tệp bảng</button>
      <button type="button" className="button secondary" onClick={() => importRef.current?.click()}>Nhập tệp bảng</button>
      <input ref={importRef} type="file" accept=".json,application/json" hidden aria-label="Tệp tier list" onChange={async event => { const file = event.target.files?.[0]; event.target.value = ''; if (!file) return; try { if (file.size > 200000) throw Error('Oversized'); const input: unknown = JSON.parse(await file.text()); if (!input || typeof input !== 'object' || !('version' in input) || input.version !== 1 || !('rows' in input) || !Array.isArray(input.rows) || !input.rows.length) throw Error('Invalid'); const restored = restoreTierBoard(input, knownIds, heroRedirects); change(() => restored); setSelected(null); setStatus('Đã nhập bảng. Chỉ giữ các tướng có trong wiki.') } catch { setStatus('Tệp không hợp lệ. Chọn tệp JSON được tải từ công cụ tier list.') } }} />
      <button type="button" className="button secondary" disabled={!undo} onClick={() => { if (undo) { setBoard(undo); setUndo(null); setStatus('Đã hoàn tác thay đổi gần nhất.') } }}>Hoàn tác</button>
      <button type="button" className="button secondary" onClick={() => { change(() => emptyTierBoard()); setSelected(null); setStatus('Đã đưa toàn bộ tướng về Chưa xếp. Có thể hoàn tác.') }}>Làm lại</button>
    </div>
    <p className="table-note">Tự lưu trên trình duyệt này. Dùng “Tải tệp bảng” để sao lưu hoặc chuyển thiết bị. Đây là đánh giá cá nhân; các hạng không phải phẩm chất tướng trong game.</p>
    {saveFailed && <p className="notice" role="alert">Trình duyệt chưa lưu được bảng. Hãy tải tệp bảng để giữ các thay đổi.</p>}
    <div className="tier-live-status" role="status">{status}</div>
    <div className="tier-selection" aria-label="Chỉnh tướng đã chọn">
      {selectedHero ? <><strong>{selectedHero.name}</strong><label>Chuyển đến<select aria-label="Hạng của tướng đã chọn" value={selectedRow?.id || ''} onChange={event => move(selectedHero.id, event.target.value || null)}><option value="">Chưa xếp</option>{board.rows.map((row, i) => <option key={row.id} value={row.id}>{row.label || `Hạng ${i + 1}`}</option>)}</select></label><button type="button" className="button secondary" disabled={!selectedRow || selectedIndex === 0} onClick={() => change(current => shiftTierHero(current, selectedHero.id, -1))}>← Lên trước</button><button type="button" className="button secondary" disabled={!selectedRow || selectedIndex === selectedRow.heroIds.length - 1} onClick={() => change(current => shiftTierHero(current, selectedHero.id, 1))}>Ra sau →</button><a href={`#hero/${selectedHero.id}`}>Hồ sơ tướng</a><button type="button" className="button secondary" onClick={() => setSelected(null)}>Bỏ chọn</button></> : <span>Chọn một thẻ tướng để xếp hạng hoặc đổi thứ tự.</span>}
    </div>
    <div className="tier-personal-board" role="group" aria-label="Bảng xếp hạng của bạn" aria-describedby="tier-builder-help">
      <h3>{board.title || 'Tier list Hắc Tây Du'}</h3>
      {board.rows.map((row, index) => <div className={`tier-builder-row ${over === row.id ? 'drop-over' : ''}`} key={row.id} onDragOver={event => { event.preventDefault(); setOver(row.id) }} onDrop={event => drop(event, row.id)}>
        <div className="tier-row-label" style={{ backgroundColor: row.color }}><input aria-label={`Tên hạng ${index + 1}`} maxLength={24} value={row.label} onChange={event => change(current => ({ ...current, rows: current.rows.map(item => item.id === row.id ? { ...item, label: event.target.value } : item) }))} /><select aria-label={`Màu hạng ${index + 1}`} value={row.color} onChange={event => change(current => ({ ...current, rows: current.rows.map(item => item.id === row.id ? { ...item, color: event.target.value } : item) }))}>{tierColors.map((color, i) => <option key={color} value={color}>{['Đỏ', 'Cam', 'Vàng', 'Xanh lá', 'Xanh dương', 'Tím'][i]}</option>)}</select><button type="button" disabled={board.rows.length === 1} aria-label={`Xóa hạng ${row.label || index + 1}`} onClick={() => { change(current => ({ ...current, rows: current.rows.filter(item => item.id !== row.id) })); setStatus('Đã xóa hạng; các tướng trong hạng trở về Chưa xếp.') }}>×</button></div>
        <div className="tier-row-cards" role="group" aria-label={`Tướng hạng ${row.label || index + 1}`}>{row.heroIds.map(id => card(id, row))}{!row.heroIds.length && <span className="tier-drop-help">Thả tướng vào đây</span>}</div>
      </div>)}
    </div>
    <button type="button" className="button secondary tier-add-row" disabled={board.rows.length >= 10} onClick={() => change(current => ({ ...current, rows: [...current.rows, { id: `tier-${Date.now()}`, label: 'Mới', color: tierColors[current.rows.length % tierColors.length], heroIds: [] }] }))}>+ Thêm hạng</button>
    <section id="tier-pool" className={`tier-pool ${over === 'pool' ? 'drop-over' : ''}`} aria-label="Tướng chưa xếp hạng" onDragOver={event => { event.preventDefault(); setOver('pool') }} onDrop={event => drop(event, null)}>
      <h3>Chưa xếp <span className="formation-count">{pool.length} tướng</span></h3>
      <div className="catalog-controls"><label>Tìm tướng chưa xếp<input value={query} onChange={event => setQuery(event.target.value)} placeholder="Tên tướng hoặc tên cũ…" /></label><label>Nhóm tướng<select value={kind} onChange={event => setKind(event.target.value)}><option>Tất cả</option><option value="than-tuong">Thần tướng</option><option value="thanh-ton">Thánh Tôn</option></select></label><label>Thế lực<select value={faction} onChange={event => setFaction(event.target.value)}>{['Tất cả', 'Tiên Gia', 'Yêu Tộc', 'Chúng Sinh', 'Chưa rõ'].map(value => <option key={value}>{value}</option>)}</select></label></div>
      <div className="tier-pool-cards">{matches.map(hero => card(hero.id))}</div>
      {!matches.length && <p>{pool.length ? 'Không có tướng phù hợp bộ lọc.' : 'Đã xếp toàn bộ tướng.'}</p>}
      {(query || kind !== 'Tất cả' || faction !== 'Tất cả') && <button type="button" className="button secondary" onClick={() => { setQuery(''); setKind('Tất cả'); setFaction('Tất cả') }}>Xóa bộ lọc</button>}
    </section>
    <p className="table-note">Ảnh từ bộ nhân vật <a href="https://drive.google.com/drive/folders/1hNIhZNke7IKndlN5mhE7M5940Ml0r_1W" target="_blank" rel="noreferrer">Google Drive bạn đọc cung cấp ↗</a>. Bạch Cốt Tinh chưa có ảnh phù hợp trong bộ này nên dùng thẻ tên.</p>
  </section>
}
