function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.classList.toggle('show');
}

function themetoggle() {
    const toggle_btn = document.querySelector(".theme-toggle-btn");
    const body_element = document.body;
    const nav = document.querySelector(".nav-cont");
    if (toggle_btn.textContent === "Dark") {
        toggle_btn.textContent = "Light";
        body_element.style.backgroundColor = "black";
        nav.style.background = "linear-gradient(to bottom , #225e25 40% , #173d18)";
        localStorage.setItem("theme" , "light");
    } else {
        toggle_btn.textContent = "Dark";
        body_element.style.backgroundColor = "white";
        nav.style.background = "linear-gradient(to bottom , #2E7D32 40% , #266629)";
        localStorage.setItem("theme" , "dark");
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const toggle_btn = document.querySelector(".theme-toggle-btn");
    const body_element = document.body;

    if (savedTheme) {
        if (savedTheme === 'light') {
            toggle_btn.textContent = "Light";
            body_element.style.backgroundColor = "black";
        } else {
            toggle_btn.textContent = "Dark";
            body_element.style.backgroundColor = "white";
        }
    }
}

document.addEventListener("DOMContentLoaded", loadTheme);