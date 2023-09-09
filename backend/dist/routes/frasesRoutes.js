"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fraseController_1 = __importDefault(require("../controllers/fraseController"));
const router = (0, express_1.Router)();
router.get("/frases", fraseController_1.default.getFrases);
router.get("/frase/random", fraseController_1.default.getFraseRandom);
exports.default = { routes: router };
