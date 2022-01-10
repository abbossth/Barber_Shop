// ELEMENTS
const menuEl = document.querySelector('#menu');
const navbarEl = document.querySelector('.navbar');
const dropdownEl = document.querySelector('.dropdown-toggle');
const dropdownMenuEl = document.querySelector('.dropdown-menu');


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
