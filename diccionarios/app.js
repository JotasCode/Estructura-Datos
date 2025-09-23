console.log("--- 1. Arreglos ---");
const numeros = [15, 30, 45, 60, 75];
console.log(`Arreglo: ${numeros}`)
numeros.push(90);
numeros.push(105);
console.log(`Arreglo despues de ser modificado: ${numeros}`);
numeros.pop()
console.log(`Arreglo despues de ser modificado por segunda vez: ${numeros}`);
console.log(`Elemento en el índice 4 del arreglo: ${numeros[4]}`);


console.log("\n--- 2. Diccionarios (Objetos) ---");
const manga = {
  titulo: "Dragon Ball",
  autor: "Akira Toriyama",
  anio: 1985
};

console.log(`Título del manga: ${manga.titulo}`);
manga.editorial = "Shueisha";
manga.protagonista = "Son Goku (Kakaroto)" 
console.log(manga);
manga.villano = "Freezer"
console.log(`Autor del manga: ${manga.autor}`)
console.log(`Año de estreno del manga: ${manga.anio}`)
console.log(`Editorial del manga: ${manga.editorial}`)
console.log(`Prtagonista del manga: ${manga.protagonista}`)
console.log(`Villano del manga: ${manga.villano}`)


console.log("\n--- 3. Pilas (Stacks) ---");
const pila = ["Moltres","Zapdos","Acticuno"];
const pokémon = pila;

pila.push("Charmander");
pokémon.push("Squirtel");
pokémon.push("Bullbasaur");
console.log(`Pila (Pokémon) después de apilar: ${pila}`);

const datoDesapilado = pila.pop();
const pokémonFuera = datoDesapilado;
console.log(`Dato (Pokémon) desapilado: ${pokémonFuera}`);

const segundoPokémonFuera = pokémon.pop();
console.log(`Segundo dato (Pokémon) desapilado: ${segundoPokémonFuera}`);

console.log(`Pila (Pokémon) después de desapilar: ${pokémon}`);


console.log("\n--- 4. Colas (Queues) ---");
const cola = ["Bulma","Milk","Yamcha"];
const personajesDB = cola;

cola.push("Vegueta");
personajesDB.push("Picolo");
personajesDB.push("Krilin");
console.log(`Cola (Personajes de Dragon Ball) después de en-colar: ${cola}`);

const datoDecolado = cola.shift();
const personajeDecolado = datoDecolado;
console.log(`Dato (Personaje) de-colado: ${personajeDecolado}`);

const segundoPersonajeDecolado = personajesDB.shift();
console.log(`Segundo dato (Personaje) de-colado: ${segundoPersonajeDecolado}`);

console.log(`Cola (Personajes de Dragon Ball) después de de-colar: ${personajesDB}`);