




//! CALLBACKS
//? Una función callback es una función que se pasa como argumento a otra y que se ejecuta cuando la tarea termina.

// Descripción:
// Fue la forma más común antes de que existieran Promises. Pero si se usan mal, pueden llevar a un problema 
// llamado “callback hell” (anidación excesiva).

// Ejemplo:


const fs = require('fs');

fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }
  console.log('Contenido del archivo:', data);
});