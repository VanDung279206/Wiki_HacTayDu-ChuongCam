import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import ts from 'typescript'

const source = await readFile(new URL('../src/storage.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
const { readStored, writeStored } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`)

function memoryStorage(initial = {}) {
  const values = new Map(Object.entries(initial))
  return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) }
}

test('bookmarks, formation and dark preference survive a save/read cycle', () => {
  const storage = memoryStorage()
  const values = { 'htd-saved': ['duong-tien', 'giftcode'], 'htd-team': ['duong-tien'], 'htd-team-positions': { 'duong-tien': { x: 0.413, y: 0.287 } }, 'htd-dark': true }
  assert.equal(writeStored(values, storage), true)
  for (const [key, value] of Object.entries(values)) assert.deepEqual(readStored(key, null, storage), value)
})

test('corrupt or missing browser data falls back without breaking the wiki', () => {
  const storage = memoryStorage({ 'htd-saved': '{broken json' })
  assert.deepEqual(readStored('htd-saved', [], storage), [])
  assert.equal(readStored('htd-dark', false, storage), false)
})

test('blocked storage and full quota return failure for the visible recovery notice', () => {
  const blocked = { getItem() { throw new Error('SecurityError') }, setItem() { throw new Error('QuotaExceededError') } }
  assert.deepEqual(readStored('htd-saved', [], blocked), [])
  assert.equal(writeStored({ 'htd-team': ['duong-tien'] }, blocked), false)
})
