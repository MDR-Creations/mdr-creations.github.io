// ============================================
// Dark / Light Mode Toggle
// File: dark-light-toggle.js
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const root = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        root.setAttribute("data-theme", "light");
    }

    // Shared toggle function
    function toggleTheme(e) {
        if (e) e.preventDefault();

        if (root.getAttribute("data-theme") === "light") {
            root.removeAttribute("data-theme");
            localStorage.setItem("theme", "dark");
        } else {
            root.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    }

    // Attach to #theme-toggle (standalone button) if it exists
    const toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleTheme);
    }

    // Attach to #theme-switch (nav link) if it exists
    const themeSwitch = document.getElementById("theme-switch");
    if (themeSwitch) {
        themeSwitch.addEventListener("click", toggleTheme);
    }

});