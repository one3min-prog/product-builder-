
const generateBtn = document.getElementById('generate-btn');
const numberSpans = document.querySelectorAll('.lotto-numbers .number');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

// Load saved theme from localStorage
const currentTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(currentTheme);

const getColorForNumber = (number) => {
    if (number <= 10) return '#fbc400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa'; // Gray
    return '#b0d840'; // Green
};

const animateNumbers = (sortedNumbers) => {
    generateBtn.disabled = true;
    let animationIntervals = [];

    numberSpans.forEach((span, index) => {
        // Reset styles
        span.textContent = '';
        span.style.backgroundColor = '';
        span.classList.remove('generated');

        let i = 0;
        const interval = setInterval(() => {
            span.textContent = Math.floor(Math.random() * 45) + 1;
        }, 50);
        animationIntervals.push(interval);

        setTimeout(() => {
            clearInterval(interval);
            const finalNumber = sortedNumbers[index];
            span.textContent = finalNumber;
            span.style.backgroundColor = getColorForNumber(finalNumber);
            span.classList.add('generated');

            // Re-enable button after the last number is revealed
            if (index === numberSpans.length - 1) {
                generateBtn.disabled = false;
                setTimeout(() => {
                    numberSpans.forEach(s => s.classList.remove('generated'));
                }, 500);
            }
        }, 1000 + index * 500); // Stagger the reveal
    });
};

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
    animateNumbers(sortedNumbers);
});

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    // Save the new theme to localStorage
    const newTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', newTheme);
});
