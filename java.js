let SlideIndex = 0;
let slides = document.querySelectorAll('.slide');
let points = document.querySelectorAll('.point');

function showSlide(index) {
     // Показать только один слайд, скрыть остальные
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
}

function activateDot(index) {// Активировать маркер для текущего слайда
    points.forEach((point) => {
        point.classList.remove('active');
    });
    points[index].classList.add('active');
}

function Slide(index) {
    SlideIndex = index;
    showSlide(SlideIndex);
    activateDot(SlideIndex);
}

setInterval(() => {
    SlideIndex = (SlideIndex + 1) % slides.length;
    showSlide(SlideIndex);
    activateDot(SlideIndex);
}, 3000); // автоматическое переключение каждые 3 секунды

showSlide(SlideIndex);// Показать начальный слайд
activateDot(SlideIndex);// Активировать начальный

 