




// ! 1. Environment variables (variables de entorno)
// Son valores que vienen del entorno del sistema operativo y se usan para configurar la app sin escribirlos en el código.
// Uso típico: claves secretas, puertos, entornos (desarrollo, producción).
// Acceso en Node:


console.log(process.env.NODE_ENV); // 'development' o 'production'


// ! 2. Taking input (recibir entradas)
// Se refiere a capturar lo que el usuario escribe en la terminal mientras el CLI está corriendo.
// Ejemplo (preguntar al usuario):


process.stdin.on('data', (data) => {
  console.log(`Escribiste: ${data.toString().trim()}`);
});


// O con `readline`:


const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('¿Tu nombre? ', (nombre) => {
  console.log(`Hola, ${nombre}`);
  rl.close();
});




// ! 3. Printing output (mostrar salida)
// Es mostrar información al usuario en la consola.

// Ejemplo:


console.log('Proceso completado');
console.error('Ocurrió un error');




// ! 4. Command line args (argumentos de línea de comandos)
// Son los valores que el usuario pasa al ejecutar el CLI.

// Ejemplo:

// bash
// node mi-cli.js init --nombre=proyecto


// En el código:


console.log(process.argv);
// [ 'node', 'mi-cli.js', 'init', '--nombre=proyecto' ]


// Puedes analizarlos tú mismo o usar librerías como `commander`.

