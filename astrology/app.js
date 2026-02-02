// ====== App State ======
let currentLang = 'en';
let currentSection = 'name';

// ====== Data Initialization ======
const mbtiTypes = [
    'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
    'ISTP', 'ISFP', 'INFP', 'INTP',
    'ESTP', 'ESFP', 'ENFP', 'ENTP',
    'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'
];

// Populate Selects
document.addEventListener('DOMContentLoaded', () => {
    const selects = ['your-mbti', 'partner-mbti'];
    selects.forEach(id => {
        const el = document.getElementById(id);
        if(el) {
            mbtiTypes.forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.text = type;
                el.appendChild(option);
            });
        }
    });
    
    // Set Date Stamp
    const today = new Date().toLocaleDateString();
    document.getElementById('today-date').innerText = today;
    
    // Default Lang
    updateLanguage('en'); // 영어 기본
});

// ====== Navigation Logic ======
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const sectionId = btn.getAttribute('data-section');
        document.querySelectorAll('section').forEach(s => s.classList.add('hidden-section'));
        document.querySelectorAll('section').forEach(s => s.classList.remove('active-section'));
        
        const target = document.getElementById(`${sectionId}-section`);
        if(target) {
            target.classList.remove('hidden-section');
            target.classList.add('active-section');
        }
    });
});

// ====== Calculation Logic ======

// 1. Name Match
document.getElementById('calc-name-btn').addEventListener('click', () => {
    const name1 = document.getElementById('your-name').value.trim();
    const name2 = document.getElementById('partner-name').value.trim();
    
    if(!name1 || !name2) {
        alert(translations[currentLang].name.alert);
        return;
    }

    // Hash logic for consistent random score
    const combined = [name1, name2].sort().join('');
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
        hash = ((hash << 5) - hash) + combined.charCodeAt(i);
        hash |= 0;
    }
    const score = Math.abs(hash % 101); // 0-100

    showResult(name1, name2, score, 'name');
});

// 2. MBTI Match
document.getElementById('calc-mbti-btn').addEventListener('click', () => {
    const mbti1 = document.getElementById('your-mbti').value;
    const mbti2 = document.getElementById('partner-mbti').value;
    // Simple random logic for demo (can be enhanced with real matrix)
    const score = Math.floor(Math.random() * 50) + 50; 
    showResult(mbti1, mbti2, score, 'mbti');
});

// 3. Daily Fortune (with Birthday)
document.getElementById('calc-daily-btn').addEventListener('click', () => {
    const name = document.getElementById('daily-name').value.trim();
    const birth = document.getElementById('daily-birth').value;

    if(!name) { alert(translations[currentLang].daily.alert); return; }
    
    // Use birthday to seed random
    const seed = name + (birth || new Date().toDateString());
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = ((hash << 5) - hash) + seed.charCodeAt(i);
        hash |= 0;
    }
    const score = Math.abs(hash % 40) + 60; // 60-100 for fortune
    
    showResult(name, "Today's Luck", score, 'daily');
});

// ====== Result & Date Course ======
function showResult(n1, n2, score, type) {
    const t = translations[currentLang];
    
    // Determine Tier & Category
    let tier = 'F';
    let category = 'difficult';
    if(score >= 90) { tier = 'SS'; category = 'excellent'; }
    else if(score >= 80) { tier = 'S'; category = 'excellent'; }
    else if(score >= 70) { tier = 'A'; category = 'good'; }
    else if(score >= 50) { tier = 'B'; category = 'average'; }
    else if(score >= 30) { tier = 'C'; category = 'challenging'; }

    // Update Card UI
    document.getElementById('res-name-1').innerText = n1;
    document.getElementById('res-name-2').innerText = n2;
    document.getElementById('res-score').innerText = score;
    document.getElementById('res-tier').innerText = `TIER ${tier}`;
    
    // Messages
    const msgs = storyMessages[currentLang] || storyMessages['en'];
    const msgData = msgs[category] || msgs['average'];
    
    document.getElementById('res-verdict').innerText = msgData.verdict;
    document.getElementById('res-text').innerText = msgData.message;

    // Setup Date Course (Hidden initially)
    const menus = (currentLang === 'ko' ? dateMenus : dateMenusEn)[category];
    const rec = menus[Math.floor(Math.random() * menus.length)];
    
    document.getElementById('rec-spot-type').innerText = rec.spot;
    document.getElementById('rec-menu').innerText = rec.menu;
    document.getElementById('rec-reason').innerText = rec.reason;
    document.getElementById('date-rec-area').classList.add('hidden'); // Reset state

    // Show Overlay
    document.getElementById('result-overlay').classList.remove('hidden');
}

// Show Date Course Button Logic
document.getElementById('show-date-btn').addEventListener('click', () => {
    const area = document.getElementById('date-rec-area');
    area.classList.remove('hidden');
    // Scroll to bottom of card
    document.querySelector('.result-card-container').scrollTop = 1000;
});

// Close
document.getElementById('close-result').addEventListener('click', () => {
    document.getElementById('result-overlay').classList.add('hidden');
});

// Capture
document.getElementById('capture-btn').addEventListener('click', () => {
    const target = document.getElementById('capture-target');
    html2canvas(target).then(canvas => {
        const link = document.createElement('a');
        link.download = 'love_tier_card.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});

// Share
document.getElementById('share-btn').addEventListener('click', async () => {
    try {
        if (navigator.share) {
            await navigator.share({
                title: 'Love Tier Result',
                text: 'Check out our compatibility score!',
                url: window.location.href
            });
        } else {
            alert('Link copied to clipboard!');
            navigator.clipboard.writeText(window.location.href);
        }
    } catch (err) {
        console.log('Share failed', err);
    }
});

// ====== Language Toggle ======
document.getElementById('lang-toggle').addEventListener('click', () => {
    document.getElementById('lang-menu').classList.toggle('hidden');
});

document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
        updateLanguage(opt.getAttribute('data-lang'));
        document.getElementById('lang-menu').classList.add('hidden');
    });
});

function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.getElementById('current-lang').innerText = lang === 'en' ? 'English' : '한국어';
    
    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const keys = key.split('.');
        let val = t;
        keys.forEach(k => val = val[k]);
        if(val) el.innerText = val;
    });
}