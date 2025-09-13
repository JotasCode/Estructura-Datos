const resultado = document.getElementById("txtresultado");

function mensaje(texto){
    console.log(texto);
    alert(texto);
    const resultado = document.getElementById("txtresultado");
    resultado.textContent = texto;
};
function agregar(Palabra){
    resultado.textContent = Palabra;
};
function borrar(Palabra){
};
function mostrar(Palabra){
};
function modificar(Palabra){
};

const btnagregar = document.getElementById("btnagregar");
const btnborrar = document.getElementById("btnborrar");
const btnmodificar = document.getElementById("btnmodificar");
const btnmostrar = document.getElementById("btnmostrar");

btnagregar.AddEventListener("click", agregar("KLK"));
btnborrar.AddEventListener("click", borrar("KLK"));
btnmostrar.AddEventListener("click", mostra("KLK"));
btnmodificar.AddEventListener("click", modificar("KLK"));