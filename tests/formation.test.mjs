import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import ts from 'typescript'

const source = await readFile(new URL('../src/formation.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
const { restorePositions, moveWithinBounds } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

test('legacy teams gain positions without losing or reordering heroes', () => {
  const team = ['duong-tien', 'ton-ngo-khong', 'duong-tang']
  const result = restorePositions(null, team)
  assert.deepEqual(Object.keys(result), team)
  assert.equal(new Set(Object.values(result).map(p => `${p.x},${p.y}`)).size, team.length)
})

test('stored free placement survives reorder and removal and permits exact overlaps', () => {
  const saved = { a: { x: 0.413, y: 0.287 }, b: { x: 0.413, y: 0.287 }, removed: { x: 1, y: 1 } }
  assert.deepEqual(restorePositions(saved, ['b', 'a']), { b: saved.b, a: saved.a })
  assert.deepEqual(restorePositions(saved, ['b']), { b: saved.b })
})

test('invalid stored coordinates recover and out-of-bound coordinates are clamped', () => {
  const result = restorePositions({ a: { x: -5, y: 10 }, b: { x: Infinity, y: 0.2 }, c: 'invalid' }, ['a', 'b', 'c'])
  assert.deepEqual(result.a, { x: 0, y: 1 })
  for (const p of Object.values(result)) assert.ok(Number.isFinite(p.x) && Number.isFinite(p.y) && p.x >= 0 && p.x <= 1 && p.y >= 0 && p.y <= 1)
})

test('movement remains continuous without snapping and stays within board boundaries', () => {
  const moved = moveWithinBounds({ x: 0.31, y: 0.42 }, 0.173, -0.081)
  assert.ok(Math.abs(moved.x - 0.483) < 1e-12)
  assert.ok(Math.abs(moved.y - 0.339) < 1e-12)
  assert.deepEqual(moveWithinBounds(moved, 10, -10), { x: 1, y: 0 })
})
