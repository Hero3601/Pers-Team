function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.classList.toggle('show');
}

function themetoggle() {
    const toggle_btn = document.querySelector(".theme-toggle-btn");
    const body_element = document.body;
    const nav = document.querySelector(".nav-cont");
    const dark_color = "#8D7B68";
    const white_color = "#C8B6A6";
    const light_nav_bgc = "#a4907c9c";
    const dark_nav_bgc = "#8f7f6e9c";

    if (toggle_btn.textContent === "Dark") {
        toggle_btn.textContent = "Light";
        toggle_btn.style.color = "white";
        toggle_btn.style.backgroundColor = "black";
        body_element.style.backgroundColor = dark_color;
        nav.style.backgroundColor = light_nav_bgc;
        localStorage.setItem("theme", "dark");
        localStorage.setItem("nav_bgc", light_nav_bgc);
    } else {
        toggle_btn.textContent = "Dark";
        toggle_btn.style.color = "black";
        toggle_btn.style.backgroundColor = "white";
        body_element.style.backgroundColor = white_color;
        nav.style.backgroundColor = dark_nav_bgc;
        localStorage.setItem("theme", "light");
        localStorage.setItem("nav_bgc", dark_nav_bgc);
    }
}

function loadTheme() {
    const nav = document.querySelector(".nav-cont");
    const savedTheme = localStorage.getItem('theme');
    const savedNavBGC = localStorage.getItem('nav_bgc');
    const toggle_btn = document.querySelector(".theme-toggle-btn");
    const body_element = document.body;
    const dark_color = "#8D7B68";
    const white_color = "#C8B6A6";

    if (savedTheme) {
        if (savedTheme === 'dark') {
            toggle_btn.textContent = "Light";
            toggle_btn.style.color = "white";
            toggle_btn.style.backgroundColor = "black";
            body_element.style.backgroundColor = dark_color;
            nav.style.backgroundColor = savedNavBGC;
        } else {
            toggle_btn.textContent = "Dark";
            toggle_btn.style.color = "black";
            toggle_btn.style.backgroundColor = "white";
            body_element.style.backgroundColor = white_color;
            nav.style.backgroundColor = savedNavBGC;
        }
    }
}

document.addEventListener("DOMContentLoaded", loadTheme);