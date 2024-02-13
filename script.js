// "strict";
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function (e) {
//   e.preventDefault();
// });
const buttonOpen = document.querySelector(".open-btn");
const buttonClose = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mainContainer = document.querySelector(".container-main");
buttonOpen.addEventListener("click", function (e) {
  buttonOpen.classList.add("hidden");
  buttonClose.classList.remove("hidden");
  mobileNav.classList.remove("trans-hide");
  mobileNav.classList.add("trans-show");
});
buttonClose.addEventListener("click", function (e) {
  buttonClose.classList.add("hidden");
  buttonOpen.classList.remove("hidden");
  mobileNav.classList.remove("trans-show");
  mobileNav.classList.add("trans-hide");
});
mainContainer.addEventListener("click", function (e) {
  mobileNav.classList.remove("trans-hide");
  mobileNav.classList.add("trans-show");
});
