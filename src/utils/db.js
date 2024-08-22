import mongoose from "mongoose";
import { connection } from "mongoose";

const uri = process.env.MONGODB_URI

const conn
    = {
    isConnected: false
}
export async function connectDB() {
    try {
        const db = await mongoose.connect(uri);
        console.log("Database connected successfully:", db.connections[0].name);
        conn.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.error("Database connection error:", error);
    }
}

connection.on('connected', () => {
    console.log('DB connected');
});

connection.on('error', (error) => {
    console.log('Mongoose connection error:', error);
});

