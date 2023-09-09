import express, { Request, Response } from 'express';
import app from "../app"


async function getFrases() {
    const frases = await app.Frase.find();
    console.log('Users:', frases);
}

// async function getFraseRandom() {
//     const count = await app.Frase.countDocuments();
//     const randomIndex = Math.floor(Math.random() * count);
  
//     const fraseRandom = await app.Frase.findOne().skip(randomIndex);
//     const fraseJson = JSON.stringify(fraseRandom);
//     return fraseJson;
//   }

const categoriaById = async (req: Request, res: Response) => {
  const count = await app.Frase.countDocuments();
  const randomIndex = Math.floor(Math.random() * count);
  
  const fraseRandom = await app.Frase.findOne().skip(randomIndex);
  const fraseJson = JSON.stringify(fraseRandom);
  res.send(fraseJson)
}

const getFraseRandom = async (req: Request, res: Response) => {
  try {
    const count = await app.Frase.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const fraseRandom = await app.Frase.findOne().skip(randomIndex);

    if (!fraseRandom) {
      return res.status(404).json({ message: 'Item not found' });
    }

    const fraseJson = JSON.stringify(fraseRandom); // Convert the Mongoose document to JSON
    res.status(200).send(fraseJson);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



const fraseControl = {
    getFrases,
    getFraseRandom
  }
  
  export default fraseControl;