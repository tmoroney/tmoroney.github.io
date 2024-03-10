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

// Listen for the scroll event
window.addEventListener('scroll', function() {

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
});

// Get the indicator
const indicator = document.querySelector('.indicator');