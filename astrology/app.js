// ====== App State ======
let currentLang = 'en';
let currentSection = 'horoscope';

// ====== Zodiac Data ======
const zodiacSigns = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
                     'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];

const zodiacSymbols = {
    aries: '♈', taurus: '♉', gemini: '♊', cancer: '♋',
    leo: '♌', virgo: '♍', libra: '♎', scorpio: '♏',
    sagittarius: '♐', capricorn: '♑', aquarius: '♒', pisces: '♓'
};

const zodiacDates = [
    { sign: 'capricorn', start: [1, 1], end: [1, 19] },
    { sign: 'aquarius', start: [1, 20], end: [2, 18] },
    { sign: 'pisces', start: [2, 19], end: [3, 20] },
    { sign: 'aries', start: [3, 21], end: [4, 19] },
    { sign: 'taurus', start: [4, 20], end: [5, 20] },
    { sign: 'gemini', start: [5, 21], end: [6, 20] },
    { sign: 'cancer', start: [6, 21], end: [7, 22] },
    { sign: 'leo', start: [7, 23], end: [8, 22] },
    { sign: 'virgo', start: [8, 23], end: [9, 22] },
    { sign: 'libra', start: [9, 23], end: [10, 22] },
    { sign: 'scorpio', start: [10, 23], end: [11, 21] },
    { sign: 'sagittarius', start: [11, 22], end: [12, 21] },
    { sign: 'capricorn', start: [12, 22], end: [12, 31] }
];

const zodiacElements = {
    aries: 'fire', leo: 'fire', sagittarius: 'fire',
    taurus: 'earth', virgo: 'earth', capricorn: 'earth',
    gemini: 'air', libra: 'air', aquarius: 'air',
    cancer: 'water', scorpio: 'water', pisces: 'water'
};

const colors = ['red', 'blue', 'green', 'gold', 'silver', 'purple', 'white', 'black', 'orange', 'pink'];

const tarotCardKeys = ['fool', 'magician', 'priestess', 'empress', 'emperor', 'hierophant',
                       'lovers', 'chariot', 'strength', 'hermit', 'wheel', 'justice',
                       'hanged', 'death', 'temperance', 'devil', 'tower', 'star',
                       'moon', 'sun', 'judgement', 'world'];

const tarotSymbols = {
    fool: '🌟', magician: '✨', priestess: '🌙', empress: '🌸',
    emperor: '👑', hierophant: '📿', lovers: '💕', chariot: '⚡',
    strength: '🦁', hermit: '🏔️', wheel: '☯️', justice: '⚖️',
    hanged: '🔮', death: '🦋', temperance: '🌊', devil: '🔥',
    tower: '⛈️', star: '⭐', moon: '🌑', sun: '☀️',
    judgement: '🎺', world: '🌍'
};

const tarotNumerals = {
    fool: '0', magician: 'I', priestess: 'II', empress: 'III',
    emperor: 'IV', hierophant: 'V', lovers: 'VI', chariot: 'VII',
    strength: 'VIII', hermit: 'IX', wheel: 'X', justice: 'XI',
    hanged: 'XII', death: 'XIII', temperance: 'XIV', devil: 'XV',
    tower: 'XVI', star: 'XVII', moon: 'XVIII', sun: 'XIX',
    judgement: 'XX', world: 'XXI'
};

// Compatibility matrix (simplified)
const compatibilityMatrix = {
    fire: { fire: 85, earth: 50, air: 90, water: 45 },
    earth: { fire: 50, earth: 80, air: 55, water: 85 },
    air: { fire: 90, earth: 55, air: 75, water: 60 },
    water: { fire: 45, earth: 85, air: 60, water: 90 }
};

// ====== Translation Functions ======
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            // Fallback to English
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

    // Update select options
    document.querySelectorAll('select option[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
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

// ====== Daily Horoscope ======
function initHoroscope() {
    document.querySelectorAll('.zodiac-card').forEach(card => {
        card.addEventListener('click', () => {
            const sign = card.getAttribute('data-sign');
            showHoroscope(sign);

            document.querySelectorAll('.zodiac-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
    });
}

function showHoroscope(sign) {
    const result = document.getElementById('horoscope-result');
    result.classList.remove('hidden');

    document.getElementById('result-symbol').textContent = zodiacSymbols[sign];
    document.getElementById('result-sign').textContent = t(`zodiac.${sign}`);

    // Generate pseudo-random stats based on date and sign
    const today = new Date();
    const seed = today.getDate() + zodiacSigns.indexOf(sign);

    const love = 50 + seededRandom(seed * 1) * 50;
    const career = 50 + seededRandom(seed * 2) * 50;
    const health = 50 + seededRandom(seed * 3) * 50;
    const luck = 50 + seededRandom(seed * 4) * 50;

    animateStat('love-stat', love);
    animateStat('career-stat', career);
    animateStat('health-stat', health);
    animateStat('luck-stat', luck);

    // Get horoscope text
    document.getElementById('horoscope-text').textContent = t(`horoscopes.${sign}`);

    // Lucky items
    const luckyNum = Math.floor(seededRandom(seed * 5) * 99) + 1;
    const luckyColorKey = colors[Math.floor(seededRandom(seed * 6) * colors.length)];

    document.getElementById('lucky-number').textContent = luckyNum;
    document.getElementById('lucky-color').textContent = t(`colors.${luckyColorKey}`);

    // Scroll to result
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function animateStat(elementId, value) {
    const el = document.getElementById(elementId);
    el.style.width = '0%';
    setTimeout(() => {
        el.style.width = value + '%';
    }, 100);
}

function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// ====== Birth Chart ======
function initBirthChart() {
    document.getElementById('generate-chart').addEventListener('click', generateBirthChart);
}

function generateBirthChart() {
    const dateInput = document.getElementById('birth-date').value;
    if (!dateInput) {
        alert('Please enter your birth date');
        return;
    }

    const date = new Date(dateInput);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // Calculate sun sign
    const sunSign = getZodiacSign(month, day);
    const element = zodiacElements[sunSign];

    // Pseudo moon and rising (simplified)
    const seed = date.getTime();
    const moonIndex = Math.floor(seededRandom(seed) * 12);
    const risingIndex = Math.floor(seededRandom(seed * 2) * 12);

    const moonSign = zodiacSigns[moonIndex];
    const risingSign = zodiacSigns[risingIndex];

    // Display result
    const result = document.getElementById('birthchart-result');
    result.classList.remove('hidden');

    document.getElementById('sun-sign-symbol').textContent = zodiacSymbols[sunSign];
    document.getElementById('sun-sign').textContent = t(`zodiac.${sunSign}`);
    document.getElementById('moon-sign').textContent = t(`zodiac.${moonSign}`);
    document.getElementById('rising-sign').textContent = t(`zodiac.${risingSign}`);
    document.getElementById('element').textContent = t(`elements.${element}`);

    document.getElementById('chart-reading').textContent = t(`chartReadings.${element}`);

    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function getZodiacSign(month, day) {
    for (const { sign, start, end } of zodiacDates) {
        if ((month === start[0] && day >= start[1]) ||
            (month === end[0] && day <= end[1])) {
            return sign;
        }
    }
    return 'capricorn';
}

// ====== Compatibility ======
function initCompatibility() {
    document.getElementById('check-compatibility').addEventListener('click', checkCompatibility);
}

function checkCompatibility() {
    const sign1 = document.getElementById('sign1').value;
    const sign2 = document.getElementById('sign2').value;

    if (!sign1 || !sign2) {
        alert('Please select both signs');
        return;
    }

    const element1 = zodiacElements[sign1];
    const element2 = zodiacElements[sign2];

    const baseScore = compatibilityMatrix[element1][element2];

    // Add some variance
    const variance = Math.floor(seededRandom(sign1.length + sign2.length) * 15);
    const score = Math.min(100, baseScore + variance);

    const result = document.getElementById('compatibility-result');
    result.classList.remove('hidden');

    document.getElementById('compat-sign1').textContent = zodiacSymbols[sign1];
    document.getElementById('compat-sign2').textContent = zodiacSymbols[sign2];
    document.getElementById('compat-score').textContent = score + '%';

    // Bar animations
    const romance = score + Math.floor(seededRandom(score * 1) * 20) - 10;
    const friendship = score + Math.floor(seededRandom(score * 2) * 20) - 10;
    const communication = score + Math.floor(seededRandom(score * 3) * 20) - 10;

    setTimeout(() => {
        document.getElementById('romance-bar').style.width = Math.min(100, Math.max(20, romance)) + '%';
        document.getElementById('friendship-bar').style.width = Math.min(100, Math.max(20, friendship)) + '%';
        document.getElementById('communication-bar').style.width = Math.min(100, Math.max(20, communication)) + '%';
    }, 100);

    // Reading text
    let readingKey;
    if (score >= 85) readingKey = 'excellent';
    else if (score >= 70) readingKey = 'good';
    else if (score >= 55) readingKey = 'moderate';
    else readingKey = 'challenging';

    document.getElementById('compat-reading').textContent = t(`compatibilityReadings.${readingKey}`);

    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ====== Tarot ======
function initTarot() {
    const deck = document.getElementById('tarot-deck');
    const drawBtn = document.getElementById('draw-tarot');

    deck.addEventListener('click', drawTarotCard);
    drawBtn.addEventListener('click', drawTarotCard);
}

function drawTarotCard() {
    const result = document.getElementById('tarot-result');

    // Animation
    const deck = document.getElementById('tarot-deck');
    deck.style.transform = 'rotateY(180deg)';

    setTimeout(() => {
        // Random card
        const cardKey = tarotCardKeys[Math.floor(Math.random() * tarotCardKeys.length)];
        const card = t(`tarotCards.${cardKey}`);

        document.getElementById('tarot-numeral').textContent = tarotNumerals[cardKey];
        document.getElementById('tarot-symbol').textContent = tarotSymbols[cardKey];
        document.getElementById('tarot-name').textContent = card.name;
        document.getElementById('tarot-title').textContent = card.name;
        document.getElementById('tarot-reading').textContent = card.meaning;
        document.getElementById('tarot-keywords').textContent = card.keywords;

        result.classList.remove('hidden');
        deck.style.transform = 'rotateY(0deg)';

        result.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
}

// ====== Initialize App ======
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLanguageSelector();
    initHoroscope();
    initBirthChart();
    initCompatibility();
    initTarot();

    // Set initial language based on browser
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
        setLanguage(browserLang);
    } else {
        setLanguage('en');
    }
});
