import { skillVideo, skillVideoHeroes } from './skillVideo'
export { skillVideo, skillVideoHeroes }
import { videoCatalog, videoNameResolutions, wukongVideoSkills, wukongVideoStats } from './videoCatalog'
export { videoCatalog, videoNameResolutions }

export const official = 'https://hactaydu.funtap.games/'
export const fanpage = 'https://www.facebook.com/hactaydufuntap'
export const checkedDate = '20/10/2026'
export const heroCatalogCheckedDate = '22/10/2026'
export const tierMakerTemplate = {
  sourceId: 'tiermaker-template',
  communitySourceId: 'tiermaker-community',
  title: 'TƯỚNG MẠNH NHẤT HẮC TÂY DU',
  author: 'Nguyễn Thế Minh Kiên',
  url: 'https://tiermaker.com/create/b-ca-hc-ty-du-19112201',
  communityUrl: 'https://tiermaker.com/categories/gacha-games/b-ca-hc-ty-du-19112201',
  imageCount: 30,
  ranks: ['SS', 'S', 'A', 'B', 'C'],
  modified: '23/10/2026',
  accessed: '23/10/2026',
}
export const patch102 = {
  version: '1.0.2',
  sourceId: 'player-patch-1-0-2',
  received: checkedDate,
  releaseDate: null,
  releaseWindow: 'Khoảng một tuần trước ngày 20/10/2026, theo người cung cấp; chưa có ngày phát hành chính xác',
  heroIds: ['thien-bong-nguyen-soai', 'tam-thai-tu', 'bach-cot-phu-nhan'],
  guardians: ['Dần Hổ', 'Ngọ Mã', 'Thân Hầu', 'Thìn Long'],
  event: 'Vân Mộng Tiên Tung',
  outfit: 'Chiến Thần Lữ Bố Xuất Thế',
}
export const starterCodeImage = {
  sourceId: 'starter-code-image',
  path: 'assets/giftcodes-tan-thu.png',
  received: checkedDate,
  codes: [
    'HACTAYDU888', 'TAYDUKI', 'CHUONGCAM', 'HTDCC999', 'HOICHIEUTROIMUA',
    '45THANTUONG', 'DUONGTIEN', 'NATRA', 'NGOKHONG', 'THUANPHAM', 'VAN97', 'HOANGDZ',
    'NHANCAN111', 'NHICAN222', 'TICAN333', 'THIETCAN444', 'THANCAN555', 'YCAN666',
    'DKT5K', 'DKT10K', 'DKT20K', 'DKT30K', 'DKT50K', 'DAT100KDKT',
  ],
}
export const sources = [
  { id: skillVideo.sourceId, title: 'Bản ghi kỹ năng 43 tướng từ video trong game — 23/10/2026', publisher: 'Video do người dùng cung cấp; chỉ công khai bản ghi chữ', url: skillVideo.sourcePath, received: skillVideo.received },
  { id: 'character-drive', title: 'Bộ hình ảnh nhân vật dùng cho công cụ tier list', publisher: 'Bộ Drive do người dùng cung cấp', url: 'https://drive.google.com/drive/folders/1hNIhZNke7IKndlN5mhE7M5940Ml0r_1W', accessed: '23/10/2026' },
  { id: tierMakerTemplate.sourceId, title: `${tierMakerTemplate.title} — mẫu TierMaker`, publisher: `${tierMakerTemplate.author} trên TierMaker`, url: tierMakerTemplate.url, accessed: tierMakerTemplate.accessed },
  { id: tierMakerTemplate.communitySourceId, title: 'TierMaker — bảng xếp hạng cộng đồng Hắc Tây Du', publisher: 'TierMaker', url: tierMakerTemplate.communityUrl, accessed: tierMakerTemplate.accessed },
  { id: 'home', title: 'Trang chủ và hồ sơ nhân vật', publisher: 'Funtap', url: official },
  { id: 'intro', title: 'Giới thiệu Hắc Tây Du: Chương Cấm', publisher: 'Funtap', url: `${official}huong-dan/gioi-thieu-hac-tay-du-chuong-cam` },
  { id: 'store', title: 'Hắc Tây Du: Chương Cấm trên Google Play', publisher: 'Funtap Games', url: 'https://play.google.com/store/apps/details?id=vn.ftg.hactaydu' },
  { id: 'redeem', title: 'Hướng dẫn nhận và đổi giftcode', publisher: 'Funtap', url: `${official}huong-dan/huong-dan-nhan-giftcode-va-doi-giftcode-game-hac-tay-du-chuong-cam` },
  { id: 'download', title: 'Hướng dẫn tải game', publisher: 'Funtap', url: `${official}huong-dan/huong-dan-tai-game-hac-tay-du-chuong-cam` },
  { id: 'alpha', title: 'Giftcode Hắc Tây Du: Chương Cấm — 23/09/2026', publisher: 'AFKMobi', url: 'https://afkmobi.com/tong-hop-gift-code-game-hac-tay-du-chuong-cam-moi-nhat.html' },
  { id: 'recharge', title: 'Hướng dẫn nạp thẻ', publisher: 'Funtap', url: `${official}huong-dan/huong-dan-nap-the-game-hac-tay-du-chuong-cam` },
  { id: 'ingame', title: 'Hướng dẫn nạp trong game', publisher: 'Funtap', url: `${official}huong-dan/huong-dan-nap-ingame-hac-tay-du-chuong-cam` },
  { id: 'live', title: 'Livestream Dương Tiễn Khai Nhãn — 20/10/2026', publisher: 'Fanpage Hắc Tây Du: Chương Cấm - Funtap', url: `${fanpage}/posts/pfbid09WioYcfqV4fPsQVLFFHZ5xXtA2zRXYTTTBKcSaQjPkZprUgDdLWj96a8GPHq4gj6l` },
  { id: 'preload', title: 'Mở tải trước và quà đăng ký trước', publisher: 'Fanpage Funtap', url: `${fanpage}/posts/pfbid034aUoiDMKCmPiFUFQAW6CAs71qQLuUd7yy4wnkFe8nziBqE3p5pZULTRiePos4Yoql` },
  { id: 'duong-tien-skills', title: 'Tiêu điểm tướng Dương Tiễn — bộ kỹ năng và quà cấp 10', publisher: 'Fanpage Funtap', url: 'https://www.facebook.com/reel/1526476169291495/' },
  { id: 'nhan-can', title: 'Khai Nhãn Căn — code NHANCAN111', publisher: 'Fanpage Funtap', url: `${fanpage}/posts/pfbid027NDmgMNbiFebm99gS6vvTHm3Ubiz5PvzxJPMC8EtQ32vDjtW3upWN5ZAWVA2K1BUl` },
  { id: 'ti-can', title: 'Sự kiện Tị Căn — đua top fan cứng', publisher: 'Fanpage Funtap', url: `${fanpage}/posts/pfbid02JjQwitbMBrA4Bm8j9fAT69Eofdyfq8NPdh4M1cc41AiBDHs9xgKQVNsDF4foJ94Ql` },
  { id: 'yeu-toc', title: 'Giới thiệu Yêu Tộc', publisher: 'Fanpage Funtap', url: `${fanpage}/posts/pfbid037C4dcHHPwUnqZq881rZGof3zMgkC7jZyU1e9jNFzxPvHCMQmFPL6RrUFTqdEA9p5l` },
  { id: 'tien-gia', title: 'Giới thiệu Tiên Gia và ảnh tướng', publisher: 'Fanpage Funtap', url: `${fanpage}/posts/pfbid02Tg3yE8BxBGSkqTwmCFMSRkDW8SR1bySU57ZLG2BbEJD1WVKgXxTeQ4JssPxGckrPl` },
  { id: 'chung-sinh', title: 'Giới thiệu Chúng Sinh và ảnh tướng', publisher: 'Fanpage Funtap', url: `${fanpage}/posts/pfbid02oMJDY1AodxRESSkUDvyLCqWSJZtDUucn6HHm3bN39xxdxctx89twsKiLe7XfLiUsl` },
  { id: 'devlog', title: 'Dev Log #1 — 02/10/2026', publisher: 'Fanpage Funtap', url: 'https://www.facebook.com/photo/?fbid=122137519407385275' },
  { id: 'launch-rewards', title: 'Giới thiệu quà đăng ký trước: Cang Kim và Trư Bát Giới', publisher: 'Fanpage Funtap', url: `${fanpage}/posts/pfbid0KF1YVoPLNPBCNhDHbPqLKp6omsXZjGvtLS4Z3NPRW8KwaE6MCDp9CYTAS3sSRUmnl` },
  { id: 'ly-tinh-photo', title: 'Ảnh Lý Tinh trong bộ Tiên Gia', publisher: 'Fanpage Funtap', url: 'https://www.facebook.com/photo/?fbid=122124526731385275' },
  { id: 'tran-nguyen-photo', title: 'Ảnh Trấn Nguyên Tử trong bộ Chúng Sinh', publisher: 'Fanpage Funtap', url: 'https://www.facebook.com/photo/?fbid=122125051779385275' },
  { id: 'khong-tuoc-photo', title: 'Ảnh Khổng Tước Công Chúa trong bộ Chúng Sinh', publisher: 'Fanpage Funtap', url: 'https://www.facebook.com/photo/?fbid=122125051749385275' },
  { id: starterCodeImage.sourceId, title: 'Ảnh Bộ code tân thủ siêu giá trị', publisher: 'Ảnh do người chơi cung cấp', url: starterCodeImage.path },
  { id: 'test-roster-image', title: 'Tier list Thần tướng — ảnh thử nghiệm nội bộ', publisher: 'Bảng test nội bộ do người dùng cung cấp', url: 'assets/tier-than-tuong.png' },
  { id: 'test-exalted-image', title: 'Tier list Thánh Tôn — ảnh thử nghiệm nội bộ', publisher: 'Bảng test nội bộ do người dùng cung cấp', url: 'assets/tier-thanh-ton.png' },
  { id: patch102.sourceId, title: 'Nội dung cập nhật 1.0.2 do người dùng cung cấp', publisher: 'Người dùng cung cấp trong chat', url: 'assets/patch-notes-1.0.2.txt' },
  { id: 'player-code-rewards', title: 'Bản ghi phần thưởng 24 giftcode — thư ngày 21/10/2026', publisher: 'Chép từ ảnh trong game do người chơi cung cấp; chỉ công khai dạng chữ', url: 'assets/code-rewards.txt', received: '22/10/2026' },
  { id: 'beginner-teams', title: 'Đội hình Hắc Tây Du cho tân thủ — 20/10', publisher: 'Funtap', url: `${official}huong-dan/doi-hinh-hac-tay-du-cho-tan-thu`, accessed: heroCatalogCheckedDate },
  { id: 'hero-growth', title: 'Mẹo tăng lực chiến Hắc Tây Du: Chương Cấm — 20/10', publisher: 'Funtap', url: `${official}huong-dan/meo-tang-luc-chien-hac-tay-du-chuong-cam`, accessed: heroCatalogCheckedDate },
  { id: videoCatalog.sourceId, title: 'Bản ghi video Đồ giám và kỹ năng Tôn Ngộ Không — 22/10/2026', publisher: 'Video trong game do người dùng cung cấp; công khai bản ghi dạng chữ', url: 'assets/catalog-video-2026-10-22.txt', received: videoCatalog.received },
]
export type HeroPortrait = { sheet: string; x: number; y: number; width: number; height: number }
export type TierEntry = { name: string; tier: 'S' | 'A' | 'B' | 'C'; heroId?: string; candidateId?: string; portrait: HeroPortrait }
export const tierSheets = [
  { id: 'than-tuong', title: 'Thần tướng', sourceId: 'test-roster-image', path: 'assets/tier-than-tuong.png', width: 1024, height: 1280 },
  { id: 'thanh-ton', title: 'Thánh Tôn', sourceId: 'test-exalted-image', path: 'assets/tier-thanh-ton.png', width: 1024, height: 1280 },
]
const rosterEntry = (name: string, tier: TierEntry['tier'], heroId: string | undefined, column: number, row: number, candidateId?: string): TierEntry => ({
  name, tier, heroId: heroId || candidateId,
  portrait: { sheet: 'than-tuong', x: [177, 295, 414, 532, 651, 770, 888][column], y: [224, 423, 622, 804, 1003][row], width: 104, height: 132 },
})
const exaltedEntry = (name: string, tier: TierEntry['tier'], heroId: string, column: number, row: number): TierEntry => ({
  name, tier, heroId,
  portrait: { sheet: 'thanh-ton', x: [182, 397, 612, 828][column], y: [272, 583, 895][row], width: 166, height: 218 },
})
export const tierEntries: TierEntry[] = [
  rosterEntry('Dương Tiễn', 'S', 'duong-tien', 0, 0),
  rosterEntry('Hằng Nga', 'S', 'hang-nga', 1, 0),
  rosterEntry('Lý Tịnh', 'S', undefined, 2, 0, 'ly-tinh'),
  rosterEntry('Tôn Ngộ Không', 'S', 'ton-ngo-khong', 3, 0),
  rosterEntry('Ngọc Diện Hồ Ly', 'S', 'ngoc-dien-ho-ly', 4, 0),
  rosterEntry('Đa Văn Thiên Vương', 'S', 'da-van-thien-vuong', 5, 0),
  rosterEntry('Hồng Hài Nhi', 'A', 'hong-hai-nhi', 0, 1),
  rosterEntry('Hàng Long Tôn Giả', 'A', 'hang-long-ton-gia', 1, 1),
  rosterEntry('Na Tra', 'A', 'na-tra', 2, 1),
  rosterEntry('Kháng Kim Tinh Quân', 'A', undefined, 3, 1, 'cang-kim-tinh-quan'),
  rosterEntry('Trấn Nguyên Tử', 'A', 'tran-nguyen-tu', 4, 1),
  rosterEntry('Đường Tam Tạng', 'A', 'duong-tang', 5, 1),
  rosterEntry('Ngưu Ma Vương', 'A', 'nguu-ma-vuong', 6, 1),
  rosterEntry('Tăng Trưởng Thiên Vương', 'B', 'tang-truong-thien-vuong', 0, 2),
  rosterEntry('Trì Quốc Thiên Vương', 'B', 'tri-quoc-thien-vuong', 1, 2),
  rosterEntry('Trư Ngộ Năng', 'B', 'tru-bat-gioi', 2, 2),
  rosterEntry('Hoàng My', 'B', undefined, 3, 2, 'hoang-mi'),
  rosterEntry('Thanh Sư Vương', 'B', 'thanh-su-vuong', 4, 2),
  rosterEntry('Đại Bằng Vương', 'B', 'dai-bang-vuong', 5, 2),
  rosterEntry('La Sát Nữ', 'B', 'la-sat-nu', 6, 2),
  rosterEntry('Tiểu Bạch Long', 'B', 'tieu-bach-long', 0, 3),
  rosterEntry('Sa Ngộ Tịnh', 'B', 'sa-ngo-tinh', 1, 3),
  rosterEntry('Hồng Lân Mãng Tinh', 'B', 'hong-lan-mang-tinh', 2, 3),
  rosterEntry('Phục Hổ La Hán', 'B', 'phuc-ho-la-han', 3, 3),
  rosterEntry('Thông Tý Viên Hầu', 'B', 'thong-ty-vien-hau', 4, 3),
  rosterEntry('Kinh Hà Long Vương', 'B', 'kinh-ha-long-vuong', 5, 3),
  rosterEntry('Khổng Tước Công Chúa', 'B', 'khong-tuoc-cong-chua', 6, 3),
  rosterEntry('Quảng Mục Thiên Vương', 'C', 'quang-muc-thien-vuong', 0, 4),
  rosterEntry('Kim Giác', 'C', 'kim-giac', 1, 4),
  rosterEntry('Bạch Tượng Vương', 'C', 'bach-tuong-vuong', 2, 4),
  rosterEntry('Hạnh Tiên Lâm', 'C', 'hanh-tien-lam', 3, 4),
  exaltedEntry('Bạch Cốt Phu Nhân', 'S', 'bach-cot-phu-nhan', 0, 0),
  exaltedEntry('Tề Thiên Đại Thánh', 'S', 'te-thien-dai-thanh', 1, 0),
  exaltedEntry('Nam Cực Tiên Ông', 'S', 'nam-cuc-tien-ong', 2, 0),
  exaltedEntry('Hiển Thánh Tinh Quân', 'S', 'hien-thanh-tinh-quan', 3, 0),
  exaltedEntry('Tam Thái Tử', 'A', 'tam-thai-tu', 0, 1),
  exaltedEntry('Thiên Bồng Nguyên Soái', 'A', 'thien-bong-nguyen-soai', 1, 1),
  exaltedEntry('Thái Âm Tinh Quân', 'A', 'thai-am-tinh-quan', 2, 1),
  exaltedEntry('Vạn Thánh Công Chúa', 'B', 'van-thanh-cong-chua', 0, 2),
]
export type HeroSkill = { name: string; description: string; sourceId: string; level?: number; cooldownSeconds?: number; time?: string; incomplete?: boolean; effects?: { name: string; description: string }[]; levels?: { level: number; description: string }[] }
export type Hero = { id: string; name: string; title: string; faction?: string; role?: string; quality?: string; art?: string; portrait?: HeroPortrait; kind?: 'than-tuong' | 'thanh-ton'; imageOnly?: boolean; introducedIn?: string; aliases?: string[]; description: string; acquisition?: string; acquisitionNotes?: { text: string; sourceId: string }[]; lore?: string; sourceIds: string[]; skills?: HeroSkill[]; skillScope?: string; skillEvidence?: { sourceId: string; received: string }; statsSnapshot?: typeof wukongVideoStats; inGameEvidence?: { sourceId: string; time: string; factionBasis: string } }
export const heroNameChecks: { name: string; candidateId: string; heroId?: string; sourceIds: string[] }[] = []
export const heroRedirects: Record<string, string> = { 'thiet-phien-cong-chua': 'la-sat-nu' }
export const canonicalHeroId = (id: string) => Object.hasOwn(heroRedirects, id) ? heroRedirects[id] : id
const heroShopNotes: Record<string, string> = {
  'ton-ngo-khong': 'Shop Linh Uẩn; Triệu Hồi, Đằng Long, Kim Long.',
  'duong-tien': 'Shop Linh Uẩn; Triệu Hồi, Đằng Long, Kim Long.',
  'na-tra': 'Shop Linh Uẩn; Triệu Hồi, Đằng Long, Kim Long.',
  'duong-tang': 'Shop Triệu Hồi, Đằng Long, Kim Long.',
  'ngoc-dien-ho-ly': 'Shop Võ Đạo.',
  'hang-nga': 'Shop Võ Đạo.',
  'tru-bat-gioi': 'Shop Võ Đạo.',
  'cang-kim-tinh-quan': 'Shop Vạn Yêu.',
  'hong-hai-nhi': 'Shop Vạn Yêu.',
}
const publisherHeroes: Hero[] = [
  { id: 'ton-ngo-khong', name: 'Tôn Ngộ Không', title: 'Tề Thiên Đại Thánh', faction: 'Yêu Tộc', art: 'wukong', description: 'Tôn Ngộ Không thuộc Yêu Tộc và là nhân vật trung tâm của cốt truyện. Đại Thánh bị bốn sợi xích giam giữ trong một trăm năm; Chương Cấm là chìa khóa giải thoát nhân vật.', acquisition: 'Bài tiêu điểm Dương Tiễn trên fanpage nêu quà đạt cấp 10: chọn một trong Tôn Ngộ Không, Na Tra hoặc Dương Tiễn.', sourceIds: ['intro', 'yeu-toc', 'duong-tien-skills'] },
  { id: 'duong-tien', name: 'Dương Tiễn', title: 'Tam nhãn chiến thần', faction: 'Tiên Gia', role: 'Cận chiến', quality: 'Tuyệt', art: 'art1.png', description: 'Dương Tiễn thuộc Tiên Gia, phẩm chất Tuyệt, vai trò Cận chiến. Bài tiêu điểm trên fanpage xác nhận sát thương vật lý và công bố bốn kỹ năng.', lore: 'Dương Tiễn còn được gọi là Nhị Lang Thần; sử dụng thiên nhãn và Tam Tiêm Lưỡng Nhận Đao.', acquisition: 'Theo bài tiêu điểm trên fanpage, đạt cấp 10 được chọn miễn phí một trong Tôn Ngộ Không, Na Tra hoặc Dương Tiễn.', sourceIds: ['home', 'duong-tien-skills'], skills: [
    { name: 'Phong Khởi Ảnh Động — Chủ động', description: 'Gây sát thương bằng 370% Công lên mọi kẻ địch trong tầm.', sourceId: 'duong-tien-skills' },
    { name: 'Nhất Khí Lưỡng Nghi — Bị động', description: 'Tăng 25% Thủ Vật Lý, 15% Công và 10% Tỷ Lệ Bạo.', sourceId: 'duong-tien-skills' },
    { name: 'Thanh Nguyên Diệu Đạo — Nội tại', description: 'Ban Khải Minh cho cả đội: tăng 15% Công và 15% Giảm Sát Thương; chém bốn đợt, tổng 500% Công lên toàn bộ kẻ địch.', sourceId: 'duong-tien-skills' },
    { name: 'Nhục Thân Thành Thánh — Bị động', description: 'Miễn cú chí mạng đầu tiên, tạo khiên bằng 300% Công không thể giải trừ. Bài mô tả thêm tăng 30% sát thương xung quanh.', sourceId: 'duong-tien-skills' },
  ] },
  { id: 'nguu-ma-vuong', name: 'Ngưu Ma Vương', title: 'Bình Thiên Đại Thánh', faction: 'Yêu Tộc', role: 'Thủ hộ', quality: 'Tuyệt', art: 'art2.png', description: 'Ngưu Ma Vương là tướng Thủ hộ thuộc Yêu Tộc, phẩm chất Tuyệt theo hồ sơ nhân vật được công bố trên trang chủ.', lore: 'Hồ sơ nhắc đến danh hiệu Bình Thiên Đại Thánh và trận chiến tại Hỏa Diệm Sơn với thầy trò Đường Tăng.', sourceIds: ['home'] },
  { id: 'duong-tang', name: 'Đường Tăng', title: 'Nhất tâm thỉnh kinh', faction: 'Chúng Sinh', role: 'Hỗ trợ', quality: 'Tuyệt', art: 'art3.png', description: 'Đường Tăng là tướng Hỗ trợ thuộc thế lực Chúng Sinh, phẩm chất Tuyệt. Trong cốt truyện game, Đường Tam Tạng tìm cách mở Chương Cấm để giải thoát Ngộ Không.', lore: 'Tên tục Trần Huyền Trang. Hồ sơ nhân vật nhắc lại hành trình vượt tám mươi mốt kiếp nạn để thỉnh kinh.', sourceIds: ['home', 'intro'] },
  { id: 'na-tra', name: 'Na Tra', title: 'Tam Đại Phản Thần', faction: 'Chúng Sinh', description: 'Na Tra thuộc Chúng Sinh theo bài giới thiệu thế lực trên fanpage; đồng thời là một trong Tam Đại Phản Thần.', acquisition: 'Bài tiêu điểm Dương Tiễn trên fanpage nêu quà đạt cấp 10: chọn một trong Tôn Ngộ Không, Na Tra hoặc Dương Tiễn.', sourceIds: ['chung-sinh', 'duong-tien-skills'] },
  { id: 'bach-cot-tinh', name: 'Bạch Cốt Tinh', title: '', description: 'Bạch Cốt Tinh xuất hiện trong danh sách nhân vật được giới thiệu trên cửa hàng ứng dụng. Nguồn đã đối chiếu chưa công bố hồ sơ chiến đấu chi tiết.', sourceIds: ['store'] },
  { id: 'ngoc-dien-ho-ly', name: 'Ngọc Diện Hồ Ly', title: '', role: 'Hỗ trợ', description: 'Ngọc Diện Hồ Ly được nhắc đến trong mục ưu đãi ra mắt của bài giới thiệu chính thức. Nhà phát hành mô tả nhân vật ở vai trò hỗ trợ.', acquisition: 'Bài giới thiệu gắn Ngọc Diện Hồ Ly với gói ưu đãi đầu tiên. Giá, thời hạn và điều kiện nhận chưa được công bố trong nguồn này.', sourceIds: ['intro'] },
  { id: 'cang-kim-tinh-quan', name: 'Cang Kim Tinh Quân', title: '', role: 'Xạ thủ', description: 'Cang Kim Tinh Quân được giới thiệu là xạ thủ trong các bài mở tải và đăng ký trước. Các bài dùng mô tả bậc SS và SS+ khác nhau; chưa đối chiếu được phẩm chất hiển thị trong game.', acquisition: 'Bài mở tải công bố 50 mảnh Cang Kim Tinh Quân trong tổng quà đăng ký trước, nhận qua thư sau lần đăng nhập đầu khi mở server.', sourceIds: ['preload', 'launch-rewards'] },
  { id: 'tru-bat-gioi', name: 'Trư Bát Giới', title: 'Trư Ngộ Năng', faction: 'Chúng Sinh', role: 'Đỡ đòn', description: 'Trư Bát Giới được bài đăng ký trước mô tả là tướng đỡ đòn. Bài Chúng Sinh giới thiệu nhân vật với tên Trư Ngộ Năng.', acquisition: 'Được liệt kê trong quà đăng ký trước; cần đối chiếu điều kiện nhận theo đợt mở server.', sourceIds: ['launch-rewards', 'chung-sinh'] },
  { id: 'tieu-bach-long', name: 'Tiểu Bạch Long', title: '', description: 'Tiểu Bạch Long được xác nhận có mặt trong game qua Dev Log #1 ngày 02/10/2026. Bài này nêu việc sửa lỗi hiển thị kỹ năng của Tiểu Bạch Long và Cang Kim Tinh Quân.', sourceIds: ['devlog'] },
  { id: 'hong-hai-nhi', name: 'Hồng Hài Nhi', title: '', faction: 'Yêu Tộc', description: 'Hồng Hài Nhi thuộc Yêu Tộc. Bài giới thiệu thế lực gắn nhân vật với Tam Muội Chân Hỏa; đây là mô tả nhân vật, chưa phải bảng hiệu ứng kỹ năng.', sourceIds: ['yeu-toc'] },
  { id: 'dai-bang-vuong', name: 'Đại Bằng Vương', title: '', faction: 'Yêu Tộc', description: 'Đại Bằng Vương được nêu tên trong dàn Yêu Tộc trên fanpage. Bài giới thiệu nhấn mạnh hình tượng tung cánh và tốc độ; không công bố chỉ số tốc độ hoặc bộ kỹ năng.', sourceIds: ['yeu-toc'] },
  { id: 'hac-hung-tinh', name: 'Hắc Hùng Tinh', title: '', faction: 'Yêu Tộc', description: 'Hắc Hùng Tinh có tên trong bài giới thiệu Yêu Tộc. Trong chuỗi sự kiện Lục Căn, nhân vật giữ Nhãn Căn tại Hắc Phong Sơn.', sourceIds: ['yeu-toc', 'nhan-can'] },
  { id: 'ho-tien-phong', name: 'Hổ Tiên Phong', title: '', faction: 'Yêu Tộc', description: 'Hổ Tiên Phong được fanpage liệt kê trong dàn Yêu Tộc. Nguồn đã đọc chưa công bố phẩm chất, vai trò chiến đấu hoặc hệ số kỹ năng.', sourceIds: ['yeu-toc'] },
  { id: 'hoang-mi', name: 'Hoàng Mi', title: 'Hoàng Mi Đại Vương', faction: 'Yêu Tộc', description: 'Hoàng Mi được tài khoản fanpage xác nhận trong phần trả lời của bài Yêu Tộc. Ở chuỗi sự kiện Lục Căn, Hoàng Mi Đại Vương giữ Tị Căn tại Tiểu Lôi Âm Tự.', sourceIds: ['yeu-toc', 'ti-can'] },
  { id: 'hang-long-ton-gia', name: 'Hàng Long Tôn Giả', title: '', faction: 'Tiên Gia', description: 'Hàng Long Tôn Giả được giới thiệu trong dàn Tiên Gia, kèm hình nhân vật trong bài đăng ngày 23/08/2026.', sourceIds: ['tien-gia'] },
  { id: 'hang-nga', name: 'Hằng Nga', title: '', faction: 'Tiên Gia', description: 'Hằng Nga thuộc Tiên Gia theo bài giới thiệu thế lực của fanpage. Bài đã đọc chưa nêu vai trò hoặc bộ kỹ năng.', sourceIds: ['tien-gia'] },
  { id: 'ly-tinh', name: 'Lý Tinh', title: '', faction: 'Tiên Gia', description: 'Lý Tinh được xác nhận bằng ảnh mang tên nhân vật trong bộ ảnh Tiên Gia do fanpage công bố ngày 23/08/2026.', sourceIds: ['tien-gia', 'ly-tinh-photo'] },
  { id: 'la-sat-nu', name: 'La Sát Nữ', title: '', faction: 'Chúng Sinh', description: 'La Sát Nữ được nêu tên trong bài Chúng Sinh. Mô tả nhân vật nhắc quạt Ba Tiêu, nhưng không công bố tên và hệ số kỹ năng trong game.', sourceIds: ['chung-sinh'] },
  { id: 'tran-nguyen-tu', name: 'Trấn Nguyên Tử', title: '', faction: 'Chúng Sinh', description: 'Trấn Nguyên Tử được xác nhận bằng ảnh mang tên nhân vật trong bộ ảnh Chúng Sinh ngày 25/08/2026.', sourceIds: ['chung-sinh', 'tran-nguyen-photo'] },
  { id: 'khong-tuoc-cong-chua', name: 'Khổng Tước Công Chúa', title: '', faction: 'Chúng Sinh', description: 'Khổng Tước Công Chúa xuất hiện trong bộ ảnh Chúng Sinh. Tên nhân vật được đọc trực tiếp từ ảnh fanpage đăng ngày 25/08/2026.', sourceIds: ['chung-sinh', 'khong-tuoc-photo'] },
  { id: 'thiet-phien-cong-chua', name: 'Thiết Phiến Công Chúa', title: '', description: 'Thiết Phiến Công Chúa được Funtap nêu tên trong hướng dẫn đội hình tân thủ. Chưa xác nhận quan hệ với hồ sơ La Sát Nữ.', sourceIds: ['beginner-teams'] },
  { id: 'tri-quoc-thien-vuong', name: 'Trì Quốc Thiên Vương', title: '', description: 'Trì Quốc Thiên Vương có tên trong đội hình tân thủ và hướng dẫn Kích Duyên của Funtap.', sourceIds: ['beginner-teams', 'hero-growth'] },
  { id: 'kim-giac', name: 'Kim Giác', title: '', description: 'Kim Giác được Funtap liệt kê trong đội hình tân thủ dùng Dương Tiễn hoặc Na Tra.', sourceIds: ['beginner-teams'] },
  ...[
    { id: 'tang-truong-thien-vuong', name: 'Tăng Trưởng Thiên Vương' },
    { id: 'quang-muc-thien-vuong', name: 'Quảng Mục Thiên Vương' },
    { id: 'da-van-thien-vuong', name: 'Đa Văn Thiên Vương' },
  ].map(hero => ({ ...hero, title: '', description: `${hero.name} được nêu tên trong hướng dẫn Kích Duyên của Funtap.`, sourceIds: ['hero-growth'] })),
]
const priorHeroes: Hero[] = [
  ...publisherHeroes.map(hero => {
    const entry = tierEntries.find(item => item.heroId === hero.id)
    const shopNote = heroShopNotes[hero.id]
    const updatedHero = shopNote ? { ...hero, acquisitionNotes: [{ text: shopNote, sourceId: 'beginner-teams' }], sourceIds: [...hero.sourceIds, 'beginner-teams'] } : hero
    return entry ? { ...updatedHero, portrait: entry.portrait, aliases: entry.name !== hero.name ? [entry.name] : [], sourceIds: [...updatedHero.sourceIds, tierSheets.find(sheet => sheet.id === entry.portrait.sheet)!.sourceId] } : updatedHero
  }),
  ...tierEntries.filter(entry => entry.heroId && !publisherHeroes.some(hero => hero.id === entry.heroId)).map(entry => ({
    id: entry.heroId!, name: entry.name, title: '', imageOnly: true,
    introducedIn: patch102.heroIds.includes(entry.heroId!) ? patch102.version : undefined,
    kind: entry.portrait.sheet as 'than-tuong' | 'thanh-ton', portrait: entry.portrait,
    description: `${entry.name} được ghi tên trong bảng ${entry.portrait.sheet === 'thanh-ton' ? 'Thánh Tôn' : 'Thần tướng'} thử nghiệm nội bộ do người dùng cung cấp. Hồ sơ đang chờ đối chiếu với bản chính thức; ảnh không có kỹ năng, chỉ số hoặc điều kiện sở hữu.`,
    sourceIds: [tierSheets.find(sheet => sheet.id === entry.portrait.sheet)!.sourceId, ...(patch102.heroIds.includes(entry.heroId!) ? [patch102.sourceId] : [])],
  })),
]
const catalogHeroes: Hero[] = [
  ...priorHeroes.filter(hero => !heroRedirects[hero.id]).map(hero => {
    const observed = videoCatalog.entries.find(entry => entry.id === hero.id)
    if (!observed) return hero
    const mergedSources = priorHeroes.filter(item => canonicalHeroId(item.id) === hero.id).flatMap(item => item.sourceIds)
    const aliases = [...new Set([...(hero.aliases || []), hero.name, ...('legacyNames' in observed ? observed.legacyNames || [] : [])])].filter(name => name !== observed.name)
    return {
      ...hero, name: observed.name, aliases, faction: observed.faction, quality: observed.quality, imageOnly: false,
      description: `${observed.name} được đọc trực tiếp trong Đồ giám ở nhóm phẩm chất ${observed.quality}. Tên và chân dung đã đối chiếu với tư liệu trước; thế lực theo biểu tượng trên thẻ.`,
      inGameEvidence: { sourceId: videoCatalog.sourceId, time: observed.time, factionBasis: videoCatalog.factionBasis },
      sourceIds: [...new Set([...mergedSources, videoCatalog.sourceId])],
      ...(hero.id === 'ton-ngo-khong' ? {
        role: 'Tiên Phong', skills: wukongVideoSkills, statsSnapshot: wukongVideoStats, lore: hero.lore || hero.description,
        skillScope: 'Theo video Đồ giám nhận ngày 22/10/2026: cả bốn ô kỹ năng hiển thị Lv.3, đồng thời mô tả các mốc Lv.1–3. Giữ riêng từng mốc; phần đầu mô tả Ngự Vân Càn Nguyệt bị khuất nên chưa chép đủ.',
      } : {}),
    }
  }),
  ...videoCatalog.entries.filter(entry => !priorHeroes.some(hero => hero.id === entry.id)).map(entry => ({
    id: entry.id, name: entry.name, title: '', faction: entry.faction, quality: entry.quality, kind: 'than-tuong' as const,
    description: `${entry.name} xuất hiện trong Đồ giám ở nhóm phẩm chất ${entry.quality}. Video chưa mở hồ sơ chiến đấu hoặc kỹ năng của tướng này.`,
    inGameEvidence: { sourceId: videoCatalog.sourceId, time: entry.time, factionBasis: videoCatalog.factionBasis },
    sourceIds: [videoCatalog.sourceId],
  })),
]

export const heroes: Hero[] = catalogHeroes.map(hero => {
  const captured = skillVideoHeroes[hero.id]
  if (!captured) return hero
  const highestLevel = captured.skills[0].level
  const partialCount = captured.skills.filter(skill => skill.incomplete).length
  return {
    ...hero, role: captured.role, skills: captured.skills,
    description: `${hero.name} thuộc ${hero.faction}, phẩm chất ${hero.quality}, vai trò ${captured.role} theo hồ sơ trong game. Đã chép ${captured.skills.length} kỹ năng từ video nhận ngày ${skillVideo.received}.`,
    skillEvidence: { sourceId: skillVideo.sourceId, received: skillVideo.received },
    skillScope: `Theo video nhận ngày ${skillVideo.received}: ${captured.skills.length} ô kỹ năng hiển thị Lv.${highestLevel}; ${highestLevel === 1 ? 'chỉ ghi mốc Lv.1 nhìn thấy' : `giữ riêng mô tả các mốc Lv.1–${highestLevel}`}. Hồi chiêu là giá trị hiển thị ở cấp này; tooltip hiệu ứng được chép riêng, không mặc định áp dụng cho mọi cấp.${partialCount ? ` Có ${partialCount} mô tả bị cắt, đánh dấu ngay tại kỹ năng.` : ''} Chưa có máy chủ, phiên bản hoặc kết quả thử chiến đấu.`,
    sourceIds: [...new Set([...hero.sourceIds, skillVideo.sourceId])],
  }
})

export type Article = { id: string; title: string; category: string; summary: string; relatedIds?: string[]; sections: { id: string; title: string; text: string; list?: string[] }[]; sourceIds: string[] }
export const articles: Article[] = [
  { id: 'ban-cap-nhat-1-0-2', title: 'Bản cập nhật 1.0.2', category: 'Lịch sử cập nhật', summary: 'Phiên bản bổ sung ba Thánh Tôn, sự kiện Vân Mộng Tiên Tung, ngoại trang giới hạn và tính năng Thủ hộ, theo thông tin người dùng cung cấp.', sourceIds: [patch102.sourceId], relatedIds: ['van-mong-tien-tung', 'chien-than-lu-bo-xuat-the', 'thu-ho'], sections: [
    { id: 'thoi-diem', title: 'Thời điểm và nguồn', text: `Thông tin nhận ngày ${patch102.received}. Thời điểm phiên bản: ${patch102.releaseWindow}. Nguồn chưa nêu máy chủ hoặc phạm vi triển khai.` },
    { id: 'thanh-ton', title: 'Thần tướng Thánh Tôn', text: 'Ba Thánh Tôn được bổ sung trong phiên bản 1.0.2:', list: ['Thiên Bồng Nguyên Soái.', 'Tam Thái Tử.', 'Bạch Cốt Phu Nhân.'] },
    { id: 'su-kien', title: 'Sự kiện chủ đề và ngoại trang', text: `Cập nhật sự kiện chủ đề ${patch102.event}, với ngoại trang giới hạn ${patch102.outfit}. Chưa có lịch mở/đóng, điều kiện nhận hoặc thuộc tính ngoại trang.` },
    { id: 'thu-ho', title: 'Tính năng Thủ hộ', text: 'Bản cập nhật giới thiệu bốn Thủ hộ sẵn sàng ra trận:', list: patch102.guardians },
    { id: 'sua-loi', title: 'Sửa lỗi và cải thiện', text: 'Thông báo nêu sửa một số lỗi và cải thiện tính năng; chưa có danh sách lỗi hoặc nội dung điều chỉnh cụ thể.' },
  ] },
  { id: 'van-mong-tien-tung', title: 'Vân Mộng Tiên Tung', category: 'Sự kiện', summary: 'Sự kiện chủ đề được cập nhật ở phiên bản 1.0.2, theo thông tin người dùng cung cấp.', sourceIds: [patch102.sourceId], relatedIds: ['ban-cap-nhat-1-0-2', 'chien-than-lu-bo-xuat-the'], sections: [
    { id: 'noi-dung', title: 'Nội dung', text: `Sự kiện gắn với ngoại trang giới hạn ${patch102.outfit}.` },
    { id: 'thoi-gian', title: 'Thời gian và điều kiện', text: 'Chưa có ngày bắt đầu/kết thúc, máy chủ áp dụng, điều kiện tham gia hoặc bảng phần thưởng. Chưa xác định sự kiện đang mở ở thời điểm đọc wiki.' },
  ] },
  { id: 'chien-than-lu-bo-xuat-the', title: 'Chiến Thần Lữ Bố Xuất Thế', category: 'Ngoại trang', summary: 'Ngoại trang giới hạn được nhắc đến cùng sự kiện Vân Mộng Tiên Tung trong nội dung cập nhật 1.0.2.', sourceIds: [patch102.sourceId], relatedIds: ['van-mong-tien-tung', 'ngoai-trang'], sections: [
    { id: 'gioi-thieu', title: 'Giới thiệu', text: 'Nguồn người dùng cung cấp ghi tên ngoại trang là Chiến Thần Lữ Bố Xuất Thế. Chưa có ảnh ngoại trang hoặc xác nhận nhân vật sử dụng.' },
    { id: 'cach-nhan', title: 'Cách nhận và thuộc tính', text: 'Chưa có chi phí, cách nhận, thời hạn mở bán hoặc bảng thuộc tính.' },
  ] },
  { id: 'thu-ho', title: 'Hệ thống Thủ hộ', category: 'Phát triển', summary: 'Tính năng được bổ sung trong phiên bản 1.0.2 với Dần Hổ, Ngọ Mã, Thân Hầu và Thìn Long.', sourceIds: [patch102.sourceId], relatedIds: ['ban-cap-nhat-1-0-2'], sections: [
    { id: 'danh-sach', title: 'Danh sách Thủ hộ', text: 'Thông tin cập nhật ghi nhận bốn Thủ hộ sẵn sàng ra trận:', list: patch102.guardians },
    { id: 'co-che', title: 'Cơ chế và phát triển', text: 'Chưa có dữ liệu về cấp mở tính năng, số Thủ hộ được dùng cùng lúc, kỹ năng, cách sở hữu hoặc chi phí nâng cấp. Bốn tên trên được ghi trong danh mục tính năng Thủ hộ.' },
  ] },
  { id: 'dan-tran', title: 'Dàn trận tự do', category: 'Chiến đấu', summary: 'Đội hình chiến đấu gồm tối đa sáu tướng. Game cho phép sắp xếp nhiều tướng ở cùng một vị trí.', sourceIds: ['intro', 'home'], sections: [{ id: 'co-che', title: 'Cơ chế', text: 'Theo giới thiệu chính thức, cả sáu tướng có thể đứng chung một vị trí. Vị trí không bị giới hạn theo kiểu hàng trước và hàng sau cố định.' }, { id: 'vai-tro', title: 'Vai trò tướng', text: 'Hồ sơ hiện có xác nhận ba vai trò: Cận chiến của Dương Tiễn, Thủ hộ của Ngưu Ma Vương và Hỗ trợ của Đường Tăng.' }] },
  { id: 'chieu-mo', title: 'Chiêu mộ thần tướng', category: 'Nhân vật', summary: 'Hệ thống thu thập các nhân vật Tây Du để xây dựng đội hình.', sourceIds: ['store', 'intro'], sections: [{ id: 'tong-quan', title: 'Tổng quan', text: 'Game có cơ chế chiêu mộ và kết hợp thần tướng. Xác suất chiêu mộ và quy tắc bảo đảm chưa có trong nguồn đã đối chiếu.' }, { id: 'uu-dai', title: 'Ưu đãi ra mắt', text: 'Bài giới thiệu Funtap nêu ưu đãi lượt quay miễn phí. Bài không có bảng lịch nhận hoặc thời hạn chi tiết.' }] },
  { id: 'ngoai-trang', title: 'Ngoại trang', category: 'Nhân vật', summary: 'Tính năng thay đổi diện mạo của thần tướng.', sourceIds: ['intro', 'store', patch102.sourceId], sections: [{ id: 'tuy-bien', title: 'Tùy biến', text: 'Nhà phát hành giới thiệu khả năng thay đổi ngoại trang cho nhân vật. Mô tả cửa hàng cũng nhắc đến việc nhiều nhân vật có thể sử dụng ngoại trang.' }, { id: 'danh-sach', title: 'Danh sách ngoại trang', text: 'Thông tin cập nhật 1.0.2 do người dùng cung cấp bổ sung ngoại trang giới hạn Chiến Thần Lữ Bố Xuất Thế thuộc sự kiện Vân Mộng Tiên Tung. Chưa có ảnh, nhân vật sử dụng, cách nhận hoặc thuộc tính.' }] },
  { id: 'offline', title: 'Treo máy và tài nguyên offline', category: 'Tài nguyên', summary: 'Tài nguyên được tích lũy khi người chơi rời game.', sourceIds: ['store'], sections: [{ id: 'thu-thap', title: 'Thu thập', text: 'Mô tả chính thức cho biết đội hình tiếp tục tích lũy tài nguyên khi offline. Người chơi trở lại game để nhận phần thưởng.' }, { id: 'gioi-han', title: 'Giới hạn', text: 'Nguồn cửa hàng không công bố thời gian tích lũy tối đa, tốc độ nhận hoặc bảng tài nguyên theo cấp độ.' }] },
  { id: 'cuoc-chien-tu-di', title: 'Cuộc Chiến Tu Di', category: 'Liên server', summary: 'Chiến trường môn phái liên server.', sourceIds: ['intro'], sections: [{ id: 'hinh-thuc', title: 'Hình thức', text: 'Cuộc Chiến Tu Di là hoạt động hỗn chiến môn phái liên server. Bài giới thiệu gọi đây là chiến trường diễn ra liên tục.' }, { id: 'the-le', title: 'Thể lệ', text: 'Chưa có điều kiện tham gia, quy tắc tính điểm và bảng phần thưởng trong nguồn công khai đã đọc.' }] },
  { id: 'dinh-cao-tam-gioi', title: 'Đỉnh Cao Tam Giới', category: 'Liên server', summary: 'Đấu trường cạnh tranh thứ hạng giữa các server.', sourceIds: ['intro'], sections: [{ id: 'hinh-thuc', title: 'Hình thức', text: 'Đỉnh Cao Tam Giới được giới thiệu là đấu trường liên server. Người chơi thi đấu để giành thứ hạng.' }, { id: 'xep-hang', title: 'Xếp hạng', text: 'Cách ghép trận, điểm xếp hạng, chu kỳ mùa giải và phần thưởng cần bổ sung từ giao diện trong game.' }] },
  { id: 'than-vo-quyet-chien', title: 'Thần Võ Quyết Chiến', category: 'Liên server', summary: 'Đối kháng tổ đội 3v3 liên server.', sourceIds: ['intro'], sections: [{ id: 'hinh-thuc', title: 'Hình thức', text: 'Bài giới thiệu chính thức xác nhận hình thức tổ đội 3v3 giữa các server.' }, { id: 'dieu-kien', title: 'Điều kiện tham gia', text: 'Nguồn hiện có chưa công bố cấp mở, giờ thi đấu, cách lập tổ đội và quy tắc thắng thua.' }] },
  { id: 'diem-danh', title: 'Điểm danh 45 ngày', category: 'Phúc lợi', summary: 'Lộ trình nhận thần tướng qua đăng nhập.', sourceIds: ['intro', 'store'], sections: [{ id: 'lo-trinh', title: 'Lộ trình', text: 'Trang giới thiệu và cửa hàng đều nhắc đến phần thưởng tướng trong 45 ngày. Danh sách thưởng từng ngày chưa được công khai trong các nguồn này.' }, { id: 'ngay-dau', title: 'Ngày đầu', text: 'Trang chủ nêu tặng Dương Tiễn; Google Play mô tả lựa chọn Ngộ Không, Dương Tiễn hoặc Na Tra. Cần đối chiếu theo máy chủ và đợt mở game.' }] },
  { id: 'vip', title: 'VIP và ưu đãi ra mắt', category: 'Phúc lợi', summary: 'Các ưu đãi trong bài giới thiệu của nhà phát hành.', sourceIds: ['intro'], sections: [{ id: 'vip', title: 'VIP', text: 'Bài giới thiệu nêu khả năng nhận VIP qua quá trình chơi. Nguồn này không có bảng cấp VIP, điều kiện tích lũy hoặc quyền lợi từng cấp.' }, { id: 'goi-dau', title: 'Gói đầu tiên', text: 'Ngọc Diện Hồ Ly được giới thiệu là tướng hỗ trợ nhận qua gói ưu đãi đầu tiên. Chưa có giá hoặc thời hạn gói trong nguồn đã đọc.' }] },
  { id: 'giftcode', title: 'Cách đổi giftcode', category: 'Hướng dẫn', summary: 'Hướng dẫn đổi code qua Playfun và trong game.', sourceIds: ['redeem', 'alpha'], sections: [{ id: 'playfun', title: 'Đổi qua Playfun', text: 'Hướng dẫn của Funtap sử dụng cổng Playfun.', list: ['Mở Playfun, chọn Hắc Tây Du: Chương Cấm.', 'Đăng nhập tài khoản chơi game.', 'Chọn Giftcode → Đổi code, chọn server và nhân vật.', 'Nhập mã, xác nhận nhận quà và kiểm tra thư trong game.'] }, { id: 'trong-game', title: 'Đổi trong game', text: 'AFKMobi ngày 23/09/2026 hướng dẫn: Động Thiên → Phúc Lợi → Đổi Phúc Lợi → nhập mã → Nhận. Đường dẫn được mô tả cho Alpha Test; có thể khác phiên bản hiện tại.' }, { id: 'loi', title: 'Lỗi nhận quà', text: 'Kiểm tra ký tự mã, nhân vật và server đã chọn. Nếu game báo hết hạn hoặc không đúng điều kiện, đối chiếu thông báo với bài phát mã.' }] },
  { id: 'tai-game', title: 'Tải và cài đặt game', category: 'Hướng dẫn', summary: 'Cài đặt trên Android, iOS và máy tính qua giả lập.', sourceIds: ['download'], sections: [{ id: 'dien-thoai', title: 'Android và iOS', text: 'Mở Google Play hoặc App Store, tìm Hắc Tây Du: Chương Cấm và kiểm tra đơn vị phát hành Funtap.' }, { id: 'may-tinh', title: 'Máy tính', text: 'Nhà phát hành hướng dẫn chơi qua giả lập Android: mở Google Play trong giả lập rồi tìm và cài game. Nguồn không công bố bản PC độc lập.' }] },
  { id: 'nap-the', title: 'Nạp thẻ', category: 'Hướng dẫn', summary: 'Các kênh nạp được nhà phát hành hướng dẫn.', sourceIds: ['recharge', 'ingame'], sections: [{ id: 'cong-nap', title: 'Cổng nạp', text: 'Mở cổng nạp Funtap, chọn game, server, nhân vật và FunID. Hướng dẫn yêu cầu kiểm tra đúng ba thông tin trước khi giao dịch.' }, { id: 'ingame', title: 'Trong game', text: 'Tại Thành chính, mở biểu tượng Nạp, chọn gói và phương thức thanh toán. Wiki chỉ dẫn lại hướng dẫn, không nhận thanh toán.' }] },
  { id: 'cot-truyen', title: 'Cốt truyện', category: 'Thế giới', summary: 'Bối cảnh Tam Giới sau hành trình thỉnh kinh.', sourceIds: ['intro'], sections: [{ id: 'chuong-cam', title: 'Chương Cấm', text: 'Theo giới thiệu, chân kinh ẩn chứa một phong ấn. Đường Tam Tạng đánh đổi Phật vị để tìm cách mở chương kinh cấm kỵ.' }, { id: 'dai-thanh', title: 'Giải thoát Đại Thánh', text: 'Ngộ Không bị giam bởi bốn sợi xích trong một trăm năm. Người chơi trong vai Thiên Mệnh Nhân khám phá phong ấn và tìm cách giải thoát nhân vật.' }] },
  { id: 'luc-can', title: 'Chuỗi sự kiện Lục Căn', category: 'Sự kiện cộng đồng', summary: 'Chuỗi sự kiện fanpage gắn với sáu mảnh Lục Căn và quà cộng đồng.', sourceIds: ['nhan-can', 'ti-can', 'live'], sections: [
    { id: 'nhan-can', title: 'Nhãn Căn', text: 'Nhãn Căn được gọi là Nhãn Khán Hỉ, do Hắc Hùng Tinh giữ ở Hắc Phong Sơn trong phần dẫn truyện của sự kiện. Thời gian sự kiện: 10:00 ngày 15/10 đến 10:00 ngày 21/10/2026. Bài công bố mã dùng chung NHANCAN111.' },
    { id: 'ti-can', title: 'Tị Căn', text: 'Tị Căn còn gọi là Tị Khứu Ái, gắn với Hoàng Mi Đại Vương tại Tiểu Lôi Âm Tự. Sự kiện fan cứng diễn ra từ 16:00 ngày 16/10 đến 10:00 ngày 31/10/2026. Fanpage nêu quà cho 100 fan cứng may mắn và 2 người nhận quà Thiên Mệnh; không phải phần thưởng chắc chắn cho mọi tài khoản.' },
    { id: 'cac-can-khac', title: 'Các Căn còn lại', text: 'Thông báo livestream 20/10 nhắc tới Căn số 6. Chưa thu thập đủ bài để mô tả bốn Căn còn lại. Đây là chuỗi sự kiện cộng đồng; chưa có cơ sở suy ra một hệ thống nâng cấp Lục Căn trong game.' },
  ] },
  { id: 'qua-dang-ky', title: 'Quà đăng ký trước và lịch mở server', category: 'Phúc lợi', summary: 'Mở server lúc 10:00 ngày 21/10/2026 theo bài mở tải trên fanpage.', sourceIds: ['preload', 'launch-rewards'], sections: [
    { id: 'mo-tai', title: 'Lịch mở', text: 'Bài chính thức mở tải cho biết người chơi có thể cài trước trên App Store và Google Play; server mở lúc 10:00 ngày 21/10/2026.' },
    { id: 'qua', title: 'Tổng quà đăng ký trước', text: 'Bài mở tải công bố danh sách dưới đây. Quà gửi qua thư khi đăng nhập lần đầu sau mở server.', list: ['Thiên Mệnh Linh Quả ×20.', 'Tinh Phách-Tuyệt 5 Sao ×50.', 'Tinh Phách Thần Tướng 5 Sao ×50.', 'Lệnh Triệu Hồi Tam Giới ×10.', 'Mảnh Cang Kim Tinh Quân ×50.', 'Tiên Ngọc ×2.150.'] },
    { id: 'luu-y', title: 'Khác biệt giữa các bài', text: 'Một bài quảng bá khác nhắc 1.000 lượt rút, Cang Kim Tinh Quân, Trư Bát Giới và thần tướng đỏ 5 sao. Không cộng gộp mọi bài thành một gói nhận ngay; cần đối chiếu từng mốc và điều kiện trong game.' },
  ] },
  { id: 'the-luc', title: 'Các thế lực', category: 'Nhân vật', summary: 'Ba nhóm được công bố gồm Tiên Gia, Yêu Tộc và Chúng Sinh.', sourceIds: ['tien-gia', 'yeu-toc', 'chung-sinh'], sections: [
    { id: 'tien-gia', title: 'Tiên Gia', text: 'Bài giới thiệu nhắc Dương Tiễn, Hàng Long Tôn Giả, Hằng Nga và Tứ Đại Thiên Vương; bộ ảnh kèm theo có Lý Tinh. Chưa tách Tứ Đại Thiên Vương thành bốn hồ sơ nếu chưa xác nhận tên từng đơn vị trong game.' },
    { id: 'yeu-toc', title: 'Yêu Tộc', text: 'Bài giới thiệu liệt kê Ngộ Không, Hồng Hài Nhi, Đại Bằng Vương, Hắc Hùng Tinh và Hổ Tiên Phong. Hồ sơ trang chủ bổ sung Ngưu Ma Vương; phần trả lời của fanpage nhắc Hoàng Mi.' },
    { id: 'chung-sinh', title: 'Chúng Sinh', text: 'Bài giới thiệu nêu Đường Tam Tạng, Na Tra, Trư Ngộ Năng và La Sát Nữ. Bộ ảnh kèm theo xác nhận thêm Trấn Nguyên Tử và Khổng Tước Công Chúa.' },
  ] },
]
export const codeRewardEvidence = {
  received: '22/10/2026',
  mailDate: '21/10/2026',
  mailValidity: '7 ngày',
  entries: [
  { code: 'HACTAYDU888', rewards: "Tiên Ngọc ×50; Thiên Mệnh Linh Quả ×2; hộp vật phẩm (không hiện số lượng)" },
  { code: 'TAYDUKI', rewards: "Thiên Mệnh Linh Quả ×2" },
  { code: 'CHUONGCAM', rewards: "Vật phẩm biểu tượng bột tím ×100; Thiên Mệnh Linh Quả ×2" },
  { code: 'HTDCC999', rewards: "Vật phẩm nền tím ×100 (chưa rõ tên); Thiên Mệnh Linh Quả ×2" },
  { code: '45THANTUONG', rewards: "Thiên Mệnh Linh Quả ×2; vé màu tím ×3" },
  { code: 'DUONGTIEN', rewards: "Thiên Mệnh Linh Quả ×2; mảnh 5 sao (khung cam) ×20" },
  { code: 'NGOKHONG', rewards: "Thiên Mệnh Linh Quả ×2; mảnh 5 sao (khung cam) ×20" },
  { code: 'THUANPHAM', rewards: "Thiên Mệnh Linh Quả; lệnh màu đỏ; túi tài nguyên (cả ba ô không hiện số lượng)" },
  { code: 'NATRA', rewards: "Thiên Mệnh Linh Quả ×2; mảnh 5 sao (khung cam) ×20" },
  { code: 'VAN97', rewards: "Thiên Mệnh Linh Quả; lệnh màu đỏ; túi tài nguyên (cả ba ô không hiện số lượng)" },
  { code: 'HOANGDZ', rewards: "Thiên Mệnh Linh Quả; lệnh màu đỏ; túi tài nguyên (cả ba ô không hiện số lượng)" },
  { code: 'NHANCAN111', rewards: "Tiên Ngọc ×50; Thiên Mệnh Linh Quả ×2; mảnh 5 sao (khung đỏ) ×10" },
  { code: 'NHICAN222', rewards: "Tiên Ngọc ×50; Thiên Mệnh Linh Quả ×2; mảnh 5 sao (khung đỏ) ×10" },
  { code: 'TICAN333', rewards: "Tiên Ngọc ×50; Thiên Mệnh Linh Quả ×2; mảnh 5 sao (khung đỏ) ×10" },
  { code: 'THIETCAN444', rewards: "Tiên Ngọc ×50; Thiên Mệnh Linh Quả ×2; mảnh 5 sao (khung đỏ) ×10" },
  { code: 'YCAN666', rewards: "Tiên Ngọc ×50; Thiên Mệnh Linh Quả ×2; mảnh 5 sao (khung đỏ) ×10" },
  { code: 'DKT10K', rewards: "Tiên Ngọc ×100; Thiên Mệnh Linh Quả ×5; mảnh 5 sao (khung cam) ×10" },
  { code: 'DKT5K', rewards: "Tiên Ngọc ×50; Thiên Mệnh Linh Quả ×5; mảnh 5 sao (khung đỏ) ×5" },
  { code: 'DKT20K', rewards: "Tiên Ngọc ×200; Thiên Mệnh Linh Quả ×5; mảnh 5 sao (khung đỏ) ×20" },
  { code: 'DKT50K', rewards: "Tiên Ngọc ×500; lệnh màu đỏ ×10; mảnh 5 sao (khung cam) ×20" },
  { code: 'HOICHIEUTROIMUA', rewards: "Vật phẩm biểu tượng bình xanh ×50; Thiên Mệnh Linh Quả ×2" },
  { code: 'DAT100KDKT', rewards: "Tiên Ngọc ×1.000; mảnh 5 sao (khung đỏ) ×25; mảnh tướng có chân dung ×50" },
  { code: 'DKT30K', rewards: "Tiên Ngọc ×300; Thiên Mệnh Linh Quả ×5; mảnh 5 sao (khung cam) ×20" },
  { code: 'THANCAN555', rewards: "Tiên Ngọc ×50; Thiên Mệnh Linh Quả ×2; mảnh 5 sao (khung đỏ) ×10" },
  ],
}
export const giftcodes = [
  { code: 'NHANCAN111', event: 'Khai Nhãn Căn · toàn server', published: '15/10/2026', checked: checkedDate, status: 'Fanpage công bố · chưa thử trong game', verifiedActive: false, archived: false, rewards: 'Bài không nêu chi tiết', expiry: 'Sự kiện kết thúc 10:00 ngày 21/10/2026; không nêu hạn riêng của mã', sourceId: 'nhan-can' },
  ...starterCodeImage.codes.filter(code => code !== 'NHANCAN111').map(code => ({
    code, event: 'Bộ code tân thủ', published: 'Ảnh không ghi ngày', checked: checkedDate,
    status: 'Chưa thử trong game', verifiedActive: false, archived: false,
    rewards: 'Ảnh không ghi chi tiết', expiry: 'Ảnh không ghi hạn dùng', sourceId: starterCodeImage.sourceId,
  })),
  { code: 'ALPHA3R6', event: 'Alpha Test · lưu trữ', published: '23/09/2026', checked: checkedDate, status: 'Mã thử nghiệm cũ · chưa rõ hiệu lực', verifiedActive: false, archived: true, rewards: 'Nguồn không ghi chi tiết', expiry: 'Không được công bố', sourceId: 'alpha' },
].map(code => {
  const evidence = codeRewardEvidence.entries.find(entry => entry.code === code.code)
  return {
    ...code,
    ...(evidence ? { rewards: evidence.rewards, checked: codeRewardEvidence.received, status: 'Có ảnh thư thưởng · 21/10/2026' } : {}),
    rewardEvidence: evidence,
    rewardSourceId: evidence ? 'player-code-rewards' : undefined,
  }
})
export const news = [
  { title: 'Livestream Dương Tiễn Khai Nhãn', date: '20/10/2026 · 20:00 (GMT+7)', description: 'Fanpage thông báo phát giftcode trong livestream và nhắc đến Lục Căn. Bài thông báo chưa ghi mã cụ thể.', sourceId: 'live' },
  { title: 'Code sự kiện Nhãn Căn: NHANCAN111', date: '15/10–21/10/2026', description: 'Fanpage công bố mã dùng chung toàn server NHANCAN111. Mốc kết thúc sự kiện là 10:00 ngày 21/10; chưa xác nhận hạn riêng của mã.', sourceId: 'nhan-can' },
]
export const versionUpdates = [
  { title: 'Bản cập nhật 1.0.2', date: 'Khoảng một tuần trước 20/10/2026 · thời điểm ước tính', description: 'Bổ sung Thiên Bồng Nguyên Soái, Tam Thái Tử, Bạch Cốt Phu Nhân; sự kiện Vân Mộng Tiên Tung, ngoại trang giới hạn và bốn Thủ hộ. Thông tin do người dùng cung cấp.', sourceId: patch102.sourceId, articleId: 'ban-cap-nhat-1-0-2' },
]
export const missingData = [
  { title: 'Danh sách tướng đầy đủ', detail: 'Tên, thế lực, phẩm chất, vai trò và cách nhận của toàn bộ tướng trong Đồ giám.' },
  { title: 'Kỹ năng và chỉ số', detail: 'Đã ghi 166 kỹ năng của 43 tướng từ video ngày 23/10. Cần phần đầu các mô tả bị cắt (được đánh dấu trong từng hồ sơ), tooltip còn khuất, kỹ năng Thánh Tôn/Bạch Cốt Tinh, chỉ số gốc và máy chủ/phiên bản.' },
  { title: 'Trang bị và phát triển', detail: 'Danh mục vật phẩm, tên các hệ thống hiển thị trong game, thuộc tính và chi phí nâng cấp.' },
  { title: 'Phiên bản 1.0.2 và Thủ hộ', detail: 'Đã có nội dung cập nhật và bốn tên Thủ hộ. Cần ảnh tính năng, kỹ năng, cấp mở, cách nhận và chi phí nâng cấp; lịch sự kiện Vân Mộng Tiên Tung và ngoại trang giới hạn.' },
  { title: 'Lục Căn', detail: 'Đã có Nhãn Căn và Tị Căn trong chuỗi sự kiện fanpage; cần bài về bốn Căn còn lại và ảnh nếu có tính năng tương ứng trong game.' },
  { title: 'Sự kiện và phần thưởng', detail: 'Thời gian, máy chủ áp dụng, mốc thưởng, điểm danh 45 ngày và bảng VIP.' },
  { title: 'Thông tin giftcode còn thiếu', detail: 'Đã có 24 mã và ảnh thư phần thưởng đề ngày 21/10/2026. Cần tên đầy đủ của các vật phẩm chỉ hiện biểu tượng, số lượng các ô không ghi số, hạn dùng mã và máy chủ áp dụng.' },
]
export const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase()
