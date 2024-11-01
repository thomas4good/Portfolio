function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateY(-${currentSlide * 100}%)`; // Change to translateY for vertical
}