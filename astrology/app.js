
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

// ====== Blood Type Stories ======
const bloodTypeStories = {
    en: {
        'A-A': { emoji: '🎭', verdict: 'Mirror Souls', message: "Two perfectionists who totally get each other's need for order. You'll have the most organized home and the deepest conversations, but remember - sometimes chaos is fun too!", advice: "Schedule spontaneous date nights. Yes, schedule being spontaneous. You'll both appreciate the irony." },
        'A-B': { emoji: '🎪', verdict: 'Exciting Opposites', message: "It's like pairing a detailed planner with a free spirit! Type A's stability grounds B's wild ideas, while B helps A loosen up. Sparks will fly - the good kind!", advice: "A, let B surprise you sometimes. B, appreciate A's thoughtfulness. Together, you're unstoppable." },
        'A-O': { emoji: '🏠', verdict: 'Home Sweet Home', message: "This is comfort food as a relationship. A's attention to detail meets O's generous heart. You'll build something beautiful and lasting together.", advice: "O, slow down for A's pace. A, trust O's big-picture thinking. You balance each other perfectly." },
        'A-AB': { emoji: '🎨', verdict: 'Artistic Connection', message: "Both of you see the world in complex, beautiful ways. Your conversations could last for hours, exploring every nuance of life, love, and everything in between.", advice: "Don't let overthinking paralyze you. Sometimes the heart knows what the mind is still figuring out." },
        'B-A': { emoji: '🎪', verdict: 'Exciting Opposites', message: "Your carefree spirit meets their careful nature. You'll teach them to dance in the rain while they'll remember to bring the umbrella. Perfect balance!", advice: "Appreciate their planning - it comes from love. And they should embrace your spontaneity - it's contagious!" },
        'B-B': { emoji: '🎸', verdict: 'Double Trouble (The Fun Kind!)', message: "Two free spirits together? Get ready for adventures, last-minute road trips, and a life that's never boring. Just make sure someone remembers to pay the bills!", advice: "Designate one person as the 'responsible one' each week. Take turns, make it fun!" },
        'B-O': { emoji: '🌟', verdict: 'Dream Team', message: "B's creativity meets O's determination. You dream it, you'll achieve it together. This is a power couple in the making!", advice: "O, give B room to explore. B, follow through on those brilliant ideas. Sky's the limit!" },
        'B-AB': { emoji: '🎭', verdict: 'Fascinating Duo', message: "AB gets B in ways others don't. This is a meeting of unique minds who don't play by conventional rules. Intriguing doesn't begin to describe it.", advice: "Embrace your shared weirdness. The world needs more couples who color outside the lines." },
        'O-A': { emoji: '🏠', verdict: 'Home Sweet Home', message: "Your big heart and their attention to detail create something really special. You provide the warmth, they provide the thoughtful touches.", advice: "Communicate your needs clearly. A might not always pick up on hints, but they'll move mountains once they understand." },
        'O-B': { emoji: '🌟', verdict: 'Dream Team', message: "You're the anchor that lets B fly without floating away. Your steadiness and their creativity make magic happen.", advice: "Don't try to tame them - support them. And let them bring some unpredictability into your life!" },
        'O-O': { emoji: '👑', verdict: 'Power Couple Alert!', message: "Two natural leaders together! You'll either rule the world or drive each other crazy. Probably both. The passion here is REAL.", advice: "Take turns leading. Your combined power is immense - make sure it's pointed in the same direction." },
        'O-AB': { emoji: '🧩', verdict: 'Beautiful Puzzle', message: "O's straightforward nature meets AB's complexity. It's not always easy to understand each other, but when you click, it's magical.", advice: "Patience is key. AB needs time to process, O needs direct communication. Meet in the middle." },
        'AB-A': { emoji: '🎨', verdict: 'Artistic Connection', message: "You both appreciate life's subtle beauties. A helps ground your swirling thoughts, while you help A see beyond the rules.", advice: "Create together - art, music, a business, anything. Your combined vision is extraordinary." },
        'AB-B': { emoji: '🎭', verdict: 'Fascinating Duo', message: "You get each other's unconventional ways. B's energy matches your multifaceted nature. Never a dull moment!", advice: "Don't let outside opinions affect you. What you have is special, even if others don't get it." },
        'AB-O': { emoji: '🧩', verdict: 'Beautiful Puzzle', message: "O's directness cuts through your complexity in the best way. They'll be your rock while you expand their horizons.", advice: "Be patient with each other's differences. The contrast is what makes this work beautifully." },
        'AB-AB': { emoji: '🌌', verdict: 'Rare & Extraordinary', message: "Two of the rarest blood types together! You understand each other's dual nature like no one else could. This is rare and special.", advice: "Embrace your shared complexity. You don't need to explain yourselves to each other - that's the gift." }
    },
    ko: {
        'A-A': { emoji: '🎭', verdict: '거울 같은 영혼', message: "서로의 정리정돈 욕구를 완벽히 이해하는 두 완벽주의자예요. 가장 정돈된 집과 가장 깊은 대화를 나누게 될 거예요. 하지만 기억하세요 - 가끔은 혼란도 재미있어요!", advice: "즉흥적인 데이트 밤을 계획하세요. 네, 즉흥적인 걸 계획하는 거예요. 둘 다 그 아이러니를 좋아할 거예요." },
        'A-B': { emoji: '🎪', verdict: '흥미진진한 반대', message: "꼼꼼한 계획가와 자유로운 영혼의 만남! A형의 안정감이 B형의 기발한 아이디어를 잡아주고, B형은 A형이 긴장을 풀도록 도와줘요. 좋은 의미의 불꽃이 튈 거예요!", advice: "A형, 가끔은 B형이 놀라게 해줘도 돼요. B형, A형의 세심함을 감사히 여기세요. 함께라면 무적이에요." },
        'A-O': { emoji: '🏠', verdict: '달콤한 우리 집', message: "이건 관계의 컴포트 푸드예요. A형의 세심함과 O형의 넓은 마음이 만나요. 함께 아름답고 오래가는 무언가를 만들 거예요.", advice: "O형, A형의 속도에 맞춰 천천히 가세요. A형, O형의 큰 그림을 믿으세요. 서로를 완벽하게 균형 맞춰요." }
    }
};

// ====== MBTI Stories ======
const mbtiStories = {
    en: {
        ideal: {
            verdict: "Soulmate Material! 💕",
            message: "This is what MBTI compatibility dreams are made of! Your personality types complement each other like a perfect puzzle. Where one lacks, the other provides. It's like you were designed to understand each other.",
            advice: "Don't take this natural chemistry for granted. Keep exploring each other's inner worlds - there's always more to discover."
        },
        good: {
            verdict: "Natural Partners 🌟",
            message: "You two just... click. Your cognitive functions play well together, creating a relationship that flows naturally. Conversations are easy, silences are comfortable, and growth happens organically.",
            advice: "Lean into your similarities while celebrating your differences. You have a solid foundation - build something amazing on it."
        },
        moderate: {
            verdict: "Growing Together 🌱",
            message: "You might not finish each other's sentences, but you'll definitely expand each other's perspectives. This match offers beautiful opportunities for personal growth through understanding.",
            advice: "Be curious about how they see the world differently. Their perspective is a gift that can enrich your life in unexpected ways."
        },
        challenging: {
            verdict: "The Growth Edge 🦋",
            message: "Here's where it gets interesting. Your types process the world differently, which can cause friction... or create incredible transformation. It all depends on your approach.",
            advice: "Study each other's MBTI profiles. Understanding why they react differently helps transform frustration into compassion."
        }
    },
    ko: {
        ideal: {
            verdict: "소울메이트 확정! 💕",
            message: "이게 바로 MBTI 궁합이 꿈꾸는 조합이에요! 두 분의 성격 유형이 완벽한 퍼즐처럼 서로를 보완해요. 한 쪽이 부족한 곳을 다른 쪽이 채워줘요. 마치 서로를 이해하도록 설계된 것 같아요.",
            advice: "이 자연스러운 케미를 당연하게 여기지 마세요. 서로의 내면 세계를 계속 탐험하세요 - 발견할 게 항상 더 있어요."
        },
        good: {
            verdict: "천생연분 🌟",
            message: "두 분은 그냥... 딱 맞아요. 인지 기능이 잘 어울려서 자연스럽게 흐르는 관계를 만들어요. 대화가 쉽고, 침묵도 편안하고, 성장도 자연스럽게 일어나요.",
            advice: "비슷한 점을 활용하면서 다른 점도 축하하세요. 탄탄한 기반이 있으니 그 위에 멋진 것을 만드세요."
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
    let stepIndex = 0;

    function showStep() {
        if (stepIndex >= allSteps.length) {
            setTimeout(() => displayNameResult(name1, name2, finalScore), 500);
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

function displayNameResult(name1, name2, score) {
    const result = document.getElementById('name-result');
    const lang = currentLang === 'ko' || currentLang === 'ja' || currentLang === 'zh' ? currentLang : 'en';
    const messages = storyMessages[lang] || storyMessages.en;

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

    if (score >= 80) triggerConfetti();

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
            <p class="story-message">${story.message}</p>

            <div class="story-advice">
                <p class="advice-title">💡 ${t('result.advice') || 'Love Tip'}</p>
                <p class="advice-text">${story.advice}</p>
            </div>

            <div class="share-section">
                <button class="share-btn" onclick="shareResult('${name1}', '${name2}', ${score})">
                    <span>📱</span> Share Result
                </button>
            </div>
        </div>
    `;

    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ====== Blood Type Compatibility ======
function initBloodTypeCompatibility() {
    document.getElementById('calculate-blood-type-compatibility').addEventListener('click', calculateBloodTypeCompatibility);
}

function calculateBloodTypeCompatibility() {
    const type1 = document.getElementById('your-blood-type').value;
    const type2 = document.getElementById('partner-blood-type').value;

    if (!type1 || !type2) {
        showToast(t('bloodType.alert') || 'Please select both blood types 🩸');
        return;
    }

    const key = `${type1}-${type2}`;
    const lang = currentLang === 'ko' ? 'ko' : 'en';
    const stories = bloodTypeStories[lang] || bloodTypeStories.en;
    const story = stories[key] || stories['O-O'];

    const result = document.getElementById('blood-type-result');
    result.classList.remove('hidden');
    result.innerHTML = `
        <div class="story-card">
            <div class="story-header">
                <p class="story-names">Type ${type1} 💉 Type ${type2}</p>
            </div>

            <div class="heart-effect sparkling-hearts" style="font-size: 3rem;">${story.emoji}</div>

            <h3 class="story-verdict">${story.verdict}</h3>
            <p class="story-message">${story.message}</p>

            <div class="story-advice">
                <p class="advice-title">💡 ${t('result.advice') || 'Love Tip'}</p>
                <p class="advice-text">${story.advice}</p>
            </div>

            <div class="share-section">
                <button class="share-btn" onclick="shareBloodResult('${type1}', '${type2}')">
                    <span>📱</span> Share Result
                </button>
            </div>
        </div>
    `;

    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ====== MBTI Compatibility ======
function initMbtiCompatibility() {
    document.getElementById('calculate-mbti-compatibility').addEventListener('click', calculateMbtiCompatibility);
}

function calculateMbtiCompatibility() {
    const mbti1 = document.getElementById('your-mbti').value;
    const mbti2 = document.getElementById('partner-mbti').value;

    if (!mbti1 || !mbti2) {
        showToast(t('mbti.alert') || 'Please select both MBTI types 🧠');
        return;
    }

    const compatibility = mbtiMatrix[mbti1];
    let level = 'moderate';
    if (compatibility?.ideal?.includes(mbti2)) level = 'ideal';
    else if (compatibility?.good?.includes(mbti2)) level = 'good';
    else if (mbti1 === mbti2) level = 'good';

    const lang = currentLang === 'ko' ? 'ko' : 'en';
    const stories = mbtiStories[lang] || mbtiStories.en;
    const story = stories[level] || stories.moderate;

    const emojis = { ideal: '💕🔥💕', good: '✨💖✨', moderate: '🌱💚🌱', challenging: '🦋💪🦋' };

    const result = document.getElementById('mbti-result');
    result.classList.remove('hidden');
    result.innerHTML = `
        <div class="story-card">
            <div class="story-header">
                <p class="story-names">${mbti1} 🧩 ${mbti2}</p>
            </div>

            <div class="heart-effect sparkling-hearts">${emojis[level]}</div>

            <h3 class="story-verdict">${story.verdict}</h3>
            <p class="story-message">${story.message}</p>

            <div class="story-advice">
                <p class="advice-title">💡 ${t('result.advice') || 'Love Tip'}</p>
                <p class="advice-text">${story.advice}</p>
            </div>

            <div class="share-section">
                <button class="share-btn" onclick="shareMbtiResult('${mbti1}', '${mbti2}')">
                    <span>📱</span> Share Result
                </button>
            </div>
        </div>
    `;

    if (level === 'ideal') triggerConfetti();
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

function shareMbtiResult(mbti1, mbti2) {
    const text = `🧠 ${mbti1} + ${mbti2} MBTI compatibility check! 🧩\n\nFind your match at Love & Fate!`;
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
    initBloodTypeCompatibility();
    initMbtiCompatibility();
    initDailyFortune();
    createFloatingHearts();

    // Always default to English
    setLanguage('en');
    document.getElementById('current-lang').textContent = 'EN';
});
