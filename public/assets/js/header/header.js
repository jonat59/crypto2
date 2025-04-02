const toggleNavMobile = () => {
  let navMobile = document.querySelector("nav > #nav");
  // selectionner le menu mobile
  let iconMenu = document.querySelector("nav > #toggle-nav");
  // selectionner l'icone du menu mobile
  navMobile.classList.toggle("mobile");
  // toggle la classe mobile sur le menu mobile
  console.log(iconMenu);
  iconMenu.setAttribute(
    "class",
    navMobile.classList.contains("mobile")
      ? "fab fa-gitter"
      : "fab fa-buromobelexperte"
  );
  // change l'icone du menu mobile
};

const closeMenu = () => {
  let navMobile = document.querySelector("nav > #nav");
  let iconMenu = document.querySelector("nav > #toggle-nav");
  navMobile.classList.remove("mobile");
  iconMenu.setAttribute(
    "class",
    navMobile.classList.contains("mobile")
      ? "fab fa-gitter"
      : "fab fa-buromobelexperte"
  );
};

function initMobileMenu() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    window.addEventListener("resize", initMobileMenu);
    let toggleNav = document.querySelector("#toggle-nav");
    toggleNav.style.cursor = "pointer";
    toggleNav.addEventListener("click", toggleNavMobile);
    let main = document.querySelector("main");
    main.addEventListener("click", closeMenu);
    let navLinks = document.querySelectorAll("nav > #nav > ul > li > a");
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", closeMenu);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  window.addEventListener("resize", initMobileMenu);
  window.addEventListener("resize", closeMenu);
  window.addEventListener("scroll", closeMenu);
});
