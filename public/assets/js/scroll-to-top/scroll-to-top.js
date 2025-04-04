const main = document.querySelector("main");
const scrollToTopButton = document.querySelector("#scroll-to-top");
const root = document.documentElement;
function posX() {
  const pos = (root.clientWidth - main.clientWidth) / 2;
  scrollToTopButton.style.right = `${pos}px`;
}

//pour mettre le scroll-to-top a l'interieur de la barre de nav mobile
// function posX() {
//   if (window.matchMedia('(max-width: 576px)').matches) {
//     const reseauMobile = document.querySelector('#reseaux-mobile');
//     scrollToTopButton.classList.add('mobile');
//     reseauMobile.appendChild(scrollToTopButton);
//   } else {
//     const pos = (root.clientWidth - main.clientWidth) / 2;
//     scrollToTopButton.style.right = `${pos}px`;
//     scrollToTopButton.classList.remove('mobile');
//     document.body.appendChild(scrollToTopButton);
//   }
// }

function scrollToTop() {
  const scrollToTopButton = document.querySelector("#scroll-to-top");
  const heroHeader = document.querySelector("#hero-header");
  const height = heroHeader ? heroHeader.offsetHeight : 200;

  // Masquer le bouton au chargement de la page
  scrollToTopButton.style.display = "none";

  window.addEventListener("scroll", () => {
    if (window.scrollY >= height) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // Ajouter l'écouteur de clic une seule fois
  scrollToTopButton.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
}

// Exécuter la fonction après le chargement du DOM
document.addEventListener("DOMContentLoaded", scrollToTop);

window.addEventListener("DOMContentLoaded", () => {
  scrollToTop();
  window.addEventListener("resize", posX);
});
posX();
