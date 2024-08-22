import { NextResponse } from "next/server";
import { connectDB } from "@/utils/db";
import Comidas from "@/models/Comidas";


export async function GET(){

    try {
        await connectDB();
        const comidas = await Comidas.find()
        return NextResponse.json(comidas);

    } catch (error) {
        return NextResponse.json({
            message:"no se obtuvo el producto"
        })
    }

    
}

export async function POST(request) {
    try {
        await connectDB()
        const data = await request.json()
        const nuevacomida = new Comidas(data)
        const comidaGuardada = await nuevacomida.save();
        console.log(comidaGuardada)
        return NextResponse.json(nuevacomida, {status:200})
    } catch (error) {
        return NextResponse.jons({message:'fail'}, {status:400});
    }
}