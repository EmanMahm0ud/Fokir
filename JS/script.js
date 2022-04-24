const navbar = document.querySelector(".dash-container");
const navList = document.querySelector(".nav-menu ul");

function openMenu() {
    console.log("nav")
    if (window.getComputedStyle(navList).display === "none") {
        navList.style.display = "block";
        console.log("d-none");
    } else if (window.getComputedStyle(navList).display === "block") {
        navList.style.display = "none";
        console.log("d-esle ", navList.style.display);
    }
}

function resetNavbar() {
    console.log(window.innerWidth);
    if (window.innerWidth > 1000) {
        navList.style.display = "flex";
    } else {
        navList.style.display = "none";
    }
}

navbar.addEventListener("click", openMenu);

window.addEventListener("resize", resetNavbar);