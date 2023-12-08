const menu = document.querySelector(".side-menu__icon");
const menuContainer = document.querySelector(".side-menu-container");
const iconClose = document.querySelector(".icon-close");

menu.addEventListener('click', () => {
    menuContainer.classList.toggle("side-menu-container--open");
});

iconClose.addEventListener('click', () => {
    menuContainer.classList.remove("side-menu-container--open");
});