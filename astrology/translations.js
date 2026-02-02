const translations = {
    ko: {
        tagline: "우리 사이는 몇 티어일까?",
        feat: { privacy_title: "개인정보 보호", privacy_desc: "서버 저장 NO", free_title: "평생 무료", free_desc: "결제 없이 이용" },
        nav: { name: "이름 궁합", mbti: "MBTI", daily: "오늘의 운세" },
        name: { title: "이름 궁합 테스트", yourName: "내 이름", partnerName: "상대방 이름", calculate: "티어 확인하기", alert: "이름을 모두 입력해주세요!" },
        mbti: { title: "MBTI 궁합", yourMbti: "내 MBTI", partnerMbti: "상대방 MBTI", calculate: "궁합 분석하기" },
        daily: { title: "오늘의 연애운", intro: "이름", birthday: "생년월일", calculate: "운세 카드 뽑기", alert: "이름을 입력해주세요!" },
        result: { save: "이미지 저장", share: "공유하기", showDate: "💘 이 점수 추천 코스" }
    },
    en: {
        tagline: "Check your love tier instantly",
        feat: { privacy_title: "100% Private", privacy_desc: "No data stored", free_title: "Forever Free", free_desc: "No hidden fees" },
        nav: { name: "Name Match", mbti: "MBTI", daily: "Daily Fortune" },
        name: { title: "Name Compatibility", yourName: "Your Name", partnerName: "Partner's Name", calculate: "Check Tier", alert: "Enter both names!" },
        mbti: { title: "MBTI Match", yourMbti: "Your Type", partnerMbti: "Partner's Type", calculate: "Analyze" },
        daily: { title: "Love Luck", intro: "Name", birthday: "Birthday", calculate: "Check Fortune", alert: "Enter your name!" },
        result: { save: "Save Card", share: "Share", showDate: "💘 Date Ideas" }
    },
    ja: {
        tagline: "二人の相性ティアを確認",
        feat: { privacy_title: "プライバシー保護", privacy_desc: "保存されません", free_title: "完全無料", free_desc: "課金なし" },
        nav: { name: "名前相性", mbti: "MBTI", daily: "今日の運勢" },
        name: { title: "名前相性占い", yourName: "自分の名前", partnerName: "相手の名前", calculate: "ティア確認", alert: "名前を入力してください" },
        mbti: { title: "MBTI相性", yourMbti: "自分", partnerMbti: "相手", calculate: "分析する" },
        daily: { title: "恋愛運", intro: "名前", birthday: "生年月日", calculate: "運勢を見る", alert: "名前が必要です" },
        result: { save: "画像保存", share: "シェア", showDate: "💘 おすすめデート" }
    },
    cn: {
        tagline: "测试你们的恋爱等级",
        feat: { privacy_title: "隐私保护", privacy_desc: "不保存数据", free_title: "永久免费", free_desc: "无隐藏费用" },
        nav: { name: "姓名配对", mbti: "MBTI", daily: "今日运势" },
        name: { title: "姓名缘分测试", yourName: "你的名字", partnerName: "对方名字", calculate: "查看等级", alert: "请输入名字" },
        mbti: { title: "MBTI 配对", yourMbti: "你的类型", partnerMbti: "对方类型", calculate: "开始分析" },
        daily: { title: "今日爱情运", intro: "名字", birthday: "生日", calculate: "查看运势", alert: "请输入名字" },
        result: { save: "保存图片", share: "分享", showDate: "💘 约会推荐" }
    }
};

// Simple Result Messages (Demo)
const storyMessages = {
    ko: { good: "환상의 짝꿍입니다! 놓치면 후회해요.", bad: "서로 많은 노력이 필요해 보입니다." },
    en: { good: "Perfect Match! Don't let go.", bad: "Requires a lot of effort." },
    ja: { good: "最高の相性です！", bad: "努力が必要です。" },
    cn: { good: "天生一对！", bad: "需要多加努力。" }
};

const dateMenus = {
    ko: [ {spot: "한강 공원", menu: "치킨 & 맥주", reason: "탁 트인 곳에서 솔직한 대화"}, {spot: "분위기 좋은 바", menu: "칵테일", reason: "로맨틱한 분위기 필요"} ],
    en: [ {spot: "Park Picnic", menu: "Sandwiches", reason: "Relaxing conversation"}, {spot: "Cocktail Bar", menu: "Signature Drink", reason: "Romantic vibes"} ],
    ja: [ {spot: "公園デート", menu: "お弁当", reason: "リラックスした会話"}, {spot: "居酒屋", menu: "焼き鳥", reason: "親密度アップ"} ],
    cn: [ {spot: "公园野餐", menu: "三明治", reason: "轻松的对话"}, {spot: "酒吧", menu: "鸡尾酒", reason: "浪漫氛围"} ]
};