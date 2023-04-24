"use strict";

// Exercício Nota Escolar
// Obter a média a partir de uma array

var alunos = ['Jose', 'Maria', 'Gustavo'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);