(()=>{"use strict";document.querySelector("body"),document.querySelector("main");let e=document.querySelector("header"),t=document.querySelector(".hamburger"),c=document.querySelector(".hamburger .one"),r=document.querySelector(".hamburger .three"),o=document.querySelector(".nav-list"),l=document.querySelectorAll(".nav-anchor");document.querySelector(".scroll-top");t.addEventListener("click",(()=>{c.classList.toggle("one-active"),r.classList.toggle("three-active"),o.classList.toggle("nav-active")})),l.forEach((e=>{e.addEventListener("click",(()=>{o.classList.remove("nav-active"),c.classList.remove("one-active"),r.classList.remove("three-active")}))})),window.onscroll=()=>{e.classList.toggle("header-shadow",window.scrollY>50)}})();