/*   
 
Questão 08 – Crie um algoritmo usando o método forEach() para calcular a 
média de todos os números em um array?  
 
*/
resposta
let array = [1, 2, 3, 4, 5];
let soma = 0;
array.forEach(element => {
    soma += element;
});
let media = soma / array.length;
console.log(media); // Saída: 3