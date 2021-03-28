const btnToggler = document.querySelector('.nav-toggle')
const link = document.querySelector('.nav-list')
const nav = document.querySelector('.nav')

const toggle = ()=>{nav.classList.toggle('show-nav')
}
btnToggler.addEventListener('click', toggle)

link.addEventListener('click', toggle)
