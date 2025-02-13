function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.classList.toggle('show');
}

function themetoggle() {
    const toggle_btn = document.querySelector(".theme-toggle-btn");
    const body_element = document.body;
    const nav = document.querySelector(".nav-cont");
    const dark_color = "#1A1A1A";
    const white_color = "#F8F9FA";
    const light_nav_bgc = "#2E5A88";
    const dark_nav_bgc = "transparent";
    const border_bottom_color_nav = "#2c5581";
    const wraper_of_p = document.getElementsByClassName("wraper-of-p")[0];
    const intro_p_elements = wraper_of_p ? wraper_of_p.getElementsByTagName("*") : [];
    const font_color_dark = "black";
    const font_color_light = "white";
    const laptop_image = document.querySelector(".laptop_image");
    const media_query = window.matchMedia("(max-width: 768px)");
    const menu_items = document.querySelector(".menu-items");

    if (toggle_btn.textContent === "Dark") {
        toggle_btn.textContent = "Light";
        toggle_btn.style.color = "white";
        toggle_btn.style.backgroundColor = "black";
        body_element.style.backgroundColor = dark_color;
        nav.style.backgroundColor = dark_nav_bgc;
        nav.style.borderBottom = "0 solid transparent";
        nav.style.boxShadow = "0 0 0 transparent";
        for (let element of intro_p_elements) {
            element.style.color = font_color_light;
            element.style.textShadow = `0 0 6px white`;
        }
        if (media_query.matches) {
            menu_items.style.backgroundColor = "#1d1d1daf";
        }
        else {
            menu_items.style.backgroundColor = "transparent"
        }
        laptop_image.style.filter = "drop-shadow(0 0 10px white)";
        localStorage.setItem("bgc", dark_color);
        localStorage.setItem("theme", "dark");
        localStorage.setItem("nav_bgc", dark_nav_bgc);
    } else {
        toggle_btn.textContent = "Dark";
        toggle_btn.style.color = "black";
        toggle_btn.style.backgroundColor = "white";
        body_element.style.backgroundColor = white_color;
        nav.style.backgroundColor = light_nav_bgc;
        nav.style.borderBottom = `6px solid ${border_bottom_color_nav}`;
        nav.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
        for (let element of intro_p_elements) {
            element.style.color = font_color_dark;
            element.style.textShadow = `0 0 6px black`;
        }
        if (media_query.matches) {
            menu_items.style.transition = "1s ease-in-out";
            menu_items.style.backgroundColor = "#2e59889a";
        }
        else {

        }
        laptop_image.style.filter = "drop-shadow(0 0 10px black)";
        localStorage.setItem("bgc", white_color);
        localStorage.setItem("theme", "light");
        localStorage.setItem("nav_bgc", light_nav_bgc);
    }
}

function loadTheme() {
    const nav = document.querySelector(".nav-cont");
    const savedTheme = localStorage.getItem('theme');
    const savedNavBGC = localStorage.getItem('nav_bgc');
    const border_bottom_color_nav = "#2c5581";
    const toggle_btn = document.querySelector(".theme-toggle-btn");
    const body_element = document.body;
    const web_bgc = localStorage.getItem("bgc");
    const white_color = "#F8F9FA";
    const wraper_of_p = document.getElementsByClassName("wraper-of-p")[0];
    const intro_p_elements = wraper_of_p ? wraper_of_p.getElementsByTagName("*") : [];
    const laptop_image = document.querySelector(".laptop_image");

    if (savedTheme) {
        if (savedTheme === 'dark') {
            toggle_btn.textContent = "Light";
            toggle_btn.style.color = "white";
            toggle_btn.style.backgroundColor = "black";
            body_element.style.backgroundColor = web_bgc;
            nav.style.backgroundColor = savedNavBGC;
            nav.style.borderBottom = "0 solid transparent";
            nav.style.boxShadow = "0 0 0 transparent";
            for (let element of intro_p_elements) {
                element.style.color = "white";
                element.style.textShadow = `0 0 6px white`;
            }
            laptop_image.style.filter = "drop-shadow(0 0 10px white)";
        } else {
            toggle_btn.textContent = "Dark";
            toggle_btn.style.color = "black";
            toggle_btn.style.backgroundColor = "white";
            body_element.style.backgroundColor = white_color;
            nav.style.backgroundColor = savedNavBGC;
            nav.style.borderBottom = `6 solid ${border_bottom_color_nav}`;
            nav.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            for (let element of intro_p_elements) {
                element.style.color = "black";
                element.style.textShadow = `0 0 6px black`;
            }
            laptop_image.style.filter = "drop-shadow(0 0 10px black)";
        }
    } else {
        toggle_btn.textContent = "Dark";
        toggle_btn.style.color = "black";
        toggle_btn.style.backgroundColor = "white";
        body_element.style.backgroundColor = white_color;
        nav.style.backgroundColor = light_nav_bgc;
        for (let element of intro_p_elements) {
            element.style.color = font_color_dark;
            element.style.textShadow = `0 0 6px black`;
        }
        laptop_image.style.filter = "drop-shadow(0 0 10px black)";
        localStorage.setItem("bgc", white_color);
        localStorage.setItem("theme", "light");
        localStorage.setItem("nav_bgc", light_nav_bgc);
    }
}

document.addEventListener("DOMContentLoaded", loadTheme);