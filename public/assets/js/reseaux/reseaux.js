const main = document.querySelector('main');
const reseaux = document.querySelector('#reseaux');
const root = document.documentElement;
function pos() {
  const pos = (root.clientWidth - main.clientWidth) / 2;
  reseaux.style.right = `${pos}px`;
}
window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('resize', pos);
});
pos();
