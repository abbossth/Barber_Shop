// ELEMENTS
const menuEl = document.querySelector('#menu');
const navbarEl = document.querySelector('.navbar');

// MENU
menuEl.addEventListener('click', function () {
    menuEl.classList.toggle('fa-times');
    navbarEl.classList.toggle('active');
});

// NAV ON WINDOWS SCROLL
window.onscroll = function () {
    menuEl.classList.remove('fa-times');
    navbarEl.classList.remove('active');
}