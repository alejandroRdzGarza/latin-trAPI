import express, {Router} from "express";
import fraseControl from "../controllers/fraseController";

const router = Router();

router.get("/frases", fraseControl.getFrases);

router.get("/frase/random", fraseControl.getFraseRandom)



export default {routes:router};