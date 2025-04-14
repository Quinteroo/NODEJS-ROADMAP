



//! GLOBALTHIS
//? 📌 globalThis → Es un estándar moderno de JavaScript que apunta al objeto global independientemente 
//? de dónde se ejecute el código. Funciona tanto en el navegador como en Node.js.
//? es una variable que contiene todas las funciones, objetos, variables... de nuestra aplicación.

//? 📌 window → Es el objeto global en los navegadores. Contiene funciones como alert(), document, console, etc.

//? 📌 global → Es el objeto global en Node.js. No tiene window, pero sí contiene funciones y 
//? variables del entorno de ejecución de Node, como process, require(), setTimeout(), etc.


//? ✅ globalThis → Funciona en cualquier entorno.
//? ❌ window → Solo en el navegador.
//? ❌ global → Solo en Node.js.


//! LAS VARIABLES Y FUNCIONES QUE CREAMOS, ¿SE AÑADEN A GLOBALTHIS?
//* Depende

//? 1️⃣ Sí se incluyen en el objeto global si se declaran sin let, const o var
myVar = "Hola";
console.log(globalThis.myVar); // "Hola"



//? 2️⃣ No se incluyen si usas let, const o var
let myLet = "Hola";
const myConst = "Hola";
var myVar = "Hola";

console.log(globalThis.myLet); // undefined
console.log(globalThis.myConst); // undefined
console.log(globalThis.myVar); // undefined


//? 3️⃣ Las funciones function sí se incluyen en el objeto global
function saludar() {
  return "Hola!";
}

console.log(globalThis.saludar()); // "Hola!"


//? 🔴 Pero las funciones con const o let no lo hacen:
const despedirse = () => "Adiós!";
console.log(globalThis.despedirse); // undefined


//! 💡 ¿Por qué esto es importante?
//* Si declaras algo sin let o const, lo estás haciendo global sin querer, lo que puede generar errores.

//! Es una mala práctica modificar el objeto global, porque puede causar colisiones de nombres en aplicaciones grandes.

