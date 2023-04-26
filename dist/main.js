"use strict";

// Exercício Nota Escolar
// Obter a média a partir de uma array

var listaPresenca = ['Ana', 'José', 'João', 'Bianca'];
var notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(listaPresenca[0]);
var lista1 = ['Ana', 'José', 'João', 'Bianca'];
var lista2 = ['Predo', 'Joaquim', 'Maria', 'Olivia'];
var listas = lista1.concat(lista2);
console.log(listas);
var notas1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var notasBoas = notas1.filter(function (n) {
  return n >= 6;
});
console.log(notasBoas);