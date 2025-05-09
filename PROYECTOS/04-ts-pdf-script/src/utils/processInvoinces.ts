
const fs = require("fs/promises");
const pdf = require("pdf-parse");
const path = require("path");
const { crearCsv} = require("../../../utils/createCsv.js")



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

      const facturaLine = lines.find(line => /(\d{3}-\d+)/.test(line));
      const fechaVentaLine = lines.find(line => line.includes("Fecha de venta"));
      const totalAPagarLine = lines.find(line => line.includes("Total a pagar"));


        const factura = facturaLine.match(/(\d{3}-\d+)/)[1] || "N/A"
        const fechaVenta = fechaVentaLine.match(/[0-9/]{2}[0-9/]{2}[0-9/]{4}/)[0] || "N/A";
        const total = Number(totalAPagarLine.match(/[\d]+,[\d]{0,2}/)[0].replace(",",".")) || "N/A";

      info.push({factura,fechaVenta,total})

      
    } catch (err) {
      console.error("❌ Error procesando", file, err);
    }
  }

  await fs.writeFile("./src/modules/makro/code/makro.json", JSON.stringify(info, null, 2));
  console.log("✅ Archivo JSON creado correctamente.");

  await crearCsv("./src/modules/makro/code/makro.json", "./src/modules/makro/result/makro.csv")
}

procesarFacturas()

module.exports = {
  procesarFacturas
} 