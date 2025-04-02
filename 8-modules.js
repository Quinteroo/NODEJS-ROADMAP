

!🔹 Modules en Node.js
Los módulos en Node.js son una forma de estructurar y organizar el código. Permiten dividirlo en piezas reutilizables 
que pueden ser importadas y exportadas entre diferentes archivos.

Node.js admite dos sistemas de módulos: CommonJS y ESM (ECMAScript Modules).


  
!🔹 1. CommonJS (CJS)
CommonJS es el sistema de módulos tradicional que se usa en Node.js desde sus primeros días. Funciona de la siguiente manera:

*Exportar módulos: 
En CommonJS, usamos module.exports o exports para exportar funciones, objetos o variables de un archivo. 
// ejemplo.js
const saludo = "Hola, mundo!";
module.exports = saludo;


*Importar módulos: 
Para importar un módulo, se utiliza require.
// app.js
const saludo = require('./ejemplo');
console.log(saludo); // "Hola, mundo!"


!Características de CommonJS:
*Sincronización: 
require es sincrónico, lo que significa que se espera a que se cargue el módulo antes de seguir ejecutando el código.

*Cargando módulos: 
Cuando usas require, Node.js lee y ejecuta el módulo en el momento de la importación.



!2. ESM (ECMAScript Modules)
ESM es el sistema de módulos oficial y moderno de JavaScript, basado en el estándar ECMAScript. Es más familiar para 
los desarrolladores que trabajan tanto con Node.js como con navegadores web, ya que es el mismo sistema que se utiliza en el frontend.

  
*Exportar módulos: 
En ESM, usamos export para exportar funciones, clases, objetos o variables.
// ejemplo.mjs
const saludo = "Hola, mundo!";
export default saludo;


*Importar módulos: 
Para importar un módulo en ESM, usamos import.
// app.mjs
import saludo from './ejemplo.mjs';
console.log(saludo); // "Hola, mundo!"
Características de ESM:


*Asíncrono: 
import es asíncrono, lo que significa que permite optimizaciones como la carga diferida.

  
*Soporte para importación/ exportación dinámica: 
Puedes usar import() de manera dinámica.

  
!¿Cómo usar ESM en Node.js? 
Para usar ESM en Node.js, debes asegurarte de que el archivo tenga la extensión .mjs o declarar en el package.json "type": "module".
  
// package.json
{
  "type": "module"
}


  
