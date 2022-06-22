var next_product1 = document.getElementById("next__product1")
var next_product2 = document.getElementById("next__product2")
var next_product3 = document.getElementById("next__product3")
var next_product4 = document.getElementById("next__product4")
var next_product5 = document.getElementById("next__product5")
var product = document.getElementById("product")

next_product1.addEventListener('click', ()=>product.setAttribute('src', `${next_product1.src}`));
next_product2.addEventListener('click', ()=>product.setAttribute('src', `${next_product2.src}`));
next_product3.addEventListener('click', ()=>product.setAttribute('src', `${next_product3.src}`));
next_product4.addEventListener('click', ()=>product.setAttribute('src', `${next_product4.src}`));
next_product5.addEventListener('click', ()=>product.setAttribute('src', `${next_product5.src}`));