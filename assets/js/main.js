const iconBurger = document.querySelector("#icon_burger");
const menu = document.querySelector("#menu");

iconBurger.addEventListener("click", () => {
    menu.classList.toggle("show_menu");
});