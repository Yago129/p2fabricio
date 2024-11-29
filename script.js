// Menu hambúrguer
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Carrossel
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
};

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// A funcionalidade de clique nas imagens também foi adicionada
slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Mostra o primeiro slide
showSlide(currentSlide);
