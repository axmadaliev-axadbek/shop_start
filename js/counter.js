var plus = document.getElementById('plus')
var minus = document.getElementById('minus')
var number = document.getElementById('number')

var name_product = document.querySelector('.info__name')
var basket = document.getElementById('basket')
var like = document.getElementById('like')
var notification = document.getElementById('notification')
var notification_text = document.getElementById('notification__text')
var notification_btn = document.getElementById('notification__btn')

plus.addEventListener('click', ()=>{ number.textContent++ })

minus.addEventListener('click', ()=>{ if(number.textContent > 1) number.textContent-- })

basket.addEventListener('click', () => {
    notification.classList.remove('visually-hidden')
    notification_text.textContent = `${name_product.textContent} "${number.textContent} шт." добавлено в корзину`
})

like.addEventListener('click', () => {
    notification.classList.remove('visually-hidden')
    notification_text.textContent = `${name_product.textContent} "${number.textContent} шт." добавлено в любимые`
})

notification_btn.addEventListener('click', () => {
    notification.classList.add('visually-hidden')
})