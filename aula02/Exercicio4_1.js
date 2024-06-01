let aluno = {
    nome: "Luiz",
    cpf: "123.456.789-12",
    cidade:"João Pessoa",
    notas:[8.4 , 9 , 8.5, 6.4]
};

console.log(`Nome do Aluno: ${aluno.nome} | CPF é : ${aluno.cpf} | A cidade é: ${aluno.cidade}`);
console.log(`Nota 1 :${aluno.notas[0]} | Nota 2 :${aluno.notas[1]} | Nota 3 :${aluno.notas[2]}  | Nota 4 :${aluno.notas[3]}`);


const media = (aluno.notas[0]+aluno.notas[1]+aluno.notas[2]+aluno.notas[3]) / aluno.notas.length;

console.log(`A media do aluno é: ${media.toFixed(2)}`)

const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];
const notaConvertida = notaAleatoria * 10;

console.log(`A nota sorteada foi: ${notaAleatoria}, e convertida para a escala de 0 a 100: ${notaConvertida}`)