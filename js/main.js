var toggle = document.getElementById('toggle')
var wraper = document.getElementById('wraper')
var wraper_btn = document.getElementById('wraper_btn')

toggle.addEventListener('click', ()=>{
    wraper.classList.remove('visually-hidden')
})
wraper_btn.addEventListener('click', ()=>{
    wraper.classList.add('visually-hidden')
})
