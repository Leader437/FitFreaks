import '../Css/normalize.css';
import '../Css/style.css';


let body = document.querySelector('body');
let main = document.querySelector('main');
let header = document.querySelector('header');
let hamburger = document.querySelector('.hamburger');
let stick1 = document.querySelector('.hamburger .one');
let stick3 = document.querySelector('.hamburger .three');
let navList = document.querySelector('.nav-list');
let navItems = document.querySelectorAll('.nav-anchor');
let scrollTop = document.querySelector('.scroll-top');








hamburger.addEventListener('click', () => {
    // Hamburger Animation
    stick1.classList.toggle('one-active');
    stick3.classList.toggle('three-active');
    // Hamburger functionality
    navList.classList.toggle('nav-active');
});

navItems.forEach(item => {
    // Close navbar on click of any navLink in small screen devices
    item.addEventListener('click', () => {
        navList.classList.remove('nav-active');
        stick1.classList.remove('one-active');
        stick3.classList.remove('three-active');
    });
});