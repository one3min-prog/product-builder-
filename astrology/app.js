
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

// ====== Name Compatibility ======
function initNameCompatibility() {
    document.getElementById('calculate-name-compatibility').addEventListener('click', calculateNameCompatibility);
}

function calculateNameCompatibility() {
    const name1 = document.getElementById('your-name').value;
    const name2 = document.getElementById('partner-name').value;

    if (!name1 || !name2) {
        alert(t('name.alert'));
        return;
    }

    const strokes = [3, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1];
    const charCodeA = 'A'.charCodeAt(0);

    function getStrokes(name) {
        return name.toUpperCase().split('').map(char => {
            const charCode = char.charCodeAt(0);
            if (charCode >= charCodeA && charCode <= 'Z'.charCodeAt(0)) {
                return strokes[charCode - charCodeA];
            }
            return 0;
        });
    }

    const strokes1 = getStrokes(name1);
    const strokes2 = getStrokes(name2);

    let combinedStrokes = [];
    const maxLength = Math.max(strokes1.length, strokes2.length);

    for (let i = 0; i < maxLength; i++) {
        if (strokes1[i]) combinedStrokes.push(strokes1[i]);
        if (strokes2[i]) combinedStrokes.push(strokes2[i]);
    }

    while (combinedStrokes.length > 2) {
        let nextStrokes = [];
        for (let i = 0; i < combinedStrokes.length - 1; i++) {
            nextStrokes.push((combinedStrokes[i] + combinedStrokes[i + 1]) % 10);
        }
        combinedStrokes = nextStrokes;
    }

    const score = parseInt(combinedStrokes.join(''));

    const result = document.getElementById('name-result');
    result.classList.remove('hidden');

    document.getElementById('name-compat-score').textContent = score + '%';

    let readingKey;
    if (score >= 90) readingKey = 'excellent';
    else if (score >= 75) readingKey = 'good';
    else if (score >= 60) readingKey = 'average';
    else if (score >= 40) readingKey = 'challenging';
    else readingKey = 'difficult';

    document.getElementById('name-compat-reading').textContent = t(`name.readings.${readingKey}`);

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
