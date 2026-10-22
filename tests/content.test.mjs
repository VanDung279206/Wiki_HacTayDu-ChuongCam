import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import ts from 'typescript'

const source = await readFile(new URL('../src/data.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
const dataModuleUrl = `data:text/javascript;base64,${Buffer.from(outputText).toString('base64')}`
const { heroes, articles, sources, giftcodes, news, normalize, starterCodeImage, tierEntries, tierSheets, patch102, versionUpdates, codeRewardEvidence, heroNameChecks } = await import(dataModuleUrl)
const { outputText: portraitModule } = ts.transpileModule(await readFile(new URL('../src/portraitEnhancement.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
const portraitCode = portraitModule.replace(/from ['"]\.\/data['"]/, `from '${dataModuleUrl}'`)
const { enhancedPortrait } = await import(`data:text/javascript;base64,${Buffer.from(portraitCode).toString('base64')}`)

test('every published hero, article, code and news entry has a resolvable source', async () => {
  const sourceIds = new Set(sources.map(s => s.id))
  assert.equal(sourceIds.size, sources.length)
  for (const item of [...heroes, ...articles]) {
    assert.ok(item.sourceIds.length, `Missing sources on ${item.id}`)
    for (const id of item.sourceIds) assert.ok(sourceIds.has(id), `Unknown source ${id}`)
    for (const skill of item.skills ?? []) assert.ok(sourceIds.has(skill.sourceId), `Unknown skill source on ${item.id}`)
    for (const id of item.relatedIds ?? []) assert.ok(articles.some(article => article.id === id), `Unknown related article ${id}`)
  }
  for (const item of [...giftcodes, ...news, ...versionUpdates]) assert.ok(sourceIds.has(item.sourceId))
  for (const s of sources) {
    if (s.url.startsWith('assets/')) {
      assert.ok(!s.url.includes('..'), 'Local source must stay within public/assets')
      assert.ok((await readFile(new URL(`../public/${s.url}`, import.meta.url))).length, 'Local source file must exist')
    } else assert.equal(new URL(s.url).protocol, 'https:')
  }
  const seenFiles = new Set()
  for (const entry of tierEntries) {
    const sheet = tierSheets.find(s => s.id === entry.portrait.sheet)
    const variant = enhancedPortrait(entry.portrait)
    assert.ok(variant && variant.path !== sheet.path, 'Enhancement must not replace the original source')
    assert.ok(sources.some(source => source.id === sheet.sourceId && source.url === sheet.path))
    assert.ok(variant.x >= 0 && variant.y >= 0 && variant.x + variant.width <= variant.sheetWidth && variant.y + variant.height <= variant.sheetHeight)
    if (seenFiles.has(variant.path)) continue
    const bytes = await readFile(new URL(`../public/${variant.path}`, import.meta.url))
    assert.equal(bytes.subarray(1, 4).toString(), 'PNG')
    assert.ok(bytes.readUInt32BE(16) >= 1000 && bytes.readUInt32BE(20) >= 1000)
    seenFiles.add(variant.path)
  }
  assert.equal(seenFiles.size, 6, 'Five atlases plus the missing individual portrait must ship')
})

test('player patch notes attach version history without turning guardians or an outfit into heroes', () => {
  assert.equal(patch102.releaseDate, null, 'An approximate report is not an exact release date')
  assert.equal(heroes.length, 43, 'Catalog includes the newly sourced Thiet Phien profile')
  assert.deepEqual(heroes.filter(h => h.introducedIn === '1.0.2').map(h => h.id).sort(), [...patch102.heroIds].sort())
  for (const hero of heroes.filter(h => h.introducedIn)) assert.ok(hero.sourceIds.includes(patch102.sourceId))
  for (const name of [...patch102.guardians, patch102.outfit, 'Lữ Bố']) assert.ok(!heroes.some(h => h.name === name), `${name} is not reported as a new hero`)
  assert.ok(articles.find(a => a.id === 'thu-ho').sections.some(s => s.list === patch102.guardians))
  for (const update of versionUpdates) assert.ok(articles.some(a => a.id === update.articleId))
})

test('deep-link identifiers are unique and Vietnamese search preserves distinctions', () => {
  for (const list of [heroes, articles]) assert.equal(new Set(list.map(item => item.id)).size, list.length)
  assert.equal(normalize('DƯƠNG TIỄN'), normalize('duong tien'))
  assert.equal(normalize('Đường Tăng'), normalize('duong tang'))
  assert.notEqual(normalize('Dương Tiễn'), normalize('Đường Tăng'))
})

test('giftcodes retain verification, publication and expiry metadata without claiming unknown codes are active', () => {
  assert.equal(new Set(giftcodes.map(c => c.code)).size, giftcodes.length)
  assert.equal(new Set(starterCodeImage.codes).size, 24)
  for (const value of starterCodeImage.codes) {
    const entries = giftcodes.filter(c => c.code === value)
    assert.equal(entries.length, 1, `${value} should appear exactly once`)
    assert.equal(entries[0].verifiedActive, false, 'Image alone does not establish redemption status')
  }
  assert.equal(giftcodes.find(c => c.code === 'NHANCAN111').sourceId, 'nhan-can', 'Keep the original official source')
  assert.equal(giftcodes.filter(c => !c.archived).length, 24)
  assert.deepEqual(giftcodes.filter(c => c.archived).map(c => c.code), ['ALPHA3R6'], 'Alpha codes stay in the archive for the official-release wiki')
  for (const code of giftcodes) {
    assert.ok(code.published && code.checked && code.expiry && code.rewards)
    if (code.status.includes('Chưa xác nhận')) assert.equal(code.verifiedActive, false)
  }
})

test('reward mail covers every release code and keeps mail validity separate from code expiry', async () => {
  assert.deepEqual(codeRewardEvidence.entries.map(e => e.code).sort(), [...starterCodeImage.codes].sort())
  for (const code of giftcodes.filter(c => !c.archived)) {
    assert.ok(code.rewardEvidence && code.rewardSourceId)
    assert.equal(sources.find(s => s.id === code.rewardSourceId).url, 'assets/code-rewards.txt')
    assert.equal(code.checked, '22/10/2026')
    assert.ok(!code.expiry.includes('7 ngày'), 'Mail retention is not the redemption deadline')
    assert.equal('image' in code.rewardEvidence, false, 'Only text reward records are published')
  }
  assert.equal(giftcodes.find(c => c.archived).rewardEvidence, undefined)
  for (const value of ['THUANPHAM', 'VAN97', 'HOANGDZ']) assert.ok(giftcodes.find(c => c.code === value).rewards.includes('không hiện số lượng'))
  assert.match(giftcodes.find(c => c.code === 'DKT10K').rewards, /khung cam/)
  assert.match(giftcodes.find(c => c.code === 'DKT20K').rewards, /khung đỏ/)
  assert.match(giftcodes.find(c => c.code === 'DAT100KDKT').rewards, /×25;.*×50/)
})

test('internal test images retain all 39 labels without merging uncertain names or inventing metadata', () => {
  assert.equal(tierEntries.filter(e => e.portrait.sheet === 'than-tuong').length, 31)
  assert.equal(tierEntries.filter(e => e.portrait.sheet === 'thanh-ton').length, 8)
  assert.deepEqual(tierEntries.filter(e => !e.heroId).map(e => e.name), ['Lý Tịnh', 'Kháng Kim Tinh Quân', 'Hoàng My'])
  for (const e of tierEntries) {
    const sheet = tierSheets.find(s => s.id === e.portrait.sheet)
    assert.ok(sheet && sources.some(s => s.id === sheet.sourceId))
    assert.ok(e.portrait.x >= 0 && e.portrait.y >= 0 && e.portrait.x + e.portrait.width <= sheet.width && e.portrait.y + e.portrait.height <= sheet.height)
    if (e.heroId) assert.ok(heroes.some(h => h.id === e.heroId))
    if (e.candidateId) assert.ok(heroes.some(h => h.id === e.candidateId))
  }
  assert.equal(heroes.filter(h => h.imageOnly).length, 16)
  for (const hero of heroes.filter(h => h.imageOnly)) assert.ok(!hero.faction && !hero.role && !hero.quality && !hero.skills)
  assert.equal(heroes.filter(h => h.id === 'duong-tang').length, 1)
  assert.ok(heroes.find(h => h.id === 'duong-tang').aliases.includes('Đường Tam Tạng'))
  assert.ok(heroes.some(h => h.id === 'ton-ngo-khong') && heroes.some(h => h.id === 'te-thien-dai-thanh' && h.kind === 'thanh-ton'))
})

test('publisher guides confirm names without inventing combat data or merging uncertain identities', () => {
  for (const id of ['tri-quoc-thien-vuong', 'kim-giac', 'tang-truong-thien-vuong', 'quang-muc-thien-vuong', 'da-van-thien-vuong']) {
    const hero = heroes.find(h => h.id === id)
    assert.ok(hero && !hero.imageOnly && hero.portrait)
    assert.ok(hero.sourceIds.some(id => ['beginner-teams', 'hero-growth'].includes(id)))
    assert.ok(!hero.faction && !hero.role && !hero.quality && !hero.skills, 'A name mention does not establish battle metadata')
  }
  const newHero = heroes.find(h => h.id === 'thiet-phien-cong-chua')
  assert.ok(newHero && !newHero.imageOnly && newHero.sourceIds.includes('beginner-teams'))
  assert.ok(heroes.some(h => h.id === 'la-sat-nu'))
  assert.equal(heroes.filter(h => !h.imageOnly).length, 27)
  for (const check of heroNameChecks) {
    const candidate = heroes.find(h => h.id === check.candidateId)
    assert.ok(candidate && !(candidate.aliases || []).includes(check.name), 'Unconfirmed names must not become aliases')
    if (check.heroId) assert.ok(heroes.some(h => h.id === check.heroId))
    for (const id of check.sourceIds) assert.ok(sources.some(s => s.id === id))
  }
  const wukong = heroes.find(h => h.id === 'ton-ngo-khong')
  assert.ok(wukong.acquisitionNotes.some(note => note.sourceId === 'beginner-teams' && note.text.includes('Linh Uẩn')))
  for (const hero of heroes) for (const note of hero.acquisitionNotes || []) assert.ok(hero.sourceIds.includes(note.sourceId))
})
