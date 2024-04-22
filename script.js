// Get all the sections and navbar links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Function to set the indicator
function setIndicator() {
    // Make the indicator visible
    indicator.style.opacity = '1';

    // Check each section to see if it's in the viewport
    for (let index = 0; index < sections.length; index++) {
        if (isInViewport(sections[index])) {
            // If the section is in the viewport, add the .active class and break the loop
            const navLink = navLinks[index];
            indicator.style.left = `${navLink.offsetLeft}px`;
            indicator.style.width = `${navLink.offsetWidth}px`;
            break;
        }
    }
}

// Function to switch the theme
function switchTheme() {
    // Get the current theme
    const currentTheme = document.documentElement.getAttribute('data-theme');

    // Switch the theme
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeSwitcher.textContent = '🌙'; // Show a moon when the theme is light
        channelsightLogo.src = "https://assets-global.website-files.com/64248e7ed5f30d6effe57d5d/645bc6cf55c0bc11098dd759_Navbar%20logo_Word%20Mark%20Dark%20Grey%20Large%20140px%20x%20480px_Word%20Mark%20Dark%20Grey%20Large%20140px%20x%20480px.png";
        workdayLogo.src = "assets/Workday_Logo.png";
        trinityLogo.src = "assets/Trinity_Logo_Light.png";

    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeSwitcher.textContent = '🌞'; // Show a sun when the theme is dark
        channelsightLogo.src = "https://assets-global.website-files.com/64248e7ed5f30d6effe57d5d/64612b0b2bd50f8f9e51fba0_Navbar%20logo_Word%20Mark%20white%20Large%20140px%20x%20480px_Word%20Mark%20Dark%20Grey%20Large%20140px%20x%20480px.png";
        workdayLogo.src = "assets/Workday_Logo_Dark.png";
        trinityLogo.src = "assets/Trinity_Logo_Dark.png";
    }
}

const chars1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector('h1[data-value="Encryption"]').onmouseover = event => {
    let interval = null;
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return chars1[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
};

document.querySelector('h1[data-value="Projects"]').onmouseover = event => {
    let interval = null;
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return chars1[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
};

function showModal(modalName) {
    var modal = document.getElementById(modalName);
    var modalContent = modal.querySelector('.modal-content');
    modal.style.display = "block";
    setTimeout(function() {
        modal.style.opacity = "1";
        modalContent.style.transform = "scale(1)";
    }, 20);
}

function hideModal(modalName) {
    var modal = document.getElementById(modalName);
    var modalContent = modal.querySelector('.modal-content');
    modal.style.opacity = "0";
    modalContent.style.transform = "scale(0.7)";
    setTimeout(function() {
        modal.style.display = "none";
    }, 200);
}


// Get the indicator
const indicator = document.querySelector('.indicator');
const themeSwitcher = document.querySelector('#theme-switcher');
const workdayLogo = document.querySelector('#workday-logo');
const channelsightLogo = document.querySelector('#channelsight-logo');
const trinityLogo = document.querySelector('#trinity-logo');

// Listen for the scroll event
window.addEventListener('scroll', setIndicator);
themeSwitcher.addEventListener('click', switchTheme);

var mouseX = 0;
var mouseY = 0;
document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function hideModalOverlay(modalName) {
    var modal = document.getElementById(modalName);
    var modalContent = modal.querySelector('.modal-content');
    var rect = modalContent.getBoundingClientRect();
    var isInBounds = mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom;

    if (!isInBounds) {
        hideModal(modalName);
    }
};


// Set the indicator when the page loads
setIndicator();

document.addEventListener("DOMContentLoaded", function () {
    // Set the initial state of the theme switcher
    document.documentElement.setAttribute('data-theme', 'dark'); // or 'dark'
    const currentTheme = document.documentElement.getAttribute('data-theme');
    themeSwitcher.textContent = currentTheme === 'dark' ? '🌞' : '🌙';
});
