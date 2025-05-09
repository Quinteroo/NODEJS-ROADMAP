import processInvoices from "../utils/processInvoices.js";

type Supplier={
    invoiceLine: string,
    dateLine: string,
    totalLine:string
}

const makro:Supplier ={
    invoiceLine: "Nº factura",
    dateLine: "Fecha Factura",
    totalLine:"TOTAL"

}

console.log("hola desde makro.ts")
//processInvoices(makro)