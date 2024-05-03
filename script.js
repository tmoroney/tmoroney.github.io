const photos = [
    //"https://a.cdn-hotels.com/gdcs/production99/d1691/91873cc4-40c0-4eb3-aac2-c4761256e1bf.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    //"https://idsb.tmgrup.com.tr/ly/uploads/images/2021/05/26/117393.jpg",
    "https://lh3.googleusercontent.com/pw/AP1GczMR1YMomBDdWIZet3BxV68zZURvmKNrgnf0I7vr4dDQWwAvMYEUs8c2LWuAON1GK_FoQlQjmiNzsE4x-RbRQzKhd9ZLw7DClE_cL5Lh6eemnWlGvRCIjYeliXX1QyP-pB4u25_z5RTRWScTNTcwdgx1PQ=w1197-h901-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczNImHv9_c5QnfHN2KFmWzkIDlQFiMfWx6ZQxJmPuwqmjMcrjyZycRcD-Nbi1F960Nq2E6AWrDsKn-fbx2nnG0iCI7HcI1R0fCAh-R4xwE-qhZCKOV0Jp_D9ikXzdPLPp5iBJ0yKaSvJHkXo7NQ6IQp_fQ=w1197-h901-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMNQ_fz-9Y-RcEfRe83GxTEMXlVkuDha5htCNOz830dbpaJ4wYqW-diFiwoZ4wJ6hPGy53LVruQuPGYZQi2v6NE7GnkHfiZ2MCZjkwPPVqddpDS8TJNvC24NcBqInGbYpG4Cye6cVI6tAEm7493hd1GG0VRK97nV4N0SGrFY7dqlnT0EUvdojTriqZ6DKyKm6XrBGq4JXOahq-GiWst9uoKuskUnxk27iyB7RcCI7-l1jpA5ArcCGYbF1QBRpMDeKQaBmQzEyUskzoCvrUkACMUKcUPdJtGMg4Jcpm1324BUKmr65j42L63jP-pq7GO_PjyiQrWrnjZVKWjZGJg635kshn4KjCMld0WUCGZoqbDAcFxhpkk0DVex4soZTsORSu_uu4WrN5mH6bBdOPZCzLggH6QZU_6QZAGH0mhakWDDb0VVhbjVvLEFh0VrThyOLyzHM5Dbv3IF0HZAs1SEY_taDQTORq3IIBJRkq9KIwlMx4uYrXdpCA3j3ccLUft_2RjXABhPjDUV0lc_QWmhVDDAHZmPxPvbpSnO7HtbBh72ptNJuPyg1K2gRXhVIJFh_fgMhD4gFy3jTSd3-fnTGWHrHGZbzt8bSM0ecinq2wRUsaCNVnqBLCfTeR1nq4caDaaG6c166yxz1QLbwLW2XbOwhgxIuWmItui1Xq10_uw_ikQXWVmwy4utTiHiPbRVQQWiVIdO-A1eUQqZTsRc0OSpar_Q4lpsFz-A2BaJNLFLKRYdHWhTpZC6echQ_tajHjVfTOJ2_RdMIRUDl1AvwcRL8kYgMlXe7IW9LYNkPn2hhHoFi3cMyqw_fPTea2w00bbOPwGuph-2CuXCtVVsPNGz3V_x1do9V_HjfBSJJm_btroZ6oiLaWK8rh7klPxARUvuMSJG_iSm4qrsJfYs8DftYsibgWnbvPLguSmvb3-51-eSSushWUUbNw=w1197-h901-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczMnD5aXmEgWtCVX2w1Ofr2vU_6s69HB6cdRX_62kkrrPKS5Z7y3g7kj4l-DZG7O9lGcLjfdDcxLOoXn25A9IRZukCuI3cpUgVPivsuWRELoi5_sZJvwvqL-5U1ZtFmPptBsycaOZjed6kNHVDs2av4v_q6uFwzUVaEoWM2_QuvHLMn5v3k3HsLBizyZiWzk2c8oYx_NJokDTZUyyeA06KTocLA7-DtFddW3IEdZt_39CDqZMAJBsPc5H8e2mFMOiJElWrM882HPdPemIPLAVbzRZAR9B7g4fTECCfbIxxwqjya6hKEnDStolwtBjGi2Ors88zo0io7Q_qEo7dRkk4DFQ53LeLOWWx_5hJnWM3wNm-33MZl-fLQyd86lY6ODbLIVBgsL0uPd3X2F3XNaEhh82eX2aixd4sHyEtCSk_IHHoMEptGGKig1yvSd2M3o3oAwG0XD6cWKCLKCJW9WNK4EZYJaa3m2gB2szHRtIzXEmYGg9P6ZKBJACbh8RcudmWgclHwXGYrjvQJadpM-V3-Bbeg4TqKy478x2prNw1NLnkMlKUKPLjF_e_PxNZ2rQ9Uavn8aY0Wc8_z3x4SM1ubmumnfD3U9rHXxftH-vwAsOX-_A3TyYxNEIevhs9bL19RbSDCzLwTx4kWHNoOlXsdZdpz8Zi8Y-g6F1NQ18C8DCWNMmWG48E4HHHOMPymAMZ35fllCxO0wW0TTpXX8f6k4cqr2owZdyMIXiVHC85j6SlpjGLkPUYWS3YTtWvSn-bwk9Svw2_5HhsIsuacLIP1LDKcQemqVmWpVR0n8ZTCDgWX9IVbQ-2j6B8FnITizYDbgx36OU4KtfR11TLeepP-1CzTblKfs7NQqqmjnh95liHhEiIlET662xtiTYYCuRDlVdVfz1IduWxfzsVrpgDpLBVYx7BGWBBCfK2r_J7fhmUV0-rrGhji_QLY=w1197-h901-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/AP1GczM3PI9-x4GW1Gsp8j_BmS81gL1Zv-HHB64sOgL2YuFvgSrOsJEc1tJ0ABjEYdfORtdyay7IA3xcIKMUywnFW9188FgWlArwZDhLhrnrBy845lh_HHzJkay_trQtY0Qo8Qg3OTtE8oMnhibepXJqNjhkAwkn2wW76ZSl4dLvSBuj8ZlfgbnuTGSOA1oQZ8ty0OXsins-jL8kglzq1jXiD8p2jWcvGg18k3x7s8DjMwb3aJ16QzmEzCUJ-jyFW1AiKkp69JLexac40R8ZZ_7ZWunW2V6ZYoBxFubsDOgo2H9TM2_UMhlxHP5_MCa6Yno4Z93msSsnN85zPfsxtoedU4seUHjewvuX_dPzfAPAyvWcWh-qwwCDkh8oxDKpoGm9GuNwhydm6E1Vzcyau3mD8CZ04ZvqZyZVDQYr9zzPZt44WqzGBKuIXJhXx0j25t_HKUDr1_c1kl6eX8lQ0GzrM1ZTmF8VoFbqRu3e2SQMvsVoy58Qt-Wu4r5w0AmortoWRPCReHqhw_3kQFpI_gY-OVsP568r8tYVV7lE8CAUJZuseOZocuF_fIKK46JWHb_xbG5aZolnB4GHI8oi1wSQt-I2CksJEZ12XeKEje_GCFHCYSD0r0IWOpOTEKaKs8XNj2JJMu3mJTBpokD-MlihiZobU6LJfvnKWTfWMHk76CjKEdpSky41zw9g6isHiYv4Lh_SQoA5hPzDW4a6sfX_XxLa1McuYpuCgCeaYY7n0MWXRd1iKFFmIdQHYoAIqdolLQaRP_tkKpFDx3vubYlG6W-YR63q9tVKzu0SIihkod-0PaIwTDQmTJFDofpxEeCV_1zB3_mBTDQUXBa_erCmJKuCTKCjyNGBTkRuLaFL97vJj4Y-wrNiZNgq3JUgOc3M8oQ_yJGGCXNp0aNbn7uEm7cg8_Refa4zhX7mwy7cJVXdQ_3v42TlfQaH-rQ=w678-h901-s-no-gm?authuser=0"
]
let photoIndex = 0;

function nextPhoto() {
    let hero = document.querySelector(".hero");
    hero.style.opacity = '0.2'; // Fade out

    setTimeout(() => {
        photoIndex = (photoIndex + 1) % photos.length;
        hero.style.backgroundImage = `url('${photos[photoIndex]}')`;
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
