const carouselInner = document.querySelector('.carousel-inner__feedback');
const dots = document.querySelectorAll('.wrapper__feedback__content__dots__dot');

carouselInner.addEventListener('scroll', function () {
    const totalWidth = carouselInner.scrollWidth - carouselInner.clientWidth; 
    const itemWidth = totalWidth / 6; 
    let activeIndex = Math.floor(carouselInner.scrollLeft / itemWidth);
    activeIndex = Math.max(0, Math.min(activeIndex, 5));

    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active__dot');
        } else {
            dot.classList.remove('active__dot');
        }
    });
});