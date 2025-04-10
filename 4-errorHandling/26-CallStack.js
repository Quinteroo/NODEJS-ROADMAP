



//!CALL STACK / STACK TRACE
//? Cuando ocurre un error, Node imprime una lista de funciones que se ejecutaron hasta llegar al error. 
//? Eso se llama stack trace.

// Se imprime por defecto en la terminal o consola, si el error ocurre mientras ejecutas tu aplicación en Node.js.

// Cuando un error no se maneja, Node.js genera un mensaje que incluye la descripción del error y la stack trace, 
// que te muestra las funciones que se llamaron antes de que ocurriera el error

`
TypeError: undefinedFunction is not a function
    at myFunction (/ruta/app.js:2:19)
    at Object.<anonymous> (/ruta/app.js:5:1)
    at Module._compile (node:internal/modules/cjs/loader:1210:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1270:10)
    at Module.load (node:internal/modules/cjs/loader:1067:32)
    at Function.Module._load (node:internal/modules/cjs/loader:902:12)
    at Function.executeUserCode (node:internal/modules/run_main:61:12)
    at node:internal/main/run_main_module:23:47
`


// !Este mensaje se muestra en la terminal o consola donde ejecutaste el código y te indica:

// *Tipo de error:
// TypeError: undefinedFunction is not a function

// *Ubicación en el código:
// Muestra el archivo y la línea donde ocurrió el error (/ruta/app.js:2:19).

// *Secuencia de llamadas:
// Te da un listado de las funciones que se ejecutaron antes de llegar al error.

