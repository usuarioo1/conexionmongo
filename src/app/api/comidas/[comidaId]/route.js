import Comidas from "@/models/Comidas";
import { connectDB } from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    try {
        await connectDB();
        // const { id } = request.params
        const comida = await Comidas.findById(params.comidaId)
        return NextResponse.json(comida)
    } catch (error) {
        return NextResponse.json({message:'comida no encontrada'})
    }
}