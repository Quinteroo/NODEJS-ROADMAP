



//! TIPOS DE ERRORES

//* 1. System errors  
//? Estos errores son generados por el sistema operativo o recursos externos cuando Node interactúa con ellos. 
// Suelen aparecer al trabajar con archivos, redes, o procesos. 
// Tienen propiedades como `code`, `errno` o `syscall`.

const fs = require('fs');

fs.readFile('archivo-que-no-existe.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error de sistema:', err.code); // por ejemplo: ENOENT
    return;
  }
  console.log(data);
});



//* 2. User-specified errors  
//? Son errores lanzados por el propio desarrollador para controlar condiciones personalizadas en la aplicación. 
// Pueden ser simples `throw new Error()` o clases personalizadas.

function dividir(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir entre cero');
  }
  return a / b;
}


//* 3. Assertion errors  
// Se usan para asegurar que ciertas condiciones se cumplan durante la ejecución. Si la condición falla, 
// se lanza un `AssertionError`.

const assert = require('assert');

function obtenerEdad(usuario) {
  assert(usuario.edad >= 0, 'La edad no puede ser negativa');
  return usuario.edad;
}


//* 4. JavaScript errors  
// Son los errores del propio lenguaje, generados por el motor de ejecución de JavaScript (V8).

// - ReferenceError: cuando se hace referencia a una variable no declarada

console.log(nombre); // ReferenceError


// - TypeError: cuando se intenta hacer algo no permitido con un tipo de dato

const x = null;
x(); // TypeError: x is not a function


//- SyntaxError: cuando hay errores de sintaxis

eval('function ()'); // SyntaxError


//- RangeError: cuando se pasa un valor fuera del rango esperado

const arr = new Array(-1); // RangeError


//- EvalError: relacionado con el mal uso de `eval` (raro en código moderno)

