const elMobile = document.querySelector(".mobile");
const elBurgerBtn = document.querySelector(".header__burger");
const elClose = document.querySelector(".close");

elBurgerBtn.addEventListener("click", function () {
  elMobile.classList.add("active");
  document.body.classList.add("noScroll");
});

elClose.addEventListener("click", function () {
  elMobile.classList.remove("active");
  document.body.classList.remove("noScroll");
});
