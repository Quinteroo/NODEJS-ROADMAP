

// ! DIRNAME Y FILENAME
//* `__dirname` y `__filename` son variables especiales en Node.js que te dicen la ubicación del archivo actual.


// ! `__dirname`
//? Contiene la ruta absoluta del directorio en el que está el archivo.

console.log(__dirname);
//→ /Users/tuusuario/proyecto/src




// ! `__filename`
//? Contiene la ruta absoluta completa al archivo actual.

console.log(__filename);
//→ /Users/tuusuario/proyecto/src/index.js




// ! ¿Para qué se usan?
// - Para construir rutas seguras a archivos, sin depender de dónde se ejecuta el script.
// - Útiles con `fs`, por ejemplo:


import fs from 'fs';
import path from 'path';

const ruta = path.join(__dirname, 'archivo.txt');

fs.readFile(ruta, 'utf-8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});




// ! ¿Funcionan en todos los entornos?
//? No. Si estás usando ESM (ECMAScript Modules) en vez de CommonJS, esas variables no existen por defecto.




// ! ¿Y si uso ESM?
// Puedes recrearlos así:


import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


