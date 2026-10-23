import { heroes, tierEntries, tierSheets, checkedDate, videoCatalog, tierMakerTemplate } from './data'
import { ImagePortrait } from './HeroPicture'
import TierBuilder from './TierBuilder'

export default function TierList() {
  return <>
    <p>Tự tạo bảng xếp hạng bằng toàn bộ tướng đã cập nhật trên wiki. Bảng test nội bộ và mẫu TierMaker được giữ bên dưới để tham khảo.</p>
    <TierBuilder />
    <section id="tier-maker" className="wiki-section" tabIndex={-1}>
      <h2>Mẫu TierMaker tham khảo</h2>
      <p><strong>{tierMakerTemplate.title}</strong> — mẫu của {tierMakerTemplate.author}, gồm <strong>{tierMakerTemplate.imageCount} ảnh</strong> và các hạng <strong>{tierMakerTemplate.ranks.join(' / ')}</strong>. Trang nguồn ghi cập nhật lần cuối ngày {tierMakerTemplate.modified}.</p>
      <div className="tier-maker-actions">
        <a className="button secondary" href={tierMakerTemplate.url} target="_blank" rel="noreferrer">Tạo tier list trên TierMaker ↗</a>
        <a href={tierMakerTemplate.communityUrl} target="_blank" rel="noreferrer">Xem xếp hạng cộng đồng ↗</a>
      </div>
      <ol><li>Mở mẫu TierMaker và kéo ảnh tướng vào hạng mong muốn.</li><li>Chỉnh tên hạng, thứ tự tướng theo đánh giá của bạn.</li><li>Chọn “Save or Download” trên TierMaker để lưu hoặc tải bảng.</li></ol>
      <p className="table-note">Kiểm tra ngày {tierMakerTemplate.accessed}: đây là mẫu chưa xếp hạng; trang cộng đồng chưa có tier list được hiển thị và chưa đủ dữ liệu tính trung bình. Các hạng trong mẫu không phải phẩm chất tướng trong game.</p>
    </section>
    <h2>Bảng test nội bộ</h2>
    <p>Hai bảng Thần tướng và Thánh Tôn do người dùng cung cấp, được mô tả là kết quả thử nghiệm nội bộ. Wiki nhận ảnh ngày <strong>{checkedDate}</strong>; chưa có tên tác giả, ngày thử nghiệm hoặc phiên bản.</p>
    <div className="notice">Hạng S/A/B/C được chép theo ảnh test, là đánh giá tham khảo. Đây không phải phẩm chất tướng trong game. Đã đối chiếu tên và chân dung của 31 Thần tướng với video Đồ giám nhận ngày {videoCatalog.received}; nhóm Thánh Tôn vẫn chờ tư liệu trong game.</div>
    <p className="table-note">Chân dung nhỏ dùng bản tăng nét để dễ xem. Ảnh gốc bên dưới được giữ nguyên; có thể chuyển về ảnh gốc trong từng hồ sơ tướng.</p>
    {tierSheets.map(sheet => <section key={sheet.id} id={`tier-${sheet.id}`} className="wiki-section" tabIndex={-1}>
      <h2>{sheet.title} <span className="formation-count">{tierEntries.filter(e => e.portrait.sheet === sheet.id).length} tên trong ảnh</span></h2>
      <details className="code-source-image"><summary>Xem ảnh gốc bảng {sheet.title}</summary><figure><a href={`${import.meta.env.BASE_URL}${sheet.path}`} target="_blank" rel="noreferrer"><img src={`${import.meta.env.BASE_URL}${sheet.path}`} width={sheet.width} height={sheet.height} loading="lazy" alt={`Tier list ${sheet.title} thử nghiệm nội bộ do người dùng cung cấp`} /></a><figcaption>Ảnh gốc được lưu nguyên bản. Thông tin về nguồn và phiên bản đang được bổ sung.</figcaption></figure></details>
      <table className="wikitable tier-table"><thead><tr><th scope="col">Hạng test</th><th scope="col">Tên và chân dung trong ảnh</th></tr></thead><tbody>{(['S', 'A', 'B', 'C'] as const).map(rank => {
        const entries = tierEntries.filter(entry => entry.portrait.sheet === sheet.id && entry.tier === rank)
        return entries.length ? <tr key={rank}><th scope="row"><span className="tier-rank">{rank}</span></th><td><ul className="tier-members">{entries.map(entry => <li key={entry.name}>
          <span className="tier-avatar"><ImagePortrait portrait={entry.portrait} name={entry.name} small /></span><span>{entry.heroId ? <a href={`#hero/${entry.heroId}`}>{entry.name}</a> : <strong>{entry.name}</strong>}{entry.candidateId && <small>Chờ đối chiếu với <a href={`#hero/${entry.candidateId}`}>{heroes.find(h => h.id === entry.candidateId)?.name}</a></small>}{entry.heroId && heroes.find(h => h.id === entry.heroId)?.imageOnly && <small>Hồ sơ từ ảnh test</small>}</span>
        </li>)}</ul></td></tr> : null
      })}</tbody></table>
    </section>)}
    <section id="tier-names" className="wiki-section" tabIndex={-1}><h2>Đối chiếu tên</h2><p>Giữ nguyên nhãn trên ảnh test; các liên kết dẫn đến tên hiện tại trong Đồ giám. Đã đối chiếu Lý Tịnh, Hoàng My, Cang Kim Tinh Quân, Đại Bàng Vương và Thiết Phiến Công Chúa bằng tên và chân dung trong video. La Sát Nữ được dùng làm tên cũ của Thiết Phiến Công Chúa; hồ sơ trùng đã gộp, đường dẫn cũ vẫn hoạt động.</p><p>Đường Tăng/Đường Tam Tạng và Trư Ngộ Năng/Trư Bát Giới dùng chung hồ sơ. Các tên ở bảng Thánh Tôn được lưu riêng theo bảng test; video chưa xác nhận quan hệ nâng cấp hoặc thay thế giữa các dạng.</p></section>
  </>
}
