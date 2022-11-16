const botao = document.getElementById('burguer')
const menuMobile = document.getElementById('menu-mobile')

botao.addEventListener('click', abrir)
// quando acontecer o click faça botão

function abrir(){
    menuMobile.classList.toggle('active')
    botao.classList.toggle('active')
}