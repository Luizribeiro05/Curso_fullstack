const aprovado = 7.0;
let notas = [ 8 , 9.5 , 7];
let media = notas[0] + notas[1] + notas[2] /3;

console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);
console.log(`A media do aluno é: ${media.toFixed[2]}`)

if (media >= aprovado){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}