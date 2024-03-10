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
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeSwitcher.textContent = '☀️'; // Show a sun when the theme is dark
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.setAttribute('data-theme', 'light'); // or 'dark'
});

// Get the indicator
const indicator = document.querySelector('.indicator');
const themeSwitcher = document.querySelector('#theme-switcher');

// Listen for the scroll event
window.addEventListener('scroll', setIndicator);
// Add an event listener to the theme switcher
themeSwitcher.addEventListener('click', switchTheme);

// Set the initial state of the theme switcher
const currentTheme = document.documentElement.getAttribute('data-theme');
themeSwitcher.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

// Set the indicator when the page loads
setIndicator();
document.documentElement.setAttribute('data-theme', 'light'); // or 'dark'