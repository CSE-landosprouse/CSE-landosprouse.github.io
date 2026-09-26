/* Shows and hides the mobile navigation */
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.onclick = () => {
    mainNav.classList.toggle("show");

    const isOpen = mainNav.classList.contains("show");
    menuToggle.setAttribute("aria-expanded", isOpen);
};