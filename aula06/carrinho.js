listaProdutos =[]
const produto = document.getElementById('produto')
const valor = document.getElementById('preco')
const chis = document.getElementById('chisDiv')

function adicionar() {
    if(produto.value == ""){
        alert("Insira o nome do produto")
        return
    }
    
    if(preco.value == ""){
        alert("Insira o preço do produto")
        return
    }
    addCarrinho(produto.value, preco.value)

}

function addCarrinho(prd, valor){
    var novoProduto = {nome: prd, valor: valor}
    listaProdutos.push(novoProduto)
    console.log(listaProdutos)
    // produto.value=""
    // preco.value = ""
    // produto.focus()
    exibirProdutos()
    salvarCarrinho()
}

preco.addEventListener("keyup", function(event){
    if (event.key === "Enter"){
        adicionar()
    }
})
function exibirProdutos(){
    var codHTML = ""
    var index = 0

        listaProdutos.forEach((prod) =>{
            codHTML += `<div><h1>${prod.nome} </h1><b>R$${prod.valor} <a href="javascript:void(0)"onclick="deletar(${index})"><img src="./claro.png" alt=""></a> </b></div>`
            // codHTML += `<h1>${prod.valor}</h1>`
            index++
        })
        document.getElementById('produtos').innerHTML = codHTML

        // inner é para colocar alguma coisa dentro da DIV 'produtos'
        // forEach é para percorrer a listaProdutos
        // o cifrão é para acessar o código, crase é para acessar o código em HTML
    }

    function deletar(index1){
        listaProdutos.splice(index1, 1)
        salvarCarrinho()
        obterCarrinho()
    }

    function salvarCarrinho(){
        localStorage.setItem('loja', JSON.stringify(listaProdutos))
    }

    function obterCarrinho(){
        if (localStorage.getItem('loja') != null){
            listaProdutos = JSON.parse(localStorage.getItem('loja'))
            exibirProdutos
        }
    }

    obterCarrinho()
