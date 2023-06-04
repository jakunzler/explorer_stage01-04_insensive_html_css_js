var a;
var b;
var valor;

alert("Hello World!");

a = Number(prompt("Digite um número para realizar uma soma"));
b = Number(prompt("Digite outro número para realizar uma soma"));
var soma = a + b;
console.log(soma);
alert(soma);

valor = prompt("Pressione alguma tecla do teclado");
if (typeof valor === 'number') {
  console.log("É um número");
  alert("É um número");
} else {
  console.log("Não é um número");
  alert("Não é um número");
}

valor = prompt("Escreva algo");
if (typeof valor === 'string') {
  console.log("É uma string");
  alert("É uma string");
} else {
  console.log("Não é uma string");
  alert("Não é uma string");
}

valor = prompt("Escreva algo");
if (typeof valor === 'boolean') {
  console.log("É um booleano");
  alert("É um booleano");
} else {
  console.log("Não é um booleano");
  alert("Não é um booleano");
}

a = Number(prompt("Digite um número para realizar uma subtração"));
b = Number(prompt("Digite outro número para realizar uma subtração"));
var subtracao = a - b;
console.log(subtracao);
alert(subtracao);

a = Number(prompt("Digite um número para realizar uma multiplicação"));
b = Number(prompt("Digite outro número para realizar uma multipicação"));
var multiplicacao = a * b;
console.log(multiplicacao);
alert(multiplicacao);

a = Number(prompt("Digite um número para realizar uma divisão"));
b = Number(prompt("Digite um número para realizar uma divisão que não seja zero ou vazio"));
var divisao = a / b;
console.log(divisao);
alert(divisao);

valor = Number(prompt("Digite um número para realizar uma verificação"));
if (valor % 2 === 0) {
  console.log("É um número par");
  alert("É um número par");
} else {
  console.log("Não é um número par");
  alert("Não é um número par");
}

valor = Number(prompt("Digite um número para realizar uma verificação"));
if (valor % 2 !== 0) {
  console.log("É um número ímpar");
  alert("É um número ímpar");
} else {
  console.log("Não é um número ímpar");
  alert("Não é um número ímpar");
}
