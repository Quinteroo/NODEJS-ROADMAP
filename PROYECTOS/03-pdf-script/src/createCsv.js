const fs = require("fs/promises");


async function crearCsv() {
  try {
    const data = await fs.readFile("facturacion.json", "utf-8")

    const facturas = JSON.parse(data) // no hace falta el await aquí, JSON.parse es síncrono

    let strToCsv = "";

    for (const key in facturas[0]) {
      strToCsv += `${key},`
    }

    strToCsv = strToCsv.slice(0, strToCsv.length - 1) // quitar la última coma

    strToCsv += "\n"

    for (const factura of facturas) {
      strToCsv += `${factura.invoice},${factura.date},${factura.idReservation},${factura.total}`
      strToCsv += "\n"
    }


    await fs.writeFile("facturacionHotel.csv", strToCsv)

    console.log("✅ Archivo csv de la facturación del Hotel creado correctamente.")

  } catch (error) {
    console.log("❌ Error al generar el CSV", error)

  }
}

module.exports = {
  crearCsv
}
