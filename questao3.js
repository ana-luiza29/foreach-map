/*
 
Questão 03 – Crie um algoritmo usando o método forEach() para encontrar o 
maior número em um array de números? 
  
 
*/
resposta
let array = [1, 7, 3, 9, 5];
let maiorNumero = array[0];
array.forEach(element => {
    if (element > maiorNumero) {
        maiorNumero = element;
    }
});
console.log(maiorNumero);