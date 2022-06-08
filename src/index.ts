/*Estructuras de Datos – Arreglos
Ejercicio – Dos Arreglos
• Construya un algoritmo que tenga dos arreglos
uno que almacene 2 nombres y otro que
almacene 3 números ambos ingresados por el
usuario.
• Al final debe imprimir los valores por consola.*/

let nombres: string[] = new Array(2);
let numeros: number[] = new Array(3);
let i = 0;

for (i = 0; i < numeros.length; i++) {
  numeros[i] = Number(prompt(" ingrese numeros al azar"));

  console.log(
    " El numero en la posicion" + "",
    +i + "",
    "Es:" + "",
    +numeros[i]
  );
}
for (i = 0; i < nombres.length; i++) {
  nombres[i] = String(prompt(" ingrese nombres"));

  console.log(
    " El numero en la posicion" + "",
    +i + "",
    "Es:" + "",
    "" + nombres[i]
  );
}
