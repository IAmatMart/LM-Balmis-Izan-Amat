'use strict;'



console.log("El primer Parametro no es un array")
console.log("El segundo Parametro no es una funcion")
let numeros  = [89, 23, 444, 150, 11];

function OrdenaNumeros()
{
console.log("Array Original")
console.log(numeros)
console.log("Array Modificado")
numeros.sort((a, b) => a - b);
console.log(numeros)
console.log("Array Modificado2")
numeros.sort((a, b) => b - a);
console.log(numeros)

}

OrdenaNumeros();

let fechas = [
"2023-06-15",
"2021-12-10",
"2022-03-25",
"2023-01-01"
]


function OrdenarFechas()
{
console.log("Array original")
console.log(fechas)
 console.log("Array Ordenado")
 console.log(fechas.sort())
}

OrdenarFechas();
