const { procesarFacturas } = require("./asincrona.js");
const { crearCsv } = require("./createCsv.js")

async function start() {
  try {
    await procesarFacturas()
    await crearCsv()

  } catch (error) {
    console.log("❌ Error al iniciar app")
  }

}

start()