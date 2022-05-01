const hamburger = document.querySelector("button.hamburger");
const menu = document.querySelector(".toolbar > nav");
const arrow = document.querySelector(".header-content > .content > img");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  arrow.classList.toggle("hidden");
});
