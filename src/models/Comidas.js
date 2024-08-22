import { Schema, model, models } from "mongoose";

const comidaSchema = new Schema({
    title:{
        type: String
    },
    precio:{
        type: Number
    }
})

export default models.Comidas || model('Comidas', comidaSchema)