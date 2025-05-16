const {processInvoices} = require("../utils/processInvoices")

import type { Supplier } from "../types/supplier"

const mercadona:Supplier ={
    name:"mercadona",
    invoiceLine: "Factura Simplificada",
    invoice:/[0-9-]{4}[0-9-]{3}[0-9]{6}/,
    dateLine: "Fecha Factura",
    date: /[0-9/]{2}[0-9/]{2}[0-9/]{4}/,
    totalLine:"Total Factura",
    total: /\d+,\d{2}/,
    currency:""

}

//console.log("hola desde mercadona.ts")
processInvoices(mercadona)