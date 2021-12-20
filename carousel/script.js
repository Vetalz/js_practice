const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const slides = document.querySelectorAll('.image');
const dots = document.querySelectorAll('.dot')

let index = 0;

function activeSlide(n) {
    console.log(n)
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index += 1;
        activeSlide(index);
    }
}

function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index -= 1;
        activeSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        activeSlide(index);
    });
});

setInterval(nextSlide, 2000);
