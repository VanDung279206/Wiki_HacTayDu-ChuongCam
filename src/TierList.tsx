import { heroes, tierEntries, tierSheets, checkedDate } from './data'
import { ImagePortrait } from './HeroPicture'

export default function TierList() {
  return <>
    <p>Hai bảng Thần tướng và Thánh Tôn do người dùng cung cấp, được mô tả là kết quả thử nghiệm nội bộ. Wiki nhận ảnh ngày <strong>{checkedDate}</strong>; chưa có tên tác giả, ngày thử nghiệm hoặc phiên bản.</p>
    <div className="notice">Hạng S/A/B/C được chép theo ảnh test, là đánh giá tham khảo. Đây không phải phẩm chất tướng trong game. Các tên và hình mới vẫn cần đối chiếu với Đồ giám bản chính thức.</div>
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
    <section id="tier-names" className="wiki-section" tabIndex={-1}><h2>Đối chiếu tên</h2><p>Đường Tam Tạng và Trư Ngộ Năng đã có trong hồ sơ Đường Tăng và Trư Bát Giới nên dùng chung hồ sơ. Lý Tịnh, Kháng Kim Tinh Quân và Hoàng My đang chờ đối chiếu với tên trong các nguồn đã có; wiki giữ nguyên chữ trên ảnh, chưa tự gộp.</p><p>Các tên ở bảng Thánh Tôn được lưu thành hồ sơ riêng theo bảng test. Chưa xác nhận quan hệ nâng cấp hoặc thay thế giữa các dạng tướng.</p></section>
  </>
}
