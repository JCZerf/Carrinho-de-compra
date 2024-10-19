document.getElementById("quantidade").value = 1;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").innerHTML = "0";
let precoTotalProdutos = 0; 

function adicionar() {
    const itemDoCarrinho = document.getElementById("produto").value;
    const quantidadeDeItens = document.getElementById("quantidade").value;
    const nomeDoProduto = itemDoCarrinho.split("-")[0];
    const precoDoProduto = itemDoCarrinho.split("R$")[1];
    const quantidadePorPreco = quantidadeDeItens * precoDoProduto;
    precoTotalProdutos += quantidadePorPreco;
    const totalGeralDosProdutos = document.getElementById("valor-total")
    const produtosNoCarrinho = document.getElementById("lista-produtos");
    produtosNoCarrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeDeItens}</span> ${nomeDoProduto} <span class="texto-azul">R$${quantidadePorPreco}</span>
          </section>`
    totalGeralDosProdutos.textContent = `R$${precoTotalProdutos}`
    document.getElementById("quantidade").value = 1;
}

function limpar() {
    if (confirm("Limpar o carrinho?")) {
        precoTotalProdutos = 0;
        document.getElementById("lista-produtos").innerHTML = "";
        document.getElementById("valor-total").innerHTML = "0";
    }
    

}