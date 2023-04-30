"use strict";

// Exercício Nota Escolar
// Obter a média a partir de uma array

var alunos = [{
  nome: "João",
  nota: 5.5
}, {
  nome: "Maria",
  nota: 7.0
}, {
  nome: "Pedro",
  nota: 8.5
}, {
  nome: "Ana",
  nota: 4.0
}, {
  nome: "Lucas",
  nota: 6.5
}];
function filtrarAlunos(alunos) {
  var alunosAprovados = [];
  for (var i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 6) {
      alunosAprovados.push(alunos[i]);
    }
  }
  return alunosAprovados;
}
var alunosAprovados = filtrarAlunos(alunos);
console.log(alunosAprovados);