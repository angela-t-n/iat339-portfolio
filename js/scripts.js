/**
 * Nav animation script
 * basically it checks for the current scroll position
 * and toggles the subclass on or off depending on that clause
 */
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 0);
});
