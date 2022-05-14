const navbarDashes = document.querySelector(".dash-container");
const navList = document.querySelector(".nav-menu ul");
const homeSection = document.querySelector(".home");
const numberSection = document.querySelector(".numbers");
const arrowUp = document.querySelector(".arrow-up");
const navbar = document.querySelector(".nav-bar");
const number = document.querySelectorAll(".number");
const sliderBtns = document.querySelectorAll(".slider-btns button");
const navbarLists = document.querySelectorAll(".nav-menu li");
const sectionNames = ["home", "about", "services", "portfolio", "feedback", "blog", "contactus"];
const sectionTops = [];
const sectionHeights = [];
(function () {
    for (let i = 0 ; i < navbarLists.length ; i++) {
        sectionTops.push(document.getElementById(sectionNames[i]).offsetTop);
        sectionHeights.push(document.getElementById(sectionNames[i]).offsetTop + document.getElementById(sectionNames[i]).offsetHeight);
    }
})();

let flag = true;  // true if the screen doesn't reach the "numbers" section

// add/remove active class to/from the list of the active section
function toggleActive() {
    for (let i = 0 ; i < navbarLists.length ; i++) {
        if (window.scrollY > sectionTops[i] - 60 && window.scrollY < sectionHeights[i]) {
            let activeSection = document.querySelector(".nav-bar .active");
            activeSection.classList.remove("active");
            navbarLists[i].classList.add("active");
        }
    }
}

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
async function counter(endNum, step, cellNum) {
    for (let i = 0 ; i <= endNum ; i+=step) {
        await sleep(0);
        number[cellNum].innerHTML = i;
    }
}

// when the user clicks on a slider button the cards are changed
function changeSlider(i) {
    let cards = document.querySelectorAll(".feedback .card");
    for (let j = 0; j < cards.length; j++) {
        if (i == 0) {
            cards[j].style.left = "0";
        } else if (i == 1) {
            cards[j].style.left = "-50%";
        }
        sliderBtns[j].classList.remove("active-slide");
    }
    sliderBtns[i].classList.add("active-slide")
}

navbarDashes.addEventListener("click", openMenu);

window.addEventListener("resize", resetNavbar);

window.addEventListener("scroll", () => {
    showArrowUp();
    editNavbarColor();
    if (flag && window.scrollY + window.innerHeight - 100 >= numberSection.offsetTop) {
        flag = false;
        counter(200, 2, 0);
        counter(346, 2, 1);
        counter(1800, 9, 2);
        counter(1200, 6, 3);
    }
    toggleActive();
});

for (let i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].addEventListener("click", () =>{
        changeSlider(i);
    });
}