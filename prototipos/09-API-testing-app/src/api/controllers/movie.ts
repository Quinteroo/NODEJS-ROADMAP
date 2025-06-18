import Movie from "../models/movie.js";
import type {Request, Response, NextFunction} from "express"


export const getMovies = async (req:Request, res:Response, next:NextFunction):Promise<void>=>{
    try {
        const movies = await Movie.find()
        res.status(200).json({message:"✅ Encontradas todas las películas", movies})
    } catch (error) {
        console.error("❌ Error al obtener las películas:", error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const getMovieById = async (req:Request, res:Response, next:NextFunction):Promise<void>=>{
    try {
        const {id} = req.params
        const movie = await Movie.findById(id)
        res.status(200).json({message:"✅ Encontrada la película por ID",movie})
    } catch (error) {
        console.error("❌ Error al obtener la película por ID:", error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const postMovie = async (req:Request, res:Response, next:NextFunction):Promise<void>=>{
    try {
        const newMovie = new Movie({
            title: req.body.title,
            duration: req.body.duration,
            img: req.body.img,
            categories: req.body.categories
        })
        const createdMovie = await newMovie.save()
        res.status(201).json({message:"✅ Película creada correctamente",createdMovie})
        
    } catch (error) {
        console.error("❌ Error al crear la película:", error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const updateMovie = async (req:Request, res:Response, next:NextFunction):Promise<void>=>{
    try {
        const {id} = req.params
        const movieModified = new Movie(req.body)
        movieModified._id = id
        const movieUpdated = await Movie.findByIdAndUpdate(id , movieModified, {new: true})
        res.status(200).json({message:"✅ Película actualizada por ID correctamente",movieUpdated})
    } catch (error) {
        console.error("❌ Error al actualizar la película:", error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export const deleteMovie = async (req:Request, res:Response, next:NextFunction):Promise<void>=>{
    try {
        const {id} = req.params
        const movieDeleted = await Movie.findByIdAndDelete(id)
        res.status(200).json({message:"✅ Película eliminada correctamente",movieDeleted})
    } catch (error) {
        console.error("❌ Error al eliminar la película por ID:", error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}


