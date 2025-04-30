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
      //DETAILS
      const invoiceLine = lines.find(line => /^\d{1,3}-\d{4}$/.test(line));
      const dateLine = lines.find(line => /^\d{2} \w{3} \d{4}$/.test(line));
      const idReservationLine = lines.find(line => /^(BDC|GCC|EXP|LH|ANA|BNN)/.test(line));

      //MAIN PAIMENT
      const paymentType = lines.find(line => line.includes("Payment -"));
      const paymentAmount = lines.find(line => line.includes("Payment -"));

      //EXTRAS PAYMENT
      const extrasPaymentType = lines.find(line => /^Payment -/.test(line)) || "";

      //TOTAL
      const totalLine = lines.find(line => line.includes("Total payments:"));

      //------------------------------------------------------------------------------------

      const invoice = invoiceLine || "N/A";
      const date = dateLine || "N/A";
      const idReservation = idReservationLine || "N/A";

      const paymentMethod = paymentType.match(/Payment - ([A-Za-z ]+)EUR/)[1] || "N/A";
      const totalPayment = Number(paymentAmount?.match(/-([0-9,]+(?:\.[0-9]+)?)EUR/)[1].trim().replace(",", "").replace("EUR", "")) || "N/A";

      let extrasMethod
      if (extrasPaymentType) {
        extrasMethod = extrasPaymentType.match(/Payment - ([A-Za-z ]+)EUR/)[1] || "N/A";

      } else {
        extrasMethod = "";
      }

      let extrasPayment
      if (extrasPaymentType) {
        extrasPayment = Number(extrasPaymentType.match(/-([0-9,]+(?:\.[0-9]+)?)EUR/)[1].trim().replace(",", "").replace("-", "").replace("EUR", "")) || "N/A";
      } else {
        extrasPayment = "";
      }

      const totalReservation = Number(totalLine.replace("Total payments:EUR -", "").trim().replace(",", "")) || "N/A";


      info.push({ invoice, date, idReservation, paymentMethod, totalPayment, extrasMethod, extrasPayment, totalReservation });
    } catch (err) {
      console.error("❌ Error procesando", file, err);
    }
  }

  await fs.writeFile("./src/modules/hotel/code/hotel.json", JSON.stringify(info, null, 2));
  console.log("✅ Archivo JSON creado correctamente.");

  await crearCsv("./src/modules/hotel/code/hotel.json", "./src/modules/hotel/result/hotel.csv")

}

procesarFacturas()

module.exports = {
  procesarFacturas
} 