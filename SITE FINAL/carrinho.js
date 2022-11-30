listaProdutos = []

function addCarrinho(){
    var notebook = {nome: "Notebook Acer Swift 3 SF314-57-57VY Intel Core I5 16GB 256GB SSD 14' Windows 10", valor:"4109,00"}

    listaProdutos.push(notebook)
    console.log(listaProdutos)
    
    alert("Seu produto foi adicionado no carrinho com sucesso!")

    exibirProdutos()
    salvarCarrinho()
}

function exibirProdutos(){
    var codHtml = ''
    var index = 0
    var qtd = 0

    listaProdutos.forEach(item => {
        qtd+=1
        // codHtml = `<div class= "teste1"><p>${item.nome} <br> (${qtd}) </p><b> <a href="javascript:void(0)"onclick="deletar(${index})"><img src="./imagens3/cancelar.png" alt=""></a></b></div>`
        codHtml += `<div class= "teste1"><img class="imagemNotebook" src="images copy/acerNitro1-PhotoRoom.png" alt=""/><p>${item.nome} <br> (${qtd}) </p><b> <a href="javascript:void(0)"onclick="deletar(${index})"><img class="paraExcluir" src="./images copy/iconExcluir.png" alt=""></a></b>
        </div>
        <div class="linhaH1"></div>
        `
        
    })

    index = 1

    if (document.getElementById('localNotebook') != null){
        document.getElementById('localNotebook').innerHTML = codHtml
    }
    if (document.getElementById('localNotebookM') != null){
        document.getElementById('localNotebookM').innerHTML = codHtml
    }

    total()
}

function total(){
    var total = 0
    var printTotal = ''
    var parcela = 0
    listaProdutos.forEach(item => {
        valor =  parseInt(item.valor);
        total += valor
        parcela = valor/4
        printTotal = `<div class="total"><h1>R$${total},00</h1><p>ou 4x de R$${parcela}</p></div>`
        
    });

    if(total == 0){
        document.getElementById('valorTotal').innerHTML ='<h2 class="carrinhoVazio">Nenhum item selecionado</h2>'
        // document.getElementById('valorTotal').innerHTML ='<h2 class="carrinhoVazio">Nenhum item selecioando</h2>'
    }
    else{
        if(document.getElementById('valorTotal') != null){
            document.getElementById('valorTotal').innerHTML = printTotal
        }
        if(document.getElementById('valorTotalM') != null){
            document.getElementById('valorTotalM').innerHTML = printTotal
        }

    }
    
    total()
}
function deletar(index1){
    listaProdutos.splice(index1, 1)
    salvarCarrinho()
    obterCarrinho()
}

function salvarCarrinho(){
    localStorage.setItem('loja',JSON.stringify(listaProdutos))
}
function obterCarrinho(){
    if (localStorage.getItem('loja')!= null){
        listaProdutos = JSON.parse(localStorage.getItem('loja')) 
        exibirProdutos()
    }
  
}

obterCarrinho()