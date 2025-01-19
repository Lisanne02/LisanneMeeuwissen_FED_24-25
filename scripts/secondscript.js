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


//Het klikbaar maken van het keuze menu in sectie 1

    const fourthSection = document.querySelector('section:nth-of-type(1)');
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


//Spotlight effect op afbeeldingen in sectie 1

const buttons = document.querySelectorAll('section:nth-of-type(1) button');
const images = document.querySelectorAll('section:nth-of-type(1) img');

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