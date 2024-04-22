/*
Questão 05 – Crie um algoritmo usando o método map() para criar um novo 
array com o dobro de cada número ímpar em um array original?  
*/
resposta
let array = [1, 2, 3, 4, 5];
let arrayDobroImpares = array.map(element => {
    if (element % 2 !== 0) {
        return element * 2;
    }
    return element;
});
console.log(arrayDobroImpares);