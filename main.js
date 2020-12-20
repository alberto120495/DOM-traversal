//!Obtener elemento por ID
//const abuelo = document.getElementById("abuelo-id");
//changeColor(abuelo, "red");

//!Obtener elemento por nombre de clase
//const padres = Array.from(document.getElementsByClassName("padre"));

//!Obtener elemento por querySelector
// const abuelo = document.querySelector("#abuelo-id");
//changeColor(abuelo, "#333");
//const padres = document.querySelectorAll(".padre"); */

/* padres.forEach((element) => {
  changeColor(element, "red");
});
console.log(padres);
 */

//!Obtener el hijo de un elemento
/*const abuelo = document.querySelector(".abuelo");
//const padres = Array.from(abuelo.children);
const padres = abuelo.children;
const padreUno = padres[0];

const hijos = padreUno.children;
console.log(padres);
console.log(hijos);

changeColor(hijos[0], "orange");

for (let index = 0; index < padres.length; index++) {
  changeColor(padres[index], "red");
} */

//!Obtener hijos directamente
/* const abuelo = document.querySelector(".abuelo");
const hijoUno = abuelo.querySelector(".hijo");
const hijos = abuelo.querySelectorAll(".hijo");

console.log(hijoUno);
console.log(hijos); */

//!Obtener el padre desde los hijos uno a  uno
/* const hijoUno = document.querySelector("#hijo-uno");
const padre = hijoUno.parentElement;
const abuelo = padre.parentElement;
console.log(abuelo);
 */

//!Obtener el padre desde los hijos directamente
/* const hijoUno = document.querySelector("#hijo-uno");
const abuelo = hijoUno.closest(".abuelo");
console.log(abuelo); */

//!Obtener al hermano siguiente de un elemento
const hijoUno = document.querySelector("#hijo-uno");
const hermanoSiguiente = hijoUno.nextElementSibling;

const hermanoAnterior = hermanoSiguiente.previousElementSibling;
console.log(hermanoAnterior);

function changeColor(elemento, color) {
  elemento.style.backgroundColor = color;
}
