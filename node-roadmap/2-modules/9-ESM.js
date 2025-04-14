// !2. ESM (ECMAScript Modules)
// ?ESM es el sistema de módulos oficial y moderno de JavaScript, basado en el estándar ECMAScript. 
// Es más familiar para los desarrolladores que trabajan tanto con Node.js como con navegadores web, 
// ya que es el mismo sistema que se utiliza en el frontend.
// CommonJS se está deprecandoxº

// *Exportar módulos: 
// En ESM, usamos export para exportar funciones, clases, objetos o variables.
// ejemplo.mjs
const saludo = "Hola, mundo!";
export default saludo;


// *Importar módulos: 
// Para importar un módulo en ESM, usamos import.
//  app.mjs
import saludo from './ejemplo.mjs';
console.log(saludo); // "Hola, mundo!"
// Características de ESM:


// *Asíncrono: 
// import es asíncrono, lo que significa que //? permite optimizaciones como la carga diferida.


// *Soporte para importación/ exportación dinámica: 
// Puedes usar import() de manera dinámica.


//! Carga diferida
// La carga diferida (también conocida como lazy loading) es una técnica que consiste 
// en cargar un módulo o recurso solo cuando se necesita, en lugar de cargarlo al 
// inicio de la aplicación.


// !¿Cómo usar ESM en Node.js? 
// Para usar ESM en Node.js, debes asegurarte de que el archivo tenga la extensión .mjs o declarar en el package.json "type": "module".

// package.json
```{
  "type": "module"
}```


