import { tierEntries } from './data'
import type { HeroPortrait } from './data'

// Measured cell boundaries, since generated grids are not perfectly uniform.
const atlasBounds = [
  { columns: [0, 374, 748, 1122], rows: [0, 467, 934, 1402] },
  { columns: [0, 374, 748, 1122], rows: [0, 465, 916, 1402] },
  { columns: [0, 380, 745, 1122], rows: [0, 467, 901, 1402] },
  { columns: [0, 382, 739, 1122], rows: [0, 477, 916, 1402] },
  { columns: [0, 356, 739, 1122], rows: [0, 466, 935, 1402] },
]
export function enhancedPortrait(portrait: HeroPortrait) {
  const entries = tierEntries.filter(entry => entry.portrait.sheet === portrait.sheet)
  const index = entries.findIndex(entry => entry.portrait.x === portrait.x && entry.portrait.y === portrait.y)
  if (index < 0) return undefined
  if (entries[index].heroId === 'hanh-tien-lam') return { path: 'assets/portrait-hanh-tien-lam-enhanced.png', x: 0, y: 0, width: 1122, height: 1402, sheetWidth: 1122, sheetHeight: 1402 }
  const atlas = portrait.sheet === 'thanh-ton' ? 5 : Math.floor(index / 9) + 1
  const cell = index % 9
  const bounds = atlasBounds[atlas - 1]
  const column = cell % 3
  const row = Math.floor(cell / 3)
  return { path: `assets/portraits-enhanced-${atlas}.png`, x: bounds.columns[column] + 3, y: bounds.rows[row] + 3, width: bounds.columns[column + 1] - bounds.columns[column] - 6, height: bounds.rows[row + 1] - bounds.rows[row] - 6, sheetWidth: 1122, sheetHeight: 1402 }
}
