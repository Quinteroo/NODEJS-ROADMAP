import { promises as fs } from "fs"
// En Node.js, el módulo 'fs' (filesystem) tiene una subpropiedad llamada promises 
// que contiene todas las versiones asíncronas basadas en Promesas de sus funciones 
// (como readFile, writeFile, etc.).

import path from 'path';
import { fileURLToPath } from 'url';

// Simular __filename y __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ahora puedes usar path.join como antes
const ruta = path.join(__dirname, "docs", 'archivo.txt');  //! hay que indicar la carpeta (docs en este caso) si el documento no está directamente en src
console.log(ruta);



async function start() {
  try {
    const data = await fs.readFile(ruta, "utf-8")
    console.log(data)

  } catch (error) {
    console.log("❌ nuevo error.", error)
  }
}



start()