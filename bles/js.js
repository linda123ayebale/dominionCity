// let currentIndex = 1;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;
// const sliderWrapper = document.querySelector('.slider-wrapper');

// // Initial setup to show the first slide
// sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

// function showSlide(index) {
//     sliderWrapper.style.transition = 'transform 0.5s ease';
//     sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
// }

// function nextSlide() {
//     currentIndex++;
//     showSlide(currentIndex);

//     // If it's the last real slide, reset to the first real slide
//     if (currentIndex === totalSlides - 1) {
//         setTimeout(() => {
//             sliderWrapper.style.transition = 'none';
//             currentIndex = 1;
//             sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
//         }, 500); // Transition time must match the CSS transition time
//     }
// }

// setInterval(nextSlide, 3000); // Change slide every 3 seconds





let currentIndex = 0; // Starting index
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderWrapper = document.querySelector('.slider-wrapper');

function showSlide(index) {
    sliderWrapper.style.transition = 'transform 0.5s ease';
    sliderWrapper.style.transform = `translateX(-${index * 33.33}%)`; // Move by 33.33% to show 3 slides at a time
}

function nextSlide() {
    currentIndex++;
    if (currentIndex === totalSlides) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Initial setup to show the first set of slides
showSlide(currentIndex);
