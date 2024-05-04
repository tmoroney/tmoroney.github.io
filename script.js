//"https://a.cdn-hotels.com/gdcs/production99/d1691/91873cc4-40c0-4eb3-aac2-c4761256e1bf.jpg?impolicy=fcrop&w=800&h=533&q=medium",
//"https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/26/117393.jpg",
const photos = [
    {
        link: "https://lh3.googleusercontent.com/pw/AP1GczPrLR5lBRcqJuOqZY8lTKVSDbmhFvb_atkXlydmVFNK8JBj__TNRyBFY2s0jatAGbFsg2BCysbwX_T_GBIW1NBq5PGaZJ-2Slns4Hz5fEp1fb4SXtnk9F-932WPJn79wYtWExsjllNk2H02A6Fq7ry7qQ=w1197-h901-s-no-gm?authuser=0",
    },
    {
        link: "https://lh3.googleusercontent.com/pw/AP1GczMR1YMomBDdWIZet3BxV68zZURvmKNrgnf0I7vr4dDQWwAvMYEUs8c2LWuAON1GK_FoQlQjmiNzsE4x-RbRQzKhd9ZLw7DClE_cL5Lh6eemnWlGvRCIjYeliXX1QyP-pB4u25_z5RTRWScTNTcwdgx1PQ=w1197-h901-s-no-gm?authuser=0",
        startPos: 'bottom',
        endPos: 'center right',
    },
    {
        link: "https://lh3.googleusercontent.com/pw/AP1GczPPq2X6g6LJXOLewSqv4qGbTZzsYutfBVhnpykuXetlLfifKzKW9ovIpYTKb981dkqBeK-K7OZ8xvV8l6HVrOqpLk6QU2rpbZMwVPezAAoo-BFSck18deEfuq27BF0tY4sOTTopxaLTeQQZ-wkRPfaF2g=w1197-h901-s-no-gm?authuser=0",
        startPos: 'center',
        endPos: 'bottom right',
    },
    {
        link: "https://lh3.googleusercontent.com/pw/AP1GczPbqdM-77D7RenugY4_3oRpJtLf_H-6-gNlxWHPscwdcmr53PXHt4xBDJ1gvMycW_U-PyymVF9jeOJHN97y2TeGt7A0pUCRVaVB3lTNBiUg1FJVei1G_2XesGYz4rQUkBQpMcUMegYmr8kv9qCaphiTcA=w1197-h901-s-no-gm?authuser=0",
        startPos: 'center',
        endPos: 'bottom right',
    },
    {
        link: "https://lh3.googleusercontent.com/pw/AP1GczM1oH0MJjuhi0XBdZ81ZHhPU_hurZYpbfK5eo9RZUGEWB5DmGbnh5_5l0hhfk2zOhm2PkKPdOs1tEX62mlxxJaUtnupVhHVjqa7eed63Ft-Pb3hIEFKK921YF1hVYK2_aP4GjKfqkPYA1g010AsQojFk8VtESGszWRhAk4q0fWwY2Oz0pbvD8br7kX6sqPWD7Ad_Xcmc4XiiQBM6hw3et9Qxw58BZgQbBz1Qih-yi-JjKqG-KEUddMpita6Gph1aepDs3FmhPIPlVHlgvvuRVRJvGKI14_ngKbBWRSZhPA3awxoROq_U8nDQff64X8tfKDLTprpuQyPR90M-6kIRHx4Hih8qEsGSnTZpWD4kTQZkVxRItBv4yeOwIz6rybbAGeOL0rMH82P0ESEupo--M4RPHbZIbbFbSoX3A648TX1jqO3RqQgJB4cOGdaTFto04ay0l_wIdv2R1Sw7mWChHK45sE5gZvvF2beIwVrAhNXikow0VRKuDU92QkyEubh65s9AO7ajIErudOMzVeTe03RMNlWBfFNj6UALez4dneQgR-d37FaTek3k6s84MWIsrFFUBeNyELnMqsDAuyS-whPVKxIYL67nnhjsk1t0R9dBiCEorBwtw1pDeyYUWEDfGIV9w4O3xBQCd10u-Fp65_J8kKMeylfo9dTPO3JvKNiyvS2JBavfABHkHBiafRNOVoxyHYnXE4fY-p73gQmI2qEql0bpjkmvX_wtbvH-__3OtPV_s71nwJvmzPgeVqEpd5qAGqK5CpzVRrKt_jRcIQpk0vV8XwXLf6fBWHf41R_xtzu_2iTd-y8IU_lRKxR_MPnvLyIBPxmsD26EgZZquxs1olnntcxiH9_0UfKE4i6b5LEvvdd9XZp8F7gdPCkIzaA-Vl5rK-yWJhgxXYOrACsWlR7QEBNAJ3QLYZ49Atg-5rVKhhpmoLk0Q=w1197-h901-s-no-gm?authuser=0",
        startPos: 'bottom',
        endPos: 'top right',
    },
    {
        link: "https://lh3.googleusercontent.com/pw/AP1GczOlxlaVaKldRh8-QLxjgrPTSsxwh5nJfYSsmLUf1-gLTLw0dURbsLM4lMWKsXCsGcbSNq_QwNkLc9EhBsRI7xsIJ2LqEKHXlH8inORQpN3gGFapVfqBjyynypoqbhw9J_AWpSytKSatnoBq_RER1ULxow=w1197-h901-s-no-gm?authuser=0",
    }
]
let photoIndex = 0;

function nextPhoto() {
    let hero = document.querySelector(".hero");
    let root = document.documentElement;
    hero.style.opacity = '0.2'; // Fade out

    setTimeout(() => {
        photoIndex = (photoIndex + 1) % photos.length;
        hero.style.backgroundImage = `url('${photos[photoIndex].link}')`;
        //hero.style.backgroundPosition = photos[photoIndex].startPos;
        //root.style.setProperty('--image-hover-position', 'bottom right');
        hero.style.opacity = '1'; // Fade in
    }, 400); // Change the image after 1 second (the same duration as the transition)
}

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
