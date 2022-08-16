const burgerBtn = document.getElementById('burger-button');
const sideMenu = document.getElementById('navlinks');
const blackOver = document.getElementById('black-overlay');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('change')
    navlinks.classList.toggle('show')
    blackOver.classList.toggle('curtain')
})
