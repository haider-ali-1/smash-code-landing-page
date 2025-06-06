const backdrop = document.querySelector(".backdrop");
const menuBtn = document.querySelector(".header__toggle button");
const mobileNav = document.querySelector(".header__nav-mobile");
const closeMenuBtn = document.querySelector(".header__nav-mobile button");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  backdrop.classList.toggle("active");
  mobileNav.classList.toggle("active");
  body.style.overflow = "hidden";
});

closeMenuBtn.addEventListener("click", () => {
  backdrop.classList.toggle("active");
  mobileNav.classList.toggle("active");
  body.style.overflow = "";
});
