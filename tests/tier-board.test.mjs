import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import ts from 'typescript'

const source = await readFile(new URL('../src/tierBoard.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
const { emptyTierBoard, restoreTierBoard, moveTierHero, shiftTierHero } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

test('moving heroes between ranks and back to the pool never duplicates them or mutates the previous board', () => {
  const original = emptyTierBoard()
  let board = moveTierHero(original, 'a', 'tier-0')
  board = moveTierHero(board, 'b', 'tier-0')
  board = moveTierHero(board, 'a', 'tier-1')
  assert.deepEqual(original.rows.flatMap(row => row.heroIds), [])
  assert.deepEqual(board.rows[0].heroIds, ['b'])
  assert.deepEqual(board.rows[1].heroIds, ['a'])
  board = moveTierHero(board, 'a', null)
  assert.deepEqual(board.rows.flatMap(row => row.heroIds), ['b'])
  assert.equal(moveTierHero(board, 'b', 'missing-row'), board)
})

test('drag placement and keyboard ordering work within a row and respect its boundaries', () => {
  let board = emptyTierBoard()
  for (const id of ['a', 'b', 'c']) board = moveTierHero(board, id, 'tier-0')
  board = moveTierHero(board, 'c', 'tier-0', 'a')
  assert.deepEqual(board.rows[0].heroIds, ['c', 'a', 'b'])
  board = shiftTierHero(board, 'c', -1)
  assert.deepEqual(board.rows[0].heroIds, ['c', 'a', 'b'])
  board = shiftTierHero(board, 'c', 1)
  assert.deepEqual(board.rows[0].heroIds, ['a', 'c', 'b'])
  assert.equal(moveTierHero(board, 'c', 'tier-0', 'c'), board)
})

test('saved and imported boards preserve labels, colors and order while recovering old hero IDs', () => {
  let board = emptyTierBoard()
  board.title = 'Đánh giá của tôi'
  board.rows[0].label = 'Ưu tiên'
  board = moveTierHero(board, 'legacy', 'tier-0')
  board = moveTierHero(board, 'a', 'tier-0')
  const restored = restoreTierBoard(JSON.parse(JSON.stringify(board)), ['current', 'a', 'new-hero'], { legacy: 'current' })
  assert.equal(restored.title, board.title)
  assert.equal(restored.rows[0].label, 'Ưu tiên')
  assert.equal(restored.rows[0].color, board.rows[0].color)
  assert.deepEqual(restored.rows[0].heroIds, ['current', 'a'])
  assert.ok(!restored.rows.flatMap(row => row.heroIds).includes('new-hero'), 'New catalog heroes remain in the pool')
})

test('corrupt imports discard unknown heroes, duplicate heroes and unsafe colors without losing valid ranks', () => {
  const restored = restoreTierBoard({ version: 1, title: 'x'.repeat(400), rows: [null, { id: 'same', label: 'SS', color: 'url(evil)', heroIds: ['a', 'a', 7, 'missing'] }, { id: 'same', label: 'B', color: '#ff7f7f', heroIds: ['a', 'legacy', 'current'] }] }, ['a', 'current'], { legacy: 'current' })
  assert.equal(restored.title.length, 100)
  assert.equal(restored.rows.length, 2)
  assert.notEqual(restored.rows[0].id, restored.rows[1].id)
  assert.match(restored.rows[0].color, /^#[0-9a-f]{6}$/)
  assert.deepEqual(restored.rows.flatMap(row => row.heroIds), ['a', 'current'])
  for (const bad of [null, [], { version: 2, rows: [] }, { version: 1, rows: [null] }]) assert.deepEqual(restoreTierBoard(bad, ['a']), emptyTierBoard())
})
