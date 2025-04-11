


//! ASYNC / AWAIT
//? async/await es una forma moderna y más clara de trabajar con código asíncrono. 
//? Usa las mismas promesas por debajo, pero permite escribirlo como si fuera código síncrono.

// Descripción:
// Una función async siempre devuelve una promesa. Dentro puedes usar await para esperar a que se resuelva 
// una promesa sin bloquear el hilo.

// Ejemplo:

const fs = require('fs').promises;

async function leerArchivo() {
  try {
    const data = await fs.readFile('archivo.txt', 'utf8');
    console.log('Contenido del archivo:', data);
  } catch (err) {
    console.error('Error al leer el archivo:', err);
  }
}

leerArchivo();