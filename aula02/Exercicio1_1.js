const  codigoProduto = "MONIT01" ;
var produto = "Monitor";

function exibirDetalhesProduto(){
    let categoria = "Eletronico";
    
    console.log(produto);
    console.log(categoria);
    console.log(codigoProduto);
    console.log(`O produto ${produto} tem a categoria ${categoria} e possui o código ${codigoProduto}`);
}

exibirDetalhesProduto();