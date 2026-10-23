// Transcribed and visually checked against the player video received 23/10/2026.
// Video and review frames remain outside the public repository.
import type { HeroSkill } from './data'

export const skillVideo = {
  "sourceId": "player-skill-video-2026-10-23",
  "received": "23/10/2026",
  "durationSeconds": 665.32,
  "heroCount": 43,
  "skillCount": 166,
  "scope": "31 tướng Tuyệt có 4 kỹ năng và mô tả Lv.1–3; 6 tướng Đỉnh có 4 kỹ năng và mô tả Lv.1–2; 6 tướng Ưu có 3 kỹ năng ở Lv.1. Chưa có kỹ năng Thánh Tôn hoặc Bạch Cốt Tinh trong video.",
  "sourcePath": "assets/skills-video-2026-10-23.txt"
}

export const skillVideoHeroes: Record<string, { role: string; skills: HeroSkill[] }> = {
  "ly-tinh": {
    "role": "Thủ Hộ",
    "skills": [
      {
        "name": "Linh Lung Hóa Thuẫn",
        "time": "00:14",
        "level": 3,
        "description": "Bản thân nhận Huyền Thuẫn.",
        "levels": [
          {
            "level": 1,
            "description": "Bản thân nhận Huyền Thuẫn."
          },
          {
            "level": 2,
            "description": "Một Thần Tướng ngẫu nhiên phe ta, trừ bản thân, nhận Huyền Thuẫn."
          },
          {
            "level": 3,
            "description": "Số mục tiêu Thần Tướng phe ta có thể nhận kỹ năng tăng thành 2."
          }
        ],
        "effects": [
          {
            "name": "Huyền Thuẫn",
            "description": "Điểm Huyền Thuẫn bằng 7% HP Lý Tịnh tối đa, duy trì 5 giây, có thể cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 12,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thông Pháp Cố Nguyên",
        "time": "00:11",
        "level": 3,
        "description": "HP tăng 15%; Giảm ST tăng 10%.",
        "levels": [
          {
            "level": 1,
            "description": "HP tăng 15%; Giảm ST tăng 10%."
          },
          {
            "level": 2,
            "description": "HP tăng lên 25%; Giảm ST tăng lên 15%."
          },
          {
            "level": 3,
            "description": "HP tăng lên 35%; Giảm ST tăng lên 20%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Bảo Tháp Trấn Yêu",
        "time": "00:08",
        "level": 3,
        "description": "Mục tiêu chịu sát thương vật lý bằng 350% Công của Lý Tịnh, đồng thời nhận Choáng.",
        "levels": [
          {
            "level": 1,
            "description": "Mục tiêu chịu sát thương vật lý bằng 350% Công của Lý Tịnh, đồng thời nhận Choáng."
          },
          {
            "level": 2,
            "description": "Sát thương tăng lên 400% Công của Lý Tịnh, đồng thời thi triển Choáng lên mục tiêu."
          },
          {
            "level": 3,
            "description": "Sát thương tăng lên 450% Công của Lý Tịnh."
          }
        ],
        "effects": [
          {
            "name": "Choáng",
            "description": "Không thể hành động trong 4 giây; không thể cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hào Quang Phù Hộ",
        "time": "00:04",
        "level": 3,
        "description": "Khi trận đấu bắt đầu, 2 Thần Tướng có HP thấp nhất phe ta, trừ bản thân, nhận Yểm Hộ-Sơ. Sau đó mỗi giây có thêm 2 Thần Tướng HP thấp nhất phe ta, trừ bản thân, nhận Yểm Hộ-Sơ.",
        "levels": [
          {
            "level": 1,
            "description": "Khi trận đấu bắt đầu, 2 Thần Tướng có HP thấp nhất phe ta, trừ bản thân, nhận Yểm Hộ-Sơ. Sau đó mỗi giây có thêm 2 Thần Tướng HP thấp nhất phe ta, trừ bản thân, nhận Yểm Hộ-Sơ."
          },
          {
            "level": 2,
            "description": "Yểm Hộ nâng cấp thành Yểm Hộ-Trung."
          },
          {
            "level": 3,
            "description": "Yểm Hộ nâng cấp thành Yểm Hộ-Cao; khi vào trận, bản thân nhận thêm Huyền Linh Ngự Giáp."
          }
        ],
        "effects": [
          {
            "name": "Yểm Hộ-Cao",
            "description": "50% ST Cuối khi mục tiêu được bảo vệ bị tấn công trực tiếp do người thi triển chịu; duy trì 1 giây, không thể cộng dồn, có thể giải trừ."
          },
          {
            "name": "Huyền Linh Ngự Giáp",
            "description": "Kháng V.Lý tăng 10%, ST Phép tăng 10%; duy trì 15 giây, có thể cộng dồn, không thể giải trừ. Giữ nguyên nhãn chỉ số như video."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "hang-long-ton-gia": {
    "role": "Cận Chiến",
    "skills": [
      {
        "name": "Phiên Thiên Nhất Phiến",
        "time": "00:29",
        "level": 3,
        "description": "Gây sát thương vật lý bằng 260% Công lên toàn bộ Thần Tướng địch trong hình quạt phía trước; có 50% tỷ lệ kèm Giảm Thủ V.Lý.",
        "levels": [
          {
            "level": 1,
            "description": "Gây sát thương vật lý bằng 260% Công lên toàn bộ Thần Tướng địch trong hình quạt phía trước; có 50% tỷ lệ kèm Giảm Thủ V.Lý."
          },
          {
            "level": 2,
            "description": "Sát thương tăng lên 290%; tỷ lệ kèm Giảm Thủ V.Lý tăng lên 70%."
          },
          {
            "level": 3,
            "description": "Sát thương tăng lên 330%; tỷ lệ kèm Giảm Thủ V.Lý tăng lên 100%."
          }
        ],
        "effects": [
          {
            "name": "Giảm Thủ V.Lý",
            "description": "Thủ V.Lý giảm 20%, duy trì 9 giây, không thể cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Nhân Quả Luân Hồi",
        "time": "00:26",
        "level": 3,
        "description": "Thủ Phép tăng 15%; Công tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ Phép tăng 15%; Công tăng 5%."
          },
          {
            "level": 2,
            "description": "Thủ Phép tăng lên 20%; Công tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Thủ Phép tăng lên 25%; Công tăng lên 15%; Xuyên Thủ V.Lý tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Đấu Long Giai Trận",
        "time": "00:23",
        "level": 3,
        "description": "Phần đầu mô tả bị khuất. Phần đọc được: tấn công thẳng phía trước, tổng sát thương vật lý bằng 380% Công bản thân; lần Công thứ 3 đẩy lùi địch có Độ Bền nhỏ hơn 5. Sau đó có 50% tỷ lệ thi triển Định Thân lên mục tiêu phía trước.",
        "levels": [
          {
            "level": 1,
            "description": "Phần đầu mô tả bị khuất. Phần đọc được: tấn công thẳng phía trước, tổng sát thương vật lý bằng 380% Công bản thân; lần Công thứ 3 đẩy lùi địch có Độ Bền nhỏ hơn 5. Sau đó có 50% tỷ lệ thi triển Định Thân lên mục tiêu phía trước."
          },
          {
            "level": 2,
            "description": "Sát thương tăng lên 440%; tỷ lệ Định Thân tăng lên 60%."
          },
          {
            "level": 3,
            "description": "Sát thương tăng lên 500%; tỷ lệ Định Thân tăng lên 70%."
          }
        ],
        "effects": [
          {
            "name": "Định Thân",
            "description": "Không thể hành động; không thể cộng dồn, có thể giải trừ. Khung này không nêu thời gian duy trì."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      },
      {
        "name": "La Hán Kim Thân",
        "time": "00:20",
        "level": 3,
        "description": "Khi trận đấu bắt đầu, bản thân nhận Tăng Giảm ST.",
        "levels": [
          {
            "level": 1,
            "description": "Khi trận đấu bắt đầu, bản thân nhận Tăng Giảm ST."
          },
          {
            "level": 2,
            "description": "Khi Hàng Long Tôn Giả lần đầu có HP thấp hơn 30%, bản thân nhận Tăng Bạo."
          },
          {
            "level": 3,
            "description": "Ngưỡng kích hoạt đổi thành khi HP thấp hơn 50%."
          }
        ],
        "effects": [
          {
            "name": "Tăng Giảm ST",
            "description": "Giảm ST tăng 15%, duy trì 9 giây, không thể cộng dồn, có thể giải trừ."
          },
          {
            "name": "Tăng Bạo",
            "description": "Bạo tăng 15%, duy trì 9 giây, không thể cộng dồn, có thể giải trừ. Giữ nhãn Bạo của video."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "cang-kim-tinh-quan": {
    "role": "Tầm Xa",
    "skills": [
      {
        "name": "Long Du Bát Phương",
        "time": "00:43",
        "level": 3,
        "description": "Tấn công 3 Thần Tướng địch trong phạm vi bằng Liên Lôi, gây sát thương vật lý bằng 190% Công, có 50% tỷ lệ kèm Lôi Chước.",
        "levels": [
          {
            "level": 1,
            "description": "Tấn công 3 Thần Tướng địch trong phạm vi bằng Liên Lôi, gây sát thương vật lý bằng 190% Công, có 50% tỷ lệ kèm Lôi Chước."
          },
          {
            "level": 2,
            "description": "Sát thương tăng lên 220%; tỷ lệ kèm Lôi Chước tăng lên 60%."
          },
          {
            "level": 3,
            "description": "Sát thương tăng lên 250%; tỷ lệ kèm Lôi Chước tăng lên 70%."
          }
        ],
        "effects": [
          {
            "name": "Lôi Chước",
            "description": "Mỗi giây chịu ST bất thường bằng 3% Công hiện tại của người thi triển; duy trì 15 giây, tối đa cộng dồn 30 tầng, có thể giải trừ."
          },
          {
            "name": "Hoại Huyết",
            "description": "DEBUFF thêm từ Lôi Chước: Thủ V.Lý giảm 0.5%, duy trì 15 giây, tối đa cộng dồn 30 tầng, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thiên Cương Kháng Long",
        "time": "00:40",
        "level": 3,
        "description": "Công tăng 15%; ST V.Lý tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%; ST V.Lý tăng 5%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%; ST V.Lý tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Công tăng lên 25%; ST V.Lý tăng lên 15%; Tỷ Lệ Bạo tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Kháng Long Hữu Hối",
        "time": "00:37",
        "level": 3,
        "description": "Phần đầu mô tả bị khuất, chưa xác nhận đầy đủ điều kiện kích hoạt. Phần đọc được: tấn công Thần Tướng địch đồng thời kích nổ toàn bộ Lôi Chước trên mục tiêu; mỗi lần gây ST V.Lý bằng 120% cộng số tầng Lôi Chước nhân 12%.",
        "levels": [
          {
            "level": 1,
            "description": "Phần đầu mô tả bị khuất, chưa xác nhận đầy đủ điều kiện kích hoạt. Phần đọc được: tấn công Thần Tướng địch đồng thời kích nổ toàn bộ Lôi Chước trên mục tiêu; mỗi lần gây ST V.Lý bằng 120% cộng số tầng Lôi Chước nhân 12%."
          },
          {
            "level": 2,
            "description": "Mỗi lần ST tăng lên 140%; ST bổ sung mỗi tầng Lôi Chước tăng lên 14%."
          },
          {
            "level": 3,
            "description": "ST Công tăng lên 160%; ST bổ sung mỗi tầng Lôi Chước tăng lên 16%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      },
      {
        "name": "Long Chi Nghịch Lân",
        "time": "00:34",
        "level": 3,
        "description": "Khi Thần Tướng địch tử trận, thi triển Lôi Chước lên 3 Thần Tướng địch.",
        "levels": [
          {
            "level": 1,
            "description": "Khi Thần Tướng địch tử trận, thi triển Lôi Chước lên 3 Thần Tướng địch."
          },
          {
            "level": 2,
            "description": "Số người nhận tăng lên 4."
          },
          {
            "level": 3,
            "description": "Điều kiện kích hoạt đổi thành khi bất kỳ Thần Tướng nào tử trận."
          }
        ],
        "effects": [
          {
            "name": "Lôi Chước",
            "description": "Mỗi giây chịu ST bất thường bằng 3% Công hiện tại của người thi triển; duy trì 15 giây, tối đa cộng dồn 30 tầng, có thể giải trừ."
          },
          {
            "name": "Hoại Huyết",
            "description": "DEBUFF thêm từ Lôi Chước: Thủ V.Lý giảm 0.5%, duy trì 15 giây, tối đa cộng dồn 30 tầng, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "hang-nga": {
    "role": "Hỗ Trợ",
    "skills": [
      {
        "name": "Cô Nguyệt Vị Hoa",
        "time": "00:58",
        "level": 3,
        "description": "Chữa trị 3 Thần Tướng phe ta ngẫu nhiên bằng 5% HP tối đa của Hằng Nga; đồng thời toàn Thần Tướng phe ta nhận Tăng Thủ Phép.",
        "levels": [
          {
            "level": 1,
            "description": "Chữa trị 3 Thần Tướng phe ta ngẫu nhiên bằng 5% HP tối đa của Hằng Nga; đồng thời toàn Thần Tướng phe ta nhận Tăng Thủ Phép."
          },
          {
            "level": 2,
            "description": "Lượng chữa trị tăng lên 5.6%."
          },
          {
            "level": 3,
            "description": "Lượng chữa trị tăng lên 6.3%."
          }
        ],
        "effects": [
          {
            "name": "Tăng Thủ Phép",
            "description": "Thủ Phép tăng 10%, duy trì 9 giây, không thể cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 12,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Quảng Hàn Tâm Quyết",
        "time": "00:55",
        "level": 3,
        "description": "HP tăng 15%; Thủ Phép tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "HP tăng 15%; Thủ Phép tăng 5%."
          },
          {
            "level": 2,
            "description": "HP tăng lên 20%; Thủ Phép tăng lên 10%."
          },
          {
            "level": 3,
            "description": "HP tăng lên 25%; Thủ Phép tăng lên 15%; Kháng Bạo tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hàn Nguyệt Chiếu Thế",
        "time": "00:52",
        "level": 3,
        "description": "Toàn bộ Thần Tướng phe ta nhận Huyền Thuẫn bằng 5% HP tối đa của Hằng Nga, đồng thời nhận Tăng ST Phép.",
        "levels": [
          {
            "level": 1,
            "description": "Toàn bộ Thần Tướng phe ta nhận Huyền Thuẫn bằng 5% HP tối đa của Hằng Nga, đồng thời nhận Tăng ST Phép."
          },
          {
            "level": 2,
            "description": "Thời gian Huyền Thuẫn tăng 2 giây; điểm Huyền Thuẫn tăng lên 5.6% HP tối đa của Hằng Nga."
          },
          {
            "level": 3,
            "description": "Thời gian Huyền Thuẫn tăng 4 giây; điểm Huyền Thuẫn tăng lên 6.3% HP tối đa của Hằng Nga."
          }
        ],
        "effects": [
          {
            "name": "Huyền Thuẫn — mô tả đang hiển thị ở Lv.3",
            "description": "Điểm Huyền Thuẫn bằng 6.3% HP tối đa của Hằng Nga, duy trì 12 giây, có thể cộng dồn, có thể giải trừ."
          },
          {
            "name": "Tăng ST Phép",
            "description": "ST Phép tăng 15%, duy trì 9 giây, không thể cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Tiền Trần Cựu Niệm",
        "time": "00:49",
        "level": 3,
        "description": "Mỗi 7 giây hồi HP cho toàn bộ Thần Tướng phe ta, bằng 1.5% HP tối đa của Hằng Nga.",
        "levels": [
          {
            "level": 1,
            "description": "Mỗi 7 giây hồi HP cho toàn bộ Thần Tướng phe ta, bằng 1.5% HP tối đa của Hằng Nga."
          },
          {
            "level": 2,
            "description": "Khoảng cách kích hoạt giảm còn 6 giây; mục tiêu đồng thời hồi thêm 50 Nộ."
          },
          {
            "level": 3,
            "description": "Khoảng cách kích hoạt giảm còn 5 giây."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "duong-tien": {
    "role": "Cận Chiến",
    "skills": [
      {
        "name": "Phong Khởi Ảnh Động",
        "time": "01:13",
        "level": 3,
        "description": "Gây ST V.Lý bằng 290% Công của Dương Tiễn lên toàn bộ Thần Tướng địch trong phạm vi.",
        "levels": [
          {
            "level": 1,
            "description": "Gây ST V.Lý bằng 290% Công của Dương Tiễn lên toàn bộ Thần Tướng địch trong phạm vi."
          },
          {
            "level": 2,
            "description": "Sát thương tăng lên 330%."
          },
          {
            "level": 3,
            "description": "Sát thương tăng lên 370%."
          }
        ],
        "cooldownSeconds": 12,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Nhất Khí Lưỡng Nghi",
        "time": "01:09",
        "level": 3,
        "description": "Thủ V.Lý tăng 15%; Công tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ V.Lý tăng 15%; Công tăng 5%."
          },
          {
            "level": 2,
            "description": "Thủ V.Lý tăng lên 20%; Công tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Thủ V.Lý tăng lên 25%; Công tăng lên 15%; Tỷ Lệ Bạo tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thanh Nguyên Diệu Đạo",
        "time": "01:06",
        "level": 3,
        "description": "Thi triển Khai Minh lên Thần Tướng phe ta, đồng thời tấn công toàn bộ Thần Tướng địch 4 lần, tổng ST V.Lý bằng 380% Công.",
        "levels": [
          {
            "level": 1,
            "description": "Thi triển Khai Minh lên Thần Tướng phe ta, đồng thời tấn công toàn bộ Thần Tướng địch 4 lần, tổng ST V.Lý bằng 380% Công."
          },
          {
            "level": 2,
            "description": "Giảm ST của Khai Minh tăng lên 10%; Công tăng lên 10%; sát thương tăng lên 440%."
          },
          {
            "level": 3,
            "description": "Giảm ST của Khai Minh tăng lên 15%; Công tăng lên 15%; sát thương tăng lên 500%."
          }
        ],
        "effects": [
          {
            "name": "Khai Minh — mô tả đang hiển thị ở Lv.3",
            "description": "Giảm ST tăng 15%, Công tăng 15%; duy trì 9 giây, không thể cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Nhục Thân Thành Thánh",
        "time": "01:03",
        "level": 3,
        "description": "Phần đầu mô tả bị khuất. Phần đọc được: thêm Kiên Nghị trước khi chịu ST Chí Mạng lần đầu; HP thấp nhất giảm xuống 1, đồng thời bản thân nhận Huyền Thuẫn bằng 200% Công của Dương Tiễn, duy trì 10 giây.",
        "levels": [
          {
            "level": 1,
            "description": "Phần đầu mô tả bị khuất. Phần đọc được: thêm Kiên Nghị trước khi chịu ST Chí Mạng lần đầu; HP thấp nhất giảm xuống 1, đồng thời bản thân nhận Huyền Thuẫn bằng 200% Công của Dương Tiễn, duy trì 10 giây."
          },
          {
            "level": 2,
            "description": "Sát thương gây ra xung quanh tăng lên 25%; Huyền Thuẫn tăng lên 250% Công."
          },
          {
            "level": 3,
            "description": "Sát thương gây ra xung quanh tăng lên 30%; Huyền Thuẫn tăng lên 300% Công."
          }
        ],
        "effects": [
          {
            "name": "Kiên Nghị",
            "description": "Khi Dương Tiễn chịu ST Chí Mạng, miễn lần sát thương này và bản thân nhận Huyền Thuẫn."
          },
          {
            "name": "Huyền Thuẫn — mô tả đang hiển thị ở Lv.3",
            "description": "Điểm Huyền Thuẫn bằng 300% Công của Dương Tiễn; duy trì 10 giây, có thể cộng dồn, không thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      }
    ]
  },
  "nguu-ma-vuong": {
    "role": "Thủ Hộ",
    "skills": [
      {
        "name": "Hoàn Phủ Bạo Sát",
        "time": "01:28",
        "level": 3,
        "description": "Phần đầu mô tả bị khuất; chưa xác nhận đầy đủ điều kiện và tỷ lệ kích hoạt. Phần đọc được: sát thương không quá 150% Công, bản thân đồng thời nhận Tăng Thủ V.Lý; kích hoạt mỗi 5 giây.",
        "levels": [
          {
            "level": 1,
            "description": "Phần đầu mô tả bị khuất; chưa xác nhận đầy đủ điều kiện và tỷ lệ kích hoạt. Phần đọc được: sát thương không quá 150% Công, bản thân đồng thời nhận Tăng Thủ V.Lý; kích hoạt mỗi 5 giây."
          },
          {
            "level": 2,
            "description": "Tỷ lệ kích hoạt tăng lên 35%; phản ST tăng lên 6% HP tối đa; hồi chiêu giảm còn 4 giây; tăng hiệu quả Tăng Thủ V.Lý."
          },
          {
            "level": 3,
            "description": "Tỷ lệ kích hoạt tăng lên 50%; phản ST tăng lên 7% HP tối đa; hồi chiêu giảm còn 3 giây; tăng mạnh hiệu quả Tăng Thủ V.Lý."
          }
        ],
        "effects": [
          {
            "name": "Tăng Thủ V.Lý — mô tả đang hiển thị ở Lv.3",
            "description": "Thủ V.Lý tăng 5%, duy trì 3 giây, không thể cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 3,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      },
      {
        "name": "Lực Địch Thiên Quân",
        "time": "01:25",
        "level": 3,
        "description": "Thủ Phép tăng 15%; HP tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ Phép tăng 15%; HP tăng 5%."
          },
          {
            "level": 2,
            "description": "Thủ Phép tăng lên 20%; HP tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Thủ Phép tăng lên 25%; HP tăng lên 15%; Hồi Phục tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Khí Thôn Sơn Hà",
        "time": "01:21",
        "level": 3,
        "description": "Bản thân nhận Ý Chí Kiên Định và có 50% tỷ lệ Khiêu Khích toàn bộ Thần Tướng địch xung quanh.",
        "levels": [
          {
            "level": 1,
            "description": "Bản thân nhận Ý Chí Kiên Định và có 50% tỷ lệ Khiêu Khích toàn bộ Thần Tướng địch xung quanh."
          },
          {
            "level": 2,
            "description": "Tỷ lệ Khiêu Khích tăng lên 60%."
          },
          {
            "level": 3,
            "description": "Tỷ lệ Khiêu Khích tăng lên 70%."
          }
        ],
        "effects": [
          {
            "name": "Khiêu Khích",
            "description": "Cưỡng chế mục tiêu tấn công người thi triển, duy trì 5 giây; không thể cộng dồn, có thể giải trừ."
          },
          {
            "name": "Ý Chí Kiên Định",
            "description": "Thủ V.Lý tăng 25%, duy trì 9 giây, không thể cộng dồn, không thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Ma Thần Tái Lâm",
        "time": "01:18",
        "level": 3,
        "description": "Sau khi tử trận lần đầu, Ngưu Ma Vương hồi sinh và hồi HP bằng 40% HP tối đa.",
        "levels": [
          {
            "level": 1,
            "description": "Sau khi tử trận lần đầu, Ngưu Ma Vương hồi sinh và hồi HP bằng 40% HP tối đa."
          },
          {
            "level": 2,
            "description": "HP hồi khi hồi sinh tăng lên 50%."
          },
          {
            "level": 3,
            "description": "HP hồi khi hồi sinh tăng lên 60%."
          }
        ],
        "cooldownSeconds": 999,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "hoang-mi": {
    "role": "Tiên Phong",
    "skills": [
      {
        "name": "Đảo Quả Vi Nhân",
        "time": "01:43",
        "level": 3,
        "description": "Hoàng My nhảy tới trước Thần Tướng địch có HP thấp nhất, gây ST V.Lý bằng 290% Công lên toàn bộ Thần Tướng địch trong phạm vi; mục tiêu chính nhận Tìm Địch.",
        "levels": [
          {
            "level": 1,
            "description": "Hoàng My nhảy tới trước Thần Tướng địch có HP thấp nhất, gây ST V.Lý bằng 290% Công lên toàn bộ Thần Tướng địch trong phạm vi; mục tiêu chính nhận Tìm Địch."
          },
          {
            "level": 2,
            "description": "Sát thương tăng lên 330%."
          },
          {
            "level": 3,
            "description": "Sát thương tăng lên 370%."
          }
        ],
        "effects": [
          {
            "name": "Tìm Địch",
            "description": "Người thi triển ưu tiên tấn công mục tiêu bị đánh dấu trong 12 giây."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Phật Quang Yêu Khí",
        "time": "01:40",
        "level": 3,
        "description": "Công tăng 15%; ST V.Lý tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%; ST V.Lý tăng 5%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%; ST V.Lý tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Công tăng lên 25%; ST V.Lý tăng lên 15%; Xuyên Thủ V.Lý tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Tây Thiên Cực Lạc",
        "time": "01:36",
        "level": 3,
        "description": "Bản thân nhận Tăng Công.",
        "levels": [
          {
            "level": 1,
            "description": "Bản thân nhận Tăng Công."
          },
          {
            "level": 2,
            "description": "Bản thân nhận thêm Tăng Bạo."
          },
          {
            "level": 3,
            "description": "Khi phóng kỹ năng, có thể xóa Khống Chế và hồi HP bằng 15% HP tối đa cho bản thân."
          }
        ],
        "effects": [
          {
            "name": "Tăng Công",
            "description": "Công tăng 20%, duy trì 9 giây; không thể cộng dồn, có thể giải trừ."
          },
          {
            "name": "Tăng Bạo",
            "description": "Bạo tăng 15%, duy trì 9 giây; không thể cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Não Bạt Phật Âm",
        "time": "01:33",
        "level": 3,
        "description": "Mỗi lần Hoàng My tấn công có 25% tỷ lệ kèm ST V.Lý bằng 20% Công của Hoàng My.",
        "levels": [
          {
            "level": 1,
            "description": "Mỗi lần Hoàng My tấn công có 25% tỷ lệ kèm ST V.Lý bằng 20% Công của Hoàng My."
          },
          {
            "level": 2,
            "description": "Sát thương kèm theo tăng lên 30%."
          },
          {
            "level": 3,
            "description": "Sát thương kèm theo tăng lên 40%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "hong-hai-nhi": {
    "role": "Tiên Phong",
    "skills": [
      {
        "name": "Diễm Ảnh Thuấn Sát",
        "time": "01:57",
        "level": 3,
        "description": "Lập tức lướt ra sau Thần Tướng địch xa nhất, gây ST V.Lý bằng 350% Công; mục tiêu nhận Tìm Địch.",
        "levels": [
          {
            "level": 1,
            "description": "Lập tức lướt ra sau Thần Tướng địch xa nhất, gây ST V.Lý bằng 350% Công; mục tiêu nhận Tìm Địch."
          },
          {
            "level": 2,
            "description": "Sát thương tăng lên 425%."
          },
          {
            "level": 3,
            "description": "Sát thương tăng lên 495%."
          }
        ],
        "effects": [
          {
            "name": "Tìm Địch",
            "description": "Người thi triển ưu tiên tấn công mục tiêu bị đánh dấu trong 12 giây."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Ngũ Hành Hồng Liên",
        "time": "01:54",
        "level": 3,
        "description": "Thủ V.Lý tăng 15%; Công tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ V.Lý tăng 15%; Công tăng 5%."
          },
          {
            "level": 2,
            "description": "Thủ V.Lý tăng lên 20%; Công tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Thủ V.Lý tăng lên 25%; Công tăng lên 15%; Tăng ST tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hỏa Vân Chích Thương",
        "time": "01:51",
        "level": 3,
        "description": "Tấn công mục tiêu đơn 4 lần, mỗi lần gây ST V.Lý bằng 188% Công, đồng thời thi triển Tháo Giáp.",
        "levels": [
          {
            "level": 1,
            "description": "Tấn công mục tiêu đơn 4 lần, mỗi lần gây ST V.Lý bằng 188% Công, đồng thời thi triển Tháo Giáp."
          },
          {
            "level": 2,
            "description": "Sát thương mỗi lần tăng lên 214%."
          },
          {
            "level": 3,
            "description": "Sát thương mỗi lần tăng lên 240%."
          }
        ],
        "effects": [
          {
            "name": "Tháo Giáp",
            "description": "Thủ V.Lý giảm 15%, duy trì 9 giây; không thể cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Sĩ Thương Phệ Hồn",
        "time": "01:48",
        "level": 3,
        "description": "Mỗi lần tấn công hồi HP bằng 20% sát thương gây ra trong lượt; mỗi 3 giây kích hoạt một lần.",
        "levels": [
          {
            "level": 1,
            "description": "Mỗi lần tấn công hồi HP bằng 20% sát thương gây ra trong lượt; mỗi 3 giây kích hoạt một lần."
          },
          {
            "level": 2,
            "description": "Hồi phục tăng lên 25%."
          },
          {
            "level": 3,
            "description": "Hồi phục tăng lên 30%."
          }
        ],
        "cooldownSeconds": 3,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "ngoc-dien-ho-ly": {
    "role": "Hỗ Trợ",
    "skills": [
      {
        "name": "Hoặc Tâm Câu Hồn",
        "time": "02:11",
        "level": 3,
        "description": "Chữa trị Thần Tướng có HP thấp nhất phe ta bằng 115% Công của Ngọc Diện Hồ Ly, sau đó nảy sang 4 Thần Tướng phe ta còn lại; mỗi lần nảy lượng chữa trị giảm 20%.",
        "levels": [
          {
            "level": 1,
            "description": "Chữa trị Thần Tướng có HP thấp nhất phe ta bằng 115% Công của Ngọc Diện Hồ Ly, sau đó nảy sang 4 Thần Tướng phe ta còn lại; mỗi lần nảy lượng chữa trị giảm 20%."
          },
          {
            "level": 2,
            "description": "Chữa trị tăng lên 130%."
          },
          {
            "level": 3,
            "description": "Chữa trị tăng lên 150%."
          }
        ],
        "cooldownSeconds": 12,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thiên Sinh Vưu Vật",
        "time": "02:08",
        "level": 3,
        "description": "Công tăng 10%; Thủ V.Lý tăng 10%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 10%; Thủ V.Lý tăng 10%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 15%; Thủ V.Lý tăng lên 15%."
          },
          {
            "level": 3,
            "description": "Công tăng lên 20%; Thủ V.Lý tăng lên 20%; hiệu quả Chữa Trị tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hồ Mị Chúng Sinh",
        "time": "02:05",
        "level": 3,
        "description": "Chữa trị toàn bộ Thần Tướng phe ta bằng 115% Công của Ngọc Diện Hồ Ly; khi HP mục tiêu dưới 25%, Chữa Trị cuối tăng 25%.",
        "levels": [
          {
            "level": 1,
            "description": "Chữa trị toàn bộ Thần Tướng phe ta bằng 115% Công của Ngọc Diện Hồ Ly; khi HP mục tiêu dưới 25%, Chữa Trị cuối tăng 25%."
          },
          {
            "level": 2,
            "description": "Chữa trị tăng lên 130%."
          },
          {
            "level": 3,
            "description": "Chữa trị tăng lên 150%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Không Còn Thần Tượng",
        "time": "02:02",
        "level": 3,
        "description": "Khi trận đấu bắt đầu, 2 Thần Tướng phe ta ở vị trí xa nhất nhận Phản Đòn. Sau đó mỗi 10 giây, 2 Thần Tướng xa nhất phe ta tiếp tục nhận Phản Đòn.",
        "levels": [
          {
            "level": 1,
            "description": "Khi trận đấu bắt đầu, 2 Thần Tướng phe ta ở vị trí xa nhất nhận Phản Đòn. Sau đó mỗi 10 giây, 2 Thần Tướng xa nhất phe ta tiếp tục nhận Phản Đòn."
          },
          {
            "level": 2,
            "description": "Khoảng cách kích hoạt giảm còn 8 giây."
          },
          {
            "level": 3,
            "description": "Khoảng cách kích hoạt giảm còn 5 giây; khi HP Ngọc Diện Hồ Ly dưới 30%, bản thân nhận Ẩn Thân trong 30 giây."
          }
        ],
        "effects": [
          {
            "name": "Phản Đòn",
            "description": "Khung giải thích ghi: Phản Đòn chịu 20% ST, duy trì 5 giây; không thể cộng dồn, không thể giải trừ. Giữ nguyên cách diễn đạt của video."
          },
          {
            "name": "Ẩn Thân",
            "description": "Không bị coi là mục tiêu; khung giải thích ghi duy trì 5 giây, trong khi mô tả Lv.3 ghi 30 giây. Giữ cả hai mốc để thể hiện khác biệt trong nguồn."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "ton-ngo-khong": {
    "role": "Tiên Phong",
    "skills": [
      {
        "name": "Ngự Vân Càn Nguyệt",
        "time": "02:27",
        "level": 3,
        "description": "Phần đầu mô tả bị khuất. Phần đọc được: tác động địch trên đường; nếu Độ Bền ≤4 thì hất văng mục tiêu, sau đó gây ST V.Lý bằng 428% Công lên mục tiêu cuối cùng và áp dụng Tìm Địch.",
        "levels": [
          {
            "level": 1,
            "description": "Phần đầu mô tả bị khuất. Phần đọc được: tác động địch trên đường; nếu Độ Bền ≤4 thì hất văng mục tiêu, sau đó gây ST V.Lý bằng 428% Công lên mục tiêu cuối cùng và áp dụng Tìm Địch."
          },
          {
            "level": 2,
            "description": "ST gây ra trên đường tăng lên 100%; ST lên mục tiêu cuối tăng lên 495%."
          },
          {
            "level": 3,
            "description": "ST gây ra trên đường tăng lên 110%; ST lên mục tiêu cuối tăng lên 555%."
          }
        ],
        "effects": [
          {
            "name": "Tìm Địch",
            "description": "Người thi triển ưu tiên tấn công mục tiêu bị đánh dấu trong 12 giây."
          }
        ],
        "cooldownSeconds": 18,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      },
      {
        "name": "Thiên Biến Vạn Hóa",
        "time": "02:23",
        "level": 3,
        "description": "Thủ Phép tăng 15%; Công tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ Phép tăng 15%; Công tăng 5%."
          },
          {
            "level": 2,
            "description": "Thủ Phép tăng lên 20%; Công tăng lên 10%. Mốc này đã đọc ở video 22/10/2026; hàng Lv.2 trong khung video mới không hiện rõ."
          },
          {
            "level": 3,
            "description": "Thủ Phép tăng lên 25%; Công tăng lên 15%; Tỷ Lệ Bạo tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Côn Ảnh Thiên Điệp",
        "time": "02:20",
        "level": 3,
        "description": "Tôn Ngộ Không tấn công một mục tiêu 2 lần, mỗi lần gây ST V.Lý bằng 428% Công.",
        "levels": [
          {
            "level": 1,
            "description": "Tôn Ngộ Không tấn công một mục tiêu 2 lần, mỗi lần gây ST V.Lý bằng 428% Công."
          },
          {
            "level": 2,
            "description": "Sát thương mỗi lần tăng lên 495%."
          },
          {
            "level": 3,
            "description": "Sát thương mỗi lần tăng lên 555%; nếu diệt mục tiêu thì đặt lại hồi chiêu Ngự Vân Càn Nguyệt."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Chiến Ý Bất Khuất",
        "time": "02:16",
        "level": 3,
        "description": "Khi HP lần đầu thấp hơn 50%, bản thân nhận Chú Kiếm.",
        "levels": [
          {
            "level": 1,
            "description": "Khi HP lần đầu thấp hơn 50%, bản thân nhận Chú Kiếm."
          },
          {
            "level": 2,
            "description": "Ngưỡng kích hoạt đổi thành HP lần đầu thấp hơn 60%."
          },
          {
            "level": 3,
            "description": "Ngưỡng kích hoạt đổi thành HP lần đầu thấp hơn 70%; khi HP lần đầu thấp hơn 40% thì kích hoạt thêm Đoạn Phong."
          }
        ],
        "effects": [
          {
            "name": "Chú Kiếm",
            "description": "ST V.Lý tăng 25%, duy trì 15 giây; không thể cộng dồn, không thể giải trừ."
          },
          {
            "name": "Đoạn Phong",
            "description": "Bạo tăng 25%, duy trì 15 giây; không thể cộng dồn, không thể giải trừ. Giữ nguyên nhãn Bạo trong nguồn."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "duong-tang": {
    "role": "Hỗ Trợ",
    "skills": [
      {
        "name": "Khẩn Cô Hộ Hữu",
        "time": "02:44",
        "level": 3,
        "description": "Ngẫu nhiên áp dụng Tăng Công cho 3 Thần Tướng phe ta.",
        "levels": [
          {
            "level": 1,
            "description": "Ngẫu nhiên áp dụng Tăng Công cho 3 Thần Tướng phe ta."
          },
          {
            "level": 2,
            "description": "CD kỹ năng giảm xuống 15 giây."
          },
          {
            "level": 3,
            "description": "Số mục tiêu tăng lên 4 người."
          }
        ],
        "effects": [
          {
            "name": "Tăng Công",
            "description": "Công tăng 20%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Cửu Chuyển Kim Thiền",
        "time": "02:39",
        "level": 3,
        "description": "HP tăng 15%, Công tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "HP tăng 15%, Công tăng 5%."
          },
          {
            "level": 2,
            "description": "HP tăng lên 20%, Công tăng lên 10%."
          },
          {
            "level": 3,
            "description": "HP tăng lên 25%, Công tăng lên 15%, Bạo Chữa Trị tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "A Di Đà Phật",
        "time": "02:35",
        "level": 3,
        "description": "Hồi HP bằng 180% Công bản thân cho 3 Thần Tướng phe ta có HP thấp nhất, đồng thời kèm Tăng Bạo.",
        "levels": [
          {
            "level": 1,
            "description": "Hồi HP bằng 180% Công bản thân cho 3 Thần Tướng phe ta có HP thấp nhất, đồng thời kèm Tăng Bạo."
          },
          {
            "level": 2,
            "description": "Chữa Trị tăng lên 200%."
          },
          {
            "level": 3,
            "description": "Chữa Trị tăng lên 230%."
          }
        ],
        "effects": [
          {
            "name": "Tăng Bạo",
            "description": "Bạo tăng 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Từ Bi Vi Hoài",
        "time": "02:32",
        "level": 3,
        "description": "Mỗi lần Công Thường, 1 Thần Tướng có HP thấp nhất phe ta hồi HP bằng 40% Công của Đường Tam Tạng.",
        "levels": [
          {
            "level": 1,
            "description": "Mỗi lần Công Thường, 1 Thần Tướng có HP thấp nhất phe ta hồi HP bằng 40% Công của Đường Tam Tạng."
          },
          {
            "level": 2,
            "description": "Chữa Trị tăng lên 46%."
          },
          {
            "level": 3,
            "description": "Chữa Trị tăng lên 53%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "la-sat-nu": {
    "role": "Tầm Xa",
    "skills": [
      {
        "name": "Thái Ất Sinh Phong",
        "time": "02:59",
        "level": 3,
        "description": "Khiến Thần Tướng địch theo đường thẳng chịu ST Phép bằng 200% Công của Thiết Phiến Công Chúa và Giảm Tốc; nếu Độ Bền mục tiêu ≤4, đánh lui mục tiêu.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch theo đường thẳng chịu ST Phép bằng 200% Công của Thiết Phiến Công Chúa và Giảm Tốc; nếu Độ Bền mục tiêu ≤4, đánh lui mục tiêu."
          },
          {
            "level": 2,
            "description": "ST tăng lên 232%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 264%."
          }
        ],
        "effects": [
          {
            "name": "Giảm Tốc",
            "description": "Tốc độ giảm 30%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 12,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Phật Đạo Song Tu",
        "time": "02:56",
        "level": 3,
        "description": "Công tăng 15%, ST Phép tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%, ST Phép tăng 5%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%, ST Phép tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Công tăng lên 25%, ST Phép tăng lên 15%, Xuyên Thủ Phép tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Phong Hỏa Liêu Nguyên",
        "time": "02:53",
        "level": 3,
        "description": "Khiến Thần Tướng địch theo đường thẳng chịu ST Phép bằng 64% Công, 5 lần. Nếu Độ Bền mục tiêu ≤4, mục tiêu bị đánh lui.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch theo đường thẳng chịu ST Phép bằng 64% Công, 5 lần. Nếu Độ Bền mục tiêu ≤4, mục tiêu bị đánh lui."
          },
          {
            "level": 2,
            "description": "Mỗi lần ST tăng lên 79%."
          },
          {
            "level": 3,
            "description": "Mỗi lần ST tăng lên 86%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Chân Viêm Hỏa Phiến",
        "time": "02:49",
        "level": 3,
        "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Phần đọc được: ST Phép tăng 1% × số tầng Hỏa Phần.",
        "levels": [
          {
            "level": 1,
            "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Phần đọc được: ST Phép tăng 1% × số tầng Hỏa Phần."
          },
          {
            "level": 2,
            "description": "Tỷ lệ kèm Hỏa Phần tăng lên 13%; Công mục tiêu kèm Hỏa Phần, ST Phép tăng lên 1,2% × số tầng Hỏa Phần."
          },
          {
            "level": 3,
            "description": "Tỷ lệ kèm Hỏa Phần tăng lên 16%; Công mục tiêu kèm Hỏa Phần, ST Phép tăng lên 1,4% × số tầng Hỏa Phần."
          }
        ],
        "effects": [
          {
            "name": "Hỏa Phần",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "Nứt Nẻ",
            "description": "Hiệu ứng thêm từ Hỏa Phần: Thủ Phép giảm 0,5%, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      }
    ]
  },
  "tran-nguyen-tu": {
    "role": "Tầm Xa",
    "skills": [
      {
        "name": "Nhật Nguyệt Càn Khôn",
        "time": "03:16",
        "level": 3,
        "description": "Khiến Thần Tướng địch theo đường thẳng chịu ST Phép bằng 60% Công của Trấn Nguyên Tử; 50% kèm Độc Thực.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch theo đường thẳng chịu ST Phép bằng 60% Công của Trấn Nguyên Tử; 50% kèm Độc Thực."
          },
          {
            "level": 2,
            "description": "ST tăng lên 70%; tỷ lệ Độc Thực tăng lên 60%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 80%; tỷ lệ Độc Thực tăng lên 70%."
          }
        ],
        "effects": [
          {
            "name": "Độc Thực",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "Ăn Mòn",
            "description": "Hiệu ứng thêm từ Độc Thực: Công giảm 0,6%, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 5,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Âm Dương Tâm Quyết",
        "time": "03:12",
        "level": 3,
        "description": "Công tăng 15%, ST Bất Thường tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%, ST Bất Thường tăng 5%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%, ST Bất Thường tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Công tăng lên 25%, ST Bất Thường tăng lên 15%, Kháng K.Chế tăng 15%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thiên Địa Đạo Pháp",
        "time": "03:08",
        "level": 3,
        "description": "Công 3 lần mục tiêu đơn ngẫu nhiên, mỗi lần gây ST Phép bằng 100% Công; 50% khiến mục tiêu kèm Độc Thực.",
        "levels": [
          {
            "level": 1,
            "description": "Công 3 lần mục tiêu đơn ngẫu nhiên, mỗi lần gây ST Phép bằng 100% Công; 50% khiến mục tiêu kèm Độc Thực."
          },
          {
            "level": 2,
            "description": "Lượt công ngẫu nhiên đơn thể tăng lên 4 lần; tỷ lệ Độc Thực tăng lên 60%."
          },
          {
            "level": 3,
            "description": "Lượt công ngẫu nhiên đơn thể tăng lên 5 lượt; tỷ lệ Ăn Mòn tăng lên 70%."
          }
        ],
        "effects": [
          {
            "name": "Độc Thực",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "Ăn Mòn",
            "description": "Hiệu ứng thêm từ Độc Thực: Công giảm 0,6%, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Ngôn Xuất Pháp Tùy",
        "time": "03:05",
        "level": 3,
        "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Phần đọc được: kèm Tăng ST Bất Thường; sau đó cứ 1 giây toàn phe ta kèm hiệu ứng này; cứ 8 giây, có 40% khiến toàn Thần Tướng địch kèm Độc Thực.",
        "levels": [
          {
            "level": 1,
            "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Phần đọc được: kèm Tăng ST Bất Thường; sau đó cứ 1 giây toàn phe ta kèm hiệu ứng này; cứ 8 giây, có 40% khiến toàn Thần Tướng địch kèm Độc Thực."
          },
          {
            "level": 2,
            "description": "ST Bất Thường tăng lên 10%; CD giảm còn 7 giây; tỷ lệ kích hoạt tăng lên 50%."
          },
          {
            "level": 3,
            "description": "ST Bất Thường tăng lên 15%; CD giảm còn 6 giây; tỷ lệ kích hoạt tăng lên 60%."
          }
        ],
        "effects": [
          {
            "name": "Tăng ST Bất Thường",
            "description": "Tooltip hiển thị: Tăng ST Bất Thường 5%, duy trì 1 giây, không cộng dồn, có thể giải trừ."
          },
          {
            "name": "Độc Thực",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      }
    ]
  },
  "tru-bat-gioi": {
    "role": "Thủ Hộ",
    "skills": [
      {
        "name": "Đảo Đả Nhất Ba",
        "time": "03:43",
        "level": 3,
        "description": "Khiến Thần Tướng địch phía trước chịu ST Phép bằng 240% Công; 20% kèm Choáng và 100% kèm Hỏa Phần.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch phía trước chịu ST Phép bằng 240% Công; 20% kèm Choáng và 100% kèm Hỏa Phần."
          },
          {
            "level": 2,
            "description": "ST tăng lên 280%; tỷ lệ Choáng tăng lên 25%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 320%; tỷ lệ Choáng tăng lên 30%."
          }
        ],
        "effects": [
          {
            "name": "Choáng",
            "description": "Không thể hành động, duy trì 3 giây, không cộng dồn, có thể giải trừ."
          },
          {
            "name": "Hỏa Phần",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 12,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Phàm Tâm Vị Mẫn",
        "time": "03:38",
        "level": 3,
        "description": "HP tăng 15%, Giảm ST tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "HP tăng 15%, Giảm ST tăng 5%."
          },
          {
            "level": 2,
            "description": "HP tăng lên 20%, Giảm ST tăng lên 10%."
          },
          {
            "level": 3,
            "description": "HP tăng lên 35%, Giảm ST tăng lên 20%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Cửu Xỉ Nhập Cốt",
        "time": "03:33",
        "level": 3,
        "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Phần đọc được: 10% gây Choáng, 100% kèm Hỏa Phần; chữa trị bản thân bằng 12% HP đã mất, không quá 250% Công.",
        "levels": [
          {
            "level": 1,
            "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Phần đọc được: 10% gây Choáng, 100% kèm Hỏa Phần; chữa trị bản thân bằng 12% HP đã mất, không quá 250% Công."
          },
          {
            "level": 2,
            "description": "ST tăng lên 260%; tỷ lệ Choáng tăng lên 15%; Chữa Trị tăng lên 14%, không quá 300% Công."
          },
          {
            "level": 3,
            "description": "ST tăng lên 300%; tỷ lệ Choáng tăng lên 20%; Chữa Trị tăng lên 16%, không quá 350% Công."
          }
        ],
        "effects": [
          {
            "name": "Choáng",
            "description": "Không thể hành động, duy trì 3 giây, không cộng dồn, có thể giải trừ."
          },
          {
            "name": "Hỏa Phần",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      },
      {
        "name": "Thiên Bồng Dư Uy",
        "time": "03:24",
        "level": 3,
        "description": "Khi HP lần đầu thấp hơn 25%, có 30% khiến Thần Tướng địch xung quanh Choáng; 100% khiến địch kèm Hỏa Phần.",
        "levels": [
          {
            "level": 1,
            "description": "Khi HP lần đầu thấp hơn 25%, có 30% khiến Thần Tướng địch xung quanh Choáng; 100% khiến địch kèm Hỏa Phần."
          },
          {
            "level": 2,
            "description": "Điều kiện kích hoạt khi HP dưới 30%; tỷ lệ Choáng tăng lên 35%."
          },
          {
            "level": 3,
            "description": "Điều kiện kích hoạt khi HP dưới 35%; tỷ lệ Choáng tăng lên 40%."
          }
        ],
        "effects": [
          {
            "name": "Choáng",
            "description": "Không thể hành động, duy trì 3 giây, không cộng dồn, có thể giải trừ."
          },
          {
            "name": "Hỏa Phần",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "CD hiển thị",
            "description": "Video ghi CD 999 giây cho kỹ năng kích hoạt lần đầu theo ngưỡng HP."
          }
        ],
        "cooldownSeconds": 999,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "na-tra": {
    "role": "Cận Chiến",
    "skills": [
      {
        "name": "Tam Muội Chân Hỏa",
        "time": "04:01",
        "level": 3,
        "description": "Khiến mục tiêu trong phạm vi chịu ST Phép bằng 80% Công của Na Tra, gây thêm Sát Thương Chuẩn bằng 60% Công.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến mục tiêu trong phạm vi chịu ST Phép bằng 80% Công của Na Tra, gây thêm Sát Thương Chuẩn bằng 60% Công."
          },
          {
            "level": 2,
            "description": "ST Phép tăng lên 95%, Sát Thương Chuẩn tăng lên 70%."
          },
          {
            "level": 3,
            "description": "ST Phép tăng lên 110%, Sát Thương Chuẩn tăng lên 80%."
          }
        ],
        "cooldownSeconds": 12,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Liên Hoa Chi Thân",
        "time": "03:58",
        "level": 3,
        "description": "Thủ V.Lý tăng 15%, Công tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ V.Lý tăng 15%, Công tăng 5%."
          },
          {
            "level": 2,
            "description": "Thủ V.Lý tăng lên 20%, Công tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Thủ V.Lý tăng lên 25%, Công tăng lên 15%, Giảm ST tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thần Tướng Hồng Lăng",
        "time": "03:54",
        "level": 3,
        "description": "Thi triển cho bản thân Phản Đòn, Gánh Nặng Tiến Bước và Tăng Kháng Khống Chế; sau đó công địch phía trước 3 lần, mỗi lần ST Phép bằng 140% Công, gây thêm Sát Thương Chuẩn bằng 140% Công.",
        "levels": [
          {
            "level": 1,
            "description": "Thi triển cho bản thân Phản Đòn, Gánh Nặng Tiến Bước và Tăng Kháng Khống Chế; sau đó công địch phía trước 3 lần, mỗi lần ST Phép bằng 140% Công, gây thêm Sát Thương Chuẩn bằng 140% Công."
          },
          {
            "level": 2,
            "description": "Mỗi lần ST tăng lên 160%."
          },
          {
            "level": 3,
            "description": "Mỗi lần ST tăng lên 180%."
          }
        ],
        "effects": [
          {
            "name": "Phản Đòn",
            "description": "Phản Đòn 15% ST chịu, duy trì 6,5 giây, không cộng dồn, không thể giải trừ."
          },
          {
            "name": "Gánh Nặng Tiến Bước",
            "description": "Độ Bền tăng 2, duy trì 6,5 giây, không cộng dồn, không thể giải trừ."
          },
          {
            "name": "Tăng Kháng Khống Chế",
            "description": "Tên hiệu ứng đọc được trong mô tả; phần giải thích không xuất hiện trong khung video."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Càn Khôn Nhất Kích",
        "time": "03:50",
        "level": 3,
        "description": "Khi tấn công chữa trị HP bằng 7% ST Na Tra gây ra trong lượt; Na Tra Phản Đòn 7% ST phải chịu.",
        "levels": [
          {
            "level": 1,
            "description": "Khi tấn công chữa trị HP bằng 7% ST Na Tra gây ra trong lượt; Na Tra Phản Đòn 7% ST phải chịu."
          },
          {
            "level": 2,
            "description": "Chữa Trị tăng lên 8,5%; Phản Đòn tăng lên 8,5%."
          },
          {
            "level": 3,
            "description": "Chữa Trị tăng lên 10%; Phản Đòn tăng lên 10%."
          }
        ],
        "effects": [
          {
            "name": "Phản Đòn",
            "description": "Tooltip Lv.3: Phản Đòn 10% ST chịu, duy trì đến hết trận, có thể cộng dồn, không thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "da-van-thien-vuong": {
    "role": "Thủ Hộ",
    "skills": [
      {
        "name": "Toàn Vũ Diệt Vọng",
        "time": "04:18",
        "level": 3,
        "description": "Tấn công Thần Tướng địch xa nhất gây ST V.Lý bằng 320% Công. Nếu Độ Bền mục tiêu nhỏ hơn 4, kéo mục tiêu về trước mặt và 100% gây Khiêu Khích.",
        "levels": [
          {
            "level": 1,
            "description": "Tấn công Thần Tướng địch xa nhất gây ST V.Lý bằng 320% Công. Nếu Độ Bền mục tiêu nhỏ hơn 4, kéo mục tiêu về trước mặt và 100% gây Khiêu Khích."
          },
          {
            "level": 2,
            "description": "ST tăng lên 370%; kéo được mục tiêu Độ Bền nhỏ hơn 5."
          },
          {
            "level": 3,
            "description": "ST tăng lên 420%; kéo được mục tiêu Độ Bền nhỏ hơn 6."
          }
        ],
        "effects": [
          {
            "name": "Khiêu Khích",
            "description": "Trong 5 giây chỉ có thể tấn công người thi pháp; không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hỗn Nguyên Diệu Linh",
        "time": "04:14",
        "level": 3,
        "description": "Thủ Phép tăng 15%, Thủ V.Lý tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ Phép tăng 15%, Thủ V.Lý tăng 5%."
          },
          {
            "level": 2,
            "description": "Thủ Phép tăng lên 20%, Thủ V.Lý tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Thủ Phép tăng lên 25%, Thủ V.Lý tăng lên 15%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Nhật Nguyệt Vô Quang",
        "time": "04:11",
        "level": 3,
        "description": "Công Thần Tướng địch xung quanh 5 lần, tổng ST V.Lý bằng 320% Công, kèm Giảm Tốc.",
        "levels": [
          {
            "level": 1,
            "description": "Công Thần Tướng địch xung quanh 5 lần, tổng ST V.Lý bằng 320% Công, kèm Giảm Tốc."
          },
          {
            "level": 2,
            "description": "Tổng ST tăng lên 390%."
          },
          {
            "level": 3,
            "description": "Tổng ST tăng lên 420%."
          }
        ],
        "effects": [
          {
            "name": "Giảm Tốc",
            "description": "Tốc Độ giảm 60%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Quy Khư Vô Tình",
        "time": "04:07",
        "level": 3,
        "description": "Mỗi 3 giây, Thần Tướng phe ta xung quanh bản thân nhận Gánh Nặng Tiến Bước.",
        "levels": [
          {
            "level": 1,
            "description": "Mỗi 3 giây, Thần Tướng phe ta xung quanh bản thân nhận Gánh Nặng Tiến Bước."
          },
          {
            "level": 2,
            "description": "Phạm vi kỹ năng mở rộng."
          },
          {
            "level": 3,
            "description": "Phạm vi tiếp tục mở rộng, Độ Bền tăng lên 5."
          }
        ],
        "effects": [
          {
            "name": "Gánh Nặng Tiến Bước",
            "description": "Tooltip: Độ Bền tăng 2, duy trì 5 giây, không cộng dồn, không thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "quang-muc-thien-vuong": {
    "role": "Cận Chiến",
    "skills": [
      {
        "name": "Tịnh Thiên Trừ Uế",
        "time": "04:35",
        "level": 3,
        "description": "Mỗi 7 giây hồi phục 3% HP tối đa bản thân, không quá 80% Công bản thân; giải trừ 1 DEBUFF bản thân.",
        "levels": [
          {
            "level": 1,
            "description": "Mỗi 7 giây hồi phục 3% HP tối đa bản thân, không quá 80% Công bản thân; giải trừ 1 DEBUFF bản thân."
          },
          {
            "level": 2,
            "description": "Khoảng cách kích hoạt giảm còn 6 giây; số lượng giải trừ tăng lên 2."
          },
          {
            "level": 3,
            "description": "Khoảng cách kích hoạt giảm còn 5 giây; số lượng giải trừ tăng lên 3."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Minh Kính Pháp Hoa",
        "time": "04:31",
        "level": 3,
        "description": "HP tăng 15%, Thủ V.Lý tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "HP tăng 15%, Thủ V.Lý tăng 5%."
          },
          {
            "level": 2,
            "description": "HP tăng lên 20%, Thủ V.Lý tăng lên 10%."
          },
          {
            "level": 3,
            "description": "HP tăng lên 25%, Thủ V.Lý tăng lên 15%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hỗn Thế Ly Long",
        "time": "04:27",
        "level": 3,
        "description": "Khiến Thần Tướng địch trong phạm vi nhỏ phía trước chịu 2 lần ST V.Lý; mỗi lần bằng 210% Công bản thân và 13% kèm Mê Hồn.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch trong phạm vi nhỏ phía trước chịu 2 lần ST V.Lý; mỗi lần bằng 210% Công bản thân và 13% kèm Mê Hồn."
          },
          {
            "level": 2,
            "description": "Mỗi lần ST tăng lên 250%; tỷ lệ Mê Hồn tăng lên 15%."
          },
          {
            "level": 3,
            "description": "Mỗi lần ST tăng lên 280%; tỷ lệ Mê Hồn tăng lên 18%."
          }
        ],
        "effects": [
          {
            "name": "Mê Hồn",
            "description": "Khiến mục tiêu hoảng loạn, chạy tán loạn và không thể Công trong 3 giây; không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Long Quyền Băng Kình",
        "time": "04:23",
        "level": 3,
        "description": "Công Thường có 10% phát động Công Đặc Biệt, khiến Thần Tướng địch xung quanh chịu ST V.Lý bằng 75% Công của Quảng Mục Thiên Vương; 20% kèm Mê Hồn.",
        "levels": [
          {
            "level": 1,
            "description": "Công Thường có 10% phát động Công Đặc Biệt, khiến Thần Tướng địch xung quanh chịu ST V.Lý bằng 75% Công của Quảng Mục Thiên Vương; 20% kèm Mê Hồn."
          },
          {
            "level": 2,
            "description": "Tỷ lệ kích hoạt tăng lên 15%; tỷ lệ Mê Hồn tăng lên 25%."
          },
          {
            "level": 3,
            "description": "Tỷ lệ kích hoạt tăng lên 20%; tỷ lệ Mê Hồn tăng lên 30%."
          }
        ],
        "effects": [
          {
            "name": "Mê Hồn",
            "description": "Khiến mục tiêu hoảng loạn, chạy tán loạn và không thể Công trong 3 giây; không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "phuc-ho-la-han": {
    "role": "Tầm Xa",
    "skills": [
      {
        "name": "Lục Căn Tịch Mịch",
        "time": "04:56",
        "level": 3,
        "description": "Công Thần Tướng địch trong phạm vi mục tiêu 6 lần, tổng ST Phép bằng 140% Công của Phục Hổ La Hán; 20% kèm Định Thân.",
        "levels": [
          {
            "level": 1,
            "description": "Công Thần Tướng địch trong phạm vi mục tiêu 6 lần, tổng ST Phép bằng 140% Công của Phục Hổ La Hán; 20% kèm Định Thân."
          },
          {
            "level": 2,
            "description": "ST tăng lên 160%; tỷ lệ Định Thân tăng lên 25%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 180%; tỷ lệ Định Thân tăng lên 30%."
          }
        ],
        "effects": [
          {
            "name": "Định Thân",
            "description": "Không thể hành động, không cộng dồn, có thể giải trừ. Video không ghi thời lượng."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Tuệ Hải Vô Biên",
        "time": "04:52",
        "level": 3,
        "description": "Công tăng 15%, Tỷ Lệ Khống Chế tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%, Tỷ Lệ Khống Chế tăng 5%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%, Tỷ Lệ Khống Chế tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Công tăng lên 25%, Tỷ Lệ Khống Chế tăng lên 15%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Sương Hổ Khiếu Thiên",
        "time": "04:49",
        "level": 3,
        "description": "Công Thần Tướng địch trong phạm vi mục tiêu 6 lần, tổng ST Phép bằng 300% Công của Phục Hổ La Hán; 8% kèm Giá Rét.",
        "levels": [
          {
            "level": 1,
            "description": "Công Thần Tướng địch trong phạm vi mục tiêu 6 lần, tổng ST Phép bằng 300% Công của Phục Hổ La Hán; 8% kèm Giá Rét."
          },
          {
            "level": 2,
            "description": "ST tăng lên 350%; tỷ lệ Giá Rét tăng lên 10%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 400%; tỷ lệ Giá Rét tăng lên 12%."
          }
        ],
        "effects": [
          {
            "name": "Giá Rét",
            "description": "Mục tiêu không thể hành động, sau khi chịu 5 lần ST trực tiếp sẽ xóa trạng thái; không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Kim Cang Nộ Diễm",
        "time": "04:44",
        "level": 3,
        "description": "Khi tấn công có 50% tỷ lệ nhận 20 Nộ.",
        "levels": [
          {
            "level": 1,
            "description": "Khi tấn công có 50% tỷ lệ nhận 20 Nộ."
          },
          {
            "level": 2,
            "description": "Tỷ lệ tăng lên 60%; nhận Nộ tăng lên 25."
          },
          {
            "level": 3,
            "description": "Tỷ lệ tăng lên 70%; nhận Nộ tăng lên 30."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "tang-truong-thien-vuong": {
    "role": "Cận Chiến",
    "skills": [
      {
        "name": "Trần Duyên Giai Đoạn",
        "time": "05:11",
        "level": 3,
        "description": "Gây ST V.Lý bằng 140% Công lên toàn Thần Tướng địch trong phạm vi; 50% thêm Lôi Chước.",
        "levels": [
          {
            "level": 1,
            "description": "Gây ST V.Lý bằng 140% Công lên toàn Thần Tướng địch trong phạm vi; 50% thêm Lôi Chước."
          },
          {
            "level": 2,
            "description": "ST tăng lên 160%; tỷ lệ Lôi Chước tăng lên 60%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 180%; tỷ lệ Lôi Chước tăng lên 70%."
          }
        ],
        "effects": [
          {
            "name": "Lôi Chước",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "Hoại Huyết",
            "description": "Hiệu ứng thêm từ Lôi Chước: Thủ V.Lý giảm 0,5%, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 12,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Bát Nhã Minh Tuệ",
        "time": "05:08",
        "level": 3,
        "description": "Công tăng 15%, HP tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%, HP tăng 5%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%, HP tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Công tăng lên 25%, HP tăng lên 15%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Đoạn Diệt Lục Căn",
        "time": "05:05",
        "level": 3,
        "description": "Toàn Thần Tướng địch trong phạm vi chịu 4 lần Công, mỗi lần chịu 108% ST; 10% kèm Lôi Chước.",
        "levels": [
          {
            "level": 1,
            "description": "Toàn Thần Tướng địch trong phạm vi chịu 4 lần Công, mỗi lần chịu 108% ST; 10% kèm Lôi Chước."
          },
          {
            "level": 2,
            "description": "Mỗi lần ST tăng lên 125%; tỷ lệ Lôi Chước tăng lên 15%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 140%; tỷ lệ Lôi Chước tăng lên 20%."
          }
        ],
        "effects": [
          {
            "name": "Lôi Chước",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "Hoại Huyết",
            "description": "Hiệu ứng thêm từ Lôi Chước: Thủ V.Lý giảm 0,5%, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Vô Lượng Kiếm Phong",
        "time": "05:02",
        "level": 3,
        "description": "Công Thường có 10% khiến mục tiêu kèm Lôi Chước.",
        "levels": [
          {
            "level": 1,
            "description": "Công Thường có 10% khiến mục tiêu kèm Lôi Chước."
          },
          {
            "level": 2,
            "description": "Tỷ lệ Lôi Chước tăng lên 15%."
          },
          {
            "level": 3,
            "description": "Tỷ lệ Lôi Chước tăng lên 20%."
          }
        ],
        "effects": [
          {
            "name": "Lôi Chước",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "Hoại Huyết",
            "description": "Hiệu ứng thêm từ Lôi Chước: Thủ V.Lý giảm 0,5%, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 5,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "tri-quoc-thien-vuong": {
    "role": "Tầm Xa",
    "skills": [
      {
        "name": "Phạn Khúc Âm Ba",
        "time": "05:27",
        "level": 3,
        "description": "Khiến mục tiêu chính Định Thân; toàn Thần Tướng địch trong phạm vi chịu ST Phép bằng 140% Công của Trì Quốc Thiên Vương.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến mục tiêu chính Định Thân; toàn Thần Tướng địch trong phạm vi chịu ST Phép bằng 140% Công của Trì Quốc Thiên Vương."
          },
          {
            "level": 2,
            "description": "ST tăng lên 160%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 180%."
          }
        ],
        "effects": [
          {
            "name": "Định Thân",
            "description": "Không thể hành động, không cộng dồn, có thể giải trừ. Video không ghi thời lượng."
          }
        ],
        "cooldownSeconds": 13,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Nhất Huyền Thanh Tâm",
        "time": "05:23",
        "level": 3,
        "description": "Công tăng 15%, Tỷ Lệ Chính Xác tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%, Tỷ Lệ Chính Xác tăng 5%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%, Tỷ Lệ Chính Xác tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Công tăng lên 25%, Tỷ Lệ Chính Xác tăng lên 15%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Tam Giới Hòa Minh",
        "time": "05:20",
        "level": 3,
        "description": "Khiến Thần Tướng địch chịu 5 lần Công đơn thể, tổng ST Phép bằng 480% Công.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch chịu 5 lần Công đơn thể, tổng ST Phép bằng 480% Công."
          },
          {
            "level": 2,
            "description": "ST tăng lên 560%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 660%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Nghiệp Tận Dư Âm",
        "time": "05:17",
        "level": 3,
        "description": "Công Thường có 30% khiến mục tiêu chịu thêm ST Phép bằng 20% Công.",
        "levels": [
          {
            "level": 1,
            "description": "Công Thường có 30% khiến mục tiêu chịu thêm ST Phép bằng 20% Công."
          },
          {
            "level": 2,
            "description": "Tỷ lệ kích hoạt tăng lên 40%; ST tăng lên 25%."
          },
          {
            "level": 3,
            "description": "Tỷ lệ kích hoạt tăng lên 50%; ST tăng lên 30%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "bach-tuong-vuong": {
    "role": "Thủ Hộ",
    "skills": [
      {
        "name": "Đột Tập Tượng Hống",
        "time": "05:42",
        "level": 3,
        "description": "2 Thần Tướng ngẫu nhiên phe ta nhận Tăng Tốc Độ và Tăng ST Phép.",
        "levels": [
          {
            "level": 1,
            "description": "2 Thần Tướng ngẫu nhiên phe ta nhận Tăng Tốc Độ và Tăng ST Phép."
          },
          {
            "level": 2,
            "description": "Mục tiêu Thần Tướng phe ta tăng 1."
          },
          {
            "level": 3,
            "description": "Mục tiêu Thần Tướng phe ta tăng thêm 1."
          }
        ],
        "effects": [
          {
            "name": "Tăng Tốc Độ",
            "description": "Tốc Độ tăng 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          },
          {
            "name": "Tăng ST Phép",
            "description": "ST Phép tăng 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hoàng Nha Thổ Thoái",
        "time": "05:39",
        "level": 3,
        "description": "Thủ V.Lý tăng 15%, Thủ Phép tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ V.Lý tăng 15%, Thủ Phép tăng 5%."
          },
          {
            "level": 2,
            "description": "Thủ V.Lý tăng lên 20%, Thủ Phép tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Thủ V.Lý tăng lên 25%, Thủ Phép tăng lên 15%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Long Tượng Rèn Thể",
        "time": "05:36",
        "level": 3,
        "description": "2 Thần Tướng ngẫu nhiên phe ta nhận Tăng Thủ V.Lý và Tăng Thủ Phép.",
        "levels": [
          {
            "level": 1,
            "description": "2 Thần Tướng ngẫu nhiên phe ta nhận Tăng Thủ V.Lý và Tăng Thủ Phép."
          },
          {
            "level": 2,
            "description": "Mục tiêu Thần Tướng phe ta kèm theo tăng thêm 1."
          },
          {
            "level": 3,
            "description": "Mục tiêu Thần Tướng phe ta kèm theo tăng thêm 1."
          }
        ],
        "effects": [
          {
            "name": "Tăng Thủ V.Lý",
            "description": "Thủ V.Lý tăng 10%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          },
          {
            "name": "Tăng Thủ Phép",
            "description": "Thủ Phép tăng 10%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Cố Nhược Kim Thang",
        "time": "05:33",
        "level": 3,
        "description": "Khi bản thân bị Khống Chế, nhận Tăng Giảm ST. CD 25 giây.",
        "levels": [
          {
            "level": 1,
            "description": "Khi bản thân bị Khống Chế, nhận Tăng Giảm ST. CD 25 giây."
          },
          {
            "level": 2,
            "description": "CD kỹ năng giảm 5 giây."
          },
          {
            "level": 3,
            "description": "CD kỹ năng giảm 10 giây."
          }
        ],
        "effects": [
          {
            "name": "Tăng Giảm ST",
            "description": "Giảm ST tăng 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "hong-lan-mang-tinh": {
    "role": "Hỗ Trợ",
    "skills": [
      {
        "name": "Yêu Đồng Chi Thuật",
        "time": "05:59",
        "level": 3,
        "description": "1 Thần Tướng phe ta trong phạm vi mục tiêu nhận Tăng Công.",
        "levels": [
          {
            "level": 1,
            "description": "1 Thần Tướng phe ta trong phạm vi mục tiêu nhận Tăng Công."
          },
          {
            "level": 2,
            "description": "Mục tiêu Thần Tướng phe ta tăng thêm 1."
          },
          {
            "level": 3,
            "description": "Mục tiêu Thần Tướng phe ta tăng thêm 1."
          }
        ],
        "effects": [
          {
            "name": "Tăng Công",
            "description": "Công tăng 20%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Xà Hạt Mỹ Nhân",
        "time": "05:56",
        "level": 3,
        "description": "HP tăng 15%, Chữa Trị tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "HP tăng 15%, Chữa Trị tăng 5%."
          },
          {
            "level": 2,
            "description": "HP tăng lên 20%, hiệu quả Chữa Trị tăng lên 10%."
          },
          {
            "level": 3,
            "description": "HP tăng lên 25%, hiệu quả Chữa Trị tăng lên 20%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Xà Hữu Phúc Trạch",
        "time": "05:52",
        "level": 3,
        "description": "2 Thần Tướng phe ta trong phạm vi nhận Duy Trì Chữa Trị.",
        "levels": [
          {
            "level": 1,
            "description": "2 Thần Tướng phe ta trong phạm vi nhận Duy Trì Chữa Trị."
          },
          {
            "level": 2,
            "description": "Mục tiêu Thần Tướng phe ta kèm kỹ năng tăng thêm 1."
          },
          {
            "level": 3,
            "description": "Mục tiêu Thần Tướng phe ta kèm kỹ năng tăng thêm 1."
          }
        ],
        "effects": [
          {
            "name": "Duy Trì Chữa Trị",
            "description": "Mỗi giây hồi HP bằng 25% Công người thi triển, duy trì 5 giây, có thể cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Mãng Phệ Sinh Lâm",
        "time": "05:48",
        "level": 3,
        "description": "Khi Công Thường, chữa trị đơn vị phe ta có HP thấp nhất bằng 40% ST Hồng Lân Mãng Tinh gây ra.",
        "levels": [
          {
            "level": 1,
            "description": "Khi Công Thường, chữa trị đơn vị phe ta có HP thấp nhất bằng 40% ST Hồng Lân Mãng Tinh gây ra."
          },
          {
            "level": 2,
            "description": "HP hồi tăng lên 50% ST gây ra."
          },
          {
            "level": 3,
            "description": "HP hồi tăng lên 60% ST gây ra."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "dai-bang-vuong": {
    "role": "Tiên Phong",
    "skills": [
      {
        "name": "Đoàn Phong Vạn Hải",
        "time": "06:15",
        "level": 3,
        "description": "Lướt đến phía sau Thần Tướng địch xa nhất, khiến toàn Thần Tướng địch trong phạm vi chịu 3 lần Công, tổng ST V.Lý bằng 210% Công của Đại Bàng Vương.",
        "levels": [
          {
            "level": 1,
            "description": "Lướt đến phía sau Thần Tướng địch xa nhất, khiến toàn Thần Tướng địch trong phạm vi chịu 3 lần Công, tổng ST V.Lý bằng 210% Công của Đại Bàng Vương."
          },
          {
            "level": 2,
            "description": "ST tăng lên 250%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 280%."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Kim Sí Côn Thủ",
        "time": "06:12",
        "level": 3,
        "description": "HP tăng 20%.",
        "levels": [
          {
            "level": 1,
            "description": "HP tăng 20%."
          },
          {
            "level": 2,
            "description": "HP tăng lên 25%, Tỷ Lệ Né tăng 5%."
          },
          {
            "level": 3,
            "description": "HP tăng lên 30%, Tỷ Lệ Né tăng lên 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hỗn Thế Bàng Ảnh",
        "time": "06:10",
        "level": 3,
        "description": "Lướt đến phía sau Thần Tướng địch ngẫu nhiên, gây ST V.Lý bằng 240% Công của Đại Bàng Vương lên toàn Thần Tướng địch trong phạm vi mục tiêu.",
        "levels": [
          {
            "level": 1,
            "description": "Lướt đến phía sau Thần Tướng địch ngẫu nhiên, gây ST V.Lý bằng 240% Công của Đại Bàng Vương lên toàn Thần Tướng địch trong phạm vi mục tiêu."
          },
          {
            "level": 2,
            "description": "ST tăng lên 280%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 320%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Vũ Hóa Cuồng Phong",
        "time": "06:06",
        "level": 3,
        "description": "Khi tấn công có 15% khiến mục tiêu chịu Giảm Chính Xác.",
        "levels": [
          {
            "level": 1,
            "description": "Khi tấn công có 15% khiến mục tiêu chịu Giảm Chính Xác."
          },
          {
            "level": 2,
            "description": "Tỷ lệ kèm Giảm Chính Xác tăng lên 20%."
          },
          {
            "level": 3,
            "description": "Tỷ lệ kèm Giảm Chính Xác tăng lên 25%."
          }
        ],
        "effects": [
          {
            "name": "Giảm Chính Xác",
            "description": "Chính Xác giảm 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 3,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "thanh-su-vuong": {
    "role": "Cận Chiến",
    "skills": [
      {
        "name": "Sư Hống Chấn Địch",
        "time": "06:31",
        "level": 3,
        "description": "Bản thân nhận Tăng Công.",
        "levels": [
          {
            "level": 1,
            "description": "Bản thân nhận Tăng Công."
          },
          {
            "level": 2,
            "description": "CD kỹ năng giảm xuống 12 giây."
          },
          {
            "level": 3,
            "description": "Bản thân nhận thêm Tăng Thủ V.Lý; CD giảm xuống 9 giây."
          }
        ],
        "effects": [
          {
            "name": "Tăng Công",
            "description": "Công tăng 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          },
          {
            "name": "Tăng Thủ V.Lý",
            "description": "Thủ V.Lý tăng 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 9,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thanh Tông Liêu Nha",
        "time": "06:27",
        "level": 3,
        "description": "Công tăng 15%, ST Bạo tăng 10%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%, ST Bạo tăng 10%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%, ST Bạo tăng lên 20%."
          },
          {
            "level": 3,
            "description": "Công tăng lên 25%, ST Bạo tăng lên 30%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "A Tỳ Tam Đao",
        "time": "06:24",
        "level": 3,
        "description": "Công Thần Tướng địch theo đường thẳng phía trước 5 lần, tổng ST V.Lý bằng 430%.",
        "levels": [
          {
            "level": 1,
            "description": "Công Thần Tướng địch theo đường thẳng phía trước 5 lần, tổng ST V.Lý bằng 430%."
          },
          {
            "level": 2,
            "description": "ST tăng lên 500%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 560%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Phá Ách Lợi Trảo",
        "time": "06:20",
        "level": 3,
        "description": "Khi tấn công có 10% khiến mục tiêu kèm Lôi Chước.",
        "levels": [
          {
            "level": 1,
            "description": "Khi tấn công có 10% khiến mục tiêu kèm Lôi Chước."
          },
          {
            "level": 2,
            "description": "Tỷ lệ Lôi Chước tăng lên 15%."
          },
          {
            "level": 3,
            "description": "Tỷ lệ Lôi Chước tăng lên 20%."
          }
        ],
        "effects": [
          {
            "name": "Lôi Chước",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "Hoại Huyết",
            "description": "Hiệu ứng thêm từ Lôi Chước: Thủ V.Lý giảm 0,5%, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "thong-ty-vien-hau": {
    "role": "Tiên Phong",
    "skills": [
      {
        "name": "Hấp Tiên Đại Pháp",
        "time": "07:02",
        "level": 3,
        "description": "Hút 100 Nộ của mục tiêu đơn thể xung quanh; 50% xác suất cướp 10% Công, tối đa không vượt quá 20% Công bản thân, kéo dài 6 giây.",
        "levels": [
          {
            "level": 1,
            "description": "Hút 100 Nộ của mục tiêu đơn thể xung quanh; 50% xác suất cướp 10% Công, tối đa không vượt quá 20% Công bản thân, kéo dài 6 giây."
          },
          {
            "level": 2,
            "description": "Hấp thụ Nộ tăng lên 120; cướp Công tăng lên 12%, tối đa 25% Công bản thân."
          },
          {
            "level": 3,
            "description": "Hấp thụ Nộ tăng lên 150; cướp Công tăng lên 15%, tối đa 30% Công bản thân. Điều kiện ghi trong video: 13 sao kích hoạt."
          }
        ],
        "effects": [
          {
            "name": "Cướp Công",
            "description": "Tooltip Lv.3: Cướp 15% Công mục tiêu, tối đa 30% Công bản thân, kéo dài 6 giây."
          }
        ],
        "cooldownSeconds": 14,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Kim Đan Nhập Thể",
        "time": "06:59",
        "level": 3,
        "description": "Thủ V.Lý tăng 15%, Công tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ V.Lý tăng 15%, Công tăng 5%."
          },
          {
            "level": 2,
            "description": "Thủ V.Lý tăng lên 20%, Công tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Thủ V.Lý tăng lên 25%, Công tăng lên 15%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Kỳ Lân Cước",
        "time": "06:56",
        "level": 3,
        "description": "Xông đến phía trước mục tiêu xa nhất, gây ST V.Lý bằng 700% Công bản thân; gây ST V.Lý bằng 150% Công lên Thần Tướng địch trên đường xông.",
        "levels": [
          {
            "level": 1,
            "description": "Xông đến phía trước mục tiêu xa nhất, gây ST V.Lý bằng 700% Công bản thân; gây ST V.Lý bằng 150% Công lên Thần Tướng địch trên đường xông."
          },
          {
            "level": 2,
            "description": "Video ghi ST tăng lên 800%."
          },
          {
            "level": 3,
            "description": "Video ghi ST tăng lên 700% (thấp hơn Lv.2; cần đối chiếu lại trong game)."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thần Hầu Đại Tướng",
        "time": "06:53",
        "level": 3,
        "description": "Bắt đầu chiến đấu nhận 300 Nộ; ST kỹ năng Nộ tăng 10%. Mỗi lần sử dụng kỹ năng Nộ gây cho bản thân ST bằng 30% HP hiện tại.",
        "levels": [
          {
            "level": 1,
            "description": "Bắt đầu chiến đấu nhận 300 Nộ; ST kỹ năng Nộ tăng 10%. Mỗi lần sử dụng kỹ năng Nộ gây cho bản thân ST bằng 30% HP hiện tại."
          },
          {
            "level": 2,
            "description": "Nộ ban đầu tăng lên 400."
          },
          {
            "level": 3,
            "description": "Nộ ban đầu tăng lên 500, đồng thời tăng thêm ST Nộ 15%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "hanh-tien-lam": {
    "role": "Tầm Xa",
    "skills": [
      {
        "name": "Củng Cố Căn Nguyên",
        "time": "07:15",
        "level": 3,
        "description": "Khiến Thần Tướng địch theo đường thẳng chịu ST Phép bằng 140% Công của Hạnh Tiên Lâm, kèm Giảm Tốc.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch theo đường thẳng chịu ST Phép bằng 140% Công của Hạnh Tiên Lâm, kèm Giảm Tốc."
          },
          {
            "level": 2,
            "description": "ST tăng lên 160%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 180%."
          }
        ],
        "effects": [
          {
            "name": "Giảm Tốc",
            "description": "Tốc Độ giảm 30%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 14,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hoa Nhường Nguyệt Thẹn",
        "time": "07:12",
        "level": 3,
        "description": "HP tăng 15%, Công tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "HP tăng 15%, Công tăng 5%."
          },
          {
            "level": 2,
            "description": "HP tăng lên 20%, Công tăng lên 10%."
          },
          {
            "level": 3,
            "description": "HP tăng lên 25%, Công tăng lên 15%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hạnh Vũ Tiên Lâm",
        "time": "07:10",
        "level": 3,
        "description": "Khiến Thần Tướng địch theo đường thẳng chịu ST Phép bằng 290% Công của Hạnh Tiên Lâm, kèm Độc Thực.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch theo đường thẳng chịu ST Phép bằng 290% Công của Hạnh Tiên Lâm, kèm Độc Thực."
          },
          {
            "level": 2,
            "description": "ST tăng lên 330%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 370%."
          }
        ],
        "effects": [
          {
            "name": "Độc Thực",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "Ăn Mòn",
            "description": "Hiệu ứng thêm từ Độc Thực: Công giảm 0,6%, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Tiên Hạnh Hồi Xuân",
        "time": "07:07",
        "level": 3,
        "description": "Trận đấu bắt đầu, có 30% khiến toàn Thần Tướng địch kèm Hạ Giảm Kháng.",
        "levels": [
          {
            "level": 1,
            "description": "Trận đấu bắt đầu, có 30% khiến toàn Thần Tướng địch kèm Hạ Giảm Kháng."
          },
          {
            "level": 2,
            "description": "Tỷ lệ Giảm Kháng tăng lên 50%."
          },
          {
            "level": 3,
            "description": "Tỷ lệ Giảm Kháng tăng lên 70%."
          }
        ],
        "effects": [
          {
            "name": "Hạ Giảm Kháng",
            "description": "Giảm Kháng giảm 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "khong-tuoc-cong-chua": {
    "role": "Hỗ Trợ",
    "skills": [
      {
        "name": "Hoàng Vũ Phi Vũ",
        "time": "07:31",
        "level": 3,
        "description": "Tạo Tăng Hồi Phục và Xuân Vũ cho 2 Thần Tướng phe ta.",
        "levels": [
          {
            "level": 1,
            "description": "Tạo Tăng Hồi Phục và Xuân Vũ cho 2 Thần Tướng phe ta."
          },
          {
            "level": 2,
            "description": "Hiệu quả Xuân Vũ tăng."
          },
          {
            "level": 3,
            "description": "Tăng thêm 1 mục tiêu phe ta có thể nhận hiệu quả; Xuân Vũ tăng thêm 1 bậc."
          }
        ],
        "effects": [
          {
            "name": "Tăng Hồi Phục",
            "description": "Hồi Phục tăng 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          },
          {
            "name": "Xuân Vũ",
            "description": "Mỗi giây chữa trị HP bằng 21% Công người thi triển, duy trì 5 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Minh Vương Chân Kinh",
        "time": "07:28",
        "level": 3,
        "description": "Công tăng 15%, Thủ V.Lý tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%, Thủ V.Lý tăng 5%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%, Thủ V.Lý tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Công tăng lên 25%, Thủ V.Lý tăng lên 15%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Tước Vũ Tán Hoa",
        "time": "07:24",
        "level": 3,
        "description": "Dùng 300% Công bản thân chữa trị cho Thần Tướng HP thấp nhất phe ta trong phạm vi gần; Chữa Trị đơn không vượt quá 90% Công của Khổng Tước Công Chúa.",
        "levels": [
          {
            "level": 1,
            "description": "Dùng 300% Công bản thân chữa trị cho Thần Tướng HP thấp nhất phe ta trong phạm vi gần; Chữa Trị đơn không vượt quá 90% Công của Khổng Tước Công Chúa."
          },
          {
            "level": 2,
            "description": "Tổng Chữa Trị tăng lên 400%; giới hạn Chữa Trị đơn tăng lên 120%."
          },
          {
            "level": 3,
            "description": "Chữa Trị tăng lên 500%; giới hạn Chữa Trị đơn tăng lên 150%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thần Quang Ngũ Sắc",
        "time": "07:20",
        "level": 3,
        "description": "Khi HP lần đầu thấp hơn 50%, bản thân nhận Tăng Hồi Phục.",
        "levels": [
          {
            "level": 1,
            "description": "Khi HP lần đầu thấp hơn 50%, bản thân nhận Tăng Hồi Phục."
          },
          {
            "level": 2,
            "description": "Ngưỡng HP lần đầu thấp hơn 60%; Tăng Hồi Phục tăng."
          },
          {
            "level": 3,
            "description": "Ngưỡng HP lần đầu thấp hơn 70%; Tăng Hồi Phục tăng thêm 1 bậc."
          }
        ],
        "effects": [
          {
            "name": "H.Quả Chữa Trị tăng",
            "description": "Tooltip ghi H.Quả Chữa Trị tăng 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ. Tên tooltip khác tên hiệu ứng trong mô tả."
          }
        ],
        "cooldownSeconds": 999,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "tieu-bach-long": {
    "role": "Cận Chiến",
    "skills": [
      {
        "name": "Phong Lôi Vạn Quân",
        "time": "07:50",
        "level": 3,
        "description": "Khiến Thần Tướng địch trong phạm vi chịu 3 lần ST Phép, tổng gây 210% ST Phép.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch trong phạm vi chịu 3 lần ST Phép, tổng gây 210% ST Phép."
          },
          {
            "level": 2,
            "description": "ST tăng lên 240%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 270%."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Tiềm Long Tại Uyên",
        "time": "07:46",
        "level": 3,
        "description": "Công tăng 15%, Tốc Độ tăng 20.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%, Tốc Độ tăng 20."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%, Tốc Độ tăng lên 35."
          },
          {
            "level": 3,
            "description": "Công tăng lên 25%, Tốc Độ tăng lên 50."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Long Du Cửu Thiên",
        "time": "07:42",
        "level": 3,
        "description": "Khiến toàn Thần Tướng địch chịu ST Phép bằng 210% Công; sau đó tự nhận Choáng và Cấm Nộ.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến toàn Thần Tướng địch chịu ST Phép bằng 210% Công; sau đó tự nhận Choáng và Cấm Nộ."
          },
          {
            "level": 2,
            "description": "ST tăng lên 240%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 270%."
          }
        ],
        "effects": [
          {
            "name": "Choáng",
            "description": "Bản thân không thể hành động, duy trì 8 giây, không cộng dồn, không thể giải trừ."
          },
          {
            "name": "Cấm Nộ",
            "description": "Bản thân không thể nhận Nộ, duy trì 8 giây, không cộng dồn, không thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Vân Khởi Long Tường",
        "time": "07:37",
        "level": 3,
        "description": "Trận đấu bắt đầu nhận 700 Nộ.",
        "levels": [
          {
            "level": 1,
            "description": "Trận đấu bắt đầu nhận 700 Nộ."
          },
          {
            "level": 2,
            "description": "Nộ ban đầu tăng lên 850."
          },
          {
            "level": 3,
            "description": "Nộ ban đầu tăng lên 1000."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "kinh-ha-long-vuong": {
    "role": "Tầm Xa",
    "skills": [
      {
        "name": "Kinh Thiên Tư Vũ",
        "time": "08:08",
        "level": 3,
        "description": "Khiến Thần Tướng địch trong phạm vi chịu ST Phép bằng 140% Công; 50% kèm Giảm Tốc.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch trong phạm vi chịu ST Phép bằng 140% Công; 50% kèm Giảm Tốc."
          },
          {
            "level": 2,
            "description": "ST tăng lên 160%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 180%."
          }
        ],
        "effects": [
          {
            "name": "Giảm Tốc",
            "description": "Tốc Độ giảm 20%, duy trì 9 giây, tối đa 3 tầng; cộng dồn làm mới thời gian duy trì, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 12,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Phong Vũ Hà Đồ",
        "time": "08:04",
        "level": 3,
        "description": "Công tăng 15%, HP tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%, HP tăng 5%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%, HP tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Công tăng lên 25%, HP tăng lên 15%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Sương Long Vô Tình",
        "time": "08:00",
        "level": 3,
        "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Đoạn 1 kích nổ Giảm Tốc trên mục tiêu, ST Phép bằng (100% + số tầng Giảm Tốc × 60%) Công. Đoạn 2 gây ST Phép bằng 100% Công; 10% khiến mục tiêu chịu Giá Rét.",
        "levels": [
          {
            "level": 1,
            "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Đoạn 1 kích nổ Giảm Tốc trên mục tiêu, ST Phép bằng (100% + số tầng Giảm Tốc × 60%) Công. Đoạn 2 gây ST Phép bằng 100% Công; 10% khiến mục tiêu chịu Giá Rét."
          },
          {
            "level": 2,
            "description": "Đoạn 1: (110% + số tầng Giảm Tốc × 70%) Công; đoạn 2 tăng lên 120%; tỷ lệ Giá Rét tăng lên 12%."
          },
          {
            "level": 3,
            "description": "Đoạn 1: (120% + số tầng Giảm Tốc × 80%) Công; đoạn 2 tăng lên 130%; tỷ lệ Giá Rét tăng lên 15%. Điều kiện: 15 sao kích hoạt."
          }
        ],
        "effects": [
          {
            "name": "Giá Rét",
            "description": "Không thể hành động; sau khi chịu 5 lượt ST trực tiếp sẽ xóa trạng thái. Duy trì 4 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      },
      {
        "name": "Hàn Băng Tước Thần",
        "time": "07:56",
        "level": 3,
        "description": "Khi tấn công mục tiêu mang Giá Rét, có thêm 50% khiến Công của Kinh Hà Long Vương tăng 20%.",
        "levels": [
          {
            "level": 1,
            "description": "Khi tấn công mục tiêu mang Giá Rét, có thêm 50% khiến Công của Kinh Hà Long Vương tăng 20%."
          },
          {
            "level": 2,
            "description": "Tỷ lệ kích hoạt tăng lên 75%; Công tăng lên 25%."
          },
          {
            "level": 3,
            "description": "Tỷ lệ kích hoạt tăng lên 100%; Công tăng lên 30%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "sa-ngo-tinh": {
    "role": "Thủ Hộ",
    "skills": [
      {
        "name": "La Hán Phù Hộ",
        "time": "08:23",
        "level": 3,
        "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt; chưa xác định mục tiêu/điều kiện Yểm Hộ.] Phần đọc được: Tăng Giảm ST và Tăng Song Phòng Ngự; BUFF cộng lên bản thân và mục tiêu.",
        "levels": [
          {
            "level": 1,
            "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt; chưa xác định mục tiêu/điều kiện Yểm Hộ.] Phần đọc được: Tăng Giảm ST và Tăng Song Phòng Ngự; BUFF cộng lên bản thân và mục tiêu."
          },
          {
            "level": 2,
            "description": "Yểm Hộ tăng lên Yểm Hộ-Trung; Tăng Hồi Né, Tăng Giảm ST, Tăng Song Phòng Ngự tăng."
          },
          {
            "level": 3,
            "description": "Yểm Hộ tăng lên Yểm Hộ-Cao; Tăng Hồi Né, Tăng Giảm ST, Tăng Song Phòng Ngự tăng mạnh."
          }
        ],
        "effects": [
          {
            "name": "Yểm Hộ-Cao",
            "description": "50% ST cuối khi mục tiêu được bảo vệ bị tấn công trực tiếp do người thi triển chịu; duy trì 10 giây, không cộng dồn, có thể giải trừ."
          },
          {
            "name": "Tăng Hồi Né",
            "description": "Hồi Né tăng 10%, duy trì 10 giây, có thể cộng dồn, có thể giải trừ."
          },
          {
            "name": "Tăng Song Phòng Ngự",
            "description": "Tên đọc được; tooltip không xuất hiện trong khung video."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      },
      {
        "name": "Bình Giáo Sa Môn",
        "time": "08:20",
        "level": 3,
        "description": "Thủ Phép tăng 20%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ Phép tăng 20%."
          },
          {
            "level": 2,
            "description": "Thủ Phép tăng lên 25%, Tỷ Lệ Né tăng 5%."
          },
          {
            "level": 3,
            "description": "Thủ Phép tăng lên 30%, Tỷ Lệ Né tăng lên 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Lưu Sa Cửu Châu",
        "time": "08:16",
        "level": 3,
        "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Phần đọc được: nhận ngẫu nhiên 1 BUFF trong Tăng Hồi Né, Tăng Giảm ST và Tăng Song Phòng Ngự; BUFF cộng lên bản thân và mục tiêu.",
        "levels": [
          {
            "level": 1,
            "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Phần đọc được: nhận ngẫu nhiên 1 BUFF trong Tăng Hồi Né, Tăng Giảm ST và Tăng Song Phòng Ngự; BUFF cộng lên bản thân và mục tiêu."
          },
          {
            "level": 2,
            "description": "Chữa Trị tăng lên 15%; các BUFF trên tăng."
          },
          {
            "level": 3,
            "description": "Chữa Trị tăng lên 20%; các BUFF trên tăng mạnh."
          }
        ],
        "effects": [
          {
            "name": "Tăng Hồi Né",
            "description": "Hồi Né tăng 10%, duy trì 10 giây, có thể cộng dồn, có thể giải trừ."
          },
          {
            "name": "Tăng Giảm ST",
            "description": "Giảm ST tăng 10%, duy trì 10 giây, có thể cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      },
      {
        "name": "Lục Đạo Vô Lượng",
        "time": "08:13",
        "level": 3,
        "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Phần đọc được: Tăng Hồi Né; khi Sa Ngộ Tịnh hồi Né thành công, gây Sát Thương Chuẩn xung quanh bằng 4% HP tối đa bản thân, không quá 300% Công; cách 2 giây kích hoạt.",
        "levels": [
          {
            "level": 1,
            "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Phần đọc được: Tăng Hồi Né; khi Sa Ngộ Tịnh hồi Né thành công, gây Sát Thương Chuẩn xung quanh bằng 4% HP tối đa bản thân, không quá 300% Công; cách 2 giây kích hoạt."
          },
          {
            "level": 2,
            "description": "Tuyến Huyết kích hoạt BUFF kèm theo tăng lên 35%; Phản ST tăng lên 5%."
          },
          {
            "level": 3,
            "description": "Tuyến Huyết kích hoạt BUFF kèm theo tăng lên 45%; Phản ST tăng lên 6%."
          }
        ],
        "effects": [
          {
            "name": "Tăng Hồi Né",
            "description": "Hồi Né tăng 8%, duy trì 6 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      }
    ]
  },
  "nhu-y-chan-tien": {
    "role": "Tiên Phong",
    "skills": [
      {
        "name": "Kiếm Pháp Như Ý",
        "time": "08:37",
        "level": 2,
        "description": "Lập tức dịch chuyển ra sau Thần Tướng địch xa nhất để tấn công và gây 340% ST V.Lý.",
        "levels": [
          {
            "level": 1,
            "description": "Lập tức dịch chuyển ra sau Thần Tướng địch xa nhất để tấn công và gây 340% ST V.Lý."
          },
          {
            "level": 2,
            "description": "ST tăng lên 400%."
          }
        ],
        "cooldownSeconds": 18,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Kiếm Tâm Thông Suốt",
        "time": "08:34",
        "level": 2,
        "description": "Công tăng 15%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%, ST Bạo tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Kiếm Đãng Bát Phương",
        "time": "08:32",
        "level": 2,
        "description": "Gây 4 lần ST V.Lý lên Thần Tướng địch lân cận, mỗi lần bằng 85% Công.",
        "levels": [
          {
            "level": 1,
            "description": "Gây 4 lần ST V.Lý lên Thần Tướng địch lân cận, mỗi lần bằng 85% Công."
          },
          {
            "level": 2,
            "description": "Mỗi lần ST tăng lên 100%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hạo Nhiên Kiếm Ý",
        "time": "08:29",
        "level": 2,
        "description": "Khi kỹ năng chủ động tiêu diệt mục tiêu, có 70% làm mới CD kỹ năng chủ động.",
        "levels": [
          {
            "level": 1,
            "description": "Khi kỹ năng chủ động tiêu diệt mục tiêu, có 70% làm mới CD kỹ năng chủ động."
          },
          {
            "level": 2,
            "description": "Tỷ lệ làm mới tăng lên 100%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "hac-tien-nhan": {
    "role": "Tầm Xa",
    "skills": [
      {
        "name": "Thực Cốt Hạc Phong",
        "time": "08:51",
        "level": 2,
        "description": "Khiến Thần Tướng địch trong phạm vi phía trước chịu ST Phép bằng 140% Công; 50% kèm Độc Thực.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch trong phạm vi phía trước chịu ST Phép bằng 140% Công; 50% kèm Độc Thực."
          },
          {
            "level": 2,
            "description": "ST tăng lên 160%; CD giảm xuống 8 giây."
          }
        ],
        "effects": [
          {
            "name": "Độc Thực",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "Ăn Mòn",
            "description": "Hiệu ứng thêm từ Độc Thực: Công giảm 0,6%, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 8,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hạc Thọ Trường Tồn",
        "time": "08:48",
        "level": 2,
        "description": "Công tăng 15%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%, HP tăng 5%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hạc Lệ Độc Vũ",
        "time": "08:45",
        "level": 2,
        "description": "Toàn Thần Tướng địch xung quanh bản thân chịu 2 lần Công, mỗi lần ST Phép bằng 100% Công; 30% kèm Độc Thực.",
        "levels": [
          {
            "level": 1,
            "description": "Toàn Thần Tướng địch xung quanh bản thân chịu 2 lần Công, mỗi lần ST Phép bằng 100% Công; 30% kèm Độc Thực."
          },
          {
            "level": 2,
            "description": "ST tăng lên 120%; tỷ lệ Độc Thực tăng lên 40%."
          }
        ],
        "effects": [
          {
            "name": "Độc Thực",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "Ăn Mòn",
            "description": "Hiệu ứng thêm từ Độc Thực: Công giảm 0,6%, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Linh Hạc Tứ Phúc",
        "time": "08:42",
        "level": 2,
        "description": "Công Thường có 20% giúp bản thân kèm Tăng ST Bất Thường.",
        "levels": [
          {
            "level": 1,
            "description": "Công Thường có 20% giúp bản thân kèm Tăng ST Bất Thường."
          },
          {
            "level": 2,
            "description": "Tỷ lệ Tăng ST Bất Thường tăng lên 25%."
          }
        ],
        "effects": [
          {
            "name": "Tăng ST Bất Thường",
            "description": "Tooltip ghi DEBUFF Thường, ST Bất Thường tăng 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "hac-hung-tinh": {
    "role": "Thủ Hộ",
    "skills": [
      {
        "name": "Thừa Hỏa Đả Kiếp",
        "time": "09:31",
        "level": 2,
        "description": "Bản thân nhận Huyền Thuẫn; có 30% khiến Thần Tướng địch ngẫu nhiên chịu Khiêu Khích.",
        "levels": [
          {
            "level": 1,
            "description": "Bản thân nhận Huyền Thuẫn; có 30% khiến Thần Tướng địch ngẫu nhiên chịu Khiêu Khích."
          },
          {
            "level": 2,
            "description": "Huyền Thuẫn tăng lên 10%; Khiêu Khích tăng lên 40%."
          }
        ],
        "effects": [
          {
            "name": "Huyền Thuẫn",
            "description": "Điểm Huyền Thuẫn bằng 10% HP Hắc Hùng Tinh tối đa, duy trì 5 giây, có thể cộng dồn, có thể giải trừ."
          },
          {
            "name": "Khiêu Khích",
            "description": "Trong 5 giây chỉ có thể tấn công người thi pháp; không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 12,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Nhất Niệm Yêu Phật",
        "time": "09:28",
        "level": 2,
        "description": "Thủ V.Lý tăng 10%, Thủ Phép tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ V.Lý tăng 10%, Thủ Phép tăng 5%."
          },
          {
            "level": 2,
            "description": "Thủ V.Lý tăng lên 15%, Thủ Phép tăng lên 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hắc Phong Hám Địa",
        "time": "09:24",
        "level": 2,
        "description": "Gây 5 lần ST V.Lý lên đơn thể phía trước, mỗi lần bằng 136% Công. Đoạn tấn công thứ 5 đẩy lùi mục tiêu nếu Độ Bền ≤3.",
        "levels": [
          {
            "level": 1,
            "description": "Gây 5 lần ST V.Lý lên đơn thể phía trước, mỗi lần bằng 136% Công. Đoạn tấn công thứ 5 đẩy lùi mục tiêu nếu Độ Bền ≤3."
          },
          {
            "level": 2,
            "description": "Mỗi lần ST tăng lên 160%; giới hạn Độ Bền khi đẩy lùi tăng lên 4. Điều kiện: 9 sao kích hoạt."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Không chịu ST",
        "time": "09:20",
        "level": 2,
        "description": "Khi bị Công, hồi 2% HP tối đa hiện tại, mỗi 6 giây kích hoạt 1 lần.",
        "levels": [
          {
            "level": 1,
            "description": "Khi bị Công, hồi 2% HP tối đa hiện tại, mỗi 6 giây kích hoạt 1 lần."
          },
          {
            "level": 2,
            "description": "HP hồi tăng lên 2,5%."
          }
        ],
        "cooldownSeconds": 6,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "kim-tri-truong-lao": {
    "role": "Hỗ Trợ",
    "skills": [
      {
        "name": "Đại Từ Đại Bi",
        "time": "09:45",
        "level": 2,
        "description": "Trong phạm vi, 1 Thần Tướng có HP thấp nhất phe ta nhận Duy Trì Chữa Trị; đồng thời giải trừ 3 DEBUFF bản thân.",
        "levels": [
          {
            "level": 1,
            "description": "Trong phạm vi, 1 Thần Tướng có HP thấp nhất phe ta nhận Duy Trì Chữa Trị; đồng thời giải trừ 3 DEBUFF bản thân."
          },
          {
            "level": 2,
            "description": "Duy Trì Chữa Trị nhắm vào 2 Thần Tướng phe ta có HP thấp nhất; số lượng giải trừ tăng lên 5."
          }
        ],
        "effects": [
          {
            "name": "Duy Trì Chữa Trị",
            "description": "Mỗi giây chữa trị HP bằng 25% Công người thi triển, duy trì 5 giây, có thể cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 20,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Kim Hải Tần Can",
        "time": "09:42",
        "level": 2,
        "description": "HP tăng 15%.",
        "levels": [
          {
            "level": 1,
            "description": "HP tăng 15%."
          },
          {
            "level": 2,
            "description": "Hiệu quả Chữa Trị tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Nhất Xuất Như Lai",
        "time": "09:39",
        "level": 2,
        "description": "Giải trừ 3 DEBUFF trên 3 Thần Tướng phe ta có HP thấp nhất, đồng thời kèm Duy Trì Chữa Trị.",
        "levels": [
          {
            "level": 1,
            "description": "Giải trừ 3 DEBUFF trên 3 Thần Tướng phe ta có HP thấp nhất, đồng thời kèm Duy Trì Chữa Trị."
          },
          {
            "level": 2,
            "description": "Số lượng giải trừ tăng lên 5."
          }
        ],
        "effects": [
          {
            "name": "Duy Trì Chữa Trị",
            "description": "Mỗi giây chữa trị HP bằng 25% Công người thi triển, duy trì 5 giây, có thể cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Phật Quang Phổ Chiếu",
        "time": "09:35",
        "level": 2,
        "description": "Cứ mỗi 12 giây, Thần Tướng phe ta xung quanh bản thân nhận Tăng Kháng Khống Chế.",
        "levels": [
          {
            "level": 1,
            "description": "Cứ mỗi 12 giây, Thần Tướng phe ta xung quanh bản thân nhận Tăng Kháng Khống Chế."
          },
          {
            "level": 2,
            "description": "Video ghi giảm thời gian CD Tăng Kháng Khống Chế: 9 giây."
          }
        ],
        "effects": [
          {
            "name": "Tăng Kháng Khống Chế",
            "description": "Kháng Khống Chế tăng 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "quang-tri": {
    "role": "Cận Chiến",
    "skills": [
      {
        "name": "Hỏa Nhận Phá Hiểu",
        "time": "10:00",
        "level": 2,
        "description": "Khiến Thần Tướng địch trong phạm vi phía trước chịu ST Phép bằng 170% Công; 30% thêm Hỏa Phần.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch trong phạm vi phía trước chịu ST Phép bằng 170% Công; 30% thêm Hỏa Phần."
          },
          {
            "level": 2,
            "description": "ST tăng lên 200%; tỷ lệ Hỏa Phần tăng lên 50%."
          }
        ],
        "effects": [
          {
            "name": "Hỏa Phần",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "Nứt Nẻ",
            "description": "Hiệu ứng thêm từ Hỏa Phần: Thủ Phép giảm 0,5%, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 10,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thiền Tâm Định Hải",
        "time": "09:57",
        "level": 2,
        "description": "HP tăng 15%.",
        "levels": [
          {
            "level": 1,
            "description": "HP tăng 15%."
          },
          {
            "level": 2,
            "description": "HP tăng lên 25%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Viêm Lang Khiếu Nguyệt",
        "time": "09:53",
        "level": 2,
        "description": "Khiến Thần Tướng địch đơn lẻ chịu 2 lần ST Phép bằng 200% Công; sau đó địch trong phạm vi chịu ST Phép bằng 280% Công.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch đơn lẻ chịu 2 lần ST Phép bằng 200% Công; sau đó địch trong phạm vi chịu ST Phép bằng 280% Công."
          },
          {
            "level": 2,
            "description": "Mục tiêu đơn chịu 2 lần ST tăng lên 240%; ST xung quanh tăng lên 320%."
          }
        ],
        "effects": [
          {
            "name": "Giảm Kháng Bất Thường",
            "description": "Tooltip ghi Kháng Bất Thường giảm 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ. Phần mô tả không ghi điều kiện áp dụng hiệu ứng này."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Lang Ảnh Hỏa Tập",
        "time": "09:49",
        "level": 2,
        "description": "Quảng Trí khi chịu Công có 15% khiến mục tiêu kèm Hỏa Phần.",
        "levels": [
          {
            "level": 1,
            "description": "Quảng Trí khi chịu Công có 15% khiến mục tiêu kèm Hỏa Phần."
          },
          {
            "level": 2,
            "description": "Tỷ lệ Hỏa Phần tăng lên 20%."
          }
        ],
        "effects": [
          {
            "name": "Hỏa Phần",
            "description": "Mỗi giây chịu ST bằng 3% Công hiện tại của người thi triển, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          },
          {
            "name": "Nứt Nẻ",
            "description": "Hiệu ứng thêm từ Hỏa Phần: Thủ Phép giảm 0,5%, duy trì 15 giây, tối đa 30 tầng, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "cu-linh-than": {
    "role": "Thủ Hộ",
    "skills": [
      {
        "name": "Trào Thiên Nộ Hống",
        "time": "10:12",
        "level": 1,
        "description": "Chữa trị bản thân bằng 10% HP đã mất, không quá 80% Công; 30% khiến Thần Tướng địch ngẫu nhiên chịu Khiêu Khích.",
        "levels": [
          {
            "level": 1,
            "description": "Chữa trị bản thân bằng 10% HP đã mất, không quá 80% Công; 30% khiến Thần Tướng địch ngẫu nhiên chịu Khiêu Khích."
          }
        ],
        "effects": [
          {
            "name": "Khiêu Khích",
            "description": "Trong 5 giây xem người thi triển là mục tiêu tấn công, không thể dùng kỹ năng; không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 10,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thiên Chi Thần Lực",
        "time": "10:08",
        "level": 1,
        "description": "HP tăng 10%.",
        "levels": [
          {
            "level": 1,
            "description": "HP tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Kinh Thiên Động Địa",
        "time": "10:05",
        "level": 1,
        "description": "Gây ST V.Lý bằng 100% Công của Cự Linh Thần lên toàn Thần Tướng địch trong phạm vi; đồng thời chữa trị bản thân bằng 30% tổng ST Công lần này.",
        "levels": [
          {
            "level": 1,
            "description": "Gây ST V.Lý bằng 100% Công của Cự Linh Thần lên toàn Thần Tướng địch trong phạm vi; đồng thời chữa trị bản thân bằng 30% tổng ST Công lần này."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "ngoc-tho": {
    "role": "Hỗ Trợ",
    "skills": [
      {
        "name": "Nguyệt Cung Giã Dược",
        "time": "10:22",
        "level": 1,
        "description": "Giúp Thần Tướng phe ta có HP thấp nhất hồi phục bằng 140% Công Ngọc Thố.",
        "levels": [
          {
            "level": 1,
            "description": "Giúp Thần Tướng phe ta có HP thấp nhất hồi phục bằng 140% Công Ngọc Thố."
          }
        ],
        "cooldownSeconds": 10,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Quảng Hàn Thố Linh",
        "time": "10:19",
        "level": 1,
        "description": "HP tăng 10%.",
        "levels": [
          {
            "level": 1,
            "description": "HP tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Vũ Điệu Nguyệt Hoa",
        "time": "10:17",
        "level": 1,
        "description": "Khiến Thần Tướng địch trong phạm vi chịu 2 lần ST Phép, mỗi lần chịu 90% ST Phép; chữa trị Thần Tướng phe ta trong phạm vi bằng 15% ST của đòn đánh này.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch trong phạm vi chịu 2 lần ST Phép, mỗi lần chịu 90% ST Phép; chữa trị Thần Tướng phe ta trong phạm vi bằng 15% ST của đòn đánh này."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "yeu-nhen": {
    "role": "Tầm Xa",
    "skills": [
      {
        "name": "Chu Du Trùng Tích",
        "time": "10:30",
        "level": 1,
        "description": "Mục tiêu đầu chịu ST Phép bằng 200% Công, sau đó bật nảy Công giữa các Thần Tướng địch; mỗi lần bật nảy ST giảm 50%.",
        "levels": [
          {
            "level": 1,
            "description": "Mục tiêu đầu chịu ST Phép bằng 200% Công, sau đó bật nảy Công giữa các Thần Tướng địch; mỗi lần bật nảy ST giảm 50%."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Tác Kén Phược Động",
        "time": "10:28",
        "level": 1,
        "description": "Công tăng 10%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Bàn Ti Thất Tinh",
        "time": "10:26",
        "level": 1,
        "description": "Bản thân nhận Tăng Bạo.",
        "levels": [
          {
            "level": 1,
            "description": "Bản thân nhận Tăng Bạo."
          }
        ],
        "effects": [
          {
            "name": "Tăng Bạo",
            "description": "Bạo tăng 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "ho-tien-phong": {
    "role": "Cận Chiến",
    "skills": [
      {
        "name": "Kiếm Viêm Xuyên Nhĩ",
        "time": "10:40",
        "level": 1,
        "description": "Khiến toàn Thần Tướng địch trong phạm vi phía trước chịu ST V.Lý bằng 140%.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến toàn Thần Tướng địch trong phạm vi phía trước chịu ST V.Lý bằng 140%."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hổ Khiếu Phong Sinh",
        "time": "10:37",
        "level": 1,
        "description": "Công tăng 10%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hắc Hổ Đào Tâm",
        "time": "10:34",
        "level": 1,
        "description": "Khiến Thần Tướng địch phía trước chịu 5 lần ST, mỗi lần ST V.Lý bằng 56% Công Hổ Tiên Phong; 6% kèm Giảm Công.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch phía trước chịu 5 lần ST, mỗi lần ST V.Lý bằng 56% Công Hổ Tiên Phong; 6% kèm Giảm Công."
          }
        ],
        "effects": [
          {
            "name": "Công giảm",
            "description": "Công giảm 20%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "vien-thu-thanh": {
    "role": "Tầm Xa",
    "skills": [
      {
        "name": "Gieo Quẻ Tay Áo",
        "time": "10:50",
        "level": 1,
        "description": "Gây ST Phép lên toàn bộ Thần Tướng địch trong phạm vi bằng 140% Công.",
        "levels": [
          {
            "level": 1,
            "description": "Gây ST Phép lên toàn bộ Thần Tướng địch trong phạm vi bằng 140% Công."
          }
        ],
        "cooldownSeconds": 20,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Minh Tâm Kiến Tính",
        "time": "10:48",
        "level": 1,
        "description": "Công tăng 10%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Duyên Khởi Duyên Lạc",
        "time": "10:45",
        "level": 1,
        "description": "Gây 2 lần Công lên Thần Tướng địch theo đường thẳng, mỗi lần 40% ST Phép; đồng thời triệu hồi sóng biển gây 60% ST Phép lên 3 mục tiêu phía trước.",
        "levels": [
          {
            "level": 1,
            "description": "Gây 2 lần Công lên Thần Tướng địch theo đường thẳng, mỗi lần 40% ST Phép; đồng thời triệu hồi sóng biển gây 60% ST Phép lên 3 mục tiêu phía trước."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "kim-giac": {
    "role": "Tầm Xa",
    "skills": [
      {
        "name": "Ngọc Tịnh Trọng Thủy",
        "time": "06:48",
        "level": 3,
        "description": "Khiến Thần Tướng địch theo đường thẳng chịu 4 lần Công, mỗi lần ST Phép bằng 80% Công và 20% kèm Giảm Tốc Công.",
        "levels": [
          {
            "level": 1,
            "description": "Khiến Thần Tướng địch theo đường thẳng chịu 4 lần Công, mỗi lần ST Phép bằng 80% Công và 20% kèm Giảm Tốc Công."
          },
          {
            "level": 2,
            "description": "ST tăng lên 92%; tỷ lệ Giảm Tốc Công tăng lên 25%."
          },
          {
            "level": 3,
            "description": "ST tăng lên 104%; tỷ lệ Giảm Tốc Công tăng lên 30%."
          }
        ],
        "effects": [
          {
            "name": "Giảm Tốc Công",
            "description": "Tốc Công giảm 30%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "cooldownSeconds": 14,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Kim Lô Tiểu Đồng",
        "time": "06:45",
        "level": 3,
        "description": "Thủ Phép tăng 15%, ST Phép tăng 5%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ Phép tăng 15%, ST Phép tăng 5%."
          },
          {
            "level": 2,
            "description": "Thủ Phép tăng lên 20%, ST Phép tăng lên 10%."
          },
          {
            "level": 3,
            "description": "Thủ Phép tăng lên 25%, ST Phép tăng lên 20%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thất Tinh Hóa Hải",
        "time": "06:41",
        "level": 3,
        "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Phần đọc được: khiến toàn Thần Tướng địch trong phạm vi chịu 2 lần ST Phép bằng 70% Kim Giác Đại Vương; 20% kèm Giảm Tốc Công và Giảm Tốc.",
        "levels": [
          {
            "level": 1,
            "description": "[Thiếu phần đầu Lv.1 do khung mô tả bị cắt.] Phần đọc được: khiến toàn Thần Tướng địch trong phạm vi chịu 2 lần ST Phép bằng 70% Kim Giác Đại Vương; 20% kèm Giảm Tốc Công và Giảm Tốc."
          },
          {
            "level": 2,
            "description": "Mỗi lần ST phạm vi tăng lên 90%; tỷ lệ kèm theo tăng lên 25%."
          },
          {
            "level": 3,
            "description": "Mỗi lần ST phạm vi tăng lên 110%; tỷ lệ kèm theo tăng lên 30%."
          }
        ],
        "effects": [
          {
            "name": "Giảm Tốc Công",
            "description": "Tốc Công giảm 30%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          },
          {
            "name": "Giảm Tốc",
            "description": "Tốc Độ giảm 60%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": true
      },
      {
        "name": "Chí Dương Huyền Khí",
        "time": "06:37",
        "level": 3,
        "description": "Khi Kim Giác chủ động tấn công có 25% khiến mục tiêu kèm Giảm Kháng.",
        "levels": [
          {
            "level": 1,
            "description": "Khi Kim Giác chủ động tấn công có 25% khiến mục tiêu kèm Giảm Kháng."
          },
          {
            "level": 2,
            "description": "Tỷ lệ Giảm Kháng tăng lên 35%."
          },
          {
            "level": 3,
            "description": "Tỷ lệ Giảm Kháng tăng lên 50%."
          }
        ],
        "effects": [
          {
            "name": "Hạ Giảm Kháng",
            "description": "Tooltip ghi Giảm Kháng giảm 15%, duy trì 9 giây, không cộng dồn, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "ngan-giac": {
    "role": "Tầm Xa",
    "skills": [
      {
        "name": "Tử Kim Phệ Diệm",
        "time": "09:08",
        "level": 2,
        "description": "Gây 170% ST V.Lý lên toàn bộ mục tiêu trên một đường thẳng; nếu Độ Bền mục tiêu ≤3 sẽ bị đẩy lùi.",
        "levels": [
          {
            "level": 1,
            "description": "Gây 170% ST V.Lý lên toàn bộ mục tiêu trên một đường thẳng; nếu Độ Bền mục tiêu ≤3 sẽ bị đẩy lùi."
          },
          {
            "level": 2,
            "description": "ST tăng lên 200%; khoảng cách đẩy lùi tăng."
          }
        ],
        "cooldownSeconds": 12,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Ngân Lô Tiểu Đồng",
        "time": "09:05",
        "level": 2,
        "description": "Công tăng 15%.",
        "levels": [
          {
            "level": 1,
            "description": "Công tăng 15%."
          },
          {
            "level": 2,
            "description": "Công tăng lên 20%, HP tăng 5%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hô Danh Đạo Tính",
        "time": "09:01",
        "level": 2,
        "description": "Gây 4 lần ST V.Lý lên địch theo đường thẳng, mỗi lần 85% ST V.Lý.",
        "levels": [
          {
            "level": 1,
            "description": "Gây 4 lần ST V.Lý lên địch theo đường thẳng, mỗi lần 85% ST V.Lý."
          },
          {
            "level": 2,
            "description": "Mỗi lần ST tăng lên 100%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Chí Âm Huyền Khí",
        "time": "08:58",
        "level": 2,
        "description": "Mỗi lần tấn công có 15% giúp bản thân kèm Dược Không.",
        "levels": [
          {
            "level": 1,
            "description": "Mỗi lần tấn công có 15% giúp bản thân kèm Dược Không."
          },
          {
            "level": 2,
            "description": "Tỷ lệ kèm Dược Không tăng lên 20%. Điều kiện: 10 sao kích hoạt."
          }
        ],
        "effects": [
          {
            "name": "Dược Không",
            "description": "Bạo tăng 1,5%, duy trì 9 giây, có thể cộng dồn; mỗi lần cộng dồn làm mới thời gian duy trì, có thể giải trừ."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  },
  "khong-khong-nhi": {
    "role": "Cận Chiến",
    "skills": [
      {
        "name": "Phá Thiên Nhất Côn",
        "time": "11:00",
        "level": 1,
        "description": "Trước tiên gây 1 lần ST V.Lý bằng 140% Công lên 1 địch gần nhất, sau đó gây ST V.Lý bằng 70% Công. Video không ghi rõ mục tiêu của đoạn sau.",
        "levels": [
          {
            "level": 1,
            "description": "Trước tiên gây 1 lần ST V.Lý bằng 140% Công lên 1 địch gần nhất, sau đó gây ST V.Lý bằng 70% Công. Video không ghi rõ mục tiêu của đoạn sau."
          }
        ],
        "cooldownSeconds": 15,
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Thiên Mệnh Kim Cô",
        "time": "10:58",
        "level": 1,
        "description": "Thủ V.Lý tăng 10%.",
        "levels": [
          {
            "level": 1,
            "description": "Thủ V.Lý tăng 10%."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      },
      {
        "name": "Hộp Nguyệt Quang",
        "time": "10:55",
        "level": 1,
        "description": "Tấn công Thần Tướng địch trong phạm vi 3 lần, tổng ST V.Lý bằng 550% Công.",
        "levels": [
          {
            "level": 1,
            "description": "Tấn công Thần Tướng địch trong phạm vi 3 lần, tổng ST V.Lý bằng 550% Công."
          }
        ],
        "sourceId": "player-skill-video-2026-10-23",
        "incomplete": false
      }
    ]
  }
}
