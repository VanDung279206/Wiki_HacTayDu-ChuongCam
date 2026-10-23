export type TierRow = { id: string; label: string; color: string; heroIds: string[] }
export type TierBoard = { version: 1; title: string; rows: TierRow[] }
export const tierColors = ['#ff7f7f', '#ffbf7f', '#ffdf7f', '#bfff7f', '#7fbfff', '#bf9fff']
export function emptyTierBoard(): TierBoard {
  return { version: 1, title: 'Tier list Hắc Tây Du', rows: ['SS', 'S', 'A', 'B', 'C'].map((label, i) => ({ id: `tier-${i}`, label, color: tierColors[i], heroIds: [] })) }
}
export function restoreTierBoard(value: unknown, knownIds: string[], redirects: Record<string, string> = {}): TierBoard {
  if (!value || typeof value !== 'object') return emptyTierBoard()
  const input = value as Partial<TierBoard>
  if (input.version !== 1 || !Array.isArray(input.rows) || !input.rows.length) return emptyTierBoard()
  const known = new Set(knownIds), seen = new Set<string>(), rowIds = new Set<string>()
  const rows = input.rows.slice(0, 10).flatMap((row, index) => {
    if (!row || typeof row !== 'object') return []
    let id = typeof row.id === 'string' && /^[\w-]{1,60}$/.test(row.id) ? row.id : `tier-${index}`
    while (rowIds.has(id)) id += '-copy'
    rowIds.add(id)
    const heroIds = (Array.isArray(row.heroIds) ? row.heroIds : []).flatMap(item => {
      if (typeof item !== 'string') return []
      const heroId = Object.hasOwn(redirects, item) ? redirects[item] : item
      if (!known.has(heroId) || seen.has(heroId)) return []
      seen.add(heroId)
      return [heroId]
    })
    return [{ id, label: typeof row.label === 'string' ? row.label.slice(0, 24) : `Hạng ${index + 1}`, color: tierColors.includes(row.color) ? row.color : tierColors[index % tierColors.length], heroIds }]
  })
  return rows.length ? { version: 1, title: typeof input.title === 'string' ? input.title.slice(0, 100) : 'Tier list Hắc Tây Du', rows } : emptyTierBoard()
}
// Move instead of copy: a hero can occur only once, including within the same row.
export function moveTierHero(board: TierBoard, heroId: string, rowId: string | null, beforeId?: string): TierBoard {
  if (rowId !== null && !board.rows.some(row => row.id === rowId)) return board
  if (beforeId === heroId) return board
  return { ...board, rows: board.rows.map(row => {
    const heroIds = row.heroIds.filter(id => id !== heroId)
    if (row.id === rowId) {
      const index = beforeId ? heroIds.indexOf(beforeId) : -1
      heroIds.splice(index < 0 ? heroIds.length : index, 0, heroId)
    }
    return { ...row, heroIds }
  }) }
}
export function shiftTierHero(board: TierBoard, heroId: string, delta: -1 | 1): TierBoard {
  return { ...board, rows: board.rows.map(row => {
    const index = row.heroIds.indexOf(heroId), target = index + delta
    if (index < 0 || target < 0 || target >= row.heroIds.length) return row
    const heroIds = [...row.heroIds]
    ;[heroIds[index], heroIds[target]] = [heroIds[target], heroIds[index]]
    return { ...row, heroIds }
  }) }
}
