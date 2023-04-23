// Exercício Nota Escolar
// Obter a média a partir de uma array

// 0-5 = F
// 6-7 = D
// 7-8 = C
// 8-9 = B
// 9-10 = A
const array = [6, 7,8];
// Média 6

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
        const media = calcularMedia(notas);

    if (media < 5) return 'F';
    if (media < 6) return 'D';
    if (media < 7) return 'C';
    if (media < 8) return 'B';
    return 'A'
}

function calcularMedia(array) {
    const soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma/(array.length);
}