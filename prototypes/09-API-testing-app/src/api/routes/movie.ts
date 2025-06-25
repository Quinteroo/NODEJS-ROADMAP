import { Router } from "express";
import { getMovies, getMovieById, postMovie, updateMovie, deleteMovie } from "../controllers/movie.js";

const movieRouter = Router();

movieRouter.get("/", getMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.post("/", postMovie);
movieRouter.put("/:id", updateMovie);
movieRouter.delete("/:id", deleteMovie);

export default movieRouter;