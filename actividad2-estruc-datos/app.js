console.log("--- Algoritmo de Búsqueda Lineal ---")

function busquedaLineal(arr, objetivo) {
 for (let i = 0; i < arr.length; i++) {
 if (arr[i] === objetivo) {
 return i; 
 }
 }
 return -1; 
}
let arrLineal = [3, 8, 1, 6, 2, 4, 7, 5, 9];
let indiceLineal = busquedaLineal(arrLineal, 2);
console.log(`El arreglo es:`)
console.log(arrLineal)
console.log(`El número 2 se encuentra en la posición:`)
console.log(indiceLineal); 


console.log("--- Algoritmo de Búsqueda Binaria ---")

function busquedaBinaria(arr, objetivo) {
 let inicio = 0;
 let fin = arr.length - 1;
 while (inicio <= fin) {
 let medio = Math.floor((inicio + fin) / 2);
 if (arr[medio] === objetivo) {
 return medio;
 } else if (arr[medio] < objetivo) {
 inicio = medio + 1;
 } else {
 fin = medio - 1;
 }
 }
 return -1;
}
let arrBinario = [1, 2, 3, 4, 5, 6, 7, 8,9];
let indiceBinario = busquedaBinaria(arrBinario, 5);
console.log(`El arreglo ordenado es:`)
console.log(arrBinario)
console.log(`El numero 5 se encuentra en la posición:`)
console.log(indiceBinario);


console.log("--- Algoritmo de Ordenamiento por Burbuja ---");

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
const arrBurbuja = [64, 34, 25, 12, 22, 11, 90, 69];
const arrBurbujaCopia = [...arrBurbuja]
const arrOrdenadoBurbuja = bubbleSort(arrBurbujaCopia);
console.log(`Arreglo original:`);
console.log(arrBurbuja)
console.log(`Arreglo ordenado:`);
console.log(arrOrdenadoBurbuja)


console.log("\n--- Algoritmo de Ordenamiento por Selección ---");

function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
const arrSeleccion = [64, 25, 12, 22, 11, 69, 36, 49];
const arrSeleccionCopia = [...arrSeleccion]
const arrOrdenadoSeleccion = selectionSort(arrSeleccionCopia);console.log(`Arreglo original:`);
console.log(arrSeleccion)
console.log(`Arreglo ordenado:`);
console.log(arrOrdenadoSeleccion)


console.log("\n--- Algoritmo de Ordenamiento por Insercción ---")

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
const arrInsercion = [49, 36, 69, 1, 16, 20, 64, 81];
const arrInsercionCopia = [...arrInsercion]
const arrOrdenadoInsercion = insertionSort(arrInsercionCopia);console.log(`Arreglo original:`);
console.log(arrInsercion)
console.log(`Arreglo ordenado:`);
console.log(arrOrdenadoInsercion)


console.log("\n--- Algoritmo de Ordenamiento Rápido ---");

function quicksort(arr) {
 if (arr.length <= 1) {
 return arr;
 }
 const pivot = arr[0];
 const izquierda = [];
 const derecha = [];
 for (let i = 1; i < arr.length; i++) {
 if (arr[i] < pivot) {
 izquierda.push(arr[i]);
 } else {
 derecha.push(arr[i]);
 }
 }
 return [...quicksort(izquierda), pivot, ...quicksort(derecha)];
}
const arrRapido = [5, 3, 7, 6, 2, 8, 4, 1];
const arrOrdenadoRapido = quicksort(arrRapido);
console.log(`Arreglo original:`)
console.log(arrRapido)
console.log(`Arreglo ordenado:`)
console.log(arrOrdenadoRapido);


console.log("\n--- Algoritmo de Ordenamiento por Mezcla ---");

function mergeSort(arr) {
 if (arr.length <= 1) {
 return arr;
 }
 const medio = Math.floor(arr.length / 2);
 const izquierda = arr.slice(0, medio);
 const derecha = arr.slice(medio);
 return merge(mergeSort(izquierda),
mergeSort(derecha));
}
function merge(izquierda, derecha) {
 let resultado = [];
 let i = 0;
 let j = 0;
 while (i < izquierda.length && j < derecha.length) {
 if (izquierda[i] < derecha[j]) {
 resultado.push(izquierda[i]);
 i++;
 } else {
 resultado.push(derecha[j]);
 j++;
 }
 }
 return [...resultado, ...izquierda.slice(i),
...derecha.slice(j)];
}
const arrMezcla = ["Goku","Vegueta","Brolly","Gohan","CellMax","Piccolo",];
const arrOrdenadoMezcla = mergeSort(arrMezcla);
console.log(`Arerglo original:`)
console.log(arrMezcla)
console.log(`Arreglo ordenado:`)
console.log(arrOrdenadoMezcla);