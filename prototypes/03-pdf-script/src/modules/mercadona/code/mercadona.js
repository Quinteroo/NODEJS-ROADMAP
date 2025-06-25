
const fs = require("fs/promises");
const pdf = require("pdf-parse");
const path = require("path");
const { crearCsv } = require("../../../utils/createCsv.js")



const docsPath = path.join(__dirname, "../../../docs");

async function procesarFacturas() {
  const pdfs = await fs.readdir(docsPath);
  const info = [];


  for (const file of pdfs) {
    const filePath = path.join(docsPath, file);
    const dataBuffer = await fs.readFile(filePath);

    try {
      const data = await pdf(dataBuffer);
      const lines = data.text.split("\n").map(line => line.trim());
      //console.log(lines)

      const factura = lines.find(line => line.includes("Factura Simplificada:")).replace("Factura Simplificada:", "").trim() || "N/A"
      const fecha = lines.find(line => line.includes("Fecha Factura:")).match(/(\d{2}\/\d{2}\/\d{4})/)[0].trim() || "N/A";
      const total = Number(lines.find(line => line.includes("Total Factura")).match(/\d+,\d{2}/)[0].replace(",", ".")) || "N/A";

      // console.log(factura)
      // console.log(fecha)
      // console.log(total)

      info.push({ factura, fecha, total })

    } catch (err) {
      console.error("❌ Error procesando", file, err);
    }
  }

  await fs.writeFile("./src/modules/mercadona/code/mercadona.json", JSON.stringify(info, null, 2));
  console.log("✅ Archivo JSON creado correctamente.");

  await crearCsv("./src/modules/mercadona/code/mercadona.json", "./src/modules/mercadona/result/mercadona.csv")
}

procesarFacturas()

module.exports = {
  procesarFacturas
} 