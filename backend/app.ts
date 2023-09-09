import { Schema, model, connect } from 'mongoose';
import express, {Express, Request, Response} from "express";
import mongoose from "mongoose";
import frasesRoutes from "./routes/frasesRoutes"
import bodyParser from "body-parser";
import cors from "cors";

// 1. Create an interface representing a document in MongoDB.
interface Frases {
  frase: string;
  cancion: string;
  autor: string;
}

// 2. Create a Schema corresponding to the document interface.
const frasesSchema = new Schema<Frases>({
  frase: { type: String, required: true },
  cancion: { type: String, required: true },
  autor: { type: String, required: true }
});

// 3. Create a Model.
const Frase = model<Frases>('Frase', frasesSchema);

run().catch(err => console.log(err));

async function run() {
  // 4. Connect to MongoDB
  await connect('mongodb://127.0.0.1:27017/trapDB');

//   const frase = new Frase({
//     frase: "Bebecita",
//     cancion: "Muchas",
//     autor: "Anuel AA"
//   });
//   await frase.save();

//   console.log(frase.frase);
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', frasesRoutes.routes)

app.listen(4000, () => {
    console.log(`Server Running on http://localhost:4000`);
});

// mongoose.connection.close().then(() => {
//     console.log('MongoDB connection closed');
//   });


export default {app, Frase};