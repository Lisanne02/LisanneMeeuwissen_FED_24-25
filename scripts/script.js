console.log("hi");


//Het openen en sluiten van de navigatie

const OpenButton = document.querySelector('nav:nth-of-type(1) button:nth-of-type(1)');
const SluitButton = document.querySelector('nav:nth-of-type(2) button');
const Navigatie = document.querySelector('nav:nth-of-type(2)');
const video = document.querySelector('section:nth-of-type(1) video');

OpenButton.addEventListener("click", NavOpen);
SluitButton.addEventListener("click", NavSluit);

//Het weghalen en terug plaatsen van de video achter de nav zodat de knoppen klikbaar zijn.

function NavOpen() {
    Navigatie.classList.add('Open');
    console.log("hi");

    if (video) {
        video.style.display = 'none'; 
       
    }
}

function NavSluit() {
    Navigatie.classList.remove('Open');
    console.log("hi");

    if (video) {
        video.style.display = 'block'; 
    }
}

//De carosel van sectie 7 (Bron: https://codepen.io/Sybje123456789/pen/ByBJvyb)

const carousel = document.querySelector('section:nth-of-type(7) ul');
const prevBtn = document.querySelector('section:nth-of-type(7) button:nth-of-type(1)');
const nextBtn = document.querySelector('section:nth-of-type(7) button:nth-of-type(2)');

let index = 0;
const slides = document.querySelectorAll('section:nth-of-type(7) ul li');
const totalSlides = slides.length;

const moveToSlide = (slideIndex) => {
    carousel.style.transform = `translateX(${-19.5 * slideIndex}%)`;
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


//De carosel van sectie 9 (Bron: https://codepen.io/Sybje123456789/pen/ByBJvyb)

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

updateActiveSlide9();


//Het klikbaar maken van het keuze menu in sectie 4

    const fourthSection = document.querySelector('section:nth-of-type(4)');
    if (fourthSection) {
        const listItems = fourthSection.querySelectorAll('details ul li');
        listItems.forEach((item) => {
            item.addEventListener('click', function () {
                const details = item.closest('details');
                const summary = details.querySelector('summary');
                summary.textContent = this.textContent;
                details.open = false;
            });
        });
    }

//De verschillende kleur thema's

    const lightModeBtn = document.getElementById('light-mode');
    const darkModeBtn = document.getElementById('dark-mode');
    const funModeBtn = document.getElementById('fun-mode');
    const body = document.body;
    
   
    function setMode(mode) {
        body.classList.remove('light-mode', 'dark-mode', 'fun-mode');
        body.classList.add(mode);
        localStorage.setItem('theme', mode);
    }
    
    lightModeBtn.addEventListener('click', () => setMode('light-mode'));
    darkModeBtn.addEventListener('click', () => setMode('dark-mode'));
    funModeBtn.addEventListener('click', () => setMode('fun-mode'));
    
    const savedTheme = localStorage.getItem('theme') || 'light-mode'; 


//Ticket rain, Het laten regenen van tickets

function startTicketRain() {
    const section = document.querySelector('section:nth-of-type(10)');
    const totalTickets = 30; 
  
    for (let i = 0; i < totalTickets; i++) {
      const ticket = document.createElement('div');
      ticket.classList.add('ticket');
  
      const randomLeft = Math.random() * 100; 
      const randomDelay = Math.random() * 2 + 's'; 
      const randomDuration = Math.random() * 3 + 3 + 's'; 
  
      ticket.style.left = `${randomLeft}%`;
      ticket.style.animationDuration = randomDuration;
      ticket.style.animationDelay = randomDelay;
  
      section.appendChild(ticket);
  
      ticket.addEventListener('animationend', () => {
        ticket.remove();
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('section:nth-of-type(12) button');
  
    button.addEventListener('click', () => {
      startTicketRain();
    });
  });



  
//Spotlight effect op afbeeldingen in sectie 4

const buttons = document.querySelectorAll('section:nth-of-type(4) button');
const images = document.querySelectorAll('section:nth-of-type(4) img');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        images.forEach(image => {
            image.classList.add('clicked');
        });
        
        setTimeout(function() {
            images.forEach(image => {
                image.classList.remove('clicked');
            });
        }, 2000);
    });
});