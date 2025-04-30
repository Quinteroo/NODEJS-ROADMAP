
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
      //console.log(lines)

      const facturaLine = lines.find(line => /^ALBARAN/.test(line));
      // const fechaVentaLine = lines.find(line => line.includes("Fecha de venta"));
      // const totalAPagarLine = lines.find(line => line.includes("Total a pagar"));


      const factura = facturaLine.match(/.(\d+)FECHA/)[1].replace(".","").replace("FECHA","") || "N/A"
      const fechaVenta = facturaLine.match(/FECHA(\d{2}\/\d{2}\/\d{2})/)[1] || "N/A";
      //   const total = Number(totalAPagarLine.match(/[\d]+,[\d]{0,2}/)[0].replace(",",".")) || "N/A";

      console.log(factura)
      console.log(fechaVenta)
      // console.log(total)

      // info.push({factura,fechaVenta,total})

      
    } catch (err) {
      console.error("❌ Error procesando", file, err);
    }
  }

  // await fs.writeFile("./src/modules/croissant/code/croissant.json", JSON.stringify(info, null, 2));
  // console.log("✅ Archivo JSON creado correctamente.");

  // await crearCsv("./src/modules/croissant/code/croissant.json", "./src/modules/croissant/result/croissant.csv")
}

procesarFacturas()

module.exports = {
  procesarFacturas
} 