"use strict";

// Exercício Nota Escolar
// Obter a média a partir de uma array

// Array de objetos com nome e nota dos alunos
var alunos = [{
  nome: 'João',
  nota: 8
}, {
  nome: 'Maria',
  nota: 6.5
}, {
  nome: 'Pedro',
  nota: 7.5
}, {
  nome: 'Mariana',
  nota: 5
}, {
  nome: 'Lucas',
  nota: 9
}];

// Função que filtra os alunos com nota maior ou igual a 6
var filtrarAlunos = function filtrarAlunos(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};

// Chamando a função para filtrar os alunos
var alunosAprovados = filtrarAlunos(alunos);

// Exibindo os alunos aprovados
console.log(alunosAprovados);