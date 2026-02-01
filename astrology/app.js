
// ====== App State ======
let currentLang = 'en';
let currentSection = 'name';

// ====== Language Data ======
const availableLangs = ['en', 'ko', 'ja', 'zh', 'es', 'fr', 'de', 'ru', 'pt'];

// ====== Korean Stroke Data ======
const KOREAN_STROKE_MAP = {
    'ㄱ': 2, 'ㄲ': 4, 'ㄴ': 2, 'ㄷ': 3, 'ㄸ': 6, 'ㄹ': 5, 'ㅁ': 4, 'ㅂ': 4, 'ㅃ': 8, 'ㅅ': 2, 'ㅆ': 4,
    'ㅇ': 1, 'ㅈ': 3, 'ㅉ': 6, 'ㅊ': 4, 'ㅋ': 3, 'ㅌ': 4, 'ㅍ': 4, 'ㅎ': 3, 'ㅏ': 2, 'ㅐ': 3, 'ㅑ': 3,
    'ㅒ': 4, 'ㅓ': 2, 'ㅔ': 3, 'ㅕ': 3, 'ㅖ': 4, 'ㅗ': 2, 'ㅘ': 4, 'ㅙ': 5, 'ㅚ': 3, 'ㅛ': 3, 'ㅜ': 2,
    'ㅝ': 4, 'ㅞ': 5, 'ㅟ': 3, 'ㅠ': 3, 'ㅡ': 1, 'ㅢ': 2, 'ㅣ': 1
};

const KOREAN_CONSONANTS = {
    'ㄱ': 'ㄱ', 'ㄲ': 'ㄲ', 'ㄴ': 'ㄴ', 'ㄷ': 'ㄷ', 'ㄸ': 'ㄸ', 'ㄹ': 'ㄹ', 'ㅁ': 'ㅁ', 'ㅂ': 'ㅂ', 'ㅃ': 'ㅃ',
    'ㅅ': 'ㅅ', 'ㅆ': 'ㅆ', 'ㅇ': 'ㅇ', 'ㅈ': 'ㅈ', 'ㅉ': 'ㅉ', 'ㅊ': 'ㅊ', 'ㅋ': 'ㅋ', 'ㅌ': 'ㅌ', 'ㅍ': 'ㅍ', 'ㅎ': 'ㅎ'
};

const KOREAN_VOWELS = {
    'ㅏ': 'ㅏ', 'ㅐ': 'ㅐ', 'ㅑ': 'ㅑ', 'ㅒ': 'ㅒ', 'ㅓ': 'ㅓ', 'ㅔ': 'ㅔ', 'ㅕ': 'ㅕ', 'ㅖ': 'ㅖ', 'ㅗ': 'ㅗ', 'ㅘ': 'ㅘ',
    'ㅙ': 'ㅙ', 'ㅚ': 'ㅚ', 'ㅛ': 'ㅛ', 'ㅜ': 'ㅜ', 'ㅝ': 'ㅝ', 'ㅞ': 'ㅞ', 'ㅟ': 'ㅟ', 'ㅠ': 'ㅠ', 'ㅡ': 'ㅡ', 'ㅢ': 'ㅢ', 'ㅣ': 'ㅣ'
};

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
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            // Fallback to English if key not found in current language
            value = translations['en'];
            for (const k2 of keys) {
                if (value && value[k2] !== undefined) {
                    value = value[k2];
                } else {
                    return key; // Return the key if not found in English either
                }
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
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
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

function getKoreanStrokes(name) {
    const CHOSEONG = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const JUNGSEONG = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    const JONGSEONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    return name.split('').map(char => {
        if (char.match(/[가-힣]/)) {
            const charCode = char.charCodeAt(0) - 0xAC00;
            const choseongIndex = Math.floor(charCode / 588);
            const jungseongIndex = Math.floor((charCode % 588) / 28);
            const jongseongIndex = charCode % 28;

            let stroke = 0;
            stroke += KOREAN_STROKE_MAP[CHOSEONG[choseongIndex]] || 0;
            stroke += KOREAN_STROKE_MAP[JUNGSEONG[jungseongIndex]] || 0;
            if (jongseongIndex > 0) {
                 const jongseong = JONGSEONG[jongseongIndex];
                 // For composite jongseong like 'ㄳ', sum the strokes of individual parts
                 stroke += jongseong.split('').reduce((sum, part) => sum + (KOREAN_STROKE_MAP[part] || 0), 0);
            }
            return stroke;
        } else if (KOREAN_CONSONANTS[char] || KOREAN_VOWELS[char]) {
            return KOREAN_STROKE_MAP[char] || 0;
        }
        return 0; // Return 0 for non-Korean characters
    });
}


async function calculateNameCompatibility() {
    const name1 = document.getElementById('your-name').value.trim();
    const name2 = document.getElementById('partner-name').value.trim();

    if (!name1 || !name2) {
        alert(t('name.alert'));
        return;
    }

    const animationContainer = document.getElementById('name-animation-container');
    animationContainer.innerHTML = '';
    animationContainer.classList.remove('hidden');
     document.getElementById('name-result').classList.add('hidden');


    let strokes1, strokes2;
    if (currentLang === 'ko') {
        strokes1 = getKoreanStrokes(name1);
        strokes2 = getKoreanStrokes(name2);
    } else {
        const alphabetStrokes = [3, 2, 1, 2, 3, 3, 2, 3, 1, 1, 3, 1, 3, 3, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1];
        const getStrokes = (name) => name.toUpperCase().split('').map(char => {
            const charCode = char.charCodeAt(0);
            if (charCode >= 65 && charCode <= 90) { // A-Z
                return alphabetStrokes[charCode - 65];
            }
            return 0; // Non-alphabetic characters
        });
        strokes1 = getStrokes(name1);
        strokes2 = getStrokes(name2);
    }
    
    // Step 1: Interleave names and strokes
    const maxLength = Math.max(name1.length, name2.length);
    let interleavedChars = [];
    let combinedStrokes = [];
    for (let i = 0; i < maxLength; i++) {
        if (i < name1.length) {
            interleavedChars.push(name1[i]);
            combinedStrokes.push(strokes1[i]);
        }
        if (i < name2.length) {
            interleavedChars.push(name2[i]);
            combinedStrokes.push(strokes2[i]);
        }
    }

    await showAnimationStep(animationContainer, t('name.animation.step1'), 
        `<div class="calculation-line">${interleavedChars.map((c, i) => `<div class="char-stroke" style="--delay: ${i*0.1}s"><span class="char">${c}</span></div>`).join('')}</div>`, 
        interleavedChars.length * 100 + 500);

    // Step 2: Show strokes for each character
    await showAnimationStep(animationContainer, t('name.animation.step2'),
        `<div class="calculation-line">${combinedStrokes.map((s, i) => `<div class="char-stroke" style="--delay: ${i*0.1}s"><span class="char">${interleavedChars[i]}</span><span class="stroke">${s}</span></div>`).join('')}</div>`,
        combinedStrokes.length * 100 + 500);


    // Step 3 & 4: Calculate and show the compatibility score
    let calculationSteps = [combinedStrokes];
    let currentStrokes = combinedStrokes;
    while (currentStrokes.length > 2) {
        let nextStrokes = [];
        for (let i = 0; i < currentStrokes.length - 1; i++) {
            nextStrokes.push((currentStrokes[i] + currentStrokes[i + 1]) % 10);
        }
        calculationSteps.push(nextStrokes);
        currentStrokes = nextStrokes;
    }

    await showCalculationSteps(animationContainer, calculationSteps);
    
    const score = parseInt(currentStrokes.join(''));

    displayResult(score);
}

async function showAnimationStep(container, title, content, delay) {
    const step = document.createElement('div');
    step.className = 'animation-step';
    step.innerHTML = `<div class="animation-step-title">${title}</div>${content}`;
    container.appendChild(step);
    await sleep(delay);
     step.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

async function showCalculationSteps(container, steps) {
    // Step 3: Combination
    const step3Div = document.createElement('div');
    step3Div.className = 'animation-step';
    step3Div.innerHTML = `<div class="animation-step-title">${t('name.animation.step3')}</div>
        <div class="calculation-grid">
            <div class="calculation-line">${steps[0].map((s, i) => `<div class="calc-number" style="--delay: ${i*0.05}s">${s}</div>`).join('')}</div>
        </div>`;
    container.appendChild(step3Div);
    const grid = step3Div.querySelector('.calculation-grid');
    await sleep(steps[0].length * 50 + 300);
     step3Div.scrollIntoView({ behavior: 'smooth', block: 'center' });


    for (let i = 1; i < steps.length; i++) {
        const line = document.createElement('div');
        line.className = 'calculation-line';
        line.innerHTML = steps[i].map((s, j) => `<div class="calc-number" style="--delay: ${j*0.05}s">${s}</div>`).join('');
        grid.appendChild(line);
        await sleep(steps[i].length * 50 + 200);
    }
    
    // Step 4: Final Score
    const finalScore = steps[steps.length - 1];
    const step4Div = document.createElement('div');
    step4Div.className = 'animation-step';
    step4Div.innerHTML = `<div class="animation-step-title">${t('name.animation.step4')}</div>
        <div class="calculation-line final-line">${finalScore.map(s => `<div class="calc-number final-score">${s}</div>`).join('')}</div>`;
    container.appendChild(step4Div);
     step4Div.scrollIntoView({ behavior: 'smooth', block: 'center' });
    await sleep(500);
}


function displayResult(score) {
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

    const reading = t(`bloodType.results.${type1}_${type2}`);

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

    const resultKey = mbtiCompatibility[mbti1]?.[mbti2] || mbtiCompatibility[mbti2]?.[mbti1] || 'default';
    const reading = t(`mbti.results.${resultKey}`);

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
