<script>
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let index = 0;

    function showSlide(n) {
        index = (n + slides.length) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.onclick = () => showSlide(index - 1);
    nextBtn.onclick = () => showSlide(index + 1);

    // Autoplay cada 4 segundos
    setInterval(() => showSlide(index + 1), 4000);

    // Para que arranque bien alineado
    showSlide(0);
</script>