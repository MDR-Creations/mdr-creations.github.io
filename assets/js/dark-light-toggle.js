// ============================================
// Dark / Light Mode Toggle
// File: dark-light-toggle.js
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    const toggleButton = document.getElementById("theme-toggle");
    const root = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        root.setAttribute("data-theme", "light");
    }

    // Toggle theme
    toggleButton.addEventListener("click", () => {

        if (root.getAttribute("data-theme") === "light") {

            root.removeAttribute("data-theme");
            localStorage.setItem("theme", "dark");

        } else {

            root.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");

        }

    });

});