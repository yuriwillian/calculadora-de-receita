var receita = []
let idIngrediente = 0


function adicionarIngrediente() {
    let ingredientes = document.getElementById("ingredientes")
    let nomeIngrediente = document.getElementById("nomeIngrediente")
    let custoEmbalagem = document.getElementById("custoEmbalagem")
    let quantidadeEmbalagem = document.getElementById("quantidadeEmbalagem")
    let tipoQuantidade = document.getElementById("tipoQuantidade")
    let quantidadeUsada = document.getElementById("quantidadeUsada")

    let custoIngrediente = custoEmbalagem.value / quantidadeEmbalagem.value * quantidadeUsada.value

    receita.push(custoIngrediente)
    ingredientes.innerHTML += `
    <br><br>
    <div id="${idIngrediente}">
    ${nomeIngrediente.value} 
    <br>Custo embalagem: ${custoEmbalagem.value} 
    <br> Quantidade da embalagem: ${quantidadeEmbalagem.value} ${tipoQuantidade.value}
    <br> Quantidade utilizada: ${quantidadeUsada.value} ${tipoQuantidade.value}
    <br> Custo da quantidade utilizada: ${custoIngrediente}
    <div>`

    console.log(`ID Ingrediente atual: ${idIngrediente}`)

    return idIngrediente += 1

}



function teste() {

    console.log(`Custo adicionado! R$ ${receita}`)

}

function calcularReceita() {
    let resultado = 0

    for (var i = 0; i < receita.length; i++) {
        resultado += receita[i]
    }
    let custoReceita = document.getElementById("custoReceita")
    custoReceita.innerHTML = `<p> O custo total da receita é: <strong>R$ ${resultado}</strong> <p>`
}