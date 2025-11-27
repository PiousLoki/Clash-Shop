const track = document.querySelector('.slides');
const slides = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;

function showSlide(n) {
    index = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.onclick = () => showSlide(index - 1);
nextBtn.onclick = () => showSlide(index + 1);

// Autoplay
setInterval(() => showSlide(index + 1), 4000);

// Inicial
showSlide(0);
