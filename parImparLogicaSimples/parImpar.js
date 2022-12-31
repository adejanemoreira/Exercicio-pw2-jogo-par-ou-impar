//Crie um programa que simule o jogo par ou ímpar usando javascript?

var number = prompt('Digite um número ');
var resultado = number % 2 === 0 ? 'par' : 'impar';
alert(`número ${number} é ${resultado}`);
