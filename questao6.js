/*
Questão 06 – Crie um algoritmo usando o método forEach() para imprimir 
apenas os elementos pares de um array?  
 
*/
resposta
let array = [1, 2, 3, 4, 5];
array.forEach(element => {
    if (element % 2 === 0) {
        console.log(element);
    }
});