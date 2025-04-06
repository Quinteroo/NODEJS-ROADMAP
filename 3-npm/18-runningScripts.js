


// ! RUNNING SCRIPTS
// En un proyecto Node.js, puedes definir scripts personalizados dentro del archivo package.json,
// en la sección "scripts". Estos scripts son comandos que puedes ejecutar con npm run.

// Por ejemplo:

// "scripts": { "start": "node index.js", "dev": "nodemon index.js", "test": "jest" }

// Los scripts se ejecutan con:

// ? npm run nombre-del-script

// Ejemplo:

// npm run dev

// * Hay scripts especiales que puedes ejecutar sin necesidad de escribir "run", como:

// npm start
// npm test
// npm restart



// * También puedes usar scripts encadenados, separados con && para que se ejecuten en orden:

// "scripts": { "build": "npm run clean && npm run compile" }


// * Y puedes acceder a variables de entorno en los scripts.
// En sistemas Unix se hace con VAR=value comando, y en Windows con cross-env:

// "scripts": { "dev": "NODE_ENV=development node index.js" }

// * O con cross-env:

// "scripts": { "dev": "cross-env NODE_ENV=development node index.js" }

// Los scripts npm te permiten automatizar tareas comunes como iniciar el servidor, correr pruebas,
// compilar archivos o limpiar carpetas. 