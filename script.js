const hamburger = document.querySelector('.mobile-menu');
const close1 = document.querySelector('.menu-container');
const sect =document.querySelectorAll('.section');
const closemenu = document.querySelector('.menu-close');
const nav = document.querySelector('nav');

function sectionFunc() {
    for (let i = 0; i < sect.length; i += 1) {
        sect[i].classList.add('blur');
    }
    close1.style.display = "flex";
    hamburger.style.display = "none";
    nav.classList.add('nav');
}

function sectionHide() {
    for (let i = 0; i < sect.length; i += 1) {
        sect[i].classList.remove('blur');
    }
    hamburger.style.display = "block";
    close1.style.display = "none";
    nav.classList.remove('nav');

}

hamburger.addEventListener('click', sectionFunc);

closemenu.addEventListener('click', sectionHide);

// const speakers = [
//     {
//         name:,
//         position:,
//         image:,
//         description:
// },
//     {
//         name:,
//         position:,
//         image:,
//         description:

//     },
//     {
//         name:,
//         position:,
//         image:,
//         description:
//     },
//     {
//         name:,
//         position:,
//         image:,
//         description:
//     },
//     {
//         name:,
//         position:,
//         image:,
//         description:
//     },
//     {
//         name:,
//         position:,
//         image:,
//         description:
//     }
// ];