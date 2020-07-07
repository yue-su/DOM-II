// mouseover mouseleave
let headerImg = document.querySelector('.intro img')
headerImg.addEventListener('mouseover', fade)
function fade(event) {
    event.target.style.opacity = '60%'
}

headerImg.addEventListener('mouseleave', fadeReset)
function fadeReset(event) {
    event.target.style.opacity = '100%'
}

