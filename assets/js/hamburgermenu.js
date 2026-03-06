const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.getElementById('menu-links');

menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
    menuToggle.classList.toggle('active'); // Toggle the hamburger icon animation
});

