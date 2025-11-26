const slides = document.querySelector('.slides'); /* mueve */
const images = document.querySelectorAll('.slides img'); /* lista */
const prevBtn = document.querySelector('#prev'); /* anterior */
const nextBtn = document.querySelector('#next'); /* siguiente */

let index = 0; /* variable img */

function showSlide(i) {
  index = (i + images.length) % images.length;
  slides.style.transform = translateX(${-index * 100}%);
} /* si i es mayor q el n de img vuelve y si es menor va a 0 */

prevBtn.addEventListener('click', () => showSlide(index - 1)); /* evento mover */
nextBtn.addEventListener('click', () => showSlide(index + 1)); /* tmb 200 */

showSlide(0); /* empieza en 0 */

setInterval(() => { showSlide(index + 1); }, 3000); /* pasa */