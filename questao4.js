/*
Questão 04 – Crie um algoritmo usando o método forEach() para encontrar a 
soma de todos os números em um array?  
 
*/
let array = [1, 2, 3, 4, 5];
let soma = 0;
array.forEach(element => {
    soma += element;
});
console.log(soma); // Saída: 15