const fs = require("fs/promises");
const pdf = require("pdf-parse");
const path = require("path");
const { crearCsv } = require("./createCsv");

import type { Supplier } from "../types/supplier";

type InvoiceInfo = {
  factura: string;
  fecha: string;
  total: number | string;
};

const docsPath = path.join(__dirname, "../../src/pdfs");

async function processInvoices(supplier: Supplier): Promise<void> {
  const pdfs = await fs.readdir(docsPath);
  const info: InvoiceInfo[] = [];

  for (const file of pdfs) {
    const filePath = path.join(docsPath, file);

    try {
      const dataBuffer = await fs.readFile(filePath);
      const data = await pdf(dataBuffer);
      const lines = data.text.split("\n").map((line: string) => line.trim());

      const facturaLine = lines.find((line:string) => line.includes(supplier.invoiceLine));
      const fechaLine = lines.find((line:string) => line.includes(supplier.dateLine));
      const totalLine = lines.find((line:string) => line.includes(supplier.totalLine));

      const factura = facturaLine.match(supplier.invoice)[0] || "N/A"
      const fecha = fechaLine.match(supplier.date) || "N/A";
      const total = totalLine.match(supplier.total)[0] || "N/A";


      info.push({ factura, fecha, total });

    } catch (err) {
      console.error("❌ Error procesando", file, err);
    }
  }

  const jsonPath = path.join(__dirname, `./${supplier.name}.json`);
  await fs.writeFile(jsonPath, JSON.stringify(info, null, 2));
  console.log("✅ Archivo JSON creado correctamente.");

  const csvPath = path.join(__dirname, `../../src/result/${supplier.name}.csv`);
  await crearCsv(jsonPath, csvPath);
}

module.exports = {
  processInvoices,
};
