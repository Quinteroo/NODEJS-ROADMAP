const fs = require("fs/promises");
const pdf = require("pdf-parse");
const path = require("path");

const docsPath = path.join(__dirname, "./docs");

async function procesarFacturas() {
  const pdfs = await fs.readdir(docsPath);
  const info = [];

  for (const file of pdfs) {
    const filePath = path.join(docsPath, file);
    const dataBuffer = await fs.readFile(filePath);

    try {
      const data = await pdf(dataBuffer);
      const lines = data.text.split("\n").map(line => line.trim());

      const invoiceLine = lines.find(line => /^\d{1,3}-\d{4}$/.test(line));
      const dateLine = lines.find(line => /^\d{2} \w{3} \d{4}$/.test(line));
      const idReservationLine = lines.find(line => /^(BDC|GCC|EXP|LH|ANA|BNN)-/.test(line));
      const totalLine = lines.find(line => line.includes("Total payments:"));

      const invoice = invoiceLine || "N/A";
      const date = dateLine || "N/A";
      const idReservation = idReservationLine || "N/A";
      const total = Number(totalLine?.replace("Total payments:EUR -", "").trim()) || "N/A";

      info.push({ invoice, date, idReservation, total });
    } catch (err) {
      console.error("❌ Error procesando", file, err);
    }
  }

  await fs.writeFile("facturacion.json", JSON.stringify(info, null, 2));
  console.log("✅ Archivo JSON creado correctamente.");
}

procesarFacturas();
