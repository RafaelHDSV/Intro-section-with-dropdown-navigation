let itemHeader = document.querySelectorAll('.item')
let arrowImg = document.querySelectorAll('.arrow')
let optionsItem = document.querySelectorAll('.options_item')
let heroImg = document.querySelector('.hero')
let menuIcon = document.querySelector('.icon_menu')
let contentMobile = document.querySelector('.content_mobile')
let filterMobile = document.querySelector('.filter')

menuIcon.addEventListener('click', () => {
    if (menuIcon.getAttribute('src') == 'images/icon-menu.svg') {
        menuIcon.src = 'images/icon-close-menu.svg'
        contentMobile.style.display = 'flex'
        filterMobile.classList.remove('hide')
    } else {
        menuIcon.src = 'images/icon-menu.svg'
        contentMobile.style.display = 'none'
        filterMobile.classList.add('hide')
    }
})

setInterval(() => {
    if (window.screen.width < 1024) {
        heroImg.src = 'images/image-hero-mobile.png'
    } else {
        heroImg.src = 'images/image-hero-desktop.png'
    }
}, 500)

for (let i = 0; i < itemHeader.length; i++) {
    itemHeader[i].addEventListener('click', () => {
        if (arrowImg[i].getAttribute('src') == 'images/icon-arrow-down.svg') {
            arrowImg[i].setAttribute('src', 'images/icon-arrow-up.svg')
            optionsItem[i].classList.remove('hide')
            optionsItem[i].style.display = 'flex'
        } else {
            arrowImg[i].setAttribute('src', 'images/icon-arrow-down.svg')
            optionsItem[i].classList.add('hide')
            optionsItem[i].style.display = 'none'
        }
    })
}