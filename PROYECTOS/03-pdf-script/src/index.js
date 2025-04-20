const fs = require("fs")
const pdf = require("pdf-parse")
const path = require("path")

const docsPath = path.join(__dirname, "./docs") // localizamos la dirección (url) de la carpeta docs

const pdfs = fs.readdirSync(docsPath)  // leemos todos los documentos de la carptea
//*                                       lo que estás obteniendo es un array que contiene los nombres de los archivos dentro 
//*                                       de la carpeta docsPath, no las rutas completas.

let info = []

//!  pdfs sería como un array parecido a ["archivo1.pdf", "archivo2.pdf", "archivo3.pdf"]
pdfs.forEach((e) => {
  let ePath = path.join(docsPath, e)   // localizamos la dirección de cada documento dentro de la carpta

  let dataBuffer = fs.readFileSync(ePath) // leemos el documentp

  pdf(dataBuffer).then(function (data) {

    const lines = data.text.split("\n").map(line => line.trim());

    const invoiceLine = lines.find(line => /^\d{1,3}-\d{4}$/.test(line)); // Ej: 362-2025
    const dateLine = lines.find(line => /^\d{2} \w{3} \d{4}$/.test(line)); // Ej: 03 Apr 2025
    const idReservationLine = lines.find(line => /^(BDC|GCC|EXP|LH)-/.test(line)); // Ej: BDC-4448...
    const totalLine = lines.find(line => line.includes("Total payments:"));

    const invoice = invoiceLine || "N/A";
    const date = dateLine || "N/A";
    const idReservation = idReservationLine || "N/A";
    const total = Number(totalLine.replace("Total payments:EUR -", "").trim()) || "N/A";

    info.push({
      invoice,
      date,
      idReservation,
      total
    })

    if (info.length === pdfs.length) {  //! así solo lo mostramos una vez por consola
      console.log(info);
    }

    //console.log(data)

  }).catch(err => {
    console.error('❌ Error al leer el archivo:', err);
  });

})




