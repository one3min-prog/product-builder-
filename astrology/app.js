let currentLang = 'ko';

// Init
document.addEventListener('DOMContentLoaded', () => {
    // Populate MBTI
    const types = ['ISTJ','ISFJ','INFJ','INTJ','ISTP','ISFP','INFP','INTP','ESTP','ESFP','ENFP','ENTP','ESTJ','ESFJ','ENFJ','ENTJ'];
    document.querySelectorAll('select').forEach(el => {
        types.forEach(t => {
            let opt = document.createElement('option');
            opt.value = t; opt.text = t;
            el.appendChild(opt);
        });
    });

    // Default Lang Setup
    updateLanguage('ko'); 
    document.getElementById('today-date').innerText = new Date().toLocaleDateString();
});

// Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('section').forEach(s => {
            s.classList.add('hidden-section');
            s.classList.remove('active-section');
        });
        const target = document.getElementById(btn.dataset.section + '-section');
        target.classList.remove('hidden-section');
        target.classList.add('active-section');
    });
});

// Language Toggle
document.getElementById('lang-toggle').addEventListener('click', () => {
    document.getElementById('lang-menu').classList.toggle('hidden');
});
document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
        updateLanguage(btn.dataset.lang);
        document.getElementById('lang-menu').classList.add('hidden');
    });
});

function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update Toggle Text
    const langNames = { ko:'한국어', en:'English', ja:'日本語', cn:'中文' };
    document.querySelector('#current-lang').innerText = langNames[lang];

    // Update Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.dataset.i18n.split('.');
        let val = t;
        keys.forEach(k => val = val ? val[k] : null);
        if(val) el.innerText = val;
    });
}

// Logic: Name
document.getElementById('calc-name-btn').addEventListener('click', () => {
    const n1 = document.getElementById('your-name').value;
    const n2 = document.getElementById('partner-name').value;
    if(!n1 || !n2) return alert(translations[currentLang].name.alert);
    
    // Hash Score
    const score = (n1.length + n2.length * 7) % 101; 
    showResult(n1, n2, score);
});

// Logic: MBTI
document.getElementById('calc-mbti-btn').addEventListener('click', () => {
    const m1 = document.getElementById('your-mbti').value;
    const m2 = document.getElementById('partner-mbti').value;
    const score = Math.floor(Math.random() * 50) + 50; 
    showResult(m1, m2, score);
});

// Logic: Daily
document.getElementById('calc-daily-btn').addEventListener('click', () => {
    const n = document.getElementById('daily-name').value;
    if(!n) return alert(translations[currentLang].daily.alert);
    const score = Math.floor(Math.random() * 40) + 60;
    showResult(n, "Luck", score);
});

// Show Result
function showResult(n1, n2, score) {
    document.getElementById('res-name-1').innerText = n1;
    document.getElementById('res-name-2').innerText = n2;
    document.getElementById('res-score').innerText = score;
    
    // Tier
    let tier = 'C';
    if(score >= 90) tier = 'SS';
    else if(score >= 80) tier = 'S';
    else if(score >= 70) tier = 'A';
    else if(score >= 50) tier = 'B';
    document.getElementById('res-tier').innerText = `TIER ${tier}`;

    // Messages & Date
    const msgs = storyMessages[currentLang] || storyMessages['en'];
    const isGood = score >= 70;
    document.getElementById('res-verdict').innerText = isGood ? "Good!" : "Hmm...";
    document.getElementById('res-text').innerText = isGood ? msgs.good : msgs.bad;

    // Date Rec
    const menus = dateMenus[currentLang] || dateMenus['en'];
    const rec = menus[score % menus.length];
    document.getElementById('rec-spot-type').innerText = rec.spot;
    document.getElementById('rec-menu').innerText = rec.menu;
    document.getElementById('rec-reason').innerText = rec.reason;

    document.getElementById('date-rec-area').classList.add('hidden');
    document.getElementById('result-overlay').classList.remove('hidden');
}

// Result Actions
document.getElementById('show-date-btn').addEventListener('click', () => {
    document.getElementById('date-rec-area').classList.remove('hidden');
});
document.getElementById('close-result').addEventListener('click', () => {
    document.getElementById('result-overlay').classList.add('hidden');
});
document.getElementById('capture-btn').addEventListener('click', () => {
    html2canvas(document.getElementById('capture-target')).then(canvas => {
        const a = document.createElement('a');
        a.href = canvas.toDataURL();
        a.download = 'lovetier.png';
        a.click();
    });
});