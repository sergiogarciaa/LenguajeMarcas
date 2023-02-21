/*A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
Determinar cual de los dos elementos de texto es más largo.
Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false.
Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos: + - * / y %.
Determinar el resultado de incremento y decremento para el primer valor numérico.
Determinar el resultado del exponente con asignación para el segundo valor numérico, siendo el exponente el primero.
 */
// PARTE 1
const valores = [true, 5, false, "hola", "adios", 2];
let largo = valores[3];
for (let i = 0; i<valores.length; i++){
    if (valores[4]<largo){
        largo = valores[4];
    }
}
console.log(largo + " Es la palabra más larga");
// PARTE 2
let soyTrue;
let soyFalse;

soyTrue = valores[0];
soyFalse = valores[2];

document.write(soyFalse);
document.write(soyTrue);

// PARTE 3
console.log(valores[1] + " + " + valores[5]  +" = " + (valores[1] + valores[5]));
console.log(valores[1] + " - " + valores[5]  +" = " + (valores[1] - valores[5]));
console.log(valores[1] + " % " + valores[5]  +" = " + (valores[1] % valores[5]));
console.log(valores[1] + " / " + valores[5]  +" = " + (valores[1] / valores[5]));
console.log(valores[1] + " * " + valores[5]  +" = " + (valores[1] * valores[5]));

// PARTE 4
let d1;
let d2;
d1 = valores[1];
d2 = valores[5];
console.log(--d1);
console.log(++d1);
console.log(--d2);
console.log(++d2);

// PARTE 5
console.log(Math.pow(valores[5], valores[1]));


