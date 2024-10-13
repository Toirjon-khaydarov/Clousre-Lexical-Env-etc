const burgerOpen = document.getElementById("burger-menu-open-btn");
const burgerClose = document.getElementById("burger-menu-close-btn");
const navMobile = document.querySelector(".nav__mobile");
const NAV_SELEKTOR = "nav__mobile--aktive";

burgerOpen.addEventListener("click", () => {
  navMobile.classList.add(NAV_SELEKTOR);
});

burgerClose.addEventListener("click", () => {
  navMobile.classList.remove(NAV_SELEKTOR);
});
