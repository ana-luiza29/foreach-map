/* 
Questão 07 – Crie um algoritmo usando o método map() para calcular o 
quadrado de cada número em um array?  
 
 
*/
resposta
let array = [1, 2, 3, 4, 5];
let arrayQuadrado = array.map(element => {
    return element ** 2;
});
console.log(arrayQuadrado); // Saída: [1, 4, 9, 16, 25]