
// ! PATH MODULE
// El módulo `path` de Node.js te permite trabajar con rutas de archivos y directorios de forma 
// segura y multiplataforma (Windows, Linux, etc.).

// Se encarga de manejar separadores (`/` o `\`), rutas relativas o absolutas, extensiones de archivo, etc.

// Se importa así:


import path from 'path' // con ESM
o
const path = require('path') // con CommonJS


  // Funciones útiles:

  - `path.join(...)`//: une segmentos de ruta
  - `path.resolve(...)`//: resuelve a una ruta absoluta
  - `path.basename(ruta)`//: obtiene el nombre del archivo
  - `path.dirname(ruta)`//: obtiene el directorio padre
  - `path.extname(ruta)`//: obtiene la extensión del archivo

// Ejemplo:

const ruta = path.join("src", "docs", "archivo.txt")
console.log(ruta) // src/docs/archivo.txt



//! PROCESS.CWD
//? `process.cwd()` devuelve el directorio actual desde donde se ejecuta tu aplicación, es decir, el "directorio de trabajo".
//? No importa en qué carpeta esté el archivo `.js`, lo que importa es desde dónde haces `node archivo.js`.

Ejemplo:

```js
console.log(process.cwd())
```

  //Si estás en:

  ```
C:\mi-proyecto
```

  //Y corres:

  ```
node src/index.js
```

  //Te imprimirá:

  ```
C:\mi-proyecto
```

//? Sirve para construir rutas absolutas desde el punto de entrada del proyecto.