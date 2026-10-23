import { readFile } from 'node:fs/promises'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import ts from 'typescript'

const source = await readFile(new URL('../src/data.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
const videoJs = ts.transpileModule(await readFile(new URL('../src/videoCatalog.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
const videoModuleUrl = `data:text/javascript;base64,${Buffer.from(videoJs).toString('base64')}`
const skillJs = ts.transpileModule(await readFile(new URL('../src/skillVideo.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
const skillModuleUrl = `data:text/javascript;base64,${Buffer.from(skillJs).toString('base64')}`
const dataCode = outputText.replace(/from ['"]\.\/skillVideo['"]/g, `from '${skillModuleUrl}'`).replace(/from ['"]\.\/videoCatalog['"]/g, `from '${videoModuleUrl}'`)
const dataModuleUrl = `data:text/javascript;base64,${Buffer.from(dataCode).toString('base64')}`
const { heroes, articles, sources, giftcodes, news, normalize, starterCodeImage, tierEntries, tierSheets, patch102, versionUpdates, codeRewardEvidence, videoCatalog, canonicalHeroId, skillVideo, skillVideoHeroes } = await import(dataModuleUrl)
const { outputText: portraitModule } = ts.transpileModule(await readFile(new URL('../src/portraitEnhancement.ts', import.meta.url), 'utf8'), { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } })
const portraitCode = portraitModule.replace(/from ['"]\.\/data['"]/, `from '${dataModuleUrl}'`)
const { enhancedPortrait } = await import(`data:text/javascript;base64,${Buffer.from(portraitCode).toString('base64')}`)

test('tier builder artwork covers 51 existing heroes and retains a named Drive source for every local image', async () => {
  const art = JSON.parse(await readFile(new URL('../src/characterArt.json', import.meta.url), 'utf8'))
  assert.equal(Object.keys(art).length, 51)
  assert.deepEqual(heroes.filter(hero => !art[hero.id]).map(hero => hero.id), ['bach-cot-tinh'])
  for (const [id, image] of Object.entries(art)) {
    assert.ok(heroes.some(hero => hero.id === id), 'Art must not create an unconfirmed hero')
    assert.equal(image.path, `assets/tier-characters/${id}.webp`)
    assert.equal(new URL(image.url).hostname, 'drive.google.com')
    assert.ok(image.title.endsWith('.png'))
    const bytes = await readFile(new URL(`../public/${image.path}`, import.meta.url))
    assert.equal(bytes.subarray(0, 4).toString(), 'RIFF')
    assert.equal(bytes.subarray(8, 12).toString(), 'WEBP')
  }
})

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
  assert.equal(heroes.length, 52, '43 observed heroes plus eight older Thanh Ton profiles and Bach Cot Tinh')
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

test('internal test images retain all 39 original labels after matching video identities', () => {
  assert.equal(tierEntries.filter(e => e.portrait.sheet === 'than-tuong').length, 31)
  assert.equal(tierEntries.filter(e => e.portrait.sheet === 'thanh-ton').length, 8)
  assert.equal(tierEntries.filter(e => !e.heroId).length, 0, 'Video resolves the three former unmatched portraits')
  for (const e of tierEntries) {
    const sheet = tierSheets.find(s => s.id === e.portrait.sheet)
    assert.ok(sheet && sources.some(s => s.id === sheet.sourceId))
    assert.ok(e.portrait.x >= 0 && e.portrait.y >= 0 && e.portrait.x + e.portrait.width <= sheet.width && e.portrait.y + e.portrait.height <= sheet.height)
    if (e.heroId) assert.ok(heroes.some(h => h.id === e.heroId))
    if (e.candidateId) assert.ok(heroes.some(h => h.id === e.candidateId))
  }
  assert.equal(heroes.filter(h => h.imageOnly).length, 8)
  for (const hero of heroes.filter(h => h.imageOnly)) assert.ok(!hero.faction && !hero.role && !hero.quality && !hero.skills)
  assert.equal(heroes.filter(h => h.id === 'duong-tang').length, 1)
  assert.equal(heroes.find(h => h.id === 'duong-tang').name, 'Đường Tam Tạng')
  assert.ok(heroes.find(h => h.id === 'duong-tang').aliases.includes('Đường Tăng'))
  assert.ok(heroes.some(h => h.id === 'ton-ngo-khong') && heroes.some(h => h.id === 'te-thien-dai-thanh' && h.kind === 'thanh-ton'))
})

test('publisher guides confirm names without inventing combat data or merging uncertain identities', () => {
  for (const id of ['tri-quoc-thien-vuong', 'kim-giac', 'tang-truong-thien-vuong', 'quang-muc-thien-vuong', 'da-van-thien-vuong']) {
    const hero = heroes.find(h => h.id === id)
    assert.ok(hero && !hero.imageOnly && hero.portrait)
    assert.ok(hero.sourceIds.some(id => ['beginner-teams', 'hero-growth'].includes(id)))
    assert.ok(hero.inGameEvidence && hero.faction && hero.quality, 'Video now establishes faction icon and quality')
    assert.ok(hero.role && hero.skills && hero.skillEvidence.sourceId === skillVideo.sourceId, 'New skill video establishes roles and skills separately from roster evidence')
  }
  const newHero = heroes.find(h => h.id === canonicalHeroId('thiet-phien-cong-chua'))
  assert.ok(newHero && !newHero.imageOnly && newHero.sourceIds.includes('beginner-teams'))
  assert.ok(heroes.some(h => h.id === 'la-sat-nu'))
  assert.equal(heroes.filter(h => h.inGameEvidence).length, 43)
  const wukong = heroes.find(h => h.id === 'ton-ngo-khong')
  assert.ok(wukong.acquisitionNotes.some(note => note.sourceId === 'beginner-teams' && note.text.includes('Linh Uẩn')))
  for (const hero of heroes) for (const note of hero.acquisitionNotes || []) assert.ok(hero.sourceIds.includes(note.sourceId))
})

test('video roster keeps quality groups, old links and skill level context intact', () => {
  assert.deepEqual(['Tuyệt', 'Đỉnh', 'Ưu'].map(quality => videoCatalog.entries.filter(e => e.quality === quality).length), [31, 6, 6])
  assert.equal(new Set(videoCatalog.entries.map(e => e.id)).size, 43)
  for (const entry of videoCatalog.entries) {
    const hero = heroes.find(h => h.id === entry.id)
    assert.ok(hero && hero.name === entry.name && hero.quality === entry.quality)
    assert.ok(hero.sourceIds.includes(videoCatalog.sourceId))
  }
  assert.equal(heroes.filter(h => ['la-sat-nu', 'thiet-phien-cong-chua'].includes(h.id)).length, 1)
  assert.equal(canonicalHeroId('thiet-phien-cong-chua'), 'la-sat-nu')
  assert.equal(heroes.find(h => h.id === 'ly-tinh').name, 'Lý Tịnh')
  assert.ok(heroes.find(h => h.id === 'hoang-mi').aliases.includes('Hoàng Mi'))
  const wukong = heroes.find(h => h.id === 'ton-ngo-khong')
  assert.equal(wukong.role, 'Tiên Phong')
  assert.equal(wukong.skills.length, 4)
  assert.ok(wukong.skills.every(skill => skill.level === 3 && skill.levels.length === 3))
  assert.equal(wukong.skills[0].cooldownSeconds, 18)
  assert.ok(wukong.skills[0].incomplete && wukong.skills[0].levels[0].description.includes('bị khuất'))
  assert.equal(wukong.statsSnapshot.level, 600)
  assert.ok(wukong.statsSnapshot.scope.includes('Không phải chỉ số gốc'))
  assert.ok(!heroes.find(h => h.id === 'te-thien-dai-thanh').inGameEvidence, 'A regular hero does not verify its Thanh Ton form')
  assert.ok(sources.find(s => s.id === videoCatalog.sourceId).url.endsWith('.txt'), 'Publish transcription rather than private video')
})


test('skill video attaches all 166 skills to 43 existing identities without inventing higher levels', () => {
  assert.equal(heroes.length, 52)
  assert.deepEqual(Object.keys(skillVideoHeroes).sort(), videoCatalog.entries.map(entry => entry.id).sort())
  const updated = heroes.filter(hero => hero.skillEvidence?.sourceId === skillVideo.sourceId)
  assert.equal(updated.length, 43)
  assert.equal(updated.reduce((count, hero) => count + hero.skills.length, 0), 166)
  for (const hero of updated) {
    const expectedLevel = hero.quality === 'Tuyệt' ? 3 : hero.quality === 'Đỉnh' ? 2 : 1
    assert.equal(hero.skills.length, expectedLevel === 1 ? 3 : 4, hero.id)
    assert.ok(hero.role && hero.sourceIds.includes(skillVideo.sourceId))
    assert.equal(new Set(hero.skills.map(skill => skill.name)).size, hero.skills.length)
    for (const skill of hero.skills) {
      assert.equal(skill.sourceId, skillVideo.sourceId)
      assert.equal(skill.level, expectedLevel)
      assert.deepEqual(skill.levels.map(level => level.level), Array.from({ length: expectedLevel }, (_, i) => i + 1))
      assert.match(skill.time, /^\d{2}:\d{2}$/)
      const [minutes, seconds] = skill.time.split(':').map(Number)
      assert.ok(seconds < 60 && minutes * 60 + seconds < skillVideo.durationSeconds)
      assert.ok(skill.levels.every(level => level.description.trim().length > 0))
      if (skill.incomplete) assert.match(skill.levels.map(level => level.description).join(' '), /thiếu|khuất|cắt/i)
    }
  }
  for (const hero of heroes.filter(hero => hero.kind === 'thanh-ton' || hero.id === 'bach-cot-tinh')) assert.ok(!hero.skillEvidence)
  const source = sources.find(source => source.id === skillVideo.sourceId)
  assert.equal(source.url, 'assets/skills-video-2026-10-23.txt')
})
