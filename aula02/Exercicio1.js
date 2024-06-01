const cpf = "123.456.789-22" ;
var nome = "Luiz" ;

function sobreNome(){
    let sobreNome = "Gonzaga";
    //console.log(sobreNome)
    return sobreNome;
};

console.log(nome);
console.log(sobreNome());
console.log(cpf);
console.log(`O nome é: ${nome}. O sobrenome é: ${sobreNome()}. O CPF é: ${cpf}`);