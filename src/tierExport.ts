import type { TierBoard } from './tierBoard'

type ExportHero = { id: string; name: string }
type Art = Record<string, { path: string }>

export async function exportTierPng(board: TierBoard, heroes: ExportHero[], art: Art): Promise<number> {
  const width = 1200, labelWidth = 120, cellWidth = 132, cellHeight = 150, columns = 8
  const rowHeights = board.rows.map(row => Math.max(1, Math.ceil(row.heroIds.length / columns)) * cellHeight + 16)
  const canvas = document.createElement('canvas')
  canvas.width = width; canvas.height = 116 + rowHeights.reduce((sum, height) => sum + height, 0) + 52
  const context = canvas.getContext('2d')
  if (!context) throw Error('Canvas unavailable')
  const ctx = context
  const wrap = (text: string, x: number, y: number, maxWidth: number, lineHeight: number, maxLines: number) => {
    const words = text.split(/\s+/), lines: string[] = []
    let line = ''
    for (const word of words) {
      // Character wrapping also handles labels without spaces.
      for (const char of `${line ? ' ' : ''}${word}`) {
        if (ctx.measureText(line + char).width > maxWidth && line) { lines.push(line.trim()); line = char.trimStart() } else line += char
      }
    }
    if (line) lines.push(line)
    lines.slice(0, maxLines).forEach((value, index) => ctx.fillText(value, x, y + index * lineHeight))
  }
  const images = new Map<string, HTMLImageElement>()
  const ids = [...new Set(board.rows.flatMap(row => row.heroIds))]
  let missing = 0
  await Promise.all(ids.map(async id => {
    if (!art[id]) return
    const image = new Image()
    const loaded = await new Promise<boolean>(resolve => {
      const timer = setTimeout(() => resolve(false), 12000)
      image.onload = () => { clearTimeout(timer); resolve(true) }
      image.onerror = () => { clearTimeout(timer); resolve(false) }
      image.src = `${import.meta.env.BASE_URL}${art[id].path}`
    })
    if (loaded) images.set(id, image)
    else missing++
  }))
  ctx.fillStyle = '#151719'; ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#ffffff'; ctx.font = 'bold 28px Arial'; ctx.textBaseline = 'top'
  wrap(board.title || 'Tier list Hắc Tây Du', 24, 18, width - 48, 33, 2)
  ctx.fillStyle = '#b7bec6'; ctx.font = '16px Arial'; ctx.fillText('HẮC TÂY DU WIKI · Bảng xếp hạng cá nhân', 24, 90)
  let top = 116
  board.rows.forEach((row, index) => {
    const height = rowHeights[index]
    ctx.fillStyle = row.color; ctx.fillRect(8, top, labelWidth - 8, height - 4)
    ctx.fillStyle = '#151719'; ctx.font = 'bold 22px Arial'
    wrap(row.label || 'Chưa đặt tên', 20, top + 24, labelWidth - 32, 27, 4)
    row.heroIds.forEach((id, position) => {
      const x = labelWidth + position % columns * cellWidth, y = top + 8 + Math.floor(position / columns) * cellHeight
      ctx.fillStyle = '#2c3035'; ctx.fillRect(x + 4, y, cellWidth - 8, cellHeight - 8)
      const image = images.get(id)
      if (image) {
        const scale = Math.min((cellWidth - 20) / image.width, 104 / image.height)
        ctx.drawImage(image, x + (cellWidth - image.width * scale) / 2, y + (104 - image.height * scale) / 2 + 4, image.width * scale, image.height * scale)
      } else {
        ctx.fillStyle = '#b7bec6'; ctx.font = 'bold 22px Arial'; ctx.fillText(heroes.find(hero => hero.id === id)?.name.split(' ').map(word => word[0]).join('') || '?', x + 15, y + 38)
      }
      ctx.fillStyle = '#ffffff'; ctx.font = 'bold 13px Arial'
      wrap(heroes.find(hero => hero.id === id)?.name || id, x + 10, y + 110, cellWidth - 20, 15, 2)
    })
    if (!row.heroIds.length) { ctx.fillStyle = '#808993'; ctx.font = '16px Arial'; ctx.fillText('Chưa có tướng', labelWidth + 20, top + 36) }
    top += height
  })
  ctx.fillStyle = '#b7bec6'; ctx.font = '15px Arial'; ctx.fillText('vandung279206.github.io/Wiki_HacTayDu-ChuongCam/ · Hạng do người xếp tự đánh giá', 24, top + 18)
  const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(value => value ? resolve(value) : reject(Error('PNG failed')), 'image/png'))
  const url = URL.createObjectURL(blob), link = document.createElement('a')
  link.href = url; link.download = 'hac-tay-du-tier-list.png'; link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
  return missing
}
