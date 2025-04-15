const fs = require("fs")
const pdf = require("pdf-parse")
const path = require("path")

const docsPath = path.join(__dirname, "./docs") // localizamos la carpeta

const pdfs = fs.readdirSync(docsPath)  // leemos todos los documentos de la carptea


pdfs.forEach((e) => {
  let ePath = path.join(docsPath, e)   // localizamos la dirección de cada documento dentro de la carpta

  let dataBuffer = fs.readFileSync(ePath) // leemos el documentp

  pdf(dataBuffer).then(function (data) {
    console.log(data)

  }).catch(err => {
    console.error('Error al leer el archivo:', err);
  });

})


// let dataBuffer = fs.readFileSync("./src/docs/24-2025.pdf")

// pdf(dataBuffer).then(function (data) {

//   console.log(data.text)
// })

