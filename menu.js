var btnmenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnmenu.addEventListener('click',function(){
    nav.classList.toggle('muestrate')
})

ScrollReveal().reveal('.banner', { delay: 500 });
ScrollReveal().reveal('.info', { delay: 500 });
ScrollReveal().reveal('.platos', { delay: 500 });