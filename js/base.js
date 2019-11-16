/* BASE TEMPLATE JAVASCRIPT */
document.addEventListener('DOMContentLoaded', function () {
    elementsEvents();

});

function elementsEvents() {
    menuEvent();
}

function menuEvent() {
    let menu = document.querySelector(".mobile-menu");
    let menuPages = document.querySelector("#mobile-menu-pages");

    menu.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle('mobile-menu-close');
        if (menuPages.style.display == "flex") {
            menuPages.style.display = "none";
        } else {
            menuPages.style.display = "flex";
        }

    },false);
}