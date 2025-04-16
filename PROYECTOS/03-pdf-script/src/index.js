const fs = require("fs")
const pdf = require("pdf-parse")
const path = require("path")

const docsPath = path.join(__dirname, "./docs") // localizamos la carpeta

const pdfs = fs.readdirSync(docsPath)  // leemos todos los documentos de la carptea
//*                                       lo que estás obteniendo es un array que contiene los nombres de los archivos dentro 
//*                                       de la carpeta docsPath, no las rutas completas.

let info = []

//!  pdfs sería como un array parecido a ["archivo1.pdf", "archivo2.pdf", "archivo3.pdf"]
pdfs.forEach((e) => {
  let ePath = path.join(docsPath, e)   // localizamos la dirección de cada documento dentro de la carpta

  let dataBuffer = fs.readFileSync(ePath) // leemos el documentp

  pdf(dataBuffer).then(function (data) {
    const lines = data.text.split("\n")
    console.log(lines[6])

  }).catch(err => {
    console.error('❌ Error al leer el archivo:', err);
  });

})



