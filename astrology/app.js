
// ====== App State ======
let currentLang = 'en';
let currentSection = 'name';

// ====== Temperature Visualization Helper ======
function getTemperatureData(score) {
    if (score >= 90) {
        return {
            level: 'hot',
            color: '#ff4757',
            gradient: 'linear-gradient(to top, #ff6b6b, #ff4757, #ff3838)',
            emoji: '🔥',
            labelKo: '불타는 사랑',
            labelEn: 'Burning Love'
        };
    } else if (score >= 75) {
        return {
            level: 'warm',
            color: '#ff6b9d',
            gradient: 'linear-gradient(to top, #ff9a9e, #ff6b9d, #ff5e87)',
            emoji: '💕',
            labelKo: '따뜻한 사랑',
            labelEn: 'Warm Love'
        };
    } else if (score >= 60) {
        return {
            level: 'mild',
            color: '#ffa502',
            gradient: 'linear-gradient(to top, #ffd93d, #ffa502, #ff9500)',
            emoji: '✨',
            labelKo: '설레는 관계',
            labelEn: 'Exciting Bond'
        };
    } else if (score >= 40) {
        return {
            level: 'cool',
            color: '#3498db',
            gradient: 'linear-gradient(to top, #74b9ff, #3498db, #2980b9)',
            emoji: '💫',
            labelKo: '성장하는 인연',
            labelEn: 'Growing Bond'
        };
    } else {
        return {
            level: 'cold',
            color: '#a29bfe',
            gradient: 'linear-gradient(to top, #dfe6e9, #a29bfe, #6c5ce7)',
            emoji: '❄️',
            labelKo: '도전적인 관계',
            labelEn: 'Challenging'
        };
    }
}

function generateResultCardHTML(score, name1, name2, shareText) {
    const temp = getTemperatureData(score);
    const lang = currentLang === 'ko' ? 'ko' : 'en';
    const tempLabel = lang === 'ko' ? temp.labelKo : temp.labelEn;
    const tempTitle = lang === 'ko' ? '궁합 온도' : 'Love Temperature';
    const hideNameLabel = lang === 'ko' ? '이름 가리기' : 'Hide Names';
    const shareLabel = lang === 'ko' ? '결과 공유하기' : 'Share Result';

    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(window.location.href);

    return `
        <div class="result-share-card">
            <div class="temp-header">
                <span class="temp-title">${tempTitle}</span>
            </div>

            <div class="temp-visual">
                <div class="temp-gauge-mini">
                    <div class="temp-thermometer">
                        <div class="temp-fill" style="height: ${score}%; background: ${temp.gradient};"></div>
                        <div class="temp-bulb" style="background: ${temp.color};"></div>
                    </div>
                </div>
                <div class="temp-info">
                    <div class="temp-score" style="color: ${temp.color};">
                        <span class="temp-emoji">${temp.emoji}</span>
                        <span class="temp-number">${score}°</span>
                    </div>
                    <div class="temp-level" style="background: ${temp.color};">${tempLabel}</div>
                    <div class="temp-names" id="temp-names-display">${name1} & ${name2}</div>
                </div>
            </div>

            <!-- Hide Names Toggle -->
            <div class="hide-names-toggle">
                <label class="toggle-switch">
                    <input type="checkbox" id="hide-names-checkbox" onchange="toggleNameVisibility()">
                    <span class="toggle-slider"></span>
                </label>
                <span class="toggle-label">${hideNameLabel}</span>
            </div>

            <!-- SNS Share Section -->
            <div class="sns-share-compact">
                <p class="sns-share-title">${shareLabel}</p>
                <div class="sns-share-buttons">
                    <button class="sns-btn sns-twitter" onclick="shareSNS('twitter', '${encodedText}', '${encodedUrl}')" title="X">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </button>
                    <button class="sns-btn sns-facebook" onclick="shareSNS('facebook', '${encodedText}', '${encodedUrl}')" title="Facebook">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </button>
                    <button class="sns-btn sns-threads" onclick="shareSNS('threads', '${encodedText}', '${encodedUrl}')" title="Threads">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.17.408-2.306 1.334-3.203.678-.658 1.578-1.143 2.678-1.445-.056-.592-.1-1.204-.1-1.828 0-.313.008-.62.026-.924-1.109.213-2.017.65-2.647 1.27-.708.697-1.074 1.576-1.029 2.471.047.92.473 1.73 1.2 2.283.594.454 1.435.692 2.428.688 1.076-.046 1.91-.428 2.48-1.137.466-.581.764-1.397.886-2.432.007-.065.012-.13.016-.195-.28-.088-.553-.19-.816-.306-.84-.371-1.527-.9-1.978-1.521-.568-.78-.833-1.746-.766-2.79.067-1.03.525-1.974 1.29-2.658.955-.854 2.266-1.308 3.784-1.313.18-.001.36.006.539.018 1.607.109 2.985.707 3.987 1.73 1.05 1.073 1.635 2.545 1.693 4.258.032.953-.084 1.976-.346 3.033.778.448 1.425 1.022 1.919 1.704.784 1.085 1.118 2.39 1.024 3.998-.109 1.858-.894 3.54-2.268 4.862-1.707 1.64-4.036 2.503-6.938 2.563h-.18z"/></svg>
                    </button>
                    <button class="sns-btn sns-reddit" onclick="shareSNS('reddit', '${encodedText}', '${encodedUrl}')" title="Reddit">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
                    </button>
                    <button class="sns-btn sns-line" onclick="shareSNS('line', '${encodedText}', '${encodedUrl}')" title="LINE">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
                    </button>
                    <button class="sns-btn sns-copy" onclick="copyResultToClipboard()" title="Copy">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Store current share text for clipboard
let currentShareText = '';

function toggleNameVisibility() {
    const checkbox = document.getElementById('hide-names-checkbox');
    const namesDisplay = document.getElementById('temp-names-display');
    if (checkbox && namesDisplay) {
        if (checkbox.checked) {
            namesDisplay.textContent = '??? & ???';
            namesDisplay.classList.add('names-hidden');
        } else {
            namesDisplay.textContent = namesDisplay.dataset.original || namesDisplay.textContent;
            namesDisplay.classList.remove('names-hidden');
        }
    }
}

// Store pending detail data for popup close
let pendingDetailData = null;

function showResultPopup(score, name1, name2, shareText, detailData) {
    pendingDetailData = detailData;
    const popup = document.getElementById('result-popup');
    const popupCard = document.getElementById('popup-result-card');

    popupCard.innerHTML = generateResultCardHTML(score, name1, name2, shareText);
    popup.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Store original names for toggle
    const namesDisplay = document.getElementById('temp-names-display');
    if (namesDisplay) {
        namesDisplay.dataset.original = `${name1} & ${name2}`;
    }
}

function closeResultPopup() {
    const popup = document.getElementById('result-popup');
    popup.classList.add('hidden');
    document.body.style.overflow = '';

    // Show detailed result after closing popup
    if (pendingDetailData) {
        if (pendingDetailData.type === 'name') {
            showNameDetailResult(pendingDetailData);
        } else if (pendingDetailData.type === 'mbti') {
            showMbtiDetailResult(pendingDetailData);
        }
        pendingDetailData = null;
    }
}

function copyResultToClipboard() {
    const namesHidden = document.getElementById('hide-names-checkbox')?.checked;
    let text = currentShareText;
    if (namesHidden) {
        text = text.replace(/[가-힣a-zA-Z]+\s*&\s*[가-힣a-zA-Z]+/g, '??? & ???');
    }
    navigator.clipboard.writeText(text + '\n\n' + window.location.href).then(() => {
        showToast(currentLang === 'ko' ? '클립보드에 복사되었습니다!' : 'Copied to clipboard!');
    });
}

// ====== SNS Share Buttons Helper ======
function generateSNSShareHTML(shareData) {
    const { text, url } = shareData;
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(url || window.location.href);
    const lang = currentLang === 'ko' ? 'ko' : 'en';
    const shareLabel = lang === 'ko' ? '결과 공유하기' : 'Share Your Result';

    return `
        <div class="sns-share-section">
            <p class="sns-share-title">${shareLabel}</p>
            <div class="sns-share-buttons">
                <button class="sns-btn sns-twitter" onclick="shareSNS('twitter', '${encodedText}', '${encodedUrl}')" title="Twitter/X">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </button>
                <button class="sns-btn sns-facebook" onclick="shareSNS('facebook', '${encodedText}', '${encodedUrl}')" title="Facebook">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </button>
                <button class="sns-btn sns-threads" onclick="shareSNS('threads', '${encodedText}', '${encodedUrl}')" title="Threads">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.17.408-2.306 1.334-3.203.678-.658 1.578-1.143 2.678-1.445-.056-.592-.1-1.204-.1-1.828 0-.313.008-.62.026-.924-1.109.213-2.017.65-2.647 1.27-.708.697-1.074 1.576-1.029 2.471.047.92.473 1.73 1.2 2.283.594.454 1.435.692 2.428.688 1.076-.046 1.91-.428 2.48-1.137.466-.581.764-1.397.886-2.432.007-.065.012-.13.016-.195-.28-.088-.553-.19-.816-.306-.84-.371-1.527-.9-1.978-1.521-.568-.78-.833-1.746-.766-2.79.067-1.03.525-1.974 1.29-2.658.955-.854 2.266-1.308 3.784-1.313.18-.001.36.006.539.018 1.607.109 2.985.707 3.987 1.73 1.05 1.073 1.635 2.545 1.693 4.258.032.953-.084 1.976-.346 3.033.778.448 1.425 1.022 1.919 1.704.784 1.085 1.118 2.39 1.024 3.998-.109 1.858-.894 3.54-2.268 4.862-1.707 1.64-4.036 2.503-6.938 2.563h-.18z"/>
                    </svg>
                </button>
                <button class="sns-btn sns-reddit" onclick="shareSNS('reddit', '${encodedText}', '${encodedUrl}')" title="Reddit">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                    </svg>
                </button>
                <button class="sns-btn sns-line" onclick="shareSNS('line', '${encodedText}', '${encodedUrl}')" title="LINE">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                </button>
                <button class="sns-btn sns-copy" onclick="copyToClipboard('${text.replace(/'/g, "\\'")}')" title="Copy">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

function shareSNS(platform, encodedText, encodedUrl) {
    const text = decodeURIComponent(encodedText);
    const url = decodeURIComponent(encodedUrl);
    let shareUrl = '';

    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
            break;
        case 'threads':
            shareUrl = `https://www.threads.net/intent/post?text=${encodedText}`;
            break;
        case 'reddit':
            shareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedText}`;
            break;
        case 'line':
            shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedText}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text + '\n\n' + window.location.href).then(() => {
        showToast(currentLang === 'ko' ? '클립보드에 복사되었습니다!' : 'Copied to clipboard!');
    });
}

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
            verdict: "A Legendary Match! 🔥💕🔥",
            message: "This is the kind of match that romance novels are written about. When you're together, your energies sync in remarkable ways. This connection is truly special and rare.",
            advice: "Please don't overthink this beautiful connection. Some things are simply meant to be. Your role is to nurture this bond with care and presence."
        },
        great: {
            verdict: "Power Couple Alert! ⚡💖",
            message: "You two complement each other wonderfully. Where one person needs support, the other provides it naturally. This partnership has incredible potential for lasting happiness.",
            advice: "Please continue communicating openly. This match has remarkable potential - nurture it with honesty and watch it flourish into something extraordinary."
        },
        good: {
            verdict: "A Solid Foundation 🏠✨",
            message: "This is the 'marry your best friend' kind of match. While there may not be fireworks every day, there's a warm, steady flame that will keep burning for years to come.",
            advice: "Please don't chase unnecessary drama. What you have is rare - genuine compatibility. Appreciate the peace and comfort you bring each other."
        },
        moderate: {
            verdict: "An Interesting Journey 🎭",
            message: "You'll certainly never be bored together. Different perspectives mean different viewpoints to explore, and growth often comes from understanding these differences.",
            advice: "Please take time to learn each other's communication styles. Your partner isn't wrong, just different. Once you understand their perspective, things become much easier."
        },
        challenging: {
            verdict: "A Path of Growth 🎢",
            message: "This relationship will require effort, as you both process the world quite differently. However, some of the greatest love stories have been the unexpected ones.",
            advice: "Please be patient with each other. Understanding that 'different' doesn't mean 'wrong' is key. Consider seeking guidance from a relationship counselor if needed."
        },
        explosive: {
            verdict: "Handle With Care ⚠️💣",
            message: "This relationship has the potential to be deeply transformative. Your values may sometimes clash significantly, requiring careful navigation.",
            advice: "If you choose to pursue this relationship, please establish clear boundaries early. Consider keeping a couples therapist available for guidance."
        },
        chaotic: {
            verdict: "Beautiful Complexity 🌪️💕",
            message: "You may have passionate disagreements, but your reconciliations can be equally meaningful. Neither of you fully understands the other's thought process, and that creates a unique dynamic.",
            advice: "Please don't try to fundamentally change each other. Either embrace this unique dynamic or recognize it may not be right for you."
        },
        toxic: {
            verdict: "The Push-Pull Dynamic 💔🔄💕",
            message: "This relationship may concern those who care about you. There can be intense conflicts followed by passionate reconciliations. It's emotionally demanding but also deeply engaging.",
            advice: "Please honestly ask yourself: is this passion or just drama? If you choose to stay, both partners need to commit seriously to improving communication."
        },
        difficult: {
            verdict: "Playing on Challenging Mode 🎮",
            message: "This relationship requires significant emotional intelligence. One partner speaks in feelings while the other communicates through facts, leading to frequent misunderstandings.",
            advice: "Please consider working with a relationship counselor. Learning to appreciate that your partner's approach isn't wrong, just different, is essential."
        },
        mirror: {
            verdict: "A Mirror Reflection 🪞",
            message: "You understand each other perfectly, which is both a blessing and a challenge. The question becomes: who takes on different roles when you're so similar?",
            advice: "Please be careful not to enable each other's weaknesses. Intentionally seek balance - if you're both dreamers, schedule practical planning sessions together."
        },
        competitive: {
            verdict: "A Dynamic Power Match 👑⚔️",
            message: "Two strong personalities together creates intense dynamics. You'll either build something remarkable together or face significant challenges.",
            advice: "Please take turns leading in different areas. When you compete alongside each other rather than against, you become an unstoppable team."
        },
        chaos: {
            verdict: "Double the Energy! 🌈🎪",
            message: "Your combined energy is remarkable. Ideas flow freely and adventures begin spontaneously. However, someone does need to handle the practical matters.",
            advice: "Please deliberately assign practical responsibilities. Your creative synergy is incredible, but grounding it with some structure will help you thrive together."
        },
        fun: {
            verdict: "Life of the Party Together 🎉🎊",
            message: "Every day is an adventure, and every evening could become a memorable story. You're the couple everyone wants to spend time with.",
            advice: "Please remember to schedule some quiet time together. Your relationship needs depth as well as excitement."
        },
        adventure: {
            verdict: "Adventure Partners United 🏄‍♂️🏔️",
            message: "You'll have an exciting life together. Everything becomes an adventure, including your relationship itself. Routine simply isn't in your vocabulary.",
            advice: "Please try being vulnerable with each other. Thrill-seeking can sometimes be a way to avoid deeper connection. Allow yourselves quiet moments together."
        },
        peaceful: {
            verdict: "Quiet Understanding 🌸",
            message: "Words aren't always necessary when you simply understand each other. Your relationship is a peaceful haven from the busy world.",
            advice: "Please make sure you're actually communicating, not just assuming. Silence can be golden, but it can also hide important issues."
        },
        independent: {
            verdict: "Mutual Space Respect 🌌",
            message: "You both need personal time, and you both respect that. There's no clingy behavior here - it's mature and healthy.",
            advice: "Please check in emotionally with each other regularly. Independence is wonderful, but don't let it create too much distance. Keep the romance alive intentionally."
        },
        stable: {
            verdict: "Rock Solid Foundation ⛰️",
            message: "This is a safe, reliable relationship that will likely stand the test of time. It may not always be exciting, but it's genuine and lasting.",
            advice: "Please inject some spontaneity occasionally. You're so skilled at routine that you might forget to have fun together. Stability is your foundation, but remember to build upon it."
        },
        caring: {
            verdict: "Mutual Care and Support 💝",
            message: "You both want to take care of each other so much that sometimes you debate who gets to be the caregiver. It's endearing and heartwarming.",
            advice: "Please allow yourself to receive care as well. Don't turn nurturing into a competition. Accept love as generously as you give it."
        },
        idealist: {
            verdict: "Changing the World Together 🌍💕",
            message: "You both have big visions and even bigger hearts. You'll volunteer together and work to make the world better.",
            advice: "Please schedule date nights that are just about the two of you. Your relationship deserves the same care you give to your causes."
        }
    },
    ko: {
        soulmate: {
            verdict: "전설적인 궁합이에요! 🔥💕🔥",
            message: "이 궁합은 로맨스 소설에서나 볼 수 있는 조합이에요. 함께 있으면 두 분의 에너지가 놀라울 정도로 동기화됩니다. 이런 연결은 정말 특별하고 희귀해요.",
            advice: "이 아름다운 인연을 너무 깊이 생각하지 마세요. 운명처럼 정해진 것들도 있답니다. 두 분의 역할은 이 소중한 인연을 정성껏 가꾸어 나가는 것이에요."
        },
        great: {
            verdict: "파워 커플 등장이에요! ⚡💖",
            message: "두 분은 서로를 정말 잘 보완해주세요. 한 분이 도움이 필요할 때 다른 분이 자연스럽게 지지해주시네요. 이 관계는 오래도록 행복할 잠재력이 있어요.",
            advice: "계속해서 솔직하게 소통해주세요. 이 궁합은 정말 대단한 잠재력을 가지고 있어요. 정직함으로 물을 주시면 특별한 무언가로 성장할 거예요."
        },
        good: {
            verdict: "탄탄한 기반이에요 🏠✨",
            message: "이건 '베스트 프렌드와 결혼하세요' 유형의 궁합이에요. 매일 불꽃놀이는 아니지만, 오래도록 타오르는 따뜻하고 안정적인 불과 같아요.",
            advice: "불필요한 드라마를 쫓지 마세요. 두 분이 가진 것은 희귀한 것이에요 - 진정한 궁합이니까요. 서로에게 주는 평화와 안정을 소중히 여겨주세요."
        },
        moderate: {
            verdict: "흥미로운 여정이에요 🎭",
            message: "함께라면 지루할 일은 없을 거예요. 다른 관점은 탐험할 다른 시각을 의미하고, 성장은 종종 이런 차이를 이해하는 데서 오니까요.",
            advice: "서로의 소통 방식을 배우는 시간을 가져보세요. 상대방이 틀린 게 아니라 그냥 다른 거예요. 상대방의 관점을 이해하시면 모든 것이 훨씬 쉬워질 거예요."
        },
        challenging: {
            verdict: "성장의 길이에요 🎢",
            message: "이 관계는 노력이 필요해요. 두 분은 세상을 상당히 다르게 받아들이시거든요. 하지만 가장 위대한 사랑 이야기 중 일부는 예상치 못한 것들이었답니다.",
            advice: "서로에게 인내심을 가져주세요. '다르다'가 '틀리다'를 의미하지 않는다는 것을 이해하는 것이 중요해요. 필요하시다면 전문 상담사의 도움을 받아보세요."
        },
        explosive: {
            verdict: "취급 주의가 필요해요! ⚠️💣",
            message: "이 관계는 깊은 변화를 줄 잠재력이 있어요. 두 분의 가치관이 때때로 크게 충돌할 수 있어서 세심한 대처가 필요해요.",
            advice: "이 관계를 선택하신다면, 일찍 명확한 경계를 세워주세요. 커플 상담사를 미리 알아두시는 것도 좋은 방법이에요."
        },
        chaotic: {
            verdict: "아름다운 복잡함이에요 🌪️💕",
            message: "열정적인 의견 충돌이 있을 수 있지만, 화해도 그만큼 의미 있을 거예요. 서로의 사고방식을 완전히 이해하지 못하시는데, 그게 독특한 역동성을 만들어내요.",
            advice: "서로를 근본적으로 바꾸려고 하지 마세요. 이 독특한 역동성을 받아들이시거나, 맞지 않을 수도 있다는 것을 인정해주세요."
        },
        toxic: {
            verdict: "밀고 당기기 역학이에요 💔🔄💕",
            message: "주변 분들이 이 관계를 걱정하실 수도 있어요. 격렬한 갈등 뒤에 열정적인 화해가 따라올 수 있거든요. 감정적으로 힘들지만 깊이 빠져들게 되는 관계예요.",
            advice: "스스로에게 솔직하게 물어봐 주세요: 이게 열정인지 그냥 드라마인지요. 남기로 선택하신다면, 두 분 모두 소통 개선에 진지하게 노력하셔야 해요."
        },
        difficult: {
            verdict: "도전적인 모드예요 🎮",
            message: "이 관계는 상당한 감정 지능이 필요해요. 한 분은 감정으로 말하고 다른 분은 사실로 소통하셔서 오해가 자주 발생할 수 있어요.",
            advice: "전문 상담사와 함께 상담받아 보시는 것을 고려해주세요. 상대방의 방식이 틀린 게 아니라 그냥 다르다는 것을 이해하는 것이 중요해요."
        },
        mirror: {
            verdict: "거울 같은 반영이에요 🪞",
            message: "서로를 완벽하게 이해하시는데, 이게 축복이자 도전이에요. 두 분이 너무 비슷할 때 누가 다른 역할을 맡을지가 문제가 될 수 있어요.",
            advice: "서로의 약점을 조장하지 않도록 주의해주세요. 의도적으로 균형을 찾으세요. 둘 다 몽상가라면 실용적인 계획 시간을 함께 정해보세요."
        },
        competitive: {
            verdict: "역동적인 파워 매치예요 👑⚔️",
            message: "두 강한 성격이 함께하면 강렬한 역동성이 생겨요. 함께 놀라운 것을 만들어내시거나 상당한 도전에 직면하실 거예요.",
            advice: "각자 다른 영역에서 번갈아 리드해주세요. 서로에게 대항하기보다 함께 경쟁하시면 막을 수 없는 팀이 되실 거예요."
        },
        chaos: {
            verdict: "에너지가 두 배예요! 🌈🎪",
            message: "두 분의 합쳐진 에너지는 놀라워요. 아이디어가 자유롭게 흐르고 모험이 즉흥적으로 시작돼요. 하지만 누군가는 실용적인 문제를 처리해야 해요.",
            advice: "실용적인 책임을 의도적으로 배분해주세요. 두 분의 창의적 시너지는 놀랍지만, 약간의 구조로 기반을 다지시면 함께 번성하실 거예요."
        },
        fun: {
            verdict: "함께하는 파티의 주인공이에요 🎉🎊",
            message: "매일이 모험이고, 매 저녁은 기억에 남는 이야기가 될 수 있어요. 모두가 함께 시간을 보내고 싶어하는 커플이시네요.",
            advice: "조용한 시간도 함께 보내시는 것을 기억해주세요. 관계에는 설렘만큼 깊이도 필요하답니다."
        },
        adventure: {
            verdict: "모험 파트너 연합이에요 🏄‍♂️🏔️",
            message: "함께 신나는 삶을 사실 거예요. 관계 자체를 포함해 모든 것이 모험이 돼요. 일상은 두 분의 사전에 없는 단어네요.",
            advice: "서로에게 취약한 모습을 보여주세요. 스릴 추구가 때로는 더 깊은 연결을 피하는 방법일 수 있어요. 조용한 순간도 함께 허락해주세요."
        },
        peaceful: {
            verdict: "조용한 이해예요 🌸",
            message: "서로를 그냥 이해할 때는 말이 항상 필요하지 않아요. 두 분의 관계는 바쁜 세상에서 평화로운 안식처예요.",
            advice: "실제로 소통하고 계신지 확인해주세요. 그냥 추측하지 마시고요. 침묵은 황금일 수 있지만, 중요한 문제를 숨길 수도 있어요."
        },
        independent: {
            verdict: "서로의 공간을 존중해요 🌌",
            message: "두 분 모두 개인 시간이 필요하시고, 서로 그것을 존중해주시네요. 집착하는 행동이 없어요 - 성숙하고 건강한 관계예요.",
            advice: "정기적으로 감정적으로 서로 확인해주세요. 독립은 좋지만, 너무 많은 거리를 만들지 마세요. 의도적으로 로맨스를 살려주세요."
        },
        stable: {
            verdict: "반석 같은 기반이에요 ⛰️",
            message: "안전하고 믿을 수 있는 관계로, 시간이 지나도 견딜 거예요. 항상 신나지는 않을 수 있지만, 진실하고 오래가는 관계예요.",
            advice: "가끔 즉흥성을 주입해주세요. 루틴에 너무 능숙해지시면 함께 즐기는 것을 잊으실 수 있어요. 안정은 기초이지만, 그 위에 계속 쌓아가시는 것을 기억해주세요."
        },
        caring: {
            verdict: "서로를 돌보고 지지해요 💝",
            message: "두 분 모두 서로를 돌보고 싶어하셔서 가끔 누가 돌봐주는 사람이 될지 토론하시네요. 참 사랑스럽고 따뜻해요.",
            advice: "자신도 돌봄을 받으시도록 해주세요. 돌봄을 경쟁으로 만들지 마세요. 주시는 만큼 관대하게 사랑을 받아주세요."
        },
        idealist: {
            verdict: "함께 세상을 바꿔요 🌍💕",
            message: "두 분 모두 큰 비전과 더 큰 마음을 가지셨어요. 함께 자원봉사하시고 세상을 더 좋게 만들기 위해 노력하시네요.",
            advice: "두 분만을 위한 데이트 밤을 계획해주세요. 두 분의 관계도 대의에 쏟으시는 것만큼의 관심을 받을 자격이 있어요."
        }
    }
};

// ====== Daily Fortune Messages (네이버 스타일 상세 운세) ======
const dailyFortunes = {
    en: [
        {
            emoji: '💘',
            overall: "Today, the stars align to bring warmth and connection into your love life. You may find that people are drawn to your positive energy, making it an excellent day for meaningful encounters.",
            love: "A gentle breeze of romance touches your heart today. If you're single, pay attention to chance meetings - they could be more significant than they appear. For those in relationships, expressing gratitude for your partner will strengthen your bond.",
            tip: "Wearing something pink or red today may enhance your romantic aura.",
            warning: "Be careful not to mistake friendliness for romantic interest. Take time to observe before making assumptions."
        },
        {
            emoji: '✨',
            overall: "Your magnetic energy is particularly strong today. The universe is creating opportunities for you to shine in matters of the heart. Trust your intuition when it comes to love.",
            love: "That person who's been on your mind? The cosmic energy suggests they may be thinking of you too. This is a favorable day for honest conversations about feelings.",
            tip: "Make eye contact and smile genuinely - small gestures can create big connections today.",
            warning: "Don't rush into commitments. While the energy is positive, lasting love requires patient cultivation."
        },
        {
            emoji: '🌙',
            overall: "The moon's energy tonight brings depth to emotional connections. Conversations may naturally drift toward meaningful topics, revealing new layers in your relationships.",
            love: "Evening hours are particularly favorable for romance. A quiet dinner or a walk under the stars could lead to memorable moments. Let your guard down and be vulnerable.",
            tip: "Express your feelings through actions rather than words today.",
            warning: "Avoid discussing past relationships or bringing up old wounds. Focus on the present moment."
        },
        {
            emoji: '🦋',
            overall: "A transformative energy surrounds your love life. Old patterns that no longer serve you are ready to dissolve, making room for fresh possibilities and new beginnings.",
            love: "Your heart is ready for evolution. Whether single or coupled, today invites you to release expectations and embrace love as it naturally wants to unfold.",
            tip: "Write down what you truly desire in a partner or relationship. Clarity attracts matching energy.",
            warning: "Change can feel uncomfortable. Don't retreat to old habits just because they're familiar."
        },
        {
            emoji: '🌸',
            overall: "Like spring flowers awakening, your love life enters a blooming phase. Patience and faith are about to be rewarded with beautiful developments.",
            love: "Romance unfolds gradually but beautifully today. Don't force anything - let connections develop at their natural pace. Something sweet is growing.",
            tip: "Spend time in nature today. The peaceful energy will enhance your romantic receptivity.",
            warning: "Don't compare your love timeline to others. Your journey is uniquely beautiful."
        }
    ],
    ko: [
        {
            emoji: '💘',
            overall: "오늘은 별들이 당신의 연애운에 따뜻함과 연결을 가져다주는 날이에요. 주변 사람들이 당신의 긍정적인 에너지에 끌리게 되어, 의미 있는 만남을 위한 좋은 날이 될 거예요.",
            love: "오늘 부드러운 로맨스의 바람이 당신의 마음을 스쳐 지나가요. 솔로시라면 우연한 만남에 주목해주세요 - 보이는 것보다 더 의미 있을 수 있어요. 연인이 계시다면, 상대방에 대한 감사를 표현하시면 유대감이 더욱 깊어질 거예요.",
            tip: "오늘 분홍색이나 빨간색 계열을 착용하시면 로맨틱한 아우라가 높아질 수 있어요.",
            warning: "친절함을 로맨틱한 관심으로 착각하지 않도록 주의해주세요. 성급한 판단보다는 충분히 관찰하는 시간을 가져보세요."
        },
        {
            emoji: '✨',
            overall: "오늘 당신의 자기적인 에너지가 특별히 강해요. 우주가 당신이 사랑의 문제에서 빛날 수 있는 기회를 만들어주고 있어요. 사랑에 관해서는 직감을 믿어주세요.",
            love: "계속 마음에 두고 계신 그 분이 계시나요? 우주의 에너지는 그 분도 당신을 생각하고 계실 수 있다고 말하고 있어요. 오늘은 감정에 대해 솔직하게 대화하기에 좋은 날이에요.",
            tip: "눈을 마주치고 진심 어린 미소를 지어보세요 - 오늘은 작은 제스처가 큰 연결을 만들어낼 수 있어요.",
            warning: "서두르지 마세요. 에너지가 긍정적이지만, 오래가는 사랑은 인내심 있는 노력이 필요해요."
        },
        {
            emoji: '🌙',
            overall: "오늘 밤 달의 에너지가 감정적인 연결에 깊이를 더해줘요. 대화가 자연스럽게 의미 있는 주제로 흘러가면서, 관계의 새로운 면을 발견하게 될 수 있어요.",
            love: "저녁 시간이 특히 로맨스에 유리해요. 조용한 저녁 식사나 별빛 아래 산책이 기억에 남는 순간으로 이어질 수 있어요. 마음의 벽을 내리고 솔직해져 보세요.",
            tip: "오늘은 말보다는 행동으로 감정을 표현해보세요.",
            warning: "과거 연애 이야기나 오래된 상처를 꺼내는 것은 피해주세요. 현재 순간에 집중해보세요."
        },
        {
            emoji: '🦋',
            overall: "변화의 에너지가 당신의 연애운을 감싸고 있어요. 더 이상 도움이 되지 않는 오래된 패턴들이 녹아내릴 준비가 되어, 새로운 가능성과 시작을 위한 공간이 생겨나고 있어요.",
            love: "당신의 마음이 진화할 준비가 되었어요. 솔로든 연인이 있든, 오늘은 기대를 내려놓고 사랑이 자연스럽게 펼쳐지도록 초대하는 날이에요.",
            tip: "상대방이나 관계에서 진정으로 원하는 것을 적어보세요. 명확함이 맞는 에너지를 끌어당겨요.",
            warning: "변화가 불편하게 느껴질 수 있어요. 익숙하다는 이유만으로 오래된 습관으로 돌아가지 마세요."
        },
        {
            emoji: '🌸',
            overall: "봄꽃이 깨어나듯, 당신의 연애운이 만개하는 시기에 접어들고 있어요. 인내와 믿음이 아름다운 발전으로 보답받으려 해요.",
            love: "오늘 로맨스가 천천히 하지만 아름답게 펼쳐져요. 억지로 밀어붙이지 마시고, 인연이 자연스러운 속도로 발전하도록 해주세요. 달콤한 무언가가 자라나고 있어요.",
            tip: "오늘은 자연 속에서 시간을 보내보세요. 평화로운 에너지가 로맨틱한 수용성을 높여줄 거예요.",
            warning: "다른 사람들의 연애 타임라인과 비교하지 마세요. 당신만의 여정은 독특하게 아름다워요."
        }
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
    // Clear all results when navigating
    document.querySelectorAll('.result-card').forEach(r => {
        r.innerHTML = '';
        r.classList.add('hidden');
    });
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const navBtn = document.querySelector(`[data-section="${sectionId}"]`);
    if (navBtn) navBtn.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    const lang = currentLang === 'ko' ? 'ko' : 'en';

    if (score >= 80) triggerConfetti();

    // Set share text globally for clipboard
    currentShareText = lang === 'ko'
        ? `💕 ${name1} & ${name2}: ${score}% 궁합!\n\nHeart Scan에서 확인하세요!`
        : `💕 ${name1} & ${name2}: ${score}% compatible!\n\nCheck at Heart Scan!`;

    // Prepare detail data for after popup close
    const detailData = {
        type: 'name',
        name1,
        name2,
        score,
        chars,
        strokes,
        allSteps,
        lang
    };

    // Show popup first
    showResultPopup(score, name1, name2, currentShareText, detailData);
}

function showNameDetailResult(data) {
    const { name1, name2, score, chars, strokes, allSteps, lang } = data;
    const result = document.getElementById('name-result');
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

    const calcStepsHTML = generateCalcStepsHTML(chars, strokes, allSteps);
    const toggleLabel = lang === 'ko' ? '계산 과정 보기' : 'View Calculation';
    const pastLifeLabel = lang === 'ko' ? '전생의 인연' : 'Past Life Connection';
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

    const shareText = lang === 'ko'
        ? `💕 ${name1} & ${name2}: ${score}% 궁합!\n🏮 전생: "${pastLifeStory.relation}"\n\nHeart Scan에서 확인하세요!`
        : `💕 ${name1} & ${name2}: ${score}% compatible!\n🏮 Past Life: "${pastLifeStory.relation}"\n\nCheck at Heart Scan!`;

    result.classList.remove('hidden');
    result.innerHTML = `
        <div class="result-card-new">
            <!-- Result Details Card -->
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

                <!-- SNS Share Buttons -->
                ${generateSNSShareHTML({ text: shareText })}
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
    // Auto-trigger the date recommendation
    setTimeout(() => {
        getDateRecommendation();
        document.getElementById('date-rec-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

function shareNameResult(name1, name2, score, pastLife) {
    const lang = currentLang === 'ko' ? 'ko' : 'en';
    let text;
    if (lang === 'ko') {
        text = `💕 ${name1} & ${name2}: ${score}% 궁합!\n🏮 전생: "${pastLife}"\n\nHeart Scan에서 확인하세요!`;
    } else {
        text = `💕 ${name1} & ${name2}: ${score}% compatible!\n🏮 Past Life: "${pastLife}"\n\nCheck at Heart Scan!`;
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
        text = `💕 ${name1} & ${name2} (${score}%)\n🏮 전생: "${pastLife}"\n🍽️ 오늘의 데이트: ${menu}\n\nHeart Scan에서 확인하세요!`;
    } else {
        text = `💕 ${name1} & ${name2} (${score}%)\n🏮 Past Life: "${pastLife}"\n🍽️ Today's Date: ${menu}\n\nCheck at Heart Scan!`;
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
    const keyword = lang === 'ko' ? compatData.keyword : compatData.en_keyword;
    const score = compatData.score;

    if (score >= 85) triggerConfetti();

    // Set share text globally for clipboard
    currentShareText = lang === 'ko'
        ? `🧠 ${mbti1} + ${mbti2}: ${score}%\n💫 "${keyword}"\n\nHeart Scan에서 확인하세요!`
        : `🧠 ${mbti1} + ${mbti2}: ${score}%\n💫 "${keyword}"\n\nCheck at Heart Scan!`;

    // Prepare detail data for after popup close
    const detailData = {
        type: 'mbti',
        mbti1,
        mbti2,
        score,
        keyword,
        compatData,
        lang
    };

    // Show popup first
    showResultPopup(score, mbti1, mbti2, currentShareText, detailData);
}

function showMbtiDetailResult(data) {
    const { mbti1, mbti2, score, keyword, compatData, lang } = data;
    const result = document.getElementById('mbti-result');

    const stories = mbtiStories[lang] || mbtiStories.en;
    const story = stories[compatData.type] || stories.moderate || stories.good;
    const pastLife = pastLifeStories[lang] || pastLifeStories.en;
    const solutions = badLuckSolutions[lang] || badLuckSolutions.en;

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
    } else if (score >= 70) {
        heartClass = 'sparkling-hearts';
    } else if (score < 45) {
        heartClass = 'broken-hearts';
    }

    const pastLifeLabel = lang === 'ko' ? '전생의 인연' : 'Past Life Connection';
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

    const shareText = lang === 'ko'
        ? `🧠 ${mbti1} + ${mbti2}: ${score}%\n💫 "${keyword}"\n🏮 전생: "${pastLifeStory.relation}"\n\nHeart Scan에서 확인하세요!`
        : `🧠 ${mbti1} + ${mbti2}: ${score}%\n💫 "${keyword}"\n🏮 Past Life: "${pastLifeStory.relation}"\n\nCheck at Heart Scan!`;

    result.classList.remove('hidden');
    result.innerHTML = `
        <div class="result-card-new">
            <!-- Result Details Card -->
            <div class="story-card">
                <div class="heart-effect ${heartClass}">${emojis[compatData.type] || '💕✨💕'}</div>

                <div class="mbti-keyword">
                    <span class="keyword-badge">${keyword}</span>
                </div>

                <div class="score-container">
                    <div class="score-ring">
                        <div class="score-inner">
                            <span class="score-number">${score}</span>
                            <span class="score-label">%</span>
                        </div>
                    </div>
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

                <!-- SNS Share Buttons -->
                ${generateSNSShareHTML({ text: shareText })}
            </div>
        </div>
    `;

    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
    const luckyColors = lang === 'ko'
        ? ['💗 핑크', '💜 보라', '💙 파랑', '💚 초록', '💛 노랑', '🧡 주황', '❤️ 빨강']
        : ['💗 Pink', '💜 Purple', '💙 Blue', '💚 Green', '💛 Yellow', '🧡 Orange', '❤️ Red'];
    const luckyColor = luckyColors[seed % luckyColors.length];

    const luckyTimes = lang === 'ko'
        ? ['🌅 오전 7-9시', '☀️ 오전 11시-오후 1시', '🌤️ 오후 3-5시', '🌙 저녁 7-9시', '✨ 밤 10시-자정']
        : ['🌅 7-9 AM', '☀️ 11AM-1PM', '🌤️ 3-5 PM', '🌙 7-9 PM', '✨ 10PM-Midnight'];
    const luckyTime = luckyTimes[seed % luckyTimes.length];

    // Labels
    const labels = lang === 'ko' ? {
        title: `${name}님의 오늘의 연애운`,
        overall: '📋 총운',
        love: '💕 애정운',
        tip: '💡 오늘의 연애 팁',
        warning: '⚠️ 주의사항',
        luckyNumber: '🔢 행운의 숫자',
        luckyColor: '🎨 행운의 색',
        luckyTime: '⏰ 행운의 시간',
        share: '공유하기'
    } : {
        title: `${name}'s Love Fortune`,
        overall: '📋 Overall Fortune',
        love: '💕 Love & Romance',
        tip: '💡 Today\'s Love Tip',
        warning: '⚠️ Watch Out For',
        luckyNumber: '🔢 Lucky Number',
        luckyColor: '🎨 Lucky Color',
        luckyTime: '⏰ Lucky Time',
        share: 'Share Fortune'
    };

    const result = document.getElementById('daily-result');
    result.classList.remove('hidden');
    result.innerHTML = `
        <div class="story-card fortune-card">
            <div class="story-header">
                <p class="story-names">${labels.title}</p>
                <p class="story-date">${new Date().toLocaleDateString(currentLang, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>

            <div class="heart-effect sparkling-hearts" style="font-size: 3.5rem;">${fortune.emoji}</div>

            <!-- 총운 -->
            <div class="fortune-section">
                <h4 class="fortune-section-title">${labels.overall}</h4>
                <p class="fortune-section-text">${fortune.overall}</p>
            </div>

            <!-- 애정운 -->
            <div class="fortune-section love-section">
                <h4 class="fortune-section-title">${labels.love}</h4>
                <p class="fortune-section-text">${fortune.love}</p>
            </div>

            <!-- 오늘의 팁 -->
            <div class="fortune-tip">
                <h4 class="fortune-tip-title">${labels.tip}</h4>
                <p class="fortune-tip-text">${fortune.tip}</p>
            </div>

            <!-- 주의사항 -->
            <div class="fortune-warning">
                <h4 class="fortune-warning-title">${labels.warning}</h4>
                <p class="fortune-warning-text">${fortune.warning}</p>
            </div>

            <!-- 행운 요소 -->
            <div class="fortune-lucky-grid">
                <div class="lucky-item">
                    <span class="lucky-label">${labels.luckyNumber}</span>
                    <span class="lucky-value lucky-number">${luckyNumber}</span>
                </div>
                <div class="lucky-item">
                    <span class="lucky-label">${labels.luckyColor}</span>
                    <span class="lucky-value">${luckyColor}</span>
                </div>
                <div class="lucky-item">
                    <span class="lucky-label">${labels.luckyTime}</span>
                    <span class="lucky-value">${luckyTime}</span>
                </div>
            </div>

            <div class="share-section">
                <button class="share-btn" onclick="shareDailyFortune('${name}', '${fortune.overall.substring(0, 50).replace(/'/g, "\\'")}...')">
                    <span>📱</span> ${labels.share}
                </button>
            </div>
        </div>
    `;

    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function shareDailyFortune(name, summary) {
    const lang = currentLang === 'ko' ? 'ko' : 'en';
    let text;
    if (lang === 'ko') {
        text = `🔮 ${name}님의 오늘의 연애운\n"${summary}"\n\nHeart Scan에서 확인하세요!`;
    } else {
        text = `🔮 ${name}'s Love Fortune Today\n"${summary}"\n\nCheck at Heart Scan!`;
    }
    shareContent(text);
}

// ====== Share Functions ======
function shareResult(name1, name2, score) {
    const text = `💕 ${name1} & ${name2}: ${score}% compatible! ✨\n\nFind your love compatibility at Heart Scan!`;
    shareContent(text);
}

function shareBloodResult(type1, type2) {
    const text = `🩸 Blood Type ${type1} + ${type2} compatibility revealed! 💉\n\nDiscover yours at Heart Scan!`;
    shareContent(text);
}

function shareMbtiResult(mbti1, mbti2, score, keyword) {
    const text = `🧠 ${mbti1} + ${mbti2}: ${score}% compatible!\n💫 "${keyword}"\n\nFind your match at Heart Scan!`;
    shareContent(text);
}

function shareContent(text) {
    if (navigator.share) {
        navigator.share({ title: 'Heart Scan', text: text, url: window.location.href });
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
