
// ====== App State ======
let currentLang = 'en';
let currentSection = 'name';

// ====== Language Data ======
const availableLangs = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'ru', 'pt'];
const langNames = {
    'en': 'EN', 'ko': '한국어', 'ja': '日本語', 'zh': '中文',
    'es': 'ES', 'fr': 'FR', 'de': 'DE', 'ru': 'RU', 'pt': 'PT'
};

// ====== Storytelling Messages ======
const storyMessages = {
    en: {
        excellent: {
            verdict: "A Love Written in the Stars! ✨",
            message: "Wow! This is the kind of connection poets write about. Your energies dance together like two flames that never burn each other, only shine brighter. The universe clearly had a plan when your paths crossed.",
            advice: "Keep nurturing this beautiful bond. Small gestures of love - a surprise note, remembering the little things - will keep your connection magical for years to come."
        },
        good: {
            verdict: "A Beautiful Journey Awaits 💫",
            message: "You two have that special spark that can light up any room. Sure, you're different, but that's what makes it interesting! Your differences complement each other like peanut butter and jelly.",
            advice: "Communication is your superpower. When things get confusing, just talk it out. Your bond is strong enough to handle any storm."
        },
        average: {
            verdict: "A Love Worth Fighting For 💪",
            message: "Every great love story has its chapters of growth. You're at the beginning of something that could be extraordinary if you're both willing to put in the work. The potential is definitely there!",
            advice: "Focus on building understanding. Try new experiences together, create shared memories, and watch your connection deepen with time."
        },
        challenging: {
            verdict: "The Road Less Traveled 🌈",
            message: "Here's the thing about challenging matches - they often create the most beautiful growth. You're going to push each other to be better versions of yourselves. That's a gift, even when it doesn't feel like it.",
            advice: "Patience and empathy are your best friends. Try to see the world through their eyes sometimes. The reward for this work? A love that's truly earned."
        },
        difficult: {
            verdict: "An Unexpected Adventure 🎢",
            message: "Okay, the stars might be raising an eyebrow here, but guess what? Some of history's greatest love stories defied the odds. If you both feel that pull, don't let numbers discourage you.",
            advice: "This is going to require extra effort, but if you're both committed, you can write your own destiny. Focus on what brings you together, not what pulls apart."
        }
    },
    ko: {
        excellent: {
            verdict: "별들이 축복한 사랑! ✨",
            message: "와! 이건 정말 운명적인 만남이에요. 두 분의 에너지가 서로를 태우지 않으면서 더 밝게 빛나는 두 개의 불꽃처럼 함께 춤추고 있어요. 우주가 분명히 계획을 가지고 두 분의 길을 교차시킨 것 같아요.",
            advice: "이 아름다운 인연을 계속 가꿔가세요. 깜짝 메모, 작은 것들을 기억하는 것 - 이런 작은 사랑의 표현들이 두 분의 관계를 오래도록 마법처럼 특별하게 만들어줄 거예요."
        },
        good: {
            verdict: "아름다운 여정이 기다려요 💫",
            message: "두 분에게는 어떤 방이든 환하게 밝힐 수 있는 특별한 불꽃이 있어요. 물론 서로 다르지만, 그게 바로 흥미로운 점이에요! 서로의 다름이 땅콩버터와 젤리처럼 완벽하게 어울려요.",
            advice: "소통이 두 분의 초능력이에요. 혼란스러울 때는 그냥 대화하세요. 두 분의 유대는 어떤 폭풍도 견딜 만큼 충분히 강해요."
        },
        average: {
            verdict: "싸울 가치가 있는 사랑 💪",
            message: "모든 위대한 사랑 이야기에는 성장의 장이 있어요. 두 분이 함께 노력한다면 특별한 무언가의 시작점에 서 있는 거예요. 가능성은 분명히 있어요!",
            advice: "이해를 쌓는 데 집중하세요. 함께 새로운 경험을 하고, 공유된 추억을 만들고, 시간이 지나면서 연결이 깊어지는 것을 지켜보세요."
        },
        challenging: {
            verdict: "덜 다녀간 길 🌈",
            message: "도전적인 궁합에 대해 말하자면 - 가장 아름다운 성장을 만들어내는 경우가 많아요. 서로가 더 나은 버전이 되도록 밀어붙일 거예요. 그건 선물이에요, 비록 그렇게 느껴지지 않을 때도요.",
            advice: "인내와 공감이 최고의 친구예요. 가끔은 그들의 눈으로 세상을 보려고 노력해보세요. 이 노력의 보상은? 진정으로 얻어낸 사랑이에요."
        },
        difficult: {
            verdict: "예상치 못한 모험 🎢",
            message: "좋아요, 별들이 여기서 눈썹을 올리고 있을지도 몰라요, 하지만 어때요? 역사상 가장 위대한 사랑 이야기 중 일부는 역경을 이겨냈어요. 두 분 모두 그 끌림을 느낀다면, 숫자가 낙담하게 만들지 마세요.",
            advice: "이건 추가적인 노력이 필요할 거예요, 하지만 둘 다 헌신한다면, 자신만의 운명을 쓸 수 있어요. 갈라놓는 것이 아니라 함께하게 만드는 것에 집중하세요."
        }
    }
};

// ====== Date Recommendations Data ======
const dateMenus = {
    excellent: [ // 85-100
        { menu: '한우 오마카세', spot: '루프탑 파인다이닝', reason: '축하할 일이 있잖아요! 최고의 궁합엔 최고의 음식을' },
        { menu: '랍스터 파스타', spot: '오션뷰 레스토랑', reason: '바다처럼 깊은 사랑에는 바다가 보이는 곳에서' },
        { menu: '트러플 리조또', spot: '캔들라잇 이탈리안', reason: '이미 로맨틱한 두 사람, 분위기만 더해주면 완벽' },
        { menu: '와규 스테이크', spot: '프라이빗 다이닝룸', reason: '남들 눈치 볼 필요 없이 둘만의 시간을' }
    ],
    good: [ // 70-84
        { menu: '숯불 삼겹살', spot: '을지로 감성 골목', reason: '맛있는 고기 앞에서 더 솔직해지는 대화를' },
        { menu: '수제 버거 세트', spot: '빈티지 펍', reason: '캐주얼하지만 특별한, 딱 좋은 밸런스' },
        { menu: '해물 파전 + 막걸리', spot: '한옥 술집', reason: '전통적인 분위기에서 미래를 이야기해봐요' },
        { menu: '치킨 + 맥주', spot: '야경 보이는 테라스', reason: '편하면서도 로맨틱한 조합이에요' }
    ],
    average: [ // 50-69
        { menu: '마라탕', spot: '핫플 중식당', reason: '얼얼한 맛처럼 자극적인 대화가 필요할 때' },
        { menu: '돈카츠 정식', spot: '아기자기한 일식집', reason: '바삭한 첫인상처럼 새로운 시작을' },
        { menu: '베트남 쌀국수', spot: '이국적인 동남아 카페', reason: '여행 이야기로 거리감을 좁혀보세요' },
        { menu: '타코 + 나쵸', spot: '멕시칸 펍', reason: '신나는 음악과 함께 분위기 업!' }
    ],
    challenging: [ // 30-49
        { menu: '삼겹살 사주기', spot: '동네 고깃집', reason: '🔥 삼겹살 사주기 권법으로 불운 막기!' },
        { menu: '떡볶이 + 순대', spot: '시장 분식집', reason: '맛있는 건 같이 먹으면 친해져요' },
        { menu: '소주 + 치킨', spot: '포장마차', reason: '솔직한 대화엔 소주 한 잔이 약이에요' },
        { menu: '라멘', spot: '골목 라멘집', reason: '따뜻한 국물이 마음도 녹여줄 거예요' }
    ],
    difficult: [ // 1-29
        { menu: '삼겹살 무한리필', spot: '가성비 고깃집', reason: '🥓 삼겹살 10인분 사주기로 운명 바꾸기!' },
        { menu: '곱창 + 소주', spot: '노포 곱창집', reason: '막창처럼 쫄깃하게 버텨봅시다' },
        { menu: '해장국', spot: '24시 해장국집', reason: '새로운 시작엔 해장이 필요해요' },
        { menu: '불닭볶음면', spot: '집', reason: '매운 걸 같이 먹으면 전우애가 생겨요' }
    ]
};

const dateMenusEn = {
    excellent: [
        { menu: 'Wagyu Omakase', spot: 'Rooftop Fine Dining', reason: 'Something to celebrate! The best match deserves the best food' },
        { menu: 'Lobster Pasta', spot: 'Ocean View Restaurant', reason: 'Deep love like the ocean deserves ocean views' },
        { menu: 'Truffle Risotto', spot: 'Candlelit Italian', reason: 'Already romantic, just add ambiance' },
        { menu: 'Premium Steak', spot: 'Private Dining Room', reason: 'Just the two of you, no distractions' }
    ],
    good: [
        { menu: 'BBQ Ribs', spot: 'Vintage Smokehouse', reason: 'Good food makes good conversations' },
        { menu: 'Craft Burger Set', spot: 'Trendy Pub', reason: 'Casual but special, perfect balance' },
        { menu: 'Seafood Platter', spot: 'Cozy Wine Bar', reason: 'Share plates, share stories' },
        { menu: 'Pizza & Beer', spot: 'Rooftop Terrace', reason: 'Relaxed yet romantic combo' }
    ],
    average: [
        { menu: 'Spicy Hot Pot', spot: 'Trendy Asian Fusion', reason: 'Spicy food for spicy conversations' },
        { menu: 'Ramen Bowl', spot: 'Cozy Noodle Shop', reason: 'Warm bowls warm hearts' },
        { menu: 'Pho & Spring Rolls', spot: 'Exotic Cafe', reason: 'Travel talk brings you closer' },
        { menu: 'Tacos & Nachos', spot: 'Mexican Cantina', reason: 'Fun music, fun vibes!' }
    ],
    challenging: [
        { menu: 'Buy Them BBQ!', spot: 'Local Grill', reason: '🔥 BBQ Gift Attack to block bad luck!' },
        { menu: 'Street Food Tour', spot: 'Night Market', reason: 'Sharing food = making friends' },
        { menu: 'Fried Chicken & Beer', spot: 'Casual Bar', reason: 'Honest talks need good drinks' },
        { menu: 'Comfort Ramen', spot: 'Hidden Gem Shop', reason: 'Warm soup melts cold hearts' }
    ],
    difficult: [
        { menu: 'All-You-Can-Eat BBQ', spot: 'Value Grill House', reason: '🥓 Change destiny with unlimited meat!' },
        { menu: 'Late Night Noodles', spot: '24h Diner', reason: 'New beginnings need comfort food' },
        { menu: 'Spicy Wings Challenge', spot: 'Sports Bar', reason: 'Shared suffering builds bonds' },
        { menu: 'Instant Noodles', spot: 'Your Place', reason: 'Eating spicy together = battle buddies' }
    ]
};

// ====== Past Life Stories ======
const pastLifeStories = {
    ko: [
        { relation: '조선시대 주막 주인과 떠돌이 보부상', detail: '매번 외상이었지만 결국 같이 장사했던 사이' },
        { relation: '서로 검을 겨누던 검투사', detail: '매번 무승부로 끝나 결국 친구가 됐던 사이' },
        { relation: '궁중 나인과 몰래 사랑한 내관', detail: '달빛 아래 손만 잡았던 애틋한 사이' },
        { relation: '해적선 선장과 포로가 된 귀족', detail: '스톡홀름 신드롬인지 사랑인지 모를 사이' },
        { relation: '산적 두목과 산적에게 구출된 공주', detail: '공주가 산적단을 경영하게 된 사이' },
        { relation: '도깨비와 도깨비에 홀린 서생', detail: '밤새 바둑 두다 첫사랑이 된 사이' },
        { relation: '기생과 그녀를 사랑한 선비', detail: '시 한 수로 마음을 훔친 사이' },
        { relation: '양반댁 도련님과 부엌데기', detail: '몰래 만나다 들켜서 도망친 사이' },
        { relation: '전쟁터에서 서로를 구한 병사들', detail: '목숨을 나눈 전우에서 연인이 된 사이' },
        { relation: '과거시험에서 만난 라이벌 선비', detail: '장원급제는 못해도 사랑은 급제한 사이' },
        { relation: '무당과 그녀의 굿에 감동받은 원님', detail: '신내림 대신 사랑이 내려온 사이' },
        { relation: '떠돌이 광대와 광대를 숨겨준 농민', detail: '웃음을 팔다가 사랑을 얻은 사이' },
        { relation: '유배된 학자와 섬마을 어부의 딸', detail: '책 대신 바다를, 바다 대신 사랑을 배운 사이' },
        { relation: '도적을 잡으러 온 포졸과 도적', detail: '쫓고 쫓기다 사랑에 빠진 사이' },
        { relation: '스님과 절에 숨어든 도망자', detail: '번뇌를 버려야 했는데 사랑을 주운 사이' },
        { relation: '역관과 외국 상인', detail: '언어는 통역했는데 마음은 통역 안 해도 된 사이' },
        { relation: '마을 의원과 환자', detail: '병은 나았는데 상사병에 걸린 사이' },
        { relation: '절벽 끝에서 만난 두 영혼', detail: '죽으려다 살고 싶어진 사이' },
        { relation: '왕과 왕을 암살하러 온 자객', detail: '칼을 들었다가 사랑에 찔린 사이' },
        { relation: '천문학자와 밤하늘을 같이 본 시녀', detail: '별을 보다가 서로만 보게 된 사이' }
    ],
    en: [
        { relation: 'Tavern owner and wandering merchant', detail: 'Always on credit, ended up as business partners' },
        { relation: 'Gladiators who crossed swords', detail: 'Every match a draw, eventually became friends' },
        { relation: 'Palace maid and secret admirer eunuch', detail: 'Only held hands under moonlight' },
        { relation: 'Pirate captain and noble prisoner', detail: 'Stockholm syndrome or love? Who knows' },
        { relation: 'Bandit leader and rescued princess', detail: 'The princess ended up running the gang' },
        { relation: 'Goblin and enchanted scholar', detail: 'Fell in love over all-night chess games' },
        { relation: 'Courtesan and smitten poet', detail: 'Stole hearts with a single poem' },
        { relation: 'Nobleman\'s son and kitchen maid', detail: 'Secret meetings discovered, ran away together' },
        { relation: 'Soldiers who saved each other in battle', detail: 'From comrades to lovers' },
        { relation: 'Rival scholars at the exam', detail: 'Failed the test, passed in love' },
        { relation: 'Shaman and impressed magistrate', detail: 'Love descended instead of spirits' },
        { relation: 'Traveling performer and hiding farmer', detail: 'Sold laughs, gained love' },
        { relation: 'Exiled scholar and fisherman\'s daughter', detail: 'Learned sea instead of books, love instead of sea' },
        { relation: 'Constable and the thief', detail: 'Chased and chased, fell in love' },
        { relation: 'Monk and hidden fugitive', detail: 'Should have abandoned worldly desires, found love instead' },
        { relation: 'Interpreter and foreign merchant', detail: 'Translated words, hearts needed no translation' },
        { relation: 'Village doctor and patient', detail: 'Cured the disease, caught lovesickness' },
        { relation: 'Two souls meeting at cliff\'s edge', detail: 'Came to die, found reason to live' },
        { relation: 'King and the assassin sent to kill him', detail: 'Raised the blade, struck by love' },
        { relation: 'Astronomer and maid watching stars together', detail: 'Watched stars, only saw each other' }
    ]
};

// ====== Bad Luck Solutions ======
const badLuckSolutions = {
    ko: [
        { title: '삼겹살 사주기 권법 🥓', desc: '상대에게 삼겹살 5인분을 사주면 운명이 바뀝니다. 과학적으로 증명됨(뇌피셜)' },
        { title: '편의점 아이스크림 데이트 🍦', desc: '1,500원으로 시작하는 진심 어택. 저렴하지만 효과는 최고!' },
        { title: '밤새 러브송 플레이리스트 만들기 🎵', desc: '상대를 생각하며 만든 플리는 운명을 움직입니다' },
        { title: '손편지 쓰기 ✉️', desc: '디지털 시대의 아날로그 고백은 심장을 두드립니다' },
        { title: '같이 공포영화 보기 👻', desc: '무서우면 붙잡을 핑계가 생기잖아요' },
        { title: '새벽 한강 치맥 🍗', desc: '서울의 야경 앞에서 솔직해지세요' },
        { title: '함께 라면 끓여먹기 🍜', desc: '같이 라면 먹을 사이면 이미 반은 성공' },
        { title: '점프 사진 100번 찍기 📸', desc: '웃다 보면 어색함이 사라져요' }
    ],
    en: [
        { title: 'BBQ Gift Attack 🥓', desc: 'Buy them 5 servings of BBQ and destiny will change. Scientifically proven (trust me)' },
        { title: 'Convenience Store Ice Cream Date 🍦', desc: 'Sincerity attack starting at $2. Cheap but maximum effect!' },
        { title: 'All-Night Love Song Playlist 🎵', desc: 'A playlist made thinking of them can move destiny' },
        { title: 'Write a Handwritten Letter ✉️', desc: 'Analog confession in digital age hits different' },
        { title: 'Watch Horror Movies Together 👻', desc: 'When scared, you have an excuse to hold on' },
        { title: 'Late Night Riverside Chicken 🍗', desc: 'Be honest under the city lights' },
        { title: 'Cook Instant Noodles Together 🍜', desc: 'If you can share noodles, you\'re halfway there' },
        { title: 'Take 100 Jump Photos 📸', desc: 'Laugh away the awkwardness' }
    ]
};

// ====== MBTI Detailed Compatibility ======
const mbtiDetailedCompatibility = {
    // ===== 환상의 궁합 (90-100%) =====
    'INFJ-ENFP': { score: 95, type: 'soulmate', keyword: '영혼의 단짝', en_keyword: 'Soul Twins' },
    'ENFP-INFJ': { score: 95, type: 'soulmate', keyword: '영혼의 단짝', en_keyword: 'Soul Twins' },
    'INTJ-ENFP': { score: 93, type: 'soulmate', keyword: '뇌섹+감성 폭발 조합', en_keyword: 'Brain Meets Heart' },
    'ENFP-INTJ': { score: 93, type: 'soulmate', keyword: '뇌섹+감성 폭발 조합', en_keyword: 'Brain Meets Heart' },
    'INFP-ENFJ': { score: 94, type: 'soulmate', keyword: '서로를 치유하는 힐러 커플', en_keyword: 'Healing Each Other' },
    'ENFJ-INFP': { score: 94, type: 'soulmate', keyword: '서로를 치유하는 힐러 커플', en_keyword: 'Healing Each Other' },
    'ENTP-INFJ': { score: 92, type: 'soulmate', keyword: '밤새 토론하다 사랑에 빠지는 조합', en_keyword: 'Debate to Dating' },
    'INFJ-ENTP': { score: 92, type: 'soulmate', keyword: '밤새 토론하다 사랑에 빠지는 조합', en_keyword: 'Debate to Dating' },
    'INTP-ENFJ': { score: 88, type: 'soulmate', keyword: '논리와 감정의 완벽한 조화', en_keyword: 'Logic Meets Emotion' },
    'ENFJ-INTP': { score: 88, type: 'soulmate', keyword: '논리와 감정의 완벽한 조화', en_keyword: 'Logic Meets Emotion' },

    // ===== 좋은 궁합 (75-89%) =====
    'INTP-ENTJ': { score: 85, type: 'great', keyword: '천재 커플, CEO와 참모진', en_keyword: 'Genius Power Couple' },
    'ENTJ-INTP': { score: 85, type: 'great', keyword: '천재 커플, CEO와 참모진', en_keyword: 'Genius Power Couple' },
    'ISFJ-ESFP': { score: 82, type: 'great', keyword: '안정+파티 밸런스 최고', en_keyword: 'Stability Meets Fun' },
    'ESFP-ISFJ': { score: 82, type: 'great', keyword: '안정+파티 밸런스 최고', en_keyword: 'Stability Meets Fun' },
    'ISTJ-ESFP': { score: 80, type: 'great', keyword: '찐한 밀당의 정석', en_keyword: 'Classic Push-Pull' },
    'ESFP-ISTJ': { score: 80, type: 'great', keyword: '찐한 밀당의 정석', en_keyword: 'Classic Push-Pull' },
    'ISFP-ENFJ': { score: 86, type: 'great', keyword: '예술가와 리더의 로맨스', en_keyword: 'Artist x Leader Romance' },
    'ENFJ-ISFP': { score: 86, type: 'great', keyword: '예술가와 리더의 로맨스', en_keyword: 'Artist x Leader Romance' },
    'ISTP-ESFJ': { score: 78, type: 'great', keyword: '쿨한 남자와 따뜻한 여자 (or vice versa)', en_keyword: 'Cool Meets Warm' },
    'ESFJ-ISTP': { score: 78, type: 'great', keyword: '쿨한 남자와 따뜻한 여자 (or vice versa)', en_keyword: 'Cool Meets Warm' },
    'ISFP-ESFJ': { score: 79, type: 'great', keyword: '갬성충만 예술가 x 인싸 케어러', en_keyword: 'Artist x Social Butterfly' },
    'ESFJ-ISFP': { score: 79, type: 'great', keyword: '갬성충만 예술가 x 인싸 케어러', en_keyword: 'Artist x Social Butterfly' },
    'ISTJ-ESTP': { score: 76, type: 'great', keyword: '믿음직한 바위와 자유로운 바람', en_keyword: 'Rock and Wind' },
    'ESTP-ISTJ': { score: 76, type: 'great', keyword: '믿음직한 바위와 자유로운 바람', en_keyword: 'Rock and Wind' },
    'INTJ-ENTP': { score: 84, type: 'great', keyword: '두뇌 풀가동 천재 조합', en_keyword: 'Genius Brainstorm Duo' },
    'ENTP-INTJ': { score: 84, type: 'great', keyword: '두뇌 풀가동 천재 조합', en_keyword: 'Genius Brainstorm Duo' },

    // ===== 보통 궁합 (55-74%) =====
    'INFP-INTP': { score: 72, type: 'good', keyword: '이상주의자와 논리주의자의 데이트', en_keyword: 'Idealist x Logician Date' },
    'INTP-INFP': { score: 72, type: 'good', keyword: '이상주의자와 논리주의자의 데이트', en_keyword: 'Idealist x Logician Date' },
    'ENFP-ENTP': { score: 75, type: 'good', keyword: '수다+아이디어 폭발, 결론은 없음', en_keyword: 'Talk Explosion, No Conclusion' },
    'ENTP-ENFP': { score: 75, type: 'good', keyword: '수다+아이디어 폭발, 결론은 없음', en_keyword: 'Talk Explosion, No Conclusion' },
    'INFJ-INTJ': { score: 77, type: 'good', keyword: '비밀 공유하는 음모론자 커플', en_keyword: 'Conspiracy Theory Couple' },
    'INTJ-INFJ': { score: 77, type: 'good', keyword: '비밀 공유하는 음모론자 커플', en_keyword: 'Conspiracy Theory Couple' },
    'ESFP-ESTP': { score: 74, type: 'good', keyword: '파티는 끝나지 않는다', en_keyword: 'Party Never Ends' },
    'ESTP-ESFP': { score: 74, type: 'good', keyword: '파티는 끝나지 않는다', en_keyword: 'Party Never Ends' },
    'ISFJ-ISTJ': { score: 80, type: 'good', keyword: '조용하고 안정적인 가정', en_keyword: 'Quiet Stable Home' },
    'ISTJ-ISFJ': { score: 80, type: 'good', keyword: '조용하고 안정적인 가정', en_keyword: 'Quiet Stable Home' },
    'ENFJ-ENTJ': { score: 73, type: 'good', keyword: '파워커플이지만 누가 보스?', en_keyword: 'Power Couple, But Who Leads?' },
    'ENTJ-ENFJ': { score: 73, type: 'good', keyword: '파워커플이지만 누가 보스?', en_keyword: 'Power Couple, But Who Leads?' },

    // ===== 긴장감 있는 궁합 (45-54%) =====
    'ESTJ-INFP': { score: 45, type: 'explosive', keyword: '피 터지는 가치관 전쟁', en_keyword: 'Values at War' },
    'INFP-ESTJ': { score: 45, type: 'explosive', keyword: '피 터지는 가치관 전쟁', en_keyword: 'Values at War' },
    'ENTJ-ISFP': { score: 48, type: 'explosive', keyword: '독재자와 히피의 만남', en_keyword: 'Dictator Meets Hippie' },
    'ISFP-ENTJ': { score: 48, type: 'explosive', keyword: '독재자와 히피의 만남', en_keyword: 'Dictator Meets Hippie' },
    'ESTP-INFJ': { score: 52, type: 'chaotic', keyword: '정신 차려보니 결혼한 조합', en_keyword: 'Married Before You Know It' },
    'INFJ-ESTP': { score: 52, type: 'chaotic', keyword: '정신 차려보니 결혼한 조합', en_keyword: 'Married Before You Know It' },
    'ISTP-ENFJ': { score: 50, type: 'chaotic', keyword: '우주와 현실의 충돌', en_keyword: 'Space vs Reality' },
    'ENFJ-ISTP': { score: 50, type: 'chaotic', keyword: '우주와 현실의 충돌', en_keyword: 'Space vs Reality' },
    'ESFJ-INTP': { score: 48, type: 'chaotic', keyword: '사교성 만렙과 은둔형 외톨이', en_keyword: 'Social Butterfly x Hermit' },
    'INTP-ESFJ': { score: 48, type: 'chaotic', keyword: '사교성 만렙과 은둔형 외톨이', en_keyword: 'Social Butterfly x Hermit' },
    'ESTJ-ENFP': { score: 55, type: 'challenging', keyword: '현실주의자와 몽상가의 대결', en_keyword: 'Realist vs Dreamer Showdown' },
    'ENFP-ESTJ': { score: 55, type: 'challenging', keyword: '현실주의자와 몽상가의 대결', en_keyword: 'Realist vs Dreamer Showdown' },
    'INTJ-ESFP': { score: 53, type: 'challenging', keyword: '은둔 전략가와 스포트라이트 러버', en_keyword: 'Planner vs Spotlight Lover' },
    'ESFP-INTJ': { score: 53, type: 'challenging', keyword: '은둔 전략가와 스포트라이트 러버', en_keyword: 'Planner vs Spotlight Lover' },
    'INFP-ESTP': { score: 46, type: 'explosive', keyword: '감성 폭발 vs 행동 폭발', en_keyword: 'Feelings vs Actions Clash' },
    'ESTP-INFP': { score: 46, type: 'explosive', keyword: '감성 폭발 vs 행동 폭발', en_keyword: 'Feelings vs Actions Clash' },

    // ===== 혐관 타입 (40% 이하) - 자극적인 설명! =====
    'ESTJ-ISFP': { score: 35, type: 'toxic', keyword: '지독한 혐관, 매일 싸우지만 못 헤어지는 타입', en_keyword: 'Toxic but Addicted' },
    'ISFP-ESTJ': { score: 35, type: 'toxic', keyword: '지독한 혐관, 매일 싸우지만 못 헤어지는 타입', en_keyword: 'Toxic but Addicted' },
    'ENTJ-INFP': { score: 38, type: 'toxic', keyword: '눈물 버킷 챌린지 커플', en_keyword: 'Tears Bucket Challenge' },
    'INFP-ENTJ': { score: 38, type: 'toxic', keyword: '눈물 버킷 챌린지 커플', en_keyword: 'Tears Bucket Challenge' },
    'ESTP-ISFJ': { score: 40, type: 'difficult', keyword: '심장이 두 개 필요한 관계', en_keyword: 'Need Two Hearts' },
    'ISFJ-ESTP': { score: 40, type: 'difficult', keyword: '심장이 두 개 필요한 관계', en_keyword: 'Need Two Hearts' },
    'ISTP-ESFJ': { score: 42, type: 'difficult', keyword: '말이 안 통하는데 끌리는 묘한 관계', en_keyword: 'Lost in Translation but Attracted' },
    'ESFJ-ISTP': { score: 42, type: 'difficult', keyword: '말이 안 통하는데 끌리는 묘한 관계', en_keyword: 'Lost in Translation but Attracted' },
    'INTJ-ESFJ': { score: 39, type: 'toxic', keyword: '인싸 vs 아싸 극과 극의 만남', en_keyword: 'Extrovert vs Introvert Extreme' },
    'ESFJ-INTJ': { score: 39, type: 'toxic', keyword: '인싸 vs 아싸 극과 극의 만남', en_keyword: 'Extrovert vs Introvert Extreme' },
    'ENTP-ISFJ': { score: 43, type: 'difficult', keyword: '논쟁왕과 평화주의자의 지뢰밭', en_keyword: 'Debater x Peacekeeper Minefield' },
    'ISFJ-ENTP': { score: 43, type: 'difficult', keyword: '논쟁왕과 평화주의자의 지뢰밭', en_keyword: 'Debater x Peacekeeper Minefield' },
    'INTP-ESFP': { score: 41, type: 'difficult', keyword: '집돌이와 파티퀸의 평행선', en_keyword: 'Homebody x Party Queen Parallel' },
    'ESFP-INTP': { score: 41, type: 'difficult', keyword: '집돌이와 파티퀸의 평행선', en_keyword: 'Homebody x Party Queen Parallel' },

    // ===== 같은 유형끼리 =====
    'INFJ-INFJ': { score: 75, type: 'mirror', keyword: '우주적 교감, 하지만 누가 밥을 할 것인가', en_keyword: 'Cosmic Bond, But Whos Cooking?' },
    'INFP-INFP': { score: 70, type: 'mirror', keyword: '두 구름이 만나면 비가 온다', en_keyword: 'Two Clouds Make Rain' },
    'INTJ-INTJ': { score: 78, type: 'mirror', keyword: '세계 정복 파트너, 하지만 누가 리더?', en_keyword: 'World Domination Partners' },
    'INTP-INTP': { score: 72, type: 'mirror', keyword: '서로 생각만 하다 데이트 취소', en_keyword: 'Overthinking Till Date Cancelled' },
    'ENTJ-ENTJ': { score: 65, type: 'competitive', keyword: '왕좌의 게임 시즌 시작', en_keyword: 'Game of Thrones Begins' },
    'ENFP-ENFP': { score: 72, type: 'chaos', keyword: '아이디어 폭발, 실행력 제로', en_keyword: 'Ideas Explosion, Zero Execution' },
    'ENTP-ENTP': { score: 68, type: 'chaos', keyword: '토론 배틀 무한루프', en_keyword: 'Infinite Debate Loop' },
    'ESFP-ESFP': { score: 75, type: 'fun', keyword: '인생은 파티, 청구서는 나중에', en_keyword: 'Life is Party, Bills Later' },
    'ESTP-ESTP': { score: 70, type: 'adventure', keyword: '스릴 추구 2배, 수명 절반', en_keyword: 'Double Thrill, Half Lifespan' },
    'ISFP-ISFP': { score: 73, type: 'peaceful', keyword: '조용히 서로를 이해하는 예술가들', en_keyword: 'Silent Artist Connection' },
    'ISTP-ISTP': { score: 71, type: 'independent', keyword: '각자의 공간 존중, 가끔 눈만 마주침', en_keyword: 'Respectful Distance' },
    'ISFJ-ISFJ': { score: 80, type: 'stable', keyword: '가장 안정적인 조합, 약간 심심할 수도', en_keyword: 'Most Stable, Slightly Boring' },
    'ISTJ-ISTJ': { score: 82, type: 'stable', keyword: '규칙과 질서의 완벽한 조화', en_keyword: 'Perfect Order' },
    'ESFJ-ESFJ': { score: 77, type: 'caring', keyword: '서로 챙기다가 지치는 커플', en_keyword: 'Caring Till Exhaustion' },
    'ESTJ-ESTJ': { score: 60, type: 'competitive', keyword: '가정 내 권력 투쟁 발생', en_keyword: 'Power Struggle at Home' },
    'ENFJ-ENFJ': { score: 74, type: 'idealist', keyword: '세상을 구하려다 서로를 놓칠 수도', en_keyword: 'Saving World, Losing Each Other' }
};

// ====== MBTI Stories ======
const mbtiStories = {
    en: {
        soulmate: {
            verdict: "LEGENDARY MATCH! 🔥💕🔥",
            message: "Stop whatever you're doing. This is the kind of match that romance novels are written about. Your brain waves literally sync when you're together. Scientists would want to study you two.",
            advice: "Don't overthink it. Some things are just meant to be. Your only job is to not screw this up by being too much in your head."
        },
        great: {
            verdict: "Power Couple Alert! ⚡💖",
            message: "You two are like a well-oiled machine. Where one stumbles, the other catches. It's not perfect, but it's pretty damn close. Other couples look at you and feel inadequate.",
            advice: "Keep communicating. This match has incredible potential - water it with honesty and watch it grow into something extraordinary."
        },
        good: {
            verdict: "Solid Foundation 🏠✨",
            message: "This is the 'marry your best friend' kind of match. Not fireworks every day, but a warm fire that keeps burning. You'll still be laughing together at 80.",
            advice: "Don't chase drama. What you have is rare - genuine compatibility. Appreciate the peace."
        },
        moderate: {
            verdict: "The Interesting Ones 🎭",
            message: "You'll never be bored, that's for sure. Different perspectives mean different arguments, but also different insights. Growth comes from friction, right?",
            advice: "Learn their language. They're not wrong, just different. Once you crack their code, things get easier."
        },
        challenging: {
            verdict: "Buckle Up, Buttercup 🎢",
            message: "Look, this isn't going to be easy. You process the world in fundamentally different ways. But some of the greatest love stories were the unlikely ones.",
            advice: "Patience. So much patience. And therapy wouldn't hurt either. Understand that 'different' doesn't mean 'wrong'."
        },
        explosive: {
            verdict: "Handle With Care ⚠️💣",
            message: "This is either going to be the most transformative relationship of your life or a complete disaster. There's no middle ground. Your values clash like titans.",
            advice: "If you're going to do this, establish ground rules EARLY. Respect boundaries religiously. And maybe keep a couples therapist on speed dial."
        },
        chaotic: {
            verdict: "Beautiful Chaos 🌪️💕",
            message: "You'll fight like cats and dogs but the makeup sessions will be legendary. Neither of you understands how the other's brain works, and somehow that's... exciting?",
            advice: "Stop trying to change each other. Seriously. Love the chaos or leave it, but don't try to tame it."
        },
        toxic: {
            verdict: "The 'Can't Live With, Can't Live Without' Type 💔🔄💕",
            message: "Let's be real - this is the relationship your friends worry about. You'll have screaming matches and passionate reconciliations. It's exhausting but addictive.",
            advice: "Ask yourself honestly: is this passion or just drama? If you're going to stay, both of you need to do serious work on communication. Consider if the highs are worth the lows."
        },
        difficult: {
            verdict: "Playing on Hard Mode 🎮",
            message: "This relationship requires a PhD in emotional intelligence. One of you speaks in feelings, the other in facts. Lost in translation is your daily reality.",
            advice: "Get a translator (aka therapist). Learn to appreciate that their way isn't wrong, just foreign. It's like learning a new language - frustrating but rewarding."
        },
        mirror: {
            verdict: "Looking in the Mirror 🪞",
            message: "Dating yourself, huh? You'll understand each other perfectly, which is both a blessing and a curse. Who's going to be the responsible one when you're both the same?",
            advice: "Make sure you don't enable each other's weaknesses. Intentionally seek balance - if you're both dreamers, schedule reality check-ins."
        },
        competitive: {
            verdict: "Game of Thrones Energy 👑⚔️",
            message: "Two alphas enter, one alpha leaves... just kidding. But seriously, the power dynamics here are INTENSE. You'll either build an empire together or burn it down.",
            advice: "Take turns leading. Seriously. Your egos need to learn to share. When you compete WITH each other instead of AGAINST, you're unstoppable."
        },
        chaos: {
            verdict: "Double Trouble! 🌈🎪",
            message: "Your combined energy could power a small city. Ideas flying everywhere, adventures starting spontaneously. Someone needs to pay the bills though...",
            advice: "Assign practical roles deliberately. Your creative synergy is off the charts, but ground it with some structure or you'll float away together."
        },
        fun: {
            verdict: "Life of the Party x2 🎉🎊",
            message: "Every day is an adventure, every night could become a story. You're the couple everyone wants to hang out with. Just remember that real life exists too.",
            advice: "Schedule some boring time. Your relationship needs depth too, not just Instagram-worthy moments."
        },
        adventure: {
            verdict: "Adrenaline Junkies United 🏄‍♂️🏔️",
            message: "You'll have the most exciting life and probably the shortest. Everything is an adventure, including your relationship. Boring is not in your vocabulary.",
            advice: "Try vulnerability. Thrill-seeking can be a way to avoid deeper connection. Let yourselves be boring with each other sometimes."
        },
        peaceful: {
            verdict: "Quiet Understanding 🌸",
            message: "Words aren't always necessary when you just... get each other. Your relationship is a safe haven from the noisy world. Cozy vibes only.",
            advice: "Make sure you're actually communicating, not just assuming. Silence is golden but it can also hide issues."
        },
        independent: {
            verdict: "Space Respect Supreme 🌌",
            message: "You both need your alone time, and you both respect that. No clingy behavior here. It's mature, it's healthy, it's... maybe a bit distant?",
            advice: "Check in emotionally sometimes. Independence is great, but don't become roommates. Keep the romance alive intentionally."
        },
        stable: {
            verdict: "Rock Solid ⛰️",
            message: "This is the relationship equivalent of a diversified retirement portfolio. Safe, reliable, will probably still be there in 50 years. Exciting? Maybe not. But real.",
            advice: "Inject some spontaneity occasionally. You're so good at routine that you might forget to have fun. Stability is the foundation, not the whole house."
        },
        caring: {
            verdict: "Mutual Care Overload 💝",
            message: "You both want to take care of each other so much that sometimes you fight about who gets to be the caring one. It's adorable and slightly exhausting.",
            advice: "Let yourself be taken care of too. Don't turn nurturing into a competition. Accept love as much as you give it."
        },
        idealist: {
            verdict: "Saving the World Together 🌍💕",
            message: "You both have big visions and bigger hearts. You'll volunteer together, protest together, and try to make the world better. Just don't forget your own relationship needs attention too.",
            advice: "Schedule date nights that aren't about changing the world. Your relationship deserves the same care you give to your causes."
        }
    },
    ko: {
        soulmate: {
            verdict: "전설적인 조합! 🔥💕🔥",
            message: "하던 거 다 멈춰. 이건 로맨스 소설에나 나오는 궁합이야. 함께 있으면 뇌파가 동기화된다니까. 과학자들이 너희 둘을 연구하고 싶어할 걸.",
            advice: "너무 생각하지 마. 그냥 운명인 것들도 있어. 네 할 일은 머리 굴리다가 이거 망치지 않는 것뿐이야."
        },
        great: {
            verdict: "파워 커플 등장! ⚡💖",
            message: "너희 둘은 잘 맞물린 톱니바퀴 같아. 한 명이 흔들리면 다른 한 명이 잡아줘. 완벽하진 않지만 꽤 근접해. 다른 커플들이 너희 보고 주눅 들어.",
            advice: "소통을 계속해. 이 궁합은 엄청난 잠재력이 있어 - 정직함으로 물을 주면 뭔가 대단한 게 자라날 거야."
        },
        good: {
            verdict: "탄탄한 기반 🏠✨",
            message: "이건 '베프와 결혼해라' 유형의 궁합이야. 매일 불꽃놀이는 아니지만, 계속 타오르는 따뜻한 불 같아. 80살에도 같이 웃고 있을 거야.",
            advice: "드라마를 쫓지 마. 네가 가진 건 희귀해 - 진짜 궁합이야. 그 평화를 감사히 여겨."
        },
        moderate: {
            verdict: "흥미로운 조합 🎭",
            message: "지루할 일은 없을 거야, 확실해. 다른 관점은 다른 싸움을 의미하지만, 다른 통찰도 의미해. 성장은 마찰에서 오잖아, 그치?",
            advice: "상대의 언어를 배워. 틀린 게 아니야, 그냥 다를 뿐이야. 상대의 코드를 해독하면 모든 게 쉬워져."
        },
        challenging: {
            verdict: "안전벨트 매세요 🎢",
            message: "봐, 이건 쉽지 않을 거야. 너희는 세상을 근본적으로 다르게 처리해. 하지만 가장 위대한 사랑 이야기 중 일부는 불가능해 보이는 것들이었어.",
            advice: "인내심. 엄청난 인내심. 그리고 치료도 나쁘지 않아. '다르다'가 '틀리다'를 의미하지 않는다는 걸 이해해."
        },
        explosive: {
            verdict: "취급 주의! ⚠️💣",
            message: "이건 네 인생에서 가장 변화를 주는 관계가 되거나 완전한 재앙이 될 거야. 중간은 없어. 가치관이 타이탄처럼 충돌해.",
            advice: "이걸 하려면 규칙을 일찍 정해. 경계를 종교처럼 존중해. 그리고 커플 상담사 전화번호를 저장해놔."
        },
        chaotic: {
            verdict: "아름다운 혼돈 🌪️💕",
            message: "개와 고양이처럼 싸우겠지만 화해는 전설이 될 거야. 서로의 뇌가 어떻게 작동하는지 이해 못 하는데, 그게 어쩐지... 설레지?",
            advice: "서로를 바꾸려고 하지 마. 진심으로. 혼돈을 사랑하거나 떠나거나, 길들이려고는 하지 마."
        },
        toxic: {
            verdict: "같이 못 살고, 없이도 못 사는 타입 💔🔄💕",
            message: "솔직히 말하면 - 이건 친구들이 걱정하는 그 관계야. 소리 지르는 싸움과 열정적인 화해가 반복돼. 지치지만 중독적이야.",
            advice: "솔직히 자문해봐: 이게 열정이야 아니면 그냥 드라마야? 남을 거면, 둘 다 소통에 진지하게 노력해야 해. 그 높은 순간들이 낮은 순간들을 감당할 가치가 있는지 생각해봐."
        },
        difficult: {
            verdict: "하드 모드 플레이 중 🎮",
            message: "이 관계는 감정 지능 박사 학위가 필요해. 한 명은 감정으로 말하고, 다른 한 명은 사실로 말해. 매일이 번역 손실이야.",
            advice: "통역사(상담사)를 구해. 상대의 방식이 틀린 게 아니라 그냥 외국어라는 걸 배워. 새로운 언어를 배우는 것처럼 - 답답하지만 보람 있어."
        },
        mirror: {
            verdict: "거울 보기 🪞",
            message: "자기 자신이랑 사귀네? 서로를 완벽하게 이해하는데, 그게 축복이자 저주야. 둘 다 똑같은데 누가 어른 역할을 할 거야?",
            advice: "서로의 약점을 조장하지 않도록 해. 의도적으로 균형을 찾아 - 둘 다 몽상가면, 현실 체크 시간을 정해."
        },
        competitive: {
            verdict: "왕좌의 게임 에너지 👑⚔️",
            message: "두 알파가 들어가고, 한 알파가 나온다... 농담이야. 하지만 진지하게, 여기 파워 다이나믹이 강렬해. 같이 제국을 세우거나 불태울 거야.",
            advice: "번갈아 리드해. 진심으로. 에고가 나누는 법을 배워야 해. 서로에게 대항하는 대신 서로와 함께 경쟁하면 막을 수 없어."
        },
        chaos: {
            verdict: "더블 트러블! 🌈🎪",
            message: "너희 합쳐진 에너지로 작은 도시에 전력을 공급할 수 있어. 아이디어가 사방으로 날아다니고, 모험이 즉흥적으로 시작돼. 근데 청구서는 누가 내?",
            advice: "실용적인 역할을 의도적으로 배분해. 창의적 시너지는 차트를 뚫지만, 구조로 기반을 다지지 않으면 같이 둥둥 떠다닐 거야."
        },
        fun: {
            verdict: "파티의 생명력 x2 🎉🎊",
            message: "매일이 모험이고, 매 밤은 이야기가 될 수 있어. 모두가 함께 놀고 싶어하는 커플이야. 근데 현실도 존재한다는 거 기억해.",
            advice: "지루한 시간을 스케줄링해. 관계에도 깊이가 필요해, 인스타그래머블한 순간만이 아니라."
        },
        adventure: {
            verdict: "아드레날린 중독자 연합 🏄‍♂️🏔️",
            message: "가장 신나는 삶과 아마도 가장 짧은 삶을 살 거야. 모든 게 모험이야, 관계를 포함해서. 지루함은 너희 사전에 없어.",
            advice: "취약함을 시도해봐. 스릴 추구는 더 깊은 연결을 피하는 방법일 수 있어. 가끔 서로에게 지루해도 괜찮아."
        },
        peaceful: {
            verdict: "조용한 이해 🌸",
            message: "서로를 그냥... 알아챌 때 말이 항상 필요하진 않아. 너희 관계는 시끄러운 세상으로부터의 안식처야. 아늑한 바이브만.",
            advice: "실제로 소통하고 있는지 확인해, 그냥 추측하지 말고. 침묵은 금이지만 문제를 숨길 수도 있어."
        },
        independent: {
            verdict: "공간 존중 최고 🌌",
            message: "둘 다 혼자만의 시간이 필요하고, 둘 다 그걸 존중해. 집착 행동 없음. 성숙하고, 건강하고... 좀 거리가 있을 수도?",
            advice: "가끔 감정적으로 체크해. 독립은 좋지만, 룸메이트가 되지는 마. 의도적으로 로맨스를 살려."
        },
        stable: {
            verdict: "반석 같은 단단함 ⛰️",
            message: "이건 분산 투자된 은퇴 포트폴리오 같은 관계야. 안전하고, 믿을 수 있고, 50년 후에도 아마 거기 있을 거야. 신나? 아마 아니지. 하지만 진짜야.",
            advice: "가끔 즉흥성을 주입해. 루틴에 너무 능숙해서 재미를 잊을 수도 있어. 안정은 기초지, 집 전체가 아니야."
        },
        caring: {
            verdict: "상호 케어 과부하 💝",
            message: "둘 다 서로를 돌보고 싶어서 가끔 누가 돌봐주는 사람이 될지 싸워. 귀엽고 약간 지쳐.",
            advice: "너도 돌봄을 받아. 양육을 경쟁으로 만들지 마. 주는 만큼 받아들여."
        },
        idealist: {
            verdict: "함께 세상을 구하기 🌍💕",
            message: "둘 다 큰 비전과 더 큰 마음을 가졌어. 같이 자원봉사하고, 같이 시위하고, 세상을 더 좋게 만들려고 해. 근데 너희 관계도 관심이 필요하다는 거 잊지 마.",
            advice: "세상을 바꾸는 것이 아닌 데이트 밤을 스케줄링해. 너희 관계도 네가 주는 것만큼의 케어를 받을 자격이 있어."
        }
    }
};

// ====== Daily Fortune Messages ======
const dailyFortunes = {
    en: [
        { emoji: '💘', fortune: "Love is in the air today! Someone might be thinking about you right now. Keep your heart open to unexpected connections." },
        { emoji: '✨', fortune: "Your romantic energy is magnetic today. That person you've been thinking about? They feel it too. Trust the timing." },
        { emoji: '🌙', fortune: "Tonight's moon brings deep emotional connections. If you're coupled, expect meaningful conversation. If single, an intriguing stranger may appear." },
        { emoji: '🦋', fortune: "Transformation in love is coming. Let go of old patterns that no longer serve you. Your heart is ready for something new." },
        { emoji: '🌸', fortune: "Like cherry blossoms, your love life is about to bloom beautifully. Patience has been your strength - now comes the reward." },
        { emoji: '💫', fortune: "A chance encounter could change everything today. Be present in every moment - magic loves to hide in ordinary places." },
        { emoji: '🔥', fortune: "Passion runs high today! Channel this energy into bold romantic gestures. Fortune favors the brave in love." },
        { emoji: '🌈', fortune: "After recent emotional rain, comes your rainbow. Hope returns to your love life. Better things are coming." },
        { emoji: '💎', fortune: "You're a diamond, and today someone will see your true value. Don't settle for anyone who doesn't recognize your worth." },
        { emoji: '🍀', fortune: "Lucky in love today! Take that chance you've been hesitating about. The universe has your back." }
    ],
    ko: [
        { emoji: '💘', fortune: "오늘 사랑이 공기 중에 떠다녀요! 누군가가 지금 당신을 생각하고 있을지도 몰라요. 예상치 못한 인연에 마음을 열어두세요." },
        { emoji: '✨', fortune: "오늘 당신의 로맨틱한 에너지가 자석 같아요. 생각하고 있던 그 사람? 그들도 느끼고 있어요. 타이밍을 믿으세요." },
        { emoji: '🌙', fortune: "오늘 밤 달이 깊은 감정적 연결을 가져와요. 연인이 있다면 의미 있는 대화를 기대하세요. 솔로라면 흥미로운 낯선 사람이 나타날지도..." },
        { emoji: '🦋', fortune: "사랑의 변화가 다가오고 있어요. 더 이상 도움이 되지 않는 오래된 패턴을 놓아주세요. 당신의 마음은 새로운 무언가를 맞을 준비가 됐어요." },
        { emoji: '🌸', fortune: "벚꽃처럼 당신의 연애운이 아름답게 피어나려 해요. 인내가 당신의 강점이었어요 - 이제 보상이 와요." }
    ]
};

// ====== Korean Hangul Stroke Data ======
const koreanChosung = { 'ㄱ': 2, 'ㄲ': 4, 'ㄴ': 2, 'ㄷ': 3, 'ㄸ': 6, 'ㄹ': 5, 'ㅁ': 4, 'ㅂ': 4, 'ㅃ': 8, 'ㅅ': 2, 'ㅆ': 4, 'ㅇ': 1, 'ㅈ': 3, 'ㅉ': 6, 'ㅊ': 4, 'ㅋ': 3, 'ㅌ': 4, 'ㅍ': 4, 'ㅎ': 3 };
const koreanJungsung = { 'ㅏ': 2, 'ㅐ': 3, 'ㅑ': 3, 'ㅒ': 4, 'ㅓ': 2, 'ㅔ': 3, 'ㅕ': 3, 'ㅖ': 4, 'ㅗ': 2, 'ㅘ': 4, 'ㅙ': 5, 'ㅚ': 3, 'ㅛ': 3, 'ㅜ': 2, 'ㅝ': 4, 'ㅞ': 5, 'ㅟ': 3, 'ㅠ': 3, 'ㅡ': 1, 'ㅢ': 2, 'ㅣ': 1 };
const koreanJongsung = { '': 0, 'ㄱ': 2, 'ㄲ': 4, 'ㄳ': 4, 'ㄴ': 2, 'ㄵ': 5, 'ㄶ': 5, 'ㄷ': 3, 'ㄹ': 5, 'ㄺ': 7, 'ㄻ': 9, 'ㄼ': 9, 'ㄽ': 7, 'ㄾ': 9, 'ㄿ': 9, 'ㅀ': 8, 'ㅁ': 4, 'ㅂ': 4, 'ㅄ': 6, 'ㅅ': 2, 'ㅆ': 4, 'ㅇ': 1, 'ㅈ': 3, 'ㅊ': 4, 'ㅋ': 3, 'ㅌ': 4, 'ㅍ': 4, 'ㅎ': 3 };
const chosungList = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const jungsungList = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const jongsungList = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// ====== Japanese Kana Stroke Data ======
const japaneseKana = { 'あ': 3, 'い': 2, 'う': 2, 'え': 2, 'お': 3, 'か': 3, 'き': 4, 'く': 1, 'け': 3, 'こ': 2, 'さ': 3, 'し': 1, 'す': 2, 'せ': 3, 'そ': 1, 'た': 4, 'ち': 2, 'つ': 1, 'て': 1, 'と': 2, 'な': 4, 'に': 3, 'ぬ': 2, 'ね': 2, 'の': 1, 'は': 3, 'ひ': 1, 'ふ': 4, 'へ': 1, 'ほ': 4, 'ま': 3, 'み': 2, 'む': 3, 'め': 2, 'も': 3, 'や': 3, 'ゆ': 2, 'よ': 2, 'ら': 2, 'り': 2, 'る': 1, 'れ': 2, 'ろ': 1, 'わ': 2, 'を': 3, 'ん': 1, 'ア': 2, 'イ': 2, 'ウ': 3, 'エ': 3, 'オ': 3, 'カ': 2, 'キ': 3, 'ク': 2, 'ケ': 3, 'コ': 2, 'サ': 3, 'シ': 3, 'ス': 2, 'セ': 2, 'ソ': 2, 'タ': 3, 'チ': 3, 'ツ': 3, 'テ': 3, 'ト': 2, 'ナ': 2, 'ニ': 2, 'ヌ': 2, 'ネ': 4, 'ノ': 1, 'ハ': 2, 'ヒ': 2, 'フ': 1, 'ヘ': 1, 'ホ': 4, 'マ': 2, 'ミ': 3, 'ム': 2, 'メ': 2, 'モ': 3, 'ヤ': 2, 'ユ': 2, 'ヨ': 3, 'ラ': 2, 'リ': 2, 'ル': 2, 'レ': 1, 'ロ': 3, 'ワ': 2, 'ヲ': 3, 'ン': 2 };

// ====== Common CJK Kanji Stroke Data ======
const kanjiStrokes = { '一': 1, '二': 2, '三': 3, '四': 5, '五': 4, '六': 4, '七': 2, '八': 2, '九': 2, '十': 2, '山': 3, '川': 3, '田': 5, '中': 4, '大': 3, '小': 3, '上': 3, '下': 3, '木': 4, '林': 8, '森': 12, '村': 7, '本': 5, '日': 4, '月': 4, '火': 4, '水': 4, '金': 8, '土': 3, '太': 4, '郎': 9, '子': 3, '男': 7, '女': 3, '美': 9, '花': 7, '雪': 11, '風': 9, '光': 6, '明': 8, '春': 9, '夏': 10, '秋': 9, '冬': 5, '東': 8, '西': 6, '南': 9, '北': 5, '高': 10, '長': 8, '愛': 13, '恋': 10, '心': 4, '夢': 13, '希': 7, '望': 11, '幸': 8, '福': 13, '天': 4, '地': 6, '空': 8, '海': 9, '星': 9, '人': 2, '友': 4, '生': 5, '命': 8, '運': 12, '王': 4, '李': 7, '张': 7, '刘': 6, '陈': 7, '杨': 7, '黄': 11, '赵': 9, '吴': 7, '周': 8 };

// ====== Russian Numerology ======
const russianNumerology = { 'А': 1, 'Б': 2, 'В': 3, 'Г': 4, 'Д': 5, 'Е': 6, 'Ё': 7, 'Ж': 8, 'З': 9, 'И': 1, 'Й': 2, 'К': 3, 'Л': 4, 'М': 5, 'Н': 6, 'О': 7, 'П': 8, 'Р': 9, 'С': 1, 'Т': 2, 'У': 3, 'Ф': 4, 'Х': 5, 'Ц': 6, 'Ч': 7, 'Ш': 8, 'Щ': 9, 'а': 1, 'б': 2, 'в': 3, 'г': 4, 'д': 5, 'е': 6, 'ё': 7, 'ж': 8, 'з': 9, 'и': 1, 'й': 2, 'к': 3, 'л': 4, 'м': 5, 'н': 6, 'о': 7, 'п': 8, 'р': 9, 'с': 1, 'т': 2, 'у': 3, 'ф': 4, 'х': 5, 'ц': 6, 'ч': 7, 'ш': 8, 'щ': 9 };

// ====== Latin Numerology ======
const latinNumerology = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9, 'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8, 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9, 's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8 };

// ====== MBTI Compatibility Matrix ======
const mbtiMatrix = {
    'INTJ': { ideal: ['ENFP', 'ENTP'], good: ['INFJ', 'INFP', 'ENTJ', 'INTP'] },
    'INTP': { ideal: ['ENTJ', 'ESTJ'], good: ['INTJ', 'ENTP', 'INFP', 'ENFP'] },
    'ENTJ': { ideal: ['INFP', 'INTP'], good: ['INTJ', 'ENTP', 'ENFJ', 'ENFP'] },
    'ENTP': { ideal: ['INFJ', 'INTJ'], good: ['INTP', 'ENFP', 'ENTJ', 'ENFJ'] },
    'INFJ': { ideal: ['ENFP', 'ENTP'], good: ['INFP', 'INTJ', 'ENFJ', 'INTP'] },
    'INFP': { ideal: ['ENFJ', 'ENTJ'], good: ['INFJ', 'ENFP', 'INTP', 'INTJ'] },
    'ENFJ': { ideal: ['INFP', 'ISFP'], good: ['INFJ', 'ENFP', 'ENTJ', 'ESFJ'] },
    'ENFP': { ideal: ['INTJ', 'INFJ'], good: ['ENFJ', 'ENTP', 'INFP', 'INTP'] },
    'ISTJ': { ideal: ['ESFP', 'ESTP'], good: ['ISFJ', 'ESTJ', 'ISTP', 'ENTJ'] },
    'ISFJ': { ideal: ['ESFP', 'ESTP'], good: ['ISTJ', 'ESFJ', 'ISFP', 'ESTJ'] },
    'ESTJ': { ideal: ['ISTP', 'ISFP'], good: ['ISTJ', 'ESFJ', 'ENTJ', 'INTP'] },
    'ESFJ': { ideal: ['ISFP', 'ISTP'], good: ['ISFJ', 'ESTJ', 'ENFJ', 'ESFP'] },
    'ISTP': { ideal: ['ESFJ', 'ESTJ'], good: ['ISFP', 'ESTP', 'ISTJ', 'ENTJ'] },
    'ISFP': { ideal: ['ENFJ', 'ESFJ'], good: ['ISTP', 'ESFP', 'INFP', 'ESTJ'] },
    'ESTP': { ideal: ['ISFJ', 'ISTJ'], good: ['ISTP', 'ESFP', 'ESTJ', 'ENTJ'] },
    'ESFP': { ideal: ['ISFJ', 'ISTJ'], good: ['ISFP', 'ESTP', 'ESFJ', 'ENFP'] }
};

// ====== Translation Functions ======
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            value = translations['en'];
            for (const k2 of keys) { value = value?.[k2]; }
            break;
        }
    }
    return value || key;
}

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
}

// ====== Language Selector ======
function initLanguageSelector() {
    const toggle = document.getElementById('lang-toggle');
    const menu = document.getElementById('lang-menu');
    const currentLangSpan = document.getElementById('current-lang');

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hidden');
        toggle.classList.toggle('active');
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            currentLangSpan.textContent = langNames[lang];
            menu.classList.add('hidden');
            toggle.classList.remove('active');
        });
    });

    document.addEventListener('click', () => {
        menu.classList.add('hidden');
        toggle.classList.remove('active');
    });
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    updateTranslations();
}

// ====== Navigation ======
function initNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            showSection(section);
        });
    });
}

function showSection(sectionId) {
    currentSection = sectionId;
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
}

// ====== Floating Hearts ======
function createFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    const hearts = ['💕', '💖', '💗', '💝', '💘', '✨', '💫', '🌸', '🦋'];

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (10 + Math.random() * 10) + 's';
        heart.style.fontSize = (15 + Math.random() * 20) + 'px';
        container.appendChild(heart);

        setTimeout(() => heart.remove(), 20000);
    }, 2000);
}

// ====== Character Detection & Strokes ======
function isKorean(char) { const c = char.charCodeAt(0); return (c >= 0xAC00 && c <= 0xD7A3); }
function isJapanese(char) { const c = char.charCodeAt(0); return (c >= 0x3040 && c <= 0x309F) || (c >= 0x30A0 && c <= 0x30FF); }
function isCJK(char) { const c = char.charCodeAt(0); return (c >= 0x4E00 && c <= 0x9FFF); }
function isRussian(char) { const c = char.charCodeAt(0); return (c >= 0x0400 && c <= 0x04FF); }
function isLatin(char) { const c = char.charCodeAt(0); return (c >= 0x0041 && c <= 0x005A) || (c >= 0x0061 && c <= 0x007A); }

function decomposeKorean(char) {
    const code = char.charCodeAt(0) - 0xAC00;
    if (code < 0 || code > 11171) return null;
    return {
        chosung: chosungList[Math.floor(code / 588)],
        jungsung: jungsungList[Math.floor((code % 588) / 28)],
        jongsung: jongsungList[code % 28]
    };
}

function getCharacterStrokes(char) {
    if (isKorean(char)) {
        const d = decomposeKorean(char);
        if (d) return (koreanChosung[d.chosung] || 0) + (koreanJungsung[d.jungsung] || 0) + (koreanJongsung[d.jongsung] || 0);
    }
    if (isJapanese(char)) return japaneseKana[char] || 3;
    if (isCJK(char)) return kanjiStrokes[char] || Math.floor(Math.random() * 10) + 5;
    if (isRussian(char)) return russianNumerology[char] || 5;
    if (isLatin(char)) return latinNumerology[char] || 5;
    return 0;
}

// ====== Name Compatibility ======
function initNameCompatibility() {
    document.getElementById('calculate-name-compatibility').addEventListener('click', calculateNameCompatibility);
}

function calculateNameCompatibility() {
    const name1 = document.getElementById('your-name').value.trim();
    const name2 = document.getElementById('partner-name').value.trim();

    if (!name1 || !name2) {
        showToast(t('name.alert') || 'Please enter both names 💕');
        return;
    }

    const chars1 = [...name1].filter(c => getCharacterStrokes(c) > 0);
    const chars2 = [...name2].filter(c => getCharacterStrokes(c) > 0);

    if (chars1.length === 0 || chars2.length === 0) {
        showToast(t('name.alert') || 'Please enter valid names 💕');
        return;
    }

    // Interleave
    const interleaved = [];
    const maxLen = Math.max(chars1.length, chars2.length);
    for (let i = 0; i < maxLen; i++) {
        if (i < chars1.length) interleaved.push(chars1[i]);
        if (i < chars2.length) interleaved.push(chars2[i]);
    }

    const strokes = interleaved.map(c => getCharacterStrokes(c));
    showCalculationAnimation(name1, name2, interleaved, strokes);
}

// Store calculation steps for toggle feature
let lastCalculationData = null;

function showCalculationAnimation(name1, name2, chars, strokes) {
    const result = document.getElementById('name-result');
    result.classList.remove('hidden');
    result.innerHTML = `
        <div class="calculation-animation">
            <div class="calc-title">${t('name.calculating') || '✨ Calculating your destiny... ✨'}</div>
            <div class="calc-steps"></div>
        </div>
    `;

    const stepsContainer = result.querySelector('.calc-steps');
    let currentStrokes = [...strokes];
    const allSteps = [[...currentStrokes]];

    while (currentStrokes.length > 2) {
        const next = [];
        for (let i = 0; i < currentStrokes.length - 1; i++) {
            next.push((currentStrokes[i] + currentStrokes[i + 1]) % 10);
        }
        currentStrokes = next;
        allSteps.push([...currentStrokes]);
    }

    const finalScore = parseInt(currentStrokes.join(''));

    // Store calculation data for later toggle
    lastCalculationData = {
        name1, name2, chars, strokes, allSteps, finalScore
    };

    let stepIndex = 0;

    function showStep() {
        if (stepIndex >= allSteps.length) {
            setTimeout(() => displayNameResult(name1, name2, finalScore, chars, strokes, allSteps), 500);
            return;
        }

        const stepData = allSteps[stepIndex];
        const stepRow = document.createElement('div');
        stepRow.className = 'calc-step-row';

        if (stepIndex === 0) {
            stepRow.innerHTML = chars.map((c, i) => `
                <div class="calc-cell">
                    <span class="calc-char">${c}</span>
                    <span class="calc-stroke">${strokes[i]}</span>
                </div>
            `).join('');
        } else {
            stepRow.innerHTML = stepData.map(s => `
                <div class="calc-cell">
                    <span class="calc-number">${s}</span>
                </div>
            `).join('');
        }

        stepsContainer.appendChild(stepRow);
        requestAnimationFrame(() => stepRow.classList.add('visible'));
        stepIndex++;
        setTimeout(showStep, stepIndex === 1 ? 800 : 350);
    }

    showStep();
}

function generateCalcStepsHTML(chars, strokes, allSteps) {
    let html = '';

    allSteps.forEach((stepData, stepIndex) => {
        if (stepIndex === 0) {
            html += `<div class="calc-step-row visible">
                ${chars.map((c, i) => `
                    <div class="calc-cell">
                        <span class="calc-char">${c}</span>
                        <span class="calc-stroke">${strokes[i]}</span>
                    </div>
                `).join('')}
            </div>`;
        } else {
            html += `<div class="calc-step-row visible">
                ${stepData.map(s => `
                    <div class="calc-cell">
                        <span class="calc-number">${s}</span>
                    </div>
                `).join('')}
            </div>`;
        }
    });

    return html;
}

function toggleCalcProcess() {
    const header = document.querySelector('.calc-toggle-header');
    const content = document.querySelector('.calc-content');

    if (header && content) {
        header.classList.toggle('open');
        content.classList.toggle('open');
    }
}

function displayNameResult(name1, name2, score, chars, strokes, allSteps) {
    const result = document.getElementById('name-result');
    const lang = currentLang === 'ko' || currentLang === 'ja' || currentLang === 'zh' ? currentLang : 'en';
    const messages = storyMessages[lang] || storyMessages.en;
    const pastLife = pastLifeStories[lang === 'ko' ? 'ko' : 'en'];
    const solutions = badLuckSolutions[lang === 'ko' ? 'ko' : 'en'];

    let level, heartEffect, heartEmojis;
    if (score >= 90) {
        level = 'excellent';
        heartEffect = 'fire-hearts';
        heartEmojis = '🔥💕🔥💕🔥';
    } else if (score >= 75) {
        level = 'good';
        heartEffect = 'sparkling-hearts';
        heartEmojis = '✨💖✨💖✨';
    } else if (score >= 60) {
        level = 'average';
        heartEffect = '';
        heartEmojis = '💕💫💕';
    } else if (score >= 40) {
        level = 'challenging';
        heartEffect = '';
        heartEmojis = '💪💕💪';
    } else {
        level = 'difficult';
        heartEffect = 'broken-hearts';
        heartEmojis = '🎢💕🎢';
    }

    const story = messages[level];
    const today = new Date().toLocaleDateString(currentLang, { month: 'long', day: 'numeric', year: 'numeric' });

    // Generate past life story
    const pastLifeSeed = (name1.charCodeAt(0) + name2.charCodeAt(0) + score) % pastLife.length;
    const pastLifeStory = pastLife[pastLifeSeed];

    // Get solution if score is low
    const solutionSeed = (name1.length * name2.length + score) % solutions.length;
    const solution = solutions[solutionSeed];

    if (score >= 80) triggerConfetti();

    const calcStepsHTML = generateCalcStepsHTML(chars, strokes, allSteps);
    const toggleLabel = lang === 'ko' ? '계산 과정 보기' : 'View Calculation';
    const pastLifeLabel = lang === 'ko' ? '전생의 인연' : 'Past Life Connection';
    const unlockLabel = lang === 'ko' ? '🔓 운명 해제 비법' : '🔓 Destiny Unlock Secret';
    const datePlanLabel = lang === 'ko' ? '🍽️ 데이트 플래너에서 오늘의 메뉴 추천받기' : '🍽️ Get menu recommendation at Date Planner';

    let solutionHTML = '';
    if (score < 50) {
        solutionHTML = `
            <div class="solution-card">
                <h4>${unlockLabel}</h4>
                <div class="solution-item">
                    <span class="solution-title">${solution.title}</span>
                    <p class="solution-desc">${solution.desc}</p>
                </div>
            </div>
        `;
    }

    result.innerHTML = `
        <div class="story-card">
            <div class="story-header">
                <p class="story-names">${name1} & ${name2}</p>
                <p class="story-date">${today}</p>
            </div>

            <div class="score-container">
                <div class="score-ring">
                    <div class="score-inner">
                        <span class="score-number">${score}</span>
                        <span class="score-label">%</span>
                    </div>
                </div>
            </div>

            <div class="heart-effect ${heartEffect}">${heartEmojis}</div>

            <h3 class="story-verdict">${story.verdict}</h3>

            <!-- Past Life Story -->
            <div class="past-life-card">
                <div class="past-life-header">
                    <span class="past-life-icon">🏮</span>
                    <span class="past-life-label">${pastLifeLabel}</span>
                </div>
                <p class="past-life-relation">"${pastLifeStory.relation}"</p>
                <p class="past-life-detail">${pastLifeStory.detail}</p>
            </div>

            <p class="story-message">${story.message}</p>

            <div class="story-advice">
                <p class="advice-title">💡 ${t('result.advice') || 'Love Tip'}</p>
                <p class="advice-text">${story.advice}</p>
            </div>

            ${solutionHTML}

            <!-- Date Planner CTA -->
            <div class="date-planner-cta" onclick="goToDatePlanner(${score}, '${name1}', '${name2}')">
                <span>${datePlanLabel}</span>
                <span class="cta-arrow">→</span>
            </div>

            <!-- Calculation Process Toggle -->
            <div class="calc-toggle-section">
                <div class="calc-toggle-header" onclick="toggleCalcProcess()">
                    <span class="calc-toggle-title">
                        <span>🔢</span>
                        <span>${toggleLabel}</span>
                    </span>
                    <span class="calc-toggle-arrow">▼</span>
                </div>
                <div class="calc-content">
                    <div class="calc-content-inner">
                        <div class="calc-steps">
                            ${calcStepsHTML}
                        </div>
                    </div>
                </div>
            </div>

            <div class="share-section">
                <button class="share-btn" onclick="shareNameResult('${name1}', '${name2}', ${score}, '${pastLifeStory.relation.replace(/'/g, "\\'")}')">
                    <span>📱</span> Share Result
                </button>
            </div>
        </div>
    `;

    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function goToDatePlanner(score, name1, name2) {
    showSection('dateRec');
    document.getElementById('date-your-name').value = name1;
    document.getElementById('date-partner-name').value = name2;
    document.getElementById('date-score').value = score;
    document.getElementById('dateRec').scrollIntoView({ behavior: 'smooth' });
}

function shareNameResult(name1, name2, score, pastLife) {
    const lang = currentLang === 'ko' ? 'ko' : 'en';
    let text;
    if (lang === 'ko') {
        text = `💕 ${name1} & ${name2}: ${score}% 궁합!\n🏮 전생: "${pastLife}"\n\nLove & Fate에서 확인하세요!`;
    } else {
        text = `💕 ${name1} & ${name2}: ${score}% compatible!\n🏮 Past Life: "${pastLife}"\n\nCheck at Love & Fate!`;
    }
    shareContent(text);
}

// ====== Date Recommendation ======
function initDateRecommendation() {
    document.getElementById('get-date-recommendation').addEventListener('click', getDateRecommendation);
}

function getDateRecommendation() {
    const name1 = document.getElementById('date-your-name').value.trim();
    const name2 = document.getElementById('date-partner-name').value.trim();
    const scoreInput = document.getElementById('date-score').value;

    if (!name1 || !name2) {
        showToast(t('dateRec.alertNames') || 'Please enter both names 💕');
        return;
    }

    if (!scoreInput) {
        showToast(t('dateRec.alertScore') || 'Please enter your compatibility score! 💯');
        return;
    }

    const score = parseInt(scoreInput);
    if (score < 1 || score > 100 || isNaN(score)) {
        showToast(t('dateRec.alertRange') || 'Score must be between 1-100 💯');
        return;
    }

    const lang = currentLang === 'ko' ? 'ko' : 'en';
    const menus = lang === 'ko' ? dateMenus : dateMenusEn;
    const pastLife = pastLifeStories[lang] || pastLifeStories.en;
    const solutions = badLuckSolutions[lang] || badLuckSolutions.en;

    // Determine category based on score
    let category, emoji, verdict;
    if (score >= 85) {
        category = 'excellent';
        emoji = '🔥💕🔥';
        verdict = lang === 'ko' ? '최고의 궁합! 축하 파티가 필요해요' : 'Perfect Match! Time to celebrate';
    } else if (score >= 70) {
        category = 'good';
        emoji = '✨💖✨';
        verdict = lang === 'ko' ? '좋은 궁합! 맛있는 거 먹으러 가요' : 'Great Match! Let\'s eat something good';
    } else if (score >= 50) {
        category = 'average';
        emoji = '💫🌟💫';
        verdict = lang === 'ko' ? '발전 가능성 있음! 새로운 경험을 함께' : 'Has Potential! Try new experiences together';
    } else if (score >= 30) {
        category = 'challenging';
        emoji = '💪❤️💪';
        verdict = lang === 'ko' ? '노력이 필요해요! 음식의 힘을 빌려봐요' : 'Needs Work! Let food work its magic';
    } else {
        category = 'difficult';
        emoji = '🆘💕🆘';
        verdict = lang === 'ko' ? '긴급 처방 필요! 삼겹살의 힘을 믿으세요' : 'Emergency! Trust the power of BBQ';
    }

    // Get random recommendation
    const menuList = menus[category];
    const seed = (name1.length + name2.length + score) % menuList.length;
    const recommendation = menuList[seed];

    // Generate past life story
    const pastLifeSeed = (name1.charCodeAt(0) + name2.charCodeAt(0) + score) % pastLife.length;
    const pastLifeStory = pastLife[pastLifeSeed];

    // Get solution if score is low
    const solutionSeed = (name1.length * name2.length) % solutions.length;
    const solution = solutions[solutionSeed];

    const result = document.getElementById('date-rec-result');
    result.classList.remove('hidden');

    const pastLifeLabel = lang === 'ko' ? '전생의 인연' : 'Past Life Connection';
    const todayMenuLabel = lang === 'ko' ? '오늘의 추천 메뉴' : 'Today\'s Menu';
    const dateSpotLabel = lang === 'ko' ? '추천 장소' : 'Date Spot';
    const whyLabel = lang === 'ko' ? '왜 이 조합인가?' : 'Why This Combo?';
    const unlockLabel = lang === 'ko' ? '🔓 운명 해제 비법' : '🔓 Destiny Unlock Secret';

    let solutionHTML = '';
    if (score < 50) {
        solutionHTML = `
            <div class="solution-card">
                <h4>${unlockLabel}</h4>
                <div class="solution-item">
                    <span class="solution-title">${solution.title}</span>
                    <p class="solution-desc">${solution.desc}</p>
                </div>
            </div>
        `;
    }

    result.innerHTML = `
        <div class="story-card date-result-card">
            <div class="story-header">
                <p class="story-names">${name1} & ${name2}</p>
                <p class="story-date">${lang === 'ko' ? '오늘의 데이트 플랜' : 'Today\'s Date Plan'}</p>
            </div>

            <div class="score-container">
                <div class="score-ring">
                    <div class="score-inner">
                        <span class="score-number">${score}</span>
                        <span class="score-label">%</span>
                    </div>
                </div>
            </div>

            <div class="heart-effect sparkling-hearts">${emoji}</div>

            <h3 class="story-verdict">${verdict}</h3>

            <!-- Past Life Story -->
            <div class="past-life-card">
                <div class="past-life-header">
                    <span class="past-life-icon">🏮</span>
                    <span class="past-life-label">${pastLifeLabel}</span>
                </div>
                <p class="past-life-relation">"${pastLifeStory.relation}"</p>
                <p class="past-life-detail">${pastLifeStory.detail}</p>
            </div>

            <!-- Menu Recommendation -->
            <div class="menu-rec-card">
                <div class="menu-item">
                    <span class="menu-icon">🍽️</span>
                    <div class="menu-content">
                        <span class="menu-label">${todayMenuLabel}</span>
                        <span class="menu-value">${recommendation.menu}</span>
                    </div>
                </div>
                <div class="menu-item">
                    <span class="menu-icon">📍</span>
                    <div class="menu-content">
                        <span class="menu-label">${dateSpotLabel}</span>
                        <span class="menu-value">${recommendation.spot}</span>
                    </div>
                </div>
            </div>

            <div class="story-advice">
                <p class="advice-title">💡 ${whyLabel}</p>
                <p class="advice-text">${recommendation.reason}</p>
            </div>

            ${solutionHTML}

            <div class="share-section">
                <button class="share-btn" onclick="shareDateResult('${name1}', '${name2}', ${score}, '${recommendation.menu.replace(/'/g, "\\'")}', '${pastLifeStory.relation.replace(/'/g, "\\'")}')">
                    <span>📱</span> ${lang === 'ko' ? '공유하기' : 'Share'}
                </button>
            </div>
        </div>
    `;

    if (score >= 80) triggerConfetti();
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function shareDateResult(name1, name2, score, menu, pastLife) {
    const lang = currentLang === 'ko' ? 'ko' : 'en';
    let text;
    if (lang === 'ko') {
        text = `💕 ${name1} & ${name2} (${score}%)\n🏮 전생: "${pastLife}"\n🍽️ 오늘의 데이트: ${menu}\n\nLove & Fate에서 확인하세요!`;
    } else {
        text = `💕 ${name1} & ${name2} (${score}%)\n🏮 Past Life: "${pastLife}"\n🍽️ Today's Date: ${menu}\n\nCheck at Love & Fate!`;
    }
    shareContent(text);
}

// ====== MBTI Compatibility ======
function initMbtiCompatibility() {
    document.getElementById('calculate-mbti-compatibility').addEventListener('click', calculateMbtiCompatibility);
}

function getMbtiCompatibilityType(mbti1, mbti2) {
    const key = `${mbti1}-${mbti2}`;
    const detailed = mbtiDetailedCompatibility[key];

    if (detailed) {
        return detailed;
    }

    // Fallback to matrix-based calculation
    const compatibility = mbtiMatrix[mbti1];
    if (compatibility?.ideal?.includes(mbti2)) {
        return { score: 90, type: 'soulmate', keyword: '환상의 궁합', en_keyword: 'Perfect Match' };
    } else if (compatibility?.good?.includes(mbti2)) {
        return { score: 78, type: 'great', keyword: '좋은 궁합', en_keyword: 'Great Match' };
    } else if (mbti1 === mbti2) {
        return { score: 70, type: 'mirror', keyword: '거울 궁합', en_keyword: 'Mirror Match' };
    }

    // Calculate based on MBTI functions
    let matchCount = 0;
    for (let i = 0; i < 4; i++) {
        if (mbti1[i] === mbti2[i]) matchCount++;
    }

    if (matchCount >= 3) {
        return { score: 72, type: 'good', keyword: '괜찮은 궁합', en_keyword: 'Decent Match' };
    } else if (matchCount === 2) {
        return { score: 58, type: 'moderate', keyword: '노력이 필요한 궁합', en_keyword: 'Needs Work' };
    } else if (matchCount === 1) {
        return { score: 45, type: 'challenging', keyword: '도전적인 궁합', en_keyword: 'Challenging Match' };
    }

    return { score: 38, type: 'difficult', keyword: '극과 극', en_keyword: 'Opposites' };
}

function calculateMbtiCompatibility() {
    const mbti1 = document.getElementById('your-mbti').value;
    const mbti2 = document.getElementById('partner-mbti').value;

    if (!mbti1 || !mbti2) {
        showToast(t('mbti.alert') || 'Please select both MBTI types 🧠');
        return;
    }

    const compatData = getMbtiCompatibilityType(mbti1, mbti2);
    const lang = currentLang === 'ko' ? 'ko' : 'en';
    const stories = mbtiStories[lang] || mbtiStories.en;
    const story = stories[compatData.type] || stories.moderate || stories.good;
    const pastLife = pastLifeStories[lang] || pastLifeStories.en;
    const solutions = badLuckSolutions[lang] || badLuckSolutions.en;

    const keyword = lang === 'ko' ? compatData.keyword : compatData.en_keyword;
    const score = compatData.score;

    // Generate past life based on MBTI
    const pastLifeSeed = (mbti1.charCodeAt(0) + mbti2.charCodeAt(2) + score) % pastLife.length;
    const pastLifeStory = pastLife[pastLifeSeed];

    // Get solution if score is low
    const solutionSeed = (mbti1.length * mbti2.length + score) % solutions.length;
    const solution = solutions[solutionSeed];

    const emojis = {
        soulmate: '🔥💕🔥', great: '⚡💖⚡', good: '✨💖✨',
        moderate: '🌱💚🌱', challenging: '🎢💪🎢', explosive: '💣❤️‍🔥💣',
        chaotic: '🌪️💕🌪️', toxic: '💔🔄💕', difficult: '🎮💪🎮',
        mirror: '🪞💕🪞', competitive: '👑⚔️👑', chaos: '🌈🎪🌈',
        fun: '🎉🎊🎉', adventure: '🏔️💕🏔️', peaceful: '🌸☮️🌸',
        independent: '🌌💫🌌', stable: '⛰️💎⛰️', caring: '💝🤗💝',
        idealist: '🌍💕🌍'
    };

    let heartClass = '';
    if (score >= 85) {
        heartClass = 'fire-hearts';
        triggerConfetti();
    } else if (score >= 70) {
        heartClass = 'sparkling-hearts';
    } else if (score < 45) {
        heartClass = 'broken-hearts';
    }

    const pastLifeLabel = lang === 'ko' ? '전생의 인연' : 'Past Life Connection';
    const unlockLabel = lang === 'ko' ? '🔓 운명 해제 비법' : '🔓 Destiny Unlock Secret';
    const datePlanLabel = lang === 'ko' ? '🍽️ 데이트 플래너에서 오늘의 메뉴 추천받기' : '🍽️ Get menu recommendation at Date Planner';

    let solutionHTML = '';
    if (score < 50) {
        solutionHTML = `
            <div class="solution-card">
                <h4>${unlockLabel}</h4>
                <div class="solution-item">
                    <span class="solution-title">${solution.title}</span>
                    <p class="solution-desc">${solution.desc}</p>
                </div>
            </div>
        `;
    }

    const result = document.getElementById('mbti-result');
    result.classList.remove('hidden');
    result.innerHTML = `
        <div class="story-card">
            <div class="story-header">
                <p class="story-names">${mbti1} 🧩 ${mbti2}</p>
            </div>

            <div class="score-container">
                <div class="score-ring">
                    <div class="score-inner">
                        <span class="score-number">${score}</span>
                        <span class="score-label">%</span>
                    </div>
                </div>
            </div>

            <div class="heart-effect ${heartClass}">${emojis[compatData.type] || '💕✨💕'}</div>

            <div class="mbti-keyword">
                <span class="keyword-badge">${keyword}</span>
            </div>

            <h3 class="story-verdict">${story.verdict}</h3>

            <!-- Past Life Story -->
            <div class="past-life-card">
                <div class="past-life-header">
                    <span class="past-life-icon">🏮</span>
                    <span class="past-life-label">${pastLifeLabel}</span>
                </div>
                <p class="past-life-relation">"${pastLifeStory.relation}"</p>
                <p class="past-life-detail">${pastLifeStory.detail}</p>
            </div>

            <p class="story-message">${story.message}</p>

            <div class="story-advice">
                <p class="advice-title">💡 ${t('result.advice') || 'Love Tip'}</p>
                <p class="advice-text">${story.advice}</p>
            </div>

            ${solutionHTML}

            <div class="mbti-traits">
                <div class="trait-comparison">
                    <div class="trait-item">
                        <span class="trait-label">${mbti1}</span>
                        <span class="trait-desc">${getMbtiNickname(mbti1, lang)}</span>
                    </div>
                    <span class="trait-vs">VS</span>
                    <div class="trait-item">
                        <span class="trait-label">${mbti2}</span>
                        <span class="trait-desc">${getMbtiNickname(mbti2, lang)}</span>
                    </div>
                </div>
            </div>

            <!-- Date Planner CTA -->
            <div class="date-planner-cta" onclick="goToDatePlannerMbti(${score})">
                <span>${datePlanLabel}</span>
                <span class="cta-arrow">→</span>
            </div>

            <div class="share-section">
                <button class="share-btn" onclick="shareMbtiResultFull('${mbti1}', '${mbti2}', ${score}, '${keyword.replace(/'/g, "\\'")}', '${pastLifeStory.relation.replace(/'/g, "\\'")}')">
                    <span>📱</span> Share Result
                </button>
            </div>
        </div>
    `;

    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function goToDatePlannerMbti(score) {
    showSection('dateRec');
    document.getElementById('date-score').value = score;
    document.getElementById('dateRec').scrollIntoView({ behavior: 'smooth' });
}

function shareMbtiResultFull(mbti1, mbti2, score, keyword, pastLife) {
    const lang = currentLang === 'ko' ? 'ko' : 'en';
    let text;
    if (lang === 'ko') {
        text = `🧠 ${mbti1} + ${mbti2}: ${score}%\n💫 "${keyword}"\n🏮 전생: "${pastLife}"\n\nLove & Fate에서 확인하세요!`;
    } else {
        text = `🧠 ${mbti1} + ${mbti2}: ${score}%\n💫 "${keyword}"\n🏮 Past Life: "${pastLife}"\n\nCheck at Love & Fate!`;
    }
    shareContent(text);
}

function getMbtiNickname(mbti, lang) {
    const nicknames = {
        en: {
            'INTJ': 'The Architect',
            'INTP': 'The Logician',
            'ENTJ': 'The Commander',
            'ENTP': 'The Debater',
            'INFJ': 'The Advocate',
            'INFP': 'The Mediator',
            'ENFJ': 'The Protagonist',
            'ENFP': 'The Campaigner',
            'ISTJ': 'The Logistician',
            'ISFJ': 'The Defender',
            'ESTJ': 'The Executive',
            'ESFJ': 'The Consul',
            'ISTP': 'The Virtuoso',
            'ISFP': 'The Adventurer',
            'ESTP': 'The Entrepreneur',
            'ESFP': 'The Entertainer'
        },
        ko: {
            'INTJ': '용의주도한 전략가',
            'INTP': '논리적인 사색가',
            'ENTJ': '대담한 통솔자',
            'ENTP': '뜨거운 논쟁가',
            'INFJ': '선의의 옹호자',
            'INFP': '열정적인 중재자',
            'ENFJ': '정의로운 사회운동가',
            'ENFP': '재기발랄한 활동가',
            'ISTJ': '청렴결백한 논리주의자',
            'ISFJ': '용감한 수호자',
            'ESTJ': '엄격한 관리자',
            'ESFJ': '사교적인 외교관',
            'ISTP': '만능 재주꾼',
            'ISFP': '호기심 많은 예술가',
            'ESTP': '모험을 즐기는 사업가',
            'ESFP': '자유로운 영혼의 연예인'
        }
    };
    return nicknames[lang]?.[mbti] || nicknames.en[mbti] || mbti;
}

// ====== Daily Fortune ======
function initDailyFortune() {
    document.getElementById('get-daily-fortune').addEventListener('click', getDailyFortune);
}

function getDailyFortune() {
    const name = document.getElementById('daily-name').value.trim();
    if (!name) {
        showToast(t('daily.alert') || 'Please enter your name 🔮');
        return;
    }

    const lang = currentLang === 'ko' ? 'ko' : 'en';
    const fortunes = dailyFortunes[lang] || dailyFortunes.en;

    // Use name + date as seed for consistent daily fortune
    const today = new Date().toDateString();
    const seed = name.length + today.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const fortune = fortunes[seed % fortunes.length];

    const luckyNumber = (seed % 99) + 1;
    const luckyColors = ['💗 Pink', '💜 Purple', '💙 Blue', '💚 Green', '💛 Yellow', '🧡 Orange', '❤️ Red'];
    const luckyColor = luckyColors[seed % luckyColors.length];

    const result = document.getElementById('daily-result');
    result.classList.remove('hidden');
    result.innerHTML = `
        <div class="story-card">
            <div class="story-header">
                <p class="story-names">${name}'s Love Fortune</p>
                <p class="story-date">${new Date().toLocaleDateString(currentLang, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </div>

            <div class="heart-effect sparkling-hearts" style="font-size: 4rem;">${fortune.emoji}</div>

            <p class="story-message">${fortune.fortune}</p>

            <div class="story-advice" style="display: flex; justify-content: space-around; text-align: center;">
                <div>
                    <p class="advice-title">🔢 Lucky Number</p>
                    <p class="advice-text" style="font-size: 1.5rem; font-weight: bold;">${luckyNumber}</p>
                </div>
                <div>
                    <p class="advice-title">🎨 Lucky Color</p>
                    <p class="advice-text">${luckyColor}</p>
                </div>
            </div>

            <div class="share-section">
                <button class="share-btn" onclick="shareDailyFortune('${name}')">
                    <span>📱</span> Share Fortune
                </button>
            </div>
        </div>
    `;

    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ====== Share Functions ======
function shareResult(name1, name2, score) {
    const text = `💕 ${name1} & ${name2}: ${score}% compatible! ✨\n\nFind your love compatibility at Love & Fate!`;
    shareContent(text);
}

function shareBloodResult(type1, type2) {
    const text = `🩸 Blood Type ${type1} + ${type2} compatibility revealed! 💉\n\nDiscover yours at Love & Fate!`;
    shareContent(text);
}

function shareMbtiResult(mbti1, mbti2, score, keyword) {
    const text = `🧠 ${mbti1} + ${mbti2}: ${score}% compatible!\n💫 "${keyword}"\n\nFind your match at Love & Fate!`;
    shareContent(text);
}

function shareDailyFortune(name) {
    const text = `🔮 ${name}'s daily love fortune is in! ✨\n\nGet yours at Love & Fate!`;
    shareContent(text);
}

function shareContent(text) {
    if (navigator.share) {
        navigator.share({ title: 'Love & Fate', text: text, url: window.location.href });
    } else {
        navigator.clipboard.writeText(text + '\n' + window.location.href);
        showToast('Copied to clipboard! 📋');
    }
}

// ====== UI Effects ======
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}

function triggerConfetti() {
    const colors = ['#ff6b9d', '#a855f7', '#fbbf24', '#10b981', '#3b82f6'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 50);
    }
}

// ====== Initialize ======
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLanguageSelector();
    initNameCompatibility();
    initDateRecommendation();
    initMbtiCompatibility();
    initDailyFortune();
    createFloatingHearts();

    // Always default to English
    setLanguage('en');
    document.getElementById('current-lang').textContent = 'EN';
});
