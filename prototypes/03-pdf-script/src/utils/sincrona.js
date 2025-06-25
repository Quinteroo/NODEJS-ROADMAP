const fs = require("fs")
const pdf = require("pdf-parse")
const path = require("path")

const docsPath = path.join(__dirname, "./docs") // localizamos la dirección (url) de la carpeta docs

const pdfs = fs.readdirSync(docsPath)  // leemos todos los documentos de la carptea
//*                                       lo que estás obteniendo es un array que contiene los nombres de los archivos dentro 
//*                                       de la carpeta docsPath, no las rutas completas.


//!  pdfs sería como un array parecido a ["archivo1.pdf", "archivo2.pdf", "archivo3.pdf"]
const promises = pdfs.map((e) => {

  let ePath = path.join(docsPath, e)   // localizamos la dirección de cada documento dentro de la carpta

  let dataBuffer = fs.readFileSync(ePath) // leemos / accedemos al documentp y guardamos su valor en una variable

  return pdf(dataBuffer).then((data) => {

    const lines = data.text.split("\n").map(line => line.trim());

    const invoiceLine = lines.find(line => /^\d{1,3}-\d{4}$/.test(line)); // Ej: 362-2025
    const dateLine = lines.find(line => /^\d{2} \w{3} \d{4}$/.test(line)); // Ej: 03 Apr 2025
    const idReservationLine = lines.find(line => /^(BDC|GCC|EXP|LH|ANA|BNN)-/.test(line)); // Ej: BDC-4448...
    const totalLine = lines.find(line => line.includes("Total payments:"));

    const invoice = invoiceLine || "N/A";
    const date = dateLine || "N/A";
    const idReservation = idReservationLine || "N/A";
    const total = Number(totalLine.replace("Total payments:EUR -", "").trim()) || "N/A";

    return { invoice, date, idReservation, total };

    //if (info.length === pdfs.length) {  //! así solo lo mostramos una vez por consola
    //  console.log(info);
    //}


  }).catch(err => {
    console.error('❌ Error al leer el archivo:', err);
  });



})


Promise.all(promises).then((info) => {
  fs.writeFile("facturacion.json", JSON.stringify(info), (err) => {
    if (err) return console.log(err)

    console.log("✅ Archivo json creado correctamente.")
  })
})


