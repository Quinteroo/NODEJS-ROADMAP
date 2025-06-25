"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { processInvoices } = require("../utils/processInvoices");
const europastry = {
    name: "europastry",
    invoiceLine: "ALBARAN/FACTURA",
    invoice: /[0-9]{8}/,
    dateLine: "FECHA",
    date: /[0-9/]{2}[0-9/]{2}[0-9/]{2}/,
    totalLine: "TOTAL FACTURA",
    total: /\d+,\d{2}/,
    currency: ""
};
//console.log("hola desde europastry.ts")
processInvoices(europastry);
