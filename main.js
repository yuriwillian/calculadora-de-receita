var receita = []
let idIngrediente = 0


function adicionarIngrediente() {
    let ingredientes = document.getElementById("ingredientes")
    let nomeIngrediente = document.getElementById("nomeIngrediente")
    let custoEmbalagem = document.getElementById("custoEmbalagem")
    let quantidadeEmbalagem = document.getElementById("quantidadeEmbalagem")
    let tipoQuantidade = document.getElementById("tipoQuantidade")
    let quantidadeUsada = document.getElementById("quantidadeUsada")
    
    if(nomeIngrediente.value != "" && custoEmbalagem.value != "" && quantidadeEmbalagem.value != "" && tipoQuantidade.value != "" && quantidadeUsada != ""){
    
        if(idIngrediente < 1){
            let btnReceita = document.getElementById("btnReceita")
            btnReceita.innerHTML = `
            <input type="button" value="Calcular receita" onclick="calcularReceita()" class="btnForm"> 
            `
        }

    let custoIngrediente = custoEmbalagem.value / quantidadeEmbalagem.value * quantidadeUsada.value

    receita.push(custoIngrediente)
    ingredientes.innerHTML += `
    <div id="${idIngrediente}" class="ingrediente">
    <strong>${nomeIngrediente.value}</strong>
    <br>Custo embalagem: R$${custoEmbalagem.value} 
    <br> Quantidade da embalagem: ${quantidadeEmbalagem.value} ${tipoQuantidade.value}
    <br> Quantidade utilizada: ${quantidadeUsada.value} ${tipoQuantidade.value}
    <br> Custo da quantidade utilizada: <strong>R$${custoIngrediente}</strong>
    <div>`

    console.log(`ID Ingrediente atual: ${idIngrediente}`)
    
    nomeIngrediente.value = ""
    custoEmbalagem.value = ""
    quantidadeEmbalagem.value = ""
    tipoQuantidade.value = ""
    quantidadeUsada.value = ""
    return idIngrediente += 1
    } else{
        window.alert("Todos os campos são obrigatórios.")
    }

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
    custoReceita.innerHTML = `<p class="resultado"> <strong>O custo total da receita é: R$ ${resultado}</strong> <p>`
}