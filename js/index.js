// mouseover mouseleave
let headerImg = document.querySelector('.intro img')

headerImg.addEventListener('mouseover', Fade)
function Fade(event) {
    event.target.style.opacity = '60%'
}

headerImg.addEventListener('mouseleave', FadeReset)
function FadeReset(event) {
    event.target.style.opacity = '100%'
}

//keydown
let body = document.querySelector('body')
body.addEventListener('keydown', Popup)
const popKey = document.createElement('h1')
function Popup(event) {
    popKey.textContent = event.key
    body.prepend(popKey)
}

//wheel
//rotate the image when mouse hovering on
let contentImg = document.querySelectorAll('.content-section img')
contentImg.forEach((item) => item.addEventListener('wheel', rotate))
function rotate(event) {
    event.preventDefault()
    event.target.style.transform = `rotate(${event.deltaY}deg)`
}


//drag / drop


