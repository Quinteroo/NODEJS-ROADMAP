

//! WORKING WITH FILES
// cómo trabajar con el sistema de archivos desde una aplicación Node. 
// Es una parte muy común cuando haces backends, herramientas de línea de comandos, procesadores de datos, etc.


//! FS MODULE
//? Es un módulo nativo de Node.js para trabajar con el sistema de archivos: leer, escribir, borrar o renombrar archivos y carpetas.


// Se importa así:
const fs = require("fs") // CommonJS

// O con ESM:
import fs from "fs"
import { promises as fsPromises } from "fs"



//! Métodos comunes:
- `readFile` / `readFileSync`
  - `writeFile` / `writeFileSync`
  - `appendFile` / `appendFileSync`
  - `unlink` / `unlinkSync` //(borra archivos)
  - `readdir` / `readdirSync` //(lee carpetas)
  - `mkdir` / `mkdirSync` //(crea carpetas)
  - `stat` / `statSync` //(info del archivo)
  - `rename` / `renameSync`


