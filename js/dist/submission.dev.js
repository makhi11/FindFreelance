"use strict";

var posY = 0;
var jarak = 100;

function smoothScroll(id) {
  var tujuan = document.getElementById(id).offsetTop;
  var scrolling = setTimeout(function () {
    smoothScroll(id);
  }, 5);
  posY = posY + jarak;

  if (posY >= tujuan) {
    clearTimeout(scrolling);
    posY = 0;
  } else {
    window.scroll(0, posY);
  }
}
/* Hamburger Slide ANIMATION */
// const menuToggle = document.querySelector('.menu-toggle input');
// const nav = document.querySelector('nav ul');
// menuToggle.addEventListener('click', () => {
//     nav.classList.toggle('slide');
// });