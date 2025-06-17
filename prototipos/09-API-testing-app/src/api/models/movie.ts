import mongoose from "mongoose";


export interface IMovie extends mongoose.Document {
  title: string;
  duration: number;
  img: string;
  categories: ('terror' | 'comedia' | 'aventura')[];
}

// Creamos el esquema de personajes
const movieSchema = new mongoose.Schema<IMovie>(
  {
    title: { type: String, required: true },//La propiedad required hace que el campo sea obligatorio
    duration: { type: Number, required: true },
    img: { type: String, required: true },
    categories: [{type:String, required: true, enum:["terror", "comedia", "aventura"]}]
  },
  {
    timestamps: true, // Esta propiedad servirá para guardar las fechas de creación y actualización de los documentos
  }
);

// Creamos y exportamos el modelo Character
const Movie = mongoose.model<IMovie>('movies', movieSchema, "movies");
export default Movie