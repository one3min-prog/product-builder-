
const generateBtn = document.getElementById('generate-btn');
const numberSpans = document.querySelectorAll('.lotto-numbers .number');

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    numberSpans.forEach((span, index) => {
        span.textContent = sortedNumbers[index];
        span.classList.add('generated');
        // Set background color based on number range
        const number = sortedNumbers[index];
        if (number <= 10) {
            span.style.backgroundColor = '#fbc400'; // Yellow
        } else if (number <= 20) {
            span.style.backgroundColor = '#69c8f2'; // Blue
        } else if (number <= 30) {
            span.style.backgroundColor = '#ff7272'; // Red
        } else if (number <= 40) {
            span.style.backgroundColor = '#aaa'; // Gray
        } else {
            span.style.backgroundColor = '#b0d840'; // Green
        }
    });

    setTimeout(() => {
        numberSpans.forEach(span => span.classList.remove('generated'));
    }, 500);
});
