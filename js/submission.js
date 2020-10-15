let posY = 0;
let jarak = 100;

function smoothScroll(id) {
    let tujuan = document.getElementById(id).offsetTop

    let scrolling = setTimeout(() => {
        smoothScroll(id)
    }, 5)

    posY = posY + jarak;

    if (posY >= tujuan) {
        clearTimeout(scrolling);
        posY = 0;
    } else {
        window.scroll(0, posY)
    }
}

/* Hamburger Slide ANIMATION */

// const menuToggle = document.querySelector('.menu-toggle input');
// const nav = document.querySelector('nav ul');

// menuToggle.addEventListener('click', () => {
//     nav.classList.toggle('slide');
// });