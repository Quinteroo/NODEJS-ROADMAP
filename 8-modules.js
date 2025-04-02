

!🔹 Modules en Node.js
Los módulos en Node.js son una forma de estructurar y organizar el código. Permiten dividirlo en piezas reutilizables 
que pueden ser importadas y exportadas entre diferentes archivos.

Es decir, Modules es un patrón de diseño.

----------------------------------------------------------------------------

Node.js admite dos sistemas de módulos: CommonJS y ESM (ECMAScript Modules).


!🔹 1. CommonJS (CJS)
CommonJS es el sistema de módulos tradicional que se usa en Node.js desde sus primeros días. Funciona de la siguiente manera:

!Características de CommonJS:
*Sincronización: 
require es sincrónico, lo que significa que se espera a que se cargue el módulo antes de seguir ejecutando el código.


  
*Cargando módulos: 
Cuando usas require, Node.js lee y ejecuta el módulo en el momento de la importación.

*Exportar módulos: 
En CommonJS, usamos module.exports o exports para exportar funciones, objetos o variables de un archivo. 
Exportarlo de esta forma nos permite renombrar la función.
// ejemplo.js
const saludo = "Hola, mundo!";
module.exports = saludo;


*Importar módulos: 
Para importar un módulo, se utiliza require.
// app.js
const saludo = require('./ejemplo');
console.log(saludo); // "Hola, mundo!"

// renombra la función
const unSaludoMiGente = require('./ejemplo')
console.log(unSaludoMiGente)

------------------------------------------------------------------------------------------------
Para "obligar" a conservar el nombrem podemos pasarlo como un objeto y al importartlo hacer destructuring
// ejemplo.js
const saludo = "Hola, mundo!";
module.exports = {
  saludo
  {

// app.js
const {saludo{ = require('./ejemplo');
console.log(saludo); // "Hola, mundo!"



  
