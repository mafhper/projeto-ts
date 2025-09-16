//Atividade 2

// Considerando o uso de TypeScript

//  Desafio Leve: Calculadora de Notas

// Instalar Dependência

// npm i prompt-sync

// Capturar Notas

// Use prompt-sync para pedir duas notas do usuário

// Calcular e Exibir

// Mostre a média e se o aluno foi aprovado ou reprovado

// const prompt = require("prompt-sync")();
// let n1: number = Number(prompt("Nota 1: "));
// let n2: number = Number(prompt("Nota 2: "));
// console.log("Média:", (n1 + n2) / 2);

// Importa o módulo prompt-sync
const prompt = require('prompt-sync')();

// Captura as notas do usuário e as converte para o tipo number
let nota1: number = Number(prompt('Digite a primeira nota: '));
let nota2: number = Number(prompt('Digite a segunda nota: '));

// Calcula a média das notas
let media: number = (nota1 + nota2) / 2;

// Exibe a média no console
console.log(`A média das notas é: ${media.toFixed(2)}`);

// Verifica se o aluno foi aprovado ou reprovado e exibe a mensagem correspondente
if (media >= 7) {
  console.log('Parabéns! Você foi aprovado!');
} else {
  console.log('Infelizmente, você foi reprovado.');
}
