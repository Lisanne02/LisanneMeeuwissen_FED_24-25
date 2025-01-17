// JavaScript Document
console.log("hi");

const OpenButton = document.querySelector('nav:nth-of-type(1) button:nth-of-type(1)');
const SluitButton = document.querySelector('nav:nth-of-type(2) button');
const Navigatie = document.querySelector('nav:nth-of-type(2)');
const video = document.querySelector('section:nth-of-type(1) video'); // Select the video element in section 1

OpenButton.addEventListener("click", NavOpen);
SluitButton.addEventListener("click", NavSluit);

function NavOpen() {
    Navigatie.classList.add('Open');
    console.log("hi");

    // Hide or remove the video when the nav opens
    if (video) {
        video.style.display = 'none'; // This will hide the video
        // Alternatively, you can use video.remove() to completely remove it
        // video.remove();
    }
}

function NavSluit() {
    Navigatie.classList.remove('Open');
    console.log("hi");

    // Optionally, show the video again when the nav closes
    if (video) {
        video.style.display = 'block'; // This will make the video visible again
    }
}

const carousel = document.querySelector('section:nth-of-type(7) ul');
const prevBtn = document.querySelector('section:nth-of-type(7) button:nth-of-type(1)');
const nextBtn = document.querySelector('section:nth-of-type(7) button:nth-of-type(2)');

let index = 0;
const slides = document.querySelectorAll('section:nth-of-type(7) ul li');
const totalSlides = slides.length;

// Voeg de klasse "active" toe aan de zichtbare slide
const moveToSlide = (slideIndex) => {
    carousel.style.transform = `translateX(${-20 * slideIndex}%)`;
    index = slideIndex;
    updateActiveSlide();
};

const moveToNextSlide = () => {
    if (index < totalSlides - 1) {
        moveToSlide(index + 1);
    } else {
        moveToSlide(0);
    }
};

const moveToPrevSlide = () => {
    if (index > 0) {
        moveToSlide(index - 1);
    } else {
        moveToSlide(totalSlides - 1);
    }
};

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);


const carousel9 = document.querySelectorAll('section:nth-of-type(9) article');
const prevBtn9 = document.querySelector('section:nth-of-type(9) button:nth-of-type(1)');
const nextBtn9 = document.querySelector('section:nth-of-type(9) button:nth-of-type(2)');

let index9 = 0;
const totalSlides9 = carousel9.length;

const updateActiveSlide9 = () => {
    carousel9.forEach((slide, i) => {
        slide.classList.toggle('active', i === index9);
    });
};

const moveToSlide9 = (slideIndex) => {
    index9 = slideIndex;
    updateActiveSlide9();
};

const moveToNextSlide9 = () => {
    if (index9 < totalSlides9 - 1) {
        moveToSlide9(index9 + 1);
    } else {
        moveToSlide9(0);
    }
};

const moveToPrevSlide9 = () => {
    if (index9 > 0) {
        moveToSlide9(index9 - 1);
    } else {
        moveToSlide9(totalSlides9 - 1);
    }
};

nextBtn9.addEventListener('click', moveToNextSlide9);
prevBtn9.addEventListener('click', moveToPrevSlide9);

// Initialize the first slide as active
updateActiveSlide9();