const burgerBtn = document.getElementById('burger-button');
const sideMenu = document.getElementById('navlinks');
const blackOver = document.getElementById('black-overlay');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('change')
    navlinks.classList.toggle('show')
    blackOver.classList.toggle('curtain')
})

ScrollReveal({origin: 'right'}).reveal('#header', { delay: 500 })
ScrollReveal().reveal('.galleryIMG', {delay: 800,  interval: 100})
ScrollReveal({origin: 'right'}).reveal('#main', { distance: '50px', delay: 500 })
ScrollReveal({origin: 'right'}).reveal('.reveal-popular', { distance: '50px', delay: 500, interval: 100 })
ScrollReveal({origin: 'right'}).reveal('.mini-card-artist', { distance: '50px', delay: 500, interval: 100 })