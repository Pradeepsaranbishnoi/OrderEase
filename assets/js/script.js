// JavaScript code to toggle the mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuIcon = document.getElementById("mobile-menu-icon");
    const mainMenu = document.querySelector(".main-menu");
    mobileMenuIcon.addEventListener("click", function () {
        mainMenu.classList.toggle("show-menu");
    });
});