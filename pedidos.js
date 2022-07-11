var btnmenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnmenu.addEventListener('click',function(){
    nav.classList.toggle('muestrate')
})

ScrollReveal().reveal('.product__container', { delay: 500 });