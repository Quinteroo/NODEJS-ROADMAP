


//! PROMISES
//? Una Promise es un objeto que representa un valor que puede estar disponible ahora, en el futuro, o nunca. 
//? Se usa para manejar código asíncrono de una forma más limpia que los callbacks.

// Descripción:
// Permite encadenar .then() para manejar el resultado y .catch() para manejar errores.

// Ejemplo:

const fs = require('fs').promises;

fs.readFile('archivo.txt', 'utf8')
  .then(data => {
    console.log('Contenido del archivo:', data);
  })
  .catch(err => {
    console.error('Error al leer el archivo:', err);
  });