

//! EJEMPLOS DE CÓDIGO CALLBACKS
//Claro, aquí tienes ejemplos rápidos de los métodos más usados:


const fs = require("fs")

// Leer un archivo
fs.readFile("archivo.txt", "utf-8", (err, data) => {
  if (err) throw err
  console.log(data)
})

// Escribir en un archivo
fs.writeFile("nuevo.txt", "Hola mundo", (err) => {
  if (err) throw err
  console.log("Archivo escrito")
})

// Agregar contenido a un archivo
fs.appendFile("nuevo.txt", "\nOtra línea", (err) => {
  if (err) throw err
  console.log("Contenido añadido")
})

// Borrar archivo
fs.unlink("nuevo.txt", (err) => {
  if (err) throw err
  console.log("Archivo borrado")
})

// Leer archivos de un directorio
fs.readdir("./docs", (err, files) => {
  if (err) throw err
  console.log(files)
})



//! EJEMPLOS CÓDIGO PROMISES
// Exacto, los callbacks pueden generar el famoso "callback hell". Aquí van los mismos 
// ejemplos usando `fs.promises` con `async/await`:


import { promises as fs } from "fs"

// Leer un archivo
const data = await fs.readFile("archivo.txt", "utf-8")
console.log(data)

// Escribir en un archivo
await fs.writeFile("nuevo.txt", "Hola mundo")
console.log("Archivo escrito")

// Agregar contenido a un archivo
await fs.appendFile("nuevo.txt", "\nOtra línea")
console.log("Contenido añadido")

// Borrar archivo
await fs.unlink("nuevo.txt")
console.log("Archivo borrado")

// Leer archivos de un directorio
const files = await fs.readdir("./docs")
console.log(files)


//* Estas funciones deben ir dentro de una `async function` o al tope de un módulo ES.
async function start() {
  await fs.writeFile("nuevo.txt", "Hola mundo")
  console.log("Archivo escrito")
}


//! DIFERENCIAS ENTRE CALLBACKS Y PROMISES?
//? porque los callback lo has puesto con requiere que es commonJS y las
//? promesas con ESM?? no se supone que tanto callback como promises son
//? programación asíncrona?
// Tanto los callbacks como las promesas son formas de manejar la programación
// asíncrona, independientemente del sistema de módulos que uses (CommonJS o ESM).

// Usé require en el ejemplo de callbacks porque tradicionalmente se usaba con CommonJS.
// En cambio, las promesas las mostré con import porque es el estilo moderno (ESM), y
// es lo que probablemente estás usando tú.