// Toggle the hamburger menu for mobile view
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    const ul = navMenu.querySelector("ul");

    // Add or remove 'active' class to show/hide menu
    ul.classList.toggle("active");
});
