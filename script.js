let index = 0;
const slides = document.querySelectorAll('.gallery img');
const indicators = document.querySelectorAll('.indicator');

function showSlide(n) {
    slides.forEach((img, i) => {
        img.style.display = (i === n) ? 'block' : 'none';
    });
    indicators.forEach((dot, i) => {
        dot.classList.toggle('active', i === n);
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

showSlide(index);