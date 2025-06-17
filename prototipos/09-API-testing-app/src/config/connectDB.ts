import mongoose from "mongoose"

const connectDB =async():Promise<void>=>{
    try {
        const dbUrl = process.env.URL_DB;
        if (!dbUrl) {
        throw new Error("❌ La variable de entorno URL_DB no está definida.");
        }

        await mongoose.connect(dbUrl as string);
        console.log("✅ Éxito al conectar con la BBDD")
        
    } catch (error) {
        console.log("❌ Error al conectar la BBDD")
    }
}


export default connectDB