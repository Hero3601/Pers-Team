function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.classList.toggle('show');
}

function updateMenuBackgroundColor(theme) {
    const media_query = window.matchMedia("(max-width: 768px)");
    const menu_items = document.querySelector(".menu-items");

    if (media_query.matches) {
        if (theme === "dark") {
            menu_items.style.backgroundColor = "#1d1d1daf";
        } else {
            menu_items.style.backgroundColor = "#2e59889a";
        }
    } else {
        menu_items.style.backgroundColor = "transparent";
    }
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
    const wraper_of_p_elements = document.getElementsByClassName("wraper-of-p");
    const font_color_dark = "black";
    const font_color_light = "white";
    const images = document.querySelectorAll(".image");
    const menu_items = document.querySelector(".menu-items");
    const langs_parent = document.querySelectorAll(".parent-langs");
    const html_element = document.documentElement;

    if (toggle_btn.textContent.trim() === "Dark") {
        toggle_btn.textContent = "Light";
        toggle_btn.style.color = "white";
        toggle_btn.style.backgroundColor = "black";
        body_element.style.backgroundColor = dark_color;
        nav.style.backgroundColor = dark_nav_bgc;
        nav.style.borderBottom = "0 solid transparent";
        nav.style.boxShadow = "0 0 0 transparent";

        for (let langs of langs_parent) {
            langs.style.backgroundColor = "#00000062";
            langs.style.boxShadow = "0 0 20px #00000062";
        }

        if (wraper_of_p_elements.length > 0) {
            for (let wraper_of_p of wraper_of_p_elements) {
                const intro_p_elements = wraper_of_p.getElementsByTagName("p");
                for (let element of intro_p_elements) {
                    element.style.color = font_color_light;
                    element.style.textShadow = `0 0 6px white`;
                }
            }
        }

        images.forEach(image => {
            image.style.filter = "drop-shadow(0 0 10px white)";
        });
        html_element.classList.remove("light-theme");
        html_element.classList.add("dark-theme");
        updateMenuBackgroundColor("dark");
        localStorage.setItem("bgc", dark_color);
        localStorage.setItem("theme", "dark");
        localStorage.setItem("nav_bgc", dark_nav_bgc);
        localStorage.setItem("langs_bgc", "#00000062"); // Save langs_parent background color
        localStorage.setItem("langs_shadow", "0 0 20px #00000062"); // Save langs_parent box shadow
    } else {
        toggle_btn.textContent = "Dark";
        toggle_btn.style.color = "black";
        toggle_btn.style.backgroundColor = "white";
        body_element.style.backgroundColor = white_color;
        nav.style.backgroundColor = light_nav_bgc;
        nav.style.borderBottom = `6px solid ${border_bottom_color_nav}`;
        nav.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

        if (wraper_of_p_elements.length > 0) {
            for (let wraper_of_p of wraper_of_p_elements) {
                const intro_p_elements = wraper_of_p.getElementsByTagName("p");
                for (let element of intro_p_elements) {
                    element.style.color = font_color_dark;
                    element.style.textShadow = `0 0 6px black`;
                }
            }
        }

        for (let langs of langs_parent) {
            langs.style.backgroundColor = "#1162ad98";
            langs.style.boxShadow = "0 0 20px #1162ad98";
        }

        images.forEach(image => {
            image.style.filter = "drop-shadow(0 0 10px black)";
        });
        html_element.classList.remove("dark-theme");
        html_element.classList.add("light-theme");
        updateMenuBackgroundColor("light");
        localStorage.setItem("bgc", white_color);
        localStorage.setItem("theme", "light");
        localStorage.setItem("nav_bgc", light_nav_bgc);
        localStorage.setItem("langs_bgc", "#1162ad98"); // Save langs_parent background color
        localStorage.setItem("langs_shadow", "0 0 20px #1162ad98"); // Save langs_parent box shadow
    }
}

function loadTheme() {
    const nav = document.querySelector(".nav-cont");
    const savedTheme = localStorage.getItem('theme');
    const savedNavBGC = localStorage.getItem('nav_bgc') || light_nav_bgc;
    const border_bottom_color_nav = "#2c5581";
    const toggle_btn = document.querySelector(".theme-toggle-btn");
    const body_element = document.body;
    const web_bgc = localStorage.getItem("bgc") || white_color;
    const white_color = "#F8F9FA";
    const wraper_of_p_elements = document.getElementsByClassName("wraper-of-p");
    const images = document.querySelectorAll(".image");
    const menu_items = document.querySelector(".menu-items");
    const langs_parent = document.querySelectorAll(".parent-langs");
    const html_element = document.documentElement;

    if (savedTheme) {
        if (savedTheme === 'dark') {
            toggle_btn.textContent = "Light";
            toggle_btn.style.color = "white";
            toggle_btn.style.backgroundColor = "black";
            body_element.style.backgroundColor = web_bgc;
            nav.style.backgroundColor = savedNavBGC;
            nav.style.borderBottom = "0 solid transparent";
            nav.style.boxShadow = "0 0 0 transparent";
            html_element.classList.remove("light-theme");
            html_element.classList.add("dark-theme");

            if (wraper_of_p_elements.length > 0) {
                for (let wraper_of_p of wraper_of_p_elements) {
                    const intro_p_elements = wraper_of_p.getElementsByTagName("p");
                    for (let element of intro_p_elements) {
                        element.style.color = "white";
                        element.style.textShadow = `0 0 6px white`;
                    }
                }
            }

            for (let langs of langs_parent) {
                langs.style.backgroundColor = localStorage.getItem("langs_bgc") || "#00000062";
                langs.style.boxShadow = localStorage.getItem("langs_shadow") || "0 0 20px #00000062";
            }

            images.forEach(image => {
                image.style.filter = "drop-shadow(0 0 10px white)";
            });
            updateMenuBackgroundColor("dark");
        } else {
            toggle_btn.textContent = "Dark";
            toggle_btn.style.color = "black";
            toggle_btn.style.backgroundColor = "white";
            body_element.style.backgroundColor = white_color;
            nav.style.backgroundColor = savedNavBGC;
            nav.style.borderBottom = `6px solid ${border_bottom_color_nav}`;
            nav.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            html_element.classList.remove("dark-theme");
            html_element.classList.add("light-theme");

            if (wraper_of_p_elements.length > 0) {
                for (let wraper_of_p of wraper_of_p_elements) {
                    const intro_p_elements = wraper_of_p.getElementsByTagName("p");
                    for (let element of intro_p_elements) {
                        element.style.color = "black";
                        element.style.textShadow = `0 0 6px black`;
                    }
                }
            }

            for (let langs of langs_parent) {
                langs.style.backgroundColor = localStorage.getItem("langs_bgc") || "#1162ad98";
                langs.style.boxShadow = localStorage.getItem("langs_shadow") || "0 0 20px #1162ad98";
            }

            images.forEach(image => {
                image.style.filter = "drop-shadow(0 0 10px black)";
            });
            updateMenuBackgroundColor("light");
        }
    } else {
        toggle_btn.textContent = "Dark";
        toggle_btn.style.color = "black";
        toggle_btn.style.backgroundColor = "white";
        body_element.style.backgroundColor = white_color;
        nav.style.backgroundColor = light_nav_bgc;

        if (wraper_of_p_elements.length > 0) {
            for (let wraper_of_p of wraper_of_p_elements) {
                const intro_p_elements = wraper_of_p.getElementsByTagName("p");
                for (let element of intro_p_elements) {
                    element.style.color = "black";
                    element.style.textShadow = `0 0 6px black`;
                }
            }
        }

        for (let langs of langs_parent) {
            langs.style.backgroundColor = "#1162ad98";
            langs.style.boxShadow = "0 0 20px #1162ad98";
        }

        images.forEach(image => {
            image.style.filter = "drop-shadow(0 0 10px black)";
        });
        updateMenuBackgroundColor("light");
        html_element.classList.add("light-theme");
        localStorage.setItem("bgc", white_color);
        localStorage.setItem("theme", "light");
        localStorage.setItem("nav_bgc", light_nav_bgc);
        localStorage.setItem("langs_bgc", "#1162ad98"); // Save default langs_parent background color
        localStorage.setItem("langs_shadow", "0 0 20px #1162ad98"); // Save default langs_parent box shadow
    }
}

document.addEventListener("DOMContentLoaded", loadTheme);
window.addEventListener("resize", () => {
    const savedTheme = localStorage.getItem('theme') || "light";
    updateMenuBackgroundColor(savedTheme);
});