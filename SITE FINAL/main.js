const botao = document.getElementById('burguer')
const menuMobile2 = document.getElementById('menuDesktop')

botao.addEventListener('click', abrir)
// quando acontecer o click faça botão

function abrir(){
    menuMobile2.classList.toggle('active')
    botao.classList.toggle('active')
}

const botao2 = document.getElementById('burguer2')
const menuMobile3 = document.getElementById('menuMobile')

botao2.addEventListener('click', abrir2)
// quando acontecer o click faça botão

function abrir2(){
    menuMobile3.classList.toggle('active')
    botao2.classList.toggle('active')
}

// const botao3 = document.getElementById('burguer3')
// const menuMobile4 = document.getElementById('menuDesktop')

// botao3.addEventListener('click', abrir3)
// // quando acontecer o click faça botão

// function abrir3(){
//     menuMobile4.classList.toggle('active')
//     botao3.classList.toggle('active')
// }