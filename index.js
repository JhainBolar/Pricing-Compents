const toggle = document.querySelector('.toggle')
const monthly = document.querySelector('.main-container')
const anually = document.querySelector('.main-container-2')

toggle.addEventListener('click', ()=>{
   monthly.classList.toggle("activenot")
   anually.classList.toggle("active")
})