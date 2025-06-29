import dotenv from 'dotenv';
dotenv.config();
import express from "express"
import type { Request, Response, NextFunction } from 'express';
import connectDB from "./config/connectDB.js"
import movieRouter from './api/routes/movie.js';

const app = express()
const port = process.env.PORT

connectDB()


app.use(express.json())

app.use("/api/v1/movies", movieRouter)

app.use("/",(req:Request, res:Response, next:NextFunction) => {
  res.status(200).json({ message: "👋🏻 Hola desde el server" });
});

app.use((req:Request, res:Response, next:NextFunction) => {
  res.status(404).json({ message: "❌ 404 - Route not found" });
});


app.listen(port,()=>{
    console.log(`✅ Puerto levantado en: http://localhost:${port}`)
})