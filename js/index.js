// 1 mouseover 
let headerImg = document.querySelector('.intro img')

headerImg.addEventListener('mouseover', Fade)
function Fade(event) {
    event.target.style.opacity = '60%'
}

//2 mouseleave
headerImg.addEventListener('mouseleave', FadeReset)
function FadeReset(event) {
    event.target.style.opacity = '100%'
}

//3 keydown
let body = document.querySelector('body')
body.addEventListener('keydown', Popup)
const popKey = document.createElement('h1')
function Popup(event) {
    popKey.textContent = event.key
    body.prepend(popKey)
}

//4 keyup
body.addEventListener('keyup', Remove)
function Remove(event) {
    popKey.remove()
}

//5 wheel
//rotate the image when mouse hovering on
let contentImg = document.querySelectorAll('.content-section img')
contentImg.forEach((item) => item.addEventListener('wheel', rotate))
function rotate(event) {
    event.preventDefault()
    event.target.style.transform = `rotate(${event.deltaY}deg)`
}

//6 click
let btn = document.querySelectorAll('.btn')
btn.forEach((item) => item.addEventListener('click', ChangeColor))
function ChangeColor(event) {
    event.target.style.backgroundColor = 'grey'
}

//7 copy

//8 dblclick



