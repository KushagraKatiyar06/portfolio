// Dark Mode
const themeToggleButton = document.querySelector('.theme-toggle');
const themeText = document.querySelector('#themeToggle');

themeToggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        themeText.textContent = 'Light Mode';
    } else {
        themeText.textContent = 'Dark Mode';
    }
});

// Carousel
let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
