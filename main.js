const burgerBtn = document.getElementById('burger-button');
const sideMenu = document.getElementById('navlinks');
const blackOver = document.getElementById('black-overlay');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('change')
    navlinks.classList.toggle('show')
    blackOver.classList.toggle('curtain')
})

ScrollReveal({origin: 'right'}).reveal('#header', { distance: '50px', delay: 500 })
ScrollReveal({origin: 'right'}).reveal('#main', { distance: '50px', delay: 500 })
ScrollReveal({origin: 'right'}).reveal('#popular', { distance: '50px', delay: 500 })
ScrollReveal({origin: 'right'}).reveal('#best-artists', { distance: '50px', delay: 500 })
ScrollReveal({origin: 'right'}).reveal('#footer', { distance: '50px', delay: 500 })