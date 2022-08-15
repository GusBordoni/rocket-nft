const burgerBtn = document.getElementById('burger-button');
const sideMenu = document.getElementById('navlinks');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('change')
    navlinks.classList.toggle('show')
})
