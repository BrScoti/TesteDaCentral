"use strict";

/*Um simples contador de 1 até 100, que mudará os números por textos 
dependendo de que número são multiplos. 
*/
//Constantes com o texto para múltiplos de 3, 5 e dos dois respectivamente. 
var multiples3 = "Central";
var multiples5 = "Franqueado";
var multiples3_5 = "CentralFranqueado"; //For que faz toda a contagem

for (var counter = 1; counter <= 100; counter++) {
  imprimeNumero(counter);
} //Função que testa se o número é multiplo de 3, 5 ou os dois.
//Caso seja, o número é modificado por um texto.


function imprimeNumero(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log(multiples3_5);
  } else if (num % 3 == 0) {
    console.log(multiples3);
  } else if (num % 5 == 0) {
    console.log(multiples5);
  } else {
    console.log(num);
  }
}
