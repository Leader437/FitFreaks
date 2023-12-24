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

window.onscroll = () => {
    // Add background color to the header upon scroll
    header.classList.toggle('header-shadow', window.scrollY > 50);

    /*
    if (window.scrollY > 100) {
        scrollTop.style.display = "block";
    } else {
        scrollTop.style.display = "none";
    }*/
}


// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 1500,
        disableonInteraction: 'false',
    },
    loop: true,
    spaceBetween: 25,
    freeMode: 'true',
    centerSlide: 'true',
    fade: 'true',
    grabCursor: true,
    
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});