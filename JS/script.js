const navbarDashes = document.querySelector(".dash-container");
const navList = document.querySelector(".nav-menu ul");
const homeSection = document.querySelector(".home");
const numberSection = document.querySelector(".numbers");
const arrowUp = document.querySelector(".arrow-up");
const navbar = document.querySelector(".nav-bar");
const number = document.querySelectorAll(".number");

let flag = true;  // true if the screen doesn't reach the "numbers" section

// open/close the navbar items when the dashed button is clicked
function openMenu() {
    if (window.getComputedStyle(navList).display === "none") {
        navList.style.display = "block";
    } else if (window.getComputedStyle(navList).display === "block") {
        navList.style.display = "none";
    }
}

// display the navbar items/dashed button based on screen width
function resetNavbar() {
    if (window.innerWidth > 1000) {
        navList.style.display = "flex";
    } else {
        navList.style.display = "none";
    }
}

// display the arrow-up when the screen is far from the home section
function showArrowUp() {
    if (window.scrollY > homeSection.offsetHeight / 2) {
        arrowUp.style.visibility = "visible";
        arrowUp.style.opacity = 1;
    } else {
        arrowUp.style.opacity = 0;
        arrowUp.style.visibility = "hidden";
    }
}

// change the navbar color based on the screen
function editNavbarColor() {
    if (window.scrollY == homeSection.offsetTop) {
        navbar.style.backgroundColor = "transparent";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.788)";
    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// count from 0 to a specific number when the screen reaches the number section
async function counter(endNum, sleepNum, cellNum) {
    for (let i = 0 ; i <= endNum ; i+=2) {
        await sleep(sleepNum);
        number[cellNum].innerHTML = i;
    }
}

navbarDashes.addEventListener("click", openMenu);

window.addEventListener("resize", resetNavbar);

window.addEventListener("scroll", () => {
    showArrowUp();
    editNavbarColor();
    if (flag && window.scrollY + window.innerHeight - 100 >= numberSection.offsetTop) {
        flag = false;
        counter(80, 50, 0);
        counter(138, 40, 1);
        counter(720, 5, 2);
        counter(1200, 0, 3);
    }
});