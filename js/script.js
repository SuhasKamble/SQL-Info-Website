const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const bars = document.querySelector('.fa-bars');

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('show')
    bars.classList.toggle('fa-times')
})
