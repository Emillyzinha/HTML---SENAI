ListaCarrinho = []
Itens = [
    {id:1, nome:"Setup Gamer",preco:8000.00},
    {id:2, nome:"Cadeira Gamer",preco:799.99},
    {id:3, nome:"Mouse Gamer",preco:250.00},
    {id:4, nome:"Teclado Gamer",preco:999.99},
    {id:5, nome:"Headseat Gamer",preco:250.99},
    {id:6, nome:"Notebook g15",preco:5999.99},
    {id:7, nome:"PS5",preco:4599.99},
    {id:8, nome:"Nitro5",preco:4999.99},
    {id:9, nome:"RTX 4090",preco:18999.99},
    {id:10, nome:"Gabinete",preco:899.99}
]
function comprarProduto(id){
    var prod = Itens.find(x => x.id == id)
    ListaCarrinho.push({nome: prod.nome, preco: prod.preco})
        alert('Itens adicionados no carrinho!')
        salvarCarrinho()
        exibirProdutos()
}

function exibirProdutos(){
    var codHTML = ''
    ListaCarrinho.forEach(prod => {
        codHTML += `<p class="resCarrinho"> ${prod.nome} Valor unitário: R$ ${prod.preco}</p>`
    })
    document.getElementById('mostrarCarrinho').innerHTML = codHTML   
}

function salvarCarrinho(){
    localStorage.setItem('iLovePC',JSON.stringify(ListaCarrinho))
}

function obterCarrinho(){
    if(localStorage.getItem('iLovePC') != null){
        ListaCarrinho = JSON.parse(localStorage.getItem('iLovePC'))
        exibirProdutos()
    }
}
const botao = document.getElementById('burguer')
const menuMobile =document.getElementById('menu-mobile')
botao.addEventListener('click',abrir)

function abrir(){
    // botao.classList.toggle;{'active'}
    // botao.className == 'active'
    menuMobile.classList.toggle('active')
    if(botao.classList.contains('active')){
        botao.classList.remove('active')

    }
    else{
    botao.classList.add('active')
}
}

obterCarrinho()
