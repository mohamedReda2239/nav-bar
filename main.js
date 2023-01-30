// toggle menu

let toggleButton = document.querySelector(".hamberger");
let toggleMenu = document.querySelector("#menu");
let header = document.querySelector("header");

toggleButton.addEventListener("click" , function () {

    toggleMenu.classList.toggle("bar-hidden");
    header.classList.toggle("header-lengthend");
});
