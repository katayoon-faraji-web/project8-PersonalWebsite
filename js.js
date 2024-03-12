let home = document.getElementById('home')
let allprojects = document.getElementById('allprojects')
let openallprojects = document.getElementById('openallprojects')
allprojects.style.height = '0px'
openallprojects.addEventListener('click', () => {
    allprojects.style.height = 'fit-content'
    openallprojects.style.diplay = 'none'
})
home.addEventListener('click', () => {
    allprojects.style.height = '0px'
    openallprojects.style.diplay = 'flex'
})
