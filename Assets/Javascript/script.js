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
let homeBtn = document.querySelector('.home-btn');








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


homeBtn.addEventListener('click', () => {
    // Scroll the window by 800 pixels in the Y direction
    window.scrollBy(0, 800);
})

window.onscroll = () => {
    // Add background color to the header upon scroll
    header.classList.toggle('header-shadow', window.scrollY > 50);
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


/*========
===GSAP===
========*/


import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


/* Home Section Animation */
const tl1 = gsap.timeline();

tl1
    .from('header', {
        opacity: 0,
        y: '-100%',
        duration: 2,
        ease: 'Power4.easeOut'
    })
    .from('.home-title', {
        opacity: 0,
        y: '100%',
        duration: 1,
        delay: '-2',
        ease: 'Power4.easeOut'
    })
    .from('.home-heading', {
        opacity: 0,
        y: '100%',
        duration: 0.5,
        delay: '-1',
        ease: 'Power4.easeOut'
    })
    .from('.home-para', {
        opacity: 0,
        y: '60%',
        duration: 0.5,
        delay: '-0.5',
        ease: 'Power4.easeOut'
    })
    .from('.home-btn', {
        opacity: 0,
        duration: 2
    })


/* Background Video Animation */
gsap.to('.background-video', {
    scrollTrigger: {
        trigger: '#home',
        start: 'top 40%',
        end: 'bottom 0%',
        scrub: true
    },
    opacity: 0
})


/* All Title Animations */
gsap.to('.schedule-title .title-line', {
    scrollTrigger: {
        trigger: '#schedule',
        start: 'top 70%',
    },
    width: '100%',
    duration: 1.5
})

gsap.to('.about-title .title-line', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
    },
    width: '100%',
    duration: 1.5
})

gsap.to('.feedback-title .title-line', {
    scrollTrigger: {
        trigger: '#feedback',
        start: 'top 70%',
    },
    width: '100%',
    duration: 1.5
})

gsap.to('.pass-title .title-line', {
    scrollTrigger: {
        trigger: '#pass',
        start: 'top 70%',
    },
    width: '100%',
    duration: 1.5
})

gsap.to('.contact-title .title-line', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 70%',
    },
    width: '100%',
    duration: 1.5
})


/* About Section Animation */
const tlAbout = gsap.timeline({
    scrollTrigger: {
        trigger: '#about',
        start: 'top 70%',
    }
});

tlAbout
    .from('.about-left', {
        opacity: 0,
        x: '-80%',
        duration: 1.5,
        ease: 'Power4.easeOut',
    })
    .from('.about-right', {
        opacity: 0,
        x: '80%',
        duration: 1.5,
        ease: 'Power4.easeOut',
        delay: '-1.5'
    })
    .from('.about-center', {
        opacity: 0,
        scale: 1.3,
        duration: 1.5,
        ease: 'Power4.easeOut',
        delay: '-1.5'
    })


/* Feedback Section Animation */
const tlFeedback = gsap.timeline({
    scrollTrigger: {
        trigger: '#feedback',
        start: 'top 50%',
        end: 'bottom 50%',
        scrub: true
    }
});

tlFeedback.to('.quote-start', {
    left: "calc(1rem + 15vw)",
})

tlFeedback.to('.quote-end', {
    right: "calc(1rem + 15vw)",
}, 0)


/* Pass Section Animation */
const tlPass = gsap.timeline({
    scrollTrigger: {
        trigger: '#pass',
        start: 'top 50%',
    }
});

tlPass
    .from('.left-pass', {
        opacity: 0,
        y: "40%",
        ease: "power4.easeOut",
        duration: 1.5
    })
    .from('.right-pass', {
        opacity: 0,
        y: "40%",
        ease: "power4.easeOut",
        duration: 1.5,
        delay: "-1.5"
    })


/* Contact Section Animation */
const tlContact = gsap.timeline({
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 50%',
    }
});

tlContact
    .from('.contact-left', {
        opacity: 0,
        x: "-60%",
        ease: "power4.easeOut",
        duration: 1
    })
    .from('.contact-right', {
        opacity: 0,
        x: "60%",
        ease: "power4.easeOut",
        duration: 1,
        delay: "-1"
    })