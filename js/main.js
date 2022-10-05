const elMobile = document.querySelector(".mobile");
const elBurgerBtn = document.querySelector(".header__burger");
const elClose = document.querySelector(".close");

const elLoader = document.querySelector(".loader-wrapper");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    elLoader.classList.add("close");
  }, 1000);
});

elBurgerBtn.addEventListener("click", function () {
  elMobile.classList.add("active");
  document.body.classList.add("noScroll");
});

elClose.addEventListener("click", function () {
  elMobile.classList.remove("active");
  document.body.classList.remove("noScroll");
});
