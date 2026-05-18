function mostrarCupom(){
    const divCupom = document.getElementById("campo-cupom");
    const botaoAlternarVisibilidade = document.getElementById("campo-deseja-cupom");
    if (divCupom.style.display === "" || divCupom.style.display === "none"){
        divCupom.style.display = "block";
    } else {
        divCupom.style.display = "none";
    }
}
function calcularTotal(){
    
    let nomeProduto = "";
    let precoBase = 0;
    let precoTotal = 0;
    const resultados = document.getElementById("campo-total")
    const mostrarResultado = document.getElementById("campo-resultado")
    if (mostrarResultado.style.display === "" || mostrarResultado.style.display === "none"){
        mostrarResultado.style.display = "block"
    } else {
        mostrarResultado.style.display = "none";
    }
    const nomeCliente = document.getElementById("campo-nome")
    const selectProduto = document.getElementById("campo-produto");
    produto = selectProduto.value;
    if (produto === "sabao-po"){
        precoBase = 5.90
        nomeProduto = "Sabão em pó"
    } else if (produto === "sabonete-liquido"){
        precoBase = 9.90
        nomeProduto = "Sabonete líquido"
    } else if (produto === "refrigerante"){
        precoBase = 7.90
        nomeProduto = "Refrigerante"
    } else if (produto === "pao-frances"){
        precoBase = 2.50
        nomeProduto = "Pão francês"
    } else {
        alert("Selecione um produto")
    }
    const quantidadeProduto = document.getElementById("campo-quantidade");
    precoTotal = precoBase * quantidadeProduto.value;
    const temCupom = document.getElementById("campo-deseja-cupom");
    if (temCupom === "sim"){
        precoTotal = precoTotal - (precoTotal * 0.1);
    }
    resultados.value = (`Nome: ${nomeCliente.value}
Produto(s): ${nomeProduto}
Preço p/ unidade: ${precoBase.toFixed(2)}
Custo final: ${precoTotal.toFixed(2)}`)
}

function mostrarResultado(){
    const divResultado = document.getElementById("campo-resultado");
    if (divResultado.style.display === "" || divResultado.style.display === "none"){
        divResultado.style.display = "block";
    } else {
        divResultado.style.display = "none";
    }
}

function limparLista(){
    const ocultar = document.getElementById("campo-resultado")
    if (ocultar.style.display === "" || ocultar.style.display === "block"){
        ocultar.style.display = "none"
    } else {
        ocultar.style.display = "block";
    }
}