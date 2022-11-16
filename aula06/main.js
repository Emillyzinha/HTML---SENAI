const botao = document.getElementById('burguer')
const menuMobile = document.getElementById('menu-mobile')

botao.addEventListener('click', abrir)
// quando acontecer o click faça botão

function abrir(){
    menuMobile.classList.toggle('active')
    botao.classList.toggle('active')
    // toggle é alternar

    // if (botao.classList.contains('active')){
    //     // if(botao.className == 'active))
    //     botao.classList.remove('active')
    // }
    // else{
    //     botao.classList.add('active') 
    // }
}