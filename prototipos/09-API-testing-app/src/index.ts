require('dotenv').config()
const express = require("express")
import type { Request, Response, NextFunction } from 'express';


const app = express()
const port = process.env.PORT


app.use((req:Request, res:Response) => {
  res.status(404).json({ message: "Route not found" });
});


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})