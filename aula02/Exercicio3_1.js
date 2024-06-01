const temperaturas = [25 , 30 ,15 ,20];

console.log(`As temperaturas armazenadas são; ${temperaturas}`);

//Serteia uma das temperaturas do array acima
var temperaturaAleatoria = temperaturas[Math.floor(Math.random() * temperaturas.length)];

//Converte a temperatura para Fahrenheit
const temperaturaF = (temperaturaAleatoria * 9/5)+32;

//Imprimo a temperatura em Celcius convertida para Fahrenheit
console.log(`A temperatura sorteada é ${temperaturaAleatoria} ºC, que corresponde à ${temperaturaF} °F`)