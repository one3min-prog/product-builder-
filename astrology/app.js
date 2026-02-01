
// ====== App State ======
let currentLang = 'en';
let currentSection = 'name';

// ====== Language Data ======
const availableLangs = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'ru', 'pt'];

// ====== Compatibility Data ======
const bloodTypeCompatibility = {
    'A': {
        'A': 'Good friends, but romance can be slow to develop.',
        'B': 'A passionate and exciting combination, but can lead to conflict.',
        'O': 'A stable and comfortable relationship, built on trust.',
        'AB': 'A mysterious attraction, but communication is key.'
    },
    'B': {
        'A': 'A passionate and exciting combination, but can lead to conflict.',
        'B': 'A fun and adventurous pair, but can lack a deep connection.',
        'O': 'A supportive and understanding relationship.',
        'AB': 'A unique and fascinating match, full of surprises.'
    },
    'O': {
        'A': 'A stable and comfortable relationship, built on trust.',
        'B': 'A supportive and understanding relationship.',
        'O': 'A powerful and harmonious couple, a true power couple.',
        'AB': 'A challenging but rewarding relationship that requires patience.'
    },
    'AB': {
        'A': 'A mysterious attraction, but communication is key.',
        'B': 'A unique and fascinating match, full of surprises.',
        'O': 'A challenging but rewarding relationship that requires patience.',
        'AB': 'A highly intellectual and spiritual connection, but can be detached.'
    }
};

const mbtiCompatibility = {
    'ISTJ': { 'ESFP': 'Ideal Match', 'ISFJ': 'Good Match', 'ESTJ': 'Good Match'},
    'ISFJ': { 'ESTP': 'Ideal Match', 'ISTJ': 'Good Match', 'ESFJ': 'Good Match'},
    'INFJ': { 'ENTP': 'Ideal Match', 'INFP': 'Good Match', 'ENFJ': 'Good Match'},
    'INTJ': { 'ENFP': 'Ideal Match', 'INTP': 'Good Match', 'ENTJ': 'Good Match'},
    'ISTP': { 'ESFJ': 'Ideal Match', 'ISFP': 'Good Match', 'ESTP': 'Good Match'},
    'ISFP': { 'ENFJ': 'Ideal Match', 'ISTP': 'Good Match', 'ESFP': 'Good Match'},
    'INFP': { 'ENTJ': 'Ideal Match', 'INFJ': 'Good Match', 'ENFP': 'Good Match'},
    'INTP': { 'ENFJ': 'Ideal Match', 'INTJ': 'Good Match', 'ENTP': 'Good Match'},
    'ESTP': { 'ISFJ': 'Ideal Match', 'ISTP': 'Good Match', 'ESFP': 'Good Match'},
    'ESFP': { 'ISTJ': 'Ideal Match', 'ISFP': 'Good Match', 'ESTP': 'Good Match'},
    'ENFP': { 'INTJ': 'Ideal Match', 'INFP': 'Good Match', 'ENTP': 'Good Match'},
    'ENTP': { 'INFJ': 'Ideal Match', 'INTP': 'Good Match', 'ENFP': 'Good Match'},
    'ESTJ': { 'ISFP': 'Ideal Match', 'ISTJ': 'Good Match', 'ESFJ': 'Good Match'},
    'ESFJ': { 'ISTP': 'Ideal Match', 'ISFJ': 'Good Match', 'ESTJ': 'Good Match'},
    'ENFJ': { 'ISFP': 'Ideal Match', 'INFP': 'Good Match', 'ENFP': 'Good Match'},
    'ENTJ': { 'INFP': 'Ideal Match', 'INTJ': 'Good Match', 'ENTP': 'Good Match'}
};

// ====== Korean Hangul Stroke Data ======
const koreanChosung = {
    'ㄱ': 2, 'ㄲ': 4, 'ㄴ': 2, 'ㄷ': 3, 'ㄸ': 6,
    'ㄹ': 5, 'ㅁ': 4, 'ㅂ': 4, 'ㅃ': 8, 'ㅅ': 2,
    'ㅆ': 4, 'ㅇ': 1, 'ㅈ': 3, 'ㅉ': 6, 'ㅊ': 4,
    'ㅋ': 3, 'ㅌ': 4, 'ㅍ': 4, 'ㅎ': 3
};

const koreanJungsung = {
    'ㅏ': 2, 'ㅐ': 3, 'ㅑ': 3, 'ㅒ': 4, 'ㅓ': 2,
    'ㅔ': 3, 'ㅕ': 3, 'ㅖ': 4, 'ㅗ': 2, 'ㅘ': 4,
    'ㅙ': 5, 'ㅚ': 3, 'ㅛ': 3, 'ㅜ': 2, 'ㅝ': 4,
    'ㅞ': 5, 'ㅟ': 3, 'ㅠ': 3, 'ㅡ': 1, 'ㅢ': 2, 'ㅣ': 1
};

const koreanJongsung = {
    '': 0, 'ㄱ': 2, 'ㄲ': 4, 'ㄳ': 4, 'ㄴ': 2,
    'ㄵ': 5, 'ㄶ': 5, 'ㄷ': 3, 'ㄹ': 5, 'ㄺ': 7,
    'ㄻ': 9, 'ㄼ': 9, 'ㄽ': 7, 'ㄾ': 9, 'ㄿ': 9,
    'ㅀ': 8, 'ㅁ': 4, 'ㅂ': 4, 'ㅄ': 6, 'ㅅ': 2,
    'ㅆ': 4, 'ㅇ': 1, 'ㅈ': 3, 'ㅊ': 4, 'ㅋ': 3,
    'ㅌ': 4, 'ㅍ': 4, 'ㅎ': 3
};

const chosungList = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const jungsungList = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
const jongsungList = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

// ====== Japanese Hiragana/Katakana Stroke Data ======
const japaneseKana = {
    // Hiragana
    'あ': 3, 'い': 2, 'う': 2, 'え': 2, 'お': 3,
    'か': 3, 'き': 4, 'く': 1, 'け': 3, 'こ': 2,
    'さ': 3, 'し': 1, 'す': 2, 'せ': 3, 'そ': 1,
    'た': 4, 'ち': 2, 'つ': 1, 'て': 1, 'と': 2,
    'な': 4, 'に': 3, 'ぬ': 2, 'ね': 2, 'の': 1,
    'は': 3, 'ひ': 1, 'ふ': 4, 'へ': 1, 'ほ': 4,
    'ま': 3, 'み': 2, 'む': 3, 'め': 2, 'も': 3,
    'や': 3, 'ゆ': 2, 'よ': 2,
    'ら': 2, 'り': 2, 'る': 1, 'れ': 2, 'ろ': 1,
    'わ': 2, 'を': 3, 'ん': 1,
    'が': 5, 'ぎ': 6, 'ぐ': 3, 'げ': 5, 'ご': 4,
    'ざ': 5, 'じ': 3, 'ず': 4, 'ぜ': 5, 'ぞ': 3,
    'だ': 6, 'ぢ': 4, 'づ': 3, 'で': 3, 'ど': 4,
    'ば': 5, 'び': 3, 'ぶ': 6, 'べ': 3, 'ぼ': 6,
    'ぱ': 4, 'ぴ': 2, 'ぷ': 5, 'ぺ': 2, 'ぽ': 5,
    // Katakana
    'ア': 2, 'イ': 2, 'ウ': 3, 'エ': 3, 'オ': 3,
    'カ': 2, 'キ': 3, 'ク': 2, 'ケ': 3, 'コ': 2,
    'サ': 3, 'シ': 3, 'ス': 2, 'セ': 2, 'ソ': 2,
    'タ': 3, 'チ': 3, 'ツ': 3, 'テ': 3, 'ト': 2,
    'ナ': 2, 'ニ': 2, 'ヌ': 2, 'ネ': 4, 'ノ': 1,
    'ハ': 2, 'ヒ': 2, 'フ': 1, 'ヘ': 1, 'ホ': 4,
    'マ': 2, 'ミ': 3, 'ム': 2, 'メ': 2, 'モ': 3,
    'ヤ': 2, 'ユ': 2, 'ヨ': 3,
    'ラ': 2, 'リ': 2, 'ル': 2, 'レ': 1, 'ロ': 3,
    'ワ': 2, 'ヲ': 3, 'ン': 2,
    'ガ': 4, 'ギ': 5, 'グ': 4, 'ゲ': 5, 'ゴ': 4,
    'ザ': 5, 'ジ': 5, 'ズ': 4, 'ゼ': 4, 'ゾ': 4,
    'ダ': 5, 'ヂ': 5, 'ヅ': 5, 'デ': 5, 'ド': 4,
    'バ': 4, 'ビ': 4, 'ブ': 3, 'ベ': 3, 'ボ': 6,
    'パ': 3, 'ピ': 3, 'プ': 2, 'ペ': 2, 'ポ': 5
};

// ====== Common CJK Kanji/Hanzi Stroke Data ======
const kanjiStrokes = {
    // Numbers
    '一': 1, '二': 2, '三': 3, '四': 5, '五': 4, '六': 4, '七': 2, '八': 2, '九': 2, '十': 2,
    '百': 6, '千': 3, '万': 3,
    // Common names characters - Japanese
    '山': 3, '川': 3, '田': 5, '中': 4, '大': 3, '小': 3, '上': 3, '下': 3, '木': 4, '林': 8,
    '森': 12, '村': 7, '本': 5, '日': 4, '月': 4, '火': 4, '水': 4, '金': 8, '土': 3,
    '太': 4, '郎': 9, '子': 3, '男': 7, '女': 3, '美': 9, '花': 7, '雪': 11, '風': 9,
    '光': 6, '明': 8, '暗': 13, '春': 9, '夏': 10, '秋': 9, '冬': 5,
    '東': 8, '西': 6, '南': 9, '北': 5, '右': 5, '左': 5,
    '高': 10, '長': 8, '広': 5, '新': 13, '古': 5, '若': 8, '老': 6,
    '父': 4, '母': 5, '兄': 5, '弟': 7, '姉': 8, '妹': 8,
    '愛': 13, '恋': 10, '心': 4, '夢': 13, '希': 7, '望': 11,
    '幸': 8, '福': 13, '喜': 12, '楽': 13,
    '天': 4, '地': 6, '空': 8, '海': 9, '星': 9, '雲': 12,
    '桜': 10, '梅': 10, '竹': 6, '松': 8, '菊': 11,
    '鳥': 11, '魚': 11, '犬': 4, '猫': 11, '馬': 10, '龍': 16, '虎': 8,
    '石': 5, '玉': 5, '鉄': 13, '銀': 14, '銅': 14,
    '王': 4, '皇': 9, '帝': 9, '神': 9, '仏': 4,
    '国': 8, '城': 9, '京': 8, '都': 11, '市': 5, '町': 7,
    '道': 12, '路': 13, '橋': 16, '門': 8,
    '手': 4, '足': 7, '目': 5, '耳': 6, '口': 3, '鼻': 14, '顔': 18,
    '頭': 16, '首': 9, '肩': 8, '腕': 12, '指': 9,
    '人': 2, '友': 4, '仲': 6,
    '生': 5, '死': 6, '命': 8, '運': 12,
    '食': 9, '飲': 12, '住': 7, '着': 12,
    '見': 7, '聞': 14, '言': 7, '話': 13, '読': 14, '書': 10, '思': 9,
    '知': 8, '学': 8, '教': 11,
    '正': 5, '直': 8, '真': 10,
    '強': 11, '弱': 10, '勇': 9,
    '白': 5, '黒': 11, '赤': 7, '青': 8, '黄': 11, '緑': 14,
    '健': 11, '康': 11, '病': 10,
    '平': 5, '和': 8, '安': 6, '全': 6, '危': 6,
    '始': 8, '終': 11, '初': 7, '最': 12, '後': 9, '先': 6,
    '前': 9, '次': 6, '今': 4, '昔': 8,
    '年': 6, '歳': 13, '世': 5, '代': 5, '時': 10, '間': 12,
    '朝': 12, '昼': 9, '夜': 8, '夕': 3,
    '早': 6, '遅': 12, '速': 10, '急': 9,
    '多': 6, '少': 4, '半': 5, '全': 6,
    '内': 4, '外': 5, '中': 4, '央': 5,
    '同': 6, '別': 7, '他': 5, '自': 6,
    '合': 6, '分': 4, '切': 4, '折': 7,
    '立': 5, '座': 10, '寝': 13, '起': 10,
    '走': 7, '歩': 8, '止': 4, '動': 11,
    '飛': 9, '泳': 8, '登': 12, '落': 12,
    '持': 9, '取': 8, '入': 2, '出': 5, '開': 12, '閉': 11,
    '売': 7, '買': 12, '送': 9, '届': 8,
    '作': 7, '造': 10, '建': 9, '壊': 16,
    '使': 8, '働': 13, '休': 6, '遊': 12,
    '勝': 12, '負': 9, '戦': 13, '争': 6,
    '助': 7, '守': 6, '救': 11, '護': 20,
    '育': 8, '成': 6, '長': 8, '伸': 7,
    '増': 14, '減': 12, '変': 9, '化': 4,
    '良': 7, '悪': 11, '善': 12, '優': 17,
    '深': 11, '浅': 9, '厚': 9, '薄': 16,
    '重': 9, '軽': 12, '固': 8, '柔': 9,
    '熱': 15, '冷': 7, '温': 12, '涼': 11,
    '乾': 11, '湿': 12, '濡': 17, '渇': 11,
    '明': 8, '暗': 13, '清': 11, '汚': 6,
    '静': 14, '騒': 18, '穏': 16, '激': 16,
    '細': 11, '太': 4, '丸': 3, '角': 7,
    '曲': 6, '直': 8, '斜': 11, '横': 15, '縦': 16,
    '遠': 13, '近': 7, '距': 12, '離': 18,
    '表': 8, '裏': 13, '面': 9, '側': 11,
    '端': 14, '境': 14, '界': 9, '限': 9,
    '例': 8, '則': 9, '規': 11, '法': 8,
    '論': 15, '理': 11, '由': 5, '因': 6,
    '問': 11, '答': 12, '質': 15, '疑': 14,
    '意': 13, '味': 8, '義': 13, '価': 8, '値': 10,
    '形': 7, '状': 7, '態': 14, '様': 14, '式': 6,
    '種': 14, '類': 18, '型': 9, '品': 9,
    '名': 6, '称': 10, '号': 5, '番': 12,
    '点': 9, '線': 15, '円': 4, '球': 11,
    '面': 9, '体': 7, '物': 8, '事': 8,
    '力': 2, '能': 10, '才': 3, '技': 7, '術': 11,
    '業': 13, '職': 18, '役': 7, '任': 6, '務': 11,
    '権': 15, '利': 7, '益': 10, '害': 10, '損': 13,
    '得': 11, '失': 5, '過': 12, '誤': 14,
    '許': 11, '認': 14, '否': 7, '禁': 13,
    '要': 9, '必': 5, '須': 12, '需': 14,
    '供': 8, '給': 12, '足': 7, '満': 12,
    '備': 12, '準': 13, '整': 16, '完': 7,
    '普': 12, '通': 10, '特': 10, '別': 7, '異': 11,
    '共': 6, '個': 10, '各': 6, '両': 6, '単': 9,
    '複': 14, '簡': 18, '難': 18, '易': 8,
    '実': 8, '虚': 11, '偽': 11, '誠': 13, '嘘': 14,
    '信': 9, '頼': 16, '疑': 14, '惑': 12,
    '期': 12, '待': 9, '予': 4, '定': 8, '約': 9,
    '計': 9, '測': 12, '量': 12, '数': 13,
    '算': 14, '積': 16, '和': 8, '差': 10, '商': 11,
    '等': 12, '級': 9, '位': 7, '階': 12, '段': 9,
    '系': 7, '統': 12, '連': 10, '続': 13, '断': 11,
    '絶': 12, '対': 7, '比': 4, '較': 13, '関': 14, '係': 9,
    '影': 15, '響': 20, '効': 8, '果': 8, '結': 12,
    '象': 12, '印': 6, '記': 10, '憶': 16, '忘': 7,
    '感': 13, '情': 11, '想': 13, '念': 8,
    '望': 11, '願': 19, '祈': 8, '祝': 9,
    '謝': 17, '礼': 5, '恩': 10, '返': 7,
    '悲': 12, '泣': 8, '涙': 10, '苦': 8,
    '痛': 12, '傷': 13, '怪': 8, '我': 7,
    '努': 7, '力': 2, '頑': 13, '張': 11,
    '挑': 9, '戦': 13, '冒': 9, '険': 11,
    '試': 13, '験': 18, '検': 12, '査': 9,
    '調': 15, '究': 7, '研': 9, '探': 11,
    '求': 7, '追': 9, '捕': 10, '逃': 9,
    '迷': 9, '困': 7, '悩': 10, '解': 13, '決': 7,
    '案': 10, '策': 12, '画': 8, '図': 7,
    '向': 6, '方': 4, '針': 10, '指': 9, '導': 15,
    '率': 11, '引': 4, '領': 14, '統': 12, '治': 8,
    '政': 9, '経': 11, '済': 11, '財': 10,
    '産': 11, '資': 13, '本': 5, '株': 10,
    '投': 7, '資': 13, '貸': 12, '借': 10,
    '払': 5, '収': 4, '支': 4, '配': 10,
    '費': 12, '税': 12, '込': 5, '預': 13,
    '銀': 14, '行': 6, '店': 8, '場': 12,
    '会': 6, '社': 7, '組': 11, '織': 18,
    '団': 6, '体': 7, '員': 10, '客': 9, '者': 8,
    '民': 5, '族': 11, '衆': 12, '公': 4, '私': 7,
    '官': 8, '軍': 9, '警': 19, '察': 14,
    '医': 7, '師': 10, '薬': 16, '院': 10,
    '科': 9, '専': 9, '門': 8, '家': 10,
    '士': 3, '師': 10, '員': 10, '長': 8,
    '室': 9, '課': 15, '部': 11, '局': 7,
    '省': 9, '庁': 5, '府': 8, '県': 9,
    '区': 4, '街': 12, '村': 7, '里': 7,
    '島': 10, '陸': 11, '港': 12, '空': 8,
    '駅': 14, '電': 13, '車': 7, '船': 11, '機': 16,
    '道': 12, '線': 15, '路': 13, '鉄': 13,
    '乗': 9, '降': 10, '運': 12, '転': 11,
    '交': 6, '通': 10, '信': 9, '報': 12,
    '届': 8, '届': 8, '届': 8,
    // Common Chinese names
    '张': 7, '王': 4, '李': 7, '刘': 6, '陈': 7, '杨': 7, '黄': 11, '赵': 9, '吴': 7, '周': 8,
    '徐': 10, '孙': 6, '马': 3, '朱': 6, '胡': 9, '郭': 10, '何': 7, '高': 10, '林': 8, '罗': 8,
    '郑': 8, '梁': 11, '谢': 12, '宋': 7, '唐': 10, '许': 6, '韩': 12, '冯': 5, '邓': 4, '曹': 11,
    '彭': 12, '曾': 12, '萧': 11, '田': 5, '董': 12, '袁': 10, '潘': 15, '于': 3, '蒋': 12, '蔡': 14,
    '余': 7, '杜': 7, '叶': 5, '程': 12, '苏': 7, '魏': 17, '吕': 6, '丁': 2, '任': 6, '沈': 7,
    '姚': 9, '卢': 5, '姜': 9, '崔': 11, '钟': 9, '谭': 14, '陆': 7, '汪': 7, '范': 8, '金': 8,
    '石': 5, '廖': 14, '贾': 10, '夏': 10, '韦': 4, '付': 5, '方': 4, '白': 5, '邹': 7, '孟': 8,
    '熊': 14, '秦': 10, '邱': 7, '江': 6, '尹': 4, '薛': 16, '闫': 6, '段': 9, '雷': 13, '侯': 9,
    '龙': 5, '史': 5, '陶': 10, '黎': 15, '贺': 9, '顾': 10, '毛': 4, '郝': 9, '龚': 11, '邵': 7,
    '万': 3, '钱': 10, '严': 7, '覃': 12, '武': 8, '戴': 17, '莫': 10, '孔': 4, '向': 6, '汤': 6,
    // Common given name characters
    '伟': 6, '芳': 7, '娜': 9, '秀': 7, '英': 8, '敏': 11, '强': 11, '磊': 15, '洋': 9, '勇': 9,
    '艳': 10, '杰': 8, '娟': 10, '涛': 10, '明': 8, '超': 12, '丽': 7, '华': 6, '军': 6, '静': 14,
    '霞': 17, '平': 5, '刚': 6, '辉': 12, '玲': 9, '桂': 10, '兰': 5, '文': 4, '建': 8, '云': 4,
    '莉': 10, '斌': 11, '宏': 7, '鹏': 13, '浩': 10, '凯': 8, '俊': 9, '飞': 3, '旭': 6, '雪': 11,
    '婷': 12, '慧': 15, '博': 12, '琳': 12, '萍': 11, '鑫': 24, '燕': 16, '佳': 8, '阳': 6, '帅': 5,
    '琴': 12, '波': 8, '欣': 8, '宁': 5, '冰': 6, '怡': 8, '晶': 12, '蕾': 16, '淑': 11, '瑶': 14,
    '蓉': 13, '红': 6, '梅': 11, '琦': 12, '璐': 17, '瑜': 13, '薇': 16, '璇': 15, '岚': 7, '颖': 13,
    '翠': 14, '彤': 7, '妍': 7, '倩': 10, '晓': 10, '琪': 12, '璧': 18, '珊': 9, '珍': 9, '婉': 11,
    '琼': 12, '凤': 4, '瑛': 12, '露': 21, '彩': 11, '茜': 9, '蕊': 15, '菲': 11, '莹': 10, '蝶': 15
};

// ====== Russian Cyrillic Numerology ======
const russianNumerology = {
    'А': 1, 'Б': 2, 'В': 3, 'Г': 4, 'Д': 5, 'Е': 6, 'Ё': 7, 'Ж': 8, 'З': 9,
    'И': 1, 'Й': 2, 'К': 3, 'Л': 4, 'М': 5, 'Н': 6, 'О': 7, 'П': 8, 'Р': 9,
    'С': 1, 'Т': 2, 'У': 3, 'Ф': 4, 'Х': 5, 'Ц': 6, 'Ч': 7, 'Ш': 8, 'Щ': 9,
    'Ъ': 1, 'Ы': 2, 'Ь': 3, 'Э': 4, 'Ю': 5, 'Я': 6,
    'а': 1, 'б': 2, 'в': 3, 'г': 4, 'д': 5, 'е': 6, 'ё': 7, 'ж': 8, 'з': 9,
    'и': 1, 'й': 2, 'к': 3, 'л': 4, 'м': 5, 'н': 6, 'о': 7, 'п': 8, 'р': 9,
    'с': 1, 'т': 2, 'у': 3, 'ф': 4, 'х': 5, 'ц': 6, 'ч': 7, 'ш': 8, 'щ': 9,
    'ъ': 1, 'ы': 2, 'ь': 3, 'э': 4, 'ю': 5, 'я': 6
};

// ====== Latin Alphabet Numerology ======
const latinNumerology = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
    'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8,
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9,
    'j': 1, 'k': 2, 'l': 3, 'm': 4, 'n': 5, 'o': 6, 'p': 7, 'q': 8, 'r': 9,
    's': 1, 't': 2, 'u': 3, 'v': 4, 'w': 5, 'x': 6, 'y': 7, 'z': 8
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
            for (const k2 of keys) {
                value = value[k2];
            }
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
    document.querySelectorAll('[placeholder]').forEach(el => {
        const key = el.getAttribute('placeholder');
        el.setAttribute('placeholder', t(key));
    });
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

// ====== Language Selector ======
function initLanguageSelector() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

    document.documentElement.lang = lang;
    updateTranslations();
}

// ====== Character Type Detection ======
function isKorean(char) {
    const code = char.charCodeAt(0);
    return (code >= 0xAC00 && code <= 0xD7A3) || // Hangul syllables
           (code >= 0x1100 && code <= 0x11FF) || // Hangul Jamo
           (code >= 0x3130 && code <= 0x318F);   // Hangul Compatibility Jamo
}

function isJapanese(char) {
    const code = char.charCodeAt(0);
    return (code >= 0x3040 && code <= 0x309F) || // Hiragana
           (code >= 0x30A0 && code <= 0x30FF);   // Katakana
}

function isCJK(char) {
    const code = char.charCodeAt(0);
    return (code >= 0x4E00 && code <= 0x9FFF) || // CJK Unified Ideographs
           (code >= 0x3400 && code <= 0x4DBF) || // CJK Extension A
           (code >= 0x20000 && code <= 0x2A6DF); // CJK Extension B
}

function isRussian(char) {
    const code = char.charCodeAt(0);
    return (code >= 0x0400 && code <= 0x04FF); // Cyrillic
}

function isLatin(char) {
    const code = char.charCodeAt(0);
    return (code >= 0x0041 && code <= 0x005A) || // A-Z
           (code >= 0x0061 && code <= 0x007A);   // a-z
}

// ====== Korean Hangul Decomposition ======
function decomposeKorean(char) {
    const code = char.charCodeAt(0) - 0xAC00;
    if (code < 0 || code > 11171) return null;

    const chosungIndex = Math.floor(code / 588);
    const jungsungIndex = Math.floor((code % 588) / 28);
    const jongsungIndex = code % 28;

    return {
        chosung: chosungList[chosungIndex],
        jungsung: jungsungList[jungsungIndex],
        jongsung: jongsungList[jongsungIndex]
    };
}

// ====== Get Character Stroke Count ======
function getCharacterStrokes(char) {
    // Korean
    if (isKorean(char)) {
        const decomposed = decomposeKorean(char);
        if (decomposed) {
            const chosungStrokes = koreanChosung[decomposed.chosung] || 0;
            const jungsungStrokes = koreanJungsung[decomposed.jungsung] || 0;
            const jongsungStrokes = koreanJongsung[decomposed.jongsung] || 0;
            return chosungStrokes + jungsungStrokes + jongsungStrokes;
        }
        return 0;
    }

    // Japanese Kana
    if (isJapanese(char)) {
        return japaneseKana[char] || 3; // Default 3 strokes for unknown kana
    }

    // CJK (Kanji/Hanzi)
    if (isCJK(char)) {
        return kanjiStrokes[char] || estimateKanjiStrokes(char);
    }

    // Russian
    if (isRussian(char)) {
        return russianNumerology[char] || 5;
    }

    // Latin
    if (isLatin(char)) {
        return latinNumerology[char] || 5;
    }

    return 0;
}

// Estimate strokes for unknown Kanji based on Unicode position
function estimateKanjiStrokes(char) {
    const code = char.charCodeAt(0);
    // Simple estimation: map Unicode range to stroke count 1-20
    const normalized = (code - 0x4E00) / (0x9FFF - 0x4E00);
    return Math.floor(normalized * 19) + 1;
}

// ====== Get Name Strokes Array ======
function getNameStrokes(name) {
    const strokes = [];
    for (const char of name) {
        const strokeCount = getCharacterStrokes(char);
        if (strokeCount > 0) {
            strokes.push(strokeCount);
        }
    }
    return strokes;
}

// ====== Name Compatibility Calculation ======
function initNameCompatibility() {
    document.getElementById('calculate-name-compatibility').addEventListener('click', calculateNameCompatibility);
}

function calculateNameCompatibility() {
    const name1 = document.getElementById('your-name').value.trim();
    const name2 = document.getElementById('partner-name').value.trim();

    if (!name1 || !name2) {
        alert(t('name.alert'));
        return;
    }

    // Get character arrays (only meaningful characters)
    const chars1 = [...name1].filter(c => getCharacterStrokes(c) > 0);
    const chars2 = [...name2].filter(c => getCharacterStrokes(c) > 0);

    if (chars1.length === 0 || chars2.length === 0) {
        alert(t('name.alert'));
        return;
    }

    // Interleave characters: A1, B1, A2, B2, A3, B3...
    const interleaved = [];
    const maxLen = Math.max(chars1.length, chars2.length);
    for (let i = 0; i < maxLen; i++) {
        if (i < chars1.length) interleaved.push(chars1[i]);
        if (i < chars2.length) interleaved.push(chars2[i]);
    }

    // Get strokes for each interleaved character
    const strokes = interleaved.map(c => getCharacterStrokes(c));

    // Show animation
    showCalculationAnimation(interleaved, strokes, (finalScore) => {
        displayNameResult(finalScore);
    });
}

function showCalculationAnimation(chars, strokes, callback) {
    const result = document.getElementById('name-result');
    result.classList.remove('hidden');
    result.innerHTML = `
        <div class="calculation-animation">
            <div class="calc-title">${t('name.calculating') || 'Calculating...'}</div>
            <div class="calc-steps"></div>
        </div>
    `;

    const stepsContainer = result.querySelector('.calc-steps');
    let currentStrokes = [...strokes];
    const allSteps = [[...currentStrokes]];

    // Pre-calculate all steps
    while (currentStrokes.length > 2) {
        const nextStrokes = [];
        for (let i = 0; i < currentStrokes.length - 1; i++) {
            nextStrokes.push((currentStrokes[i] + currentStrokes[i + 1]) % 10);
        }
        currentStrokes = nextStrokes;
        allSteps.push([...currentStrokes]);
    }

    const finalScore = parseInt(currentStrokes.join(''));

    // Animate steps
    let stepIndex = 0;

    function showStep() {
        if (stepIndex >= allSteps.length) {
            setTimeout(() => callback(finalScore), 500);
            return;
        }

        const stepData = allSteps[stepIndex];
        const stepRow = document.createElement('div');
        stepRow.className = 'calc-step-row';

        if (stepIndex === 0) {
            // First row: show characters with strokes
            stepRow.innerHTML = chars.map((c, i) =>
                `<div class="calc-cell">
                    <span class="calc-char">${c}</span>
                    <span class="calc-stroke">${strokes[i]}</span>
                </div>`
            ).join('');
        } else {
            // Subsequent rows: show only numbers
            stepRow.innerHTML = stepData.map(s =>
                `<div class="calc-cell">
                    <span class="calc-number">${s}</span>
                </div>`
            ).join('');
        }

        stepsContainer.appendChild(stepRow);

        // Animate entry
        requestAnimationFrame(() => {
            stepRow.classList.add('visible');
        });

        stepIndex++;
        setTimeout(showStep, stepIndex === 1 ? 800 : 400);
    }

    showStep();
}

function displayNameResult(score) {
    const result = document.getElementById('name-result');

    let readingKey;
    if (score >= 90) readingKey = 'excellent';
    else if (score >= 75) readingKey = 'good';
    else if (score >= 60) readingKey = 'average';
    else if (score >= 40) readingKey = 'challenging';
    else readingKey = 'difficult';

    result.innerHTML = `
        <div class="compatibility-visual">
            <div class="compat-heart pulse-animation">
                <span class="compat-score">${score}%</span>
            </div>
        </div>
        <p class="compat-reading">${t(`name.readings.${readingKey}`)}</p>
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
        alert(t('bloodType.alert'));
        return;
    }

    const reading = bloodTypeCompatibility[type1][type2];

    const result = document.getElementById('blood-type-result');
    result.classList.remove('hidden');

    document.getElementById('blood-type-compat-reading').textContent = reading;

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
        alert(t('mbti.alert'));
        return;
    }

    const reading = mbtiCompatibility[mbti1][mbti2] || 'An interesting combination. Explore your dynamic!';

    const result = document.getElementById('mbti-result');
    result.classList.remove('hidden');

    document.getElementById('mbti-compat-reading').textContent = reading;

    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


// ====== Initialize App ======
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLanguageSelector();
    initNameCompatibility();
    initBloodTypeCompatibility();
    initMbtiCompatibility();

    const browserLang = navigator.language.split('-')[0];
    if (availableLangs.includes(browserLang)) {
        setLanguage(browserLang);
    } else {
        setLanguage('en');
    }
});
