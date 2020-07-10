const navToggle = document.querySelector('.nav-button');
const nav = document.querySelector('.nav__list');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav--visible');
    nav.style.transition = 'transform 350ms ease-in';
})
