//  mouseover 
let headerImg = document.querySelector('.intro img')

headerImg.addEventListener('mouseover', Fade)
function Fade(event) {
    event.target.style.opacity = '60%'
}

// mouseleave
headerImg.addEventListener('mouseleave', FadeReset)
function FadeReset(event) {
    event.target.style.opacity = '100%'
}

// keydown
let body = document.querySelector('body')
body.addEventListener('keydown', Popup)
const popKey = document.createElement('h1')
function Popup(event) {
    popKey.textContent = event.key
    body.prepend(popKey)
}

// keyup
body.addEventListener('keyup', Remove)
function Remove(event) {
    popKey.remove()
}

// wheel
//rotate the image when mouse hovering on
let contentImg = document.querySelectorAll('.content-section img')
contentImg.forEach((item) => item.addEventListener('wheel', rotate))
function rotate(event) {
    event.preventDefault()
    event.target.style.transform = `rotate(${event.deltaY}deg)`
}

// click
let des = document.querySelectorAll('.destination')
des.forEach((item) => { item.addEventListener('click', AddBorder) })
function AddBorder(event) {
    event.target.style.border = '5px dotted red'
}

// copy
// show alert - Do not Copy
let bodyText = document.querySelectorAll('p')
bodyText.forEach((item)=> item.addEventListener('copy', ()=> alert('Do not copy')))

// dblclick
let mainTitle = document.querySelector('h1')
mainTitle.addEventListener('dblclick', (event) => event.target.style.fontSize = "700%")

// resize
let homeWindow = document.querySelector('.container p')
homeWindow.addEventListener('resize', (event) => event.target.style.color = `Red`)

//mouse down
let sec = new Date()
let navContainer = document.querySelector('.nav')
navContainer.addEventListener('mousedown', event => event.target.style.transform = `rotate(${sec.getSeconds()}deg)`)

//mouse up
navContainer.addEventListener('mouseup', event => event.target.style.transform = `rotate(0deg)`)

//Stop the nav items from refreshing the page
let navItems = document.querySelectorAll('nav a')
navItems.forEach((item)=>item.addEventListener('click', (event)=>event.preventDefault()))

//stopPropagation
let btn = document.querySelectorAll('.btn')
btn.forEach((item) => item.addEventListener('click', ChangeColor))
function ChangeColor(event) {
    //adding stopPropagation so the des handler won't be affected
    event.stopPropagation()
    event.target.style.backgroundColor = 'grey'
}

//stretch
//rotate the header 360deg
gsap.to('img', { duration: 3, rotation: 360 })

