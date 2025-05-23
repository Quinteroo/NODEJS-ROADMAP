"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { processInvoices } = require("../utils/processInvoices");
const makro = {
    name: "makro",
    invoiceLine: "Factura",
    invoice: /([0-9-]{3}[0-9]{6})/,
    dateLine: "Fecha de venta",
    date: /[0-9/]{2}[0-9/]{2}[0-9/]{4}/,
    totalLine: "Total a pagar",
    total: /\d+,\d{2}/,
    currency: ""
};
//console.log("hola desde makro.ts")
processInvoices(makro);
