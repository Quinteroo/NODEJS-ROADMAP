

import { promises as fs } from "fs"
import pdf from "pdf-parse"


async function pdfReader() {
  try {

    const dataBuffer = await fs.readFile("factura.pdf")
    const data = pdf(dataBuffer)

    console.log(data)
  } catch (error) {
    console.log("❌ Nuevo Error:", error)
  }

}


pdfReader()