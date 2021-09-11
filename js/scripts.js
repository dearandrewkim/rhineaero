/*!
 * Start Bootstrap - Full Width Pics v5.0.2 (https://startbootstrap.com/template/full-width-pics)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project


// Initiate AOS

AOS.init();

// Navigation Bar add background colour on scroll

const navbar = document.querySelector('.fixed-top');
const navbarbrand = document.querySelector('.navbar-brand');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.remove('transparent');
        navbar.classList.add('scrolled');
        //navbarbrand.classList.remove('visually-hidden');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
        //navbarbrand.classList.add('visually-hidden');
    }
};

jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.2
    }

);


/*
// Moving Letters https://tobiasahlin.com/moving-letters/#1

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  });

*/