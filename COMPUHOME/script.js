// script.js — Versión Gamer Rojo/Amarillo
// -------------------------------------------
// Control del Slider Manual Gamer

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.slider-dots button');

let index = 0;

function showSlide(i) {
    index = i;
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;

    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        showSlide(i);
    });
});

// Navegación con flechas — estilo gamer
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

if (arrowLeft && arrowRight) {
    arrowLeft.addEventListener('click', () => {
        index = (index === 0) ? images.length - 1 : index - 1;
        showSlide(index);
    });

    arrowRight.addEventListener('click', () => {
        index = (index === images.length - 1) ? 0 : index + 1;
        showSlide(index);
    });
}

// Animación de botones gamer
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transform = 'scale(1.08)';
        btn.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.7)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.transform = 'scale(1)';
        btn.style.boxShadow = 'none';
    });
});