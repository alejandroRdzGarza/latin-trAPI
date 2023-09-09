"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
function getFrases() {
    return __awaiter(this, void 0, void 0, function* () {
        const frases = yield app_1.default.Frase.find();
        console.log('Users:', frases);
    });
}
// async function getFraseRandom() {
//     const count = await app.Frase.countDocuments();
//     const randomIndex = Math.floor(Math.random() * count);
//     const fraseRandom = await app.Frase.findOne().skip(randomIndex);
//     const fraseJson = JSON.stringify(fraseRandom);
//     return fraseJson;
//   }
const categoriaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const count = yield app_1.default.Frase.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const fraseRandom = yield app_1.default.Frase.findOne().skip(randomIndex);
    const fraseJson = JSON.stringify(fraseRandom);
    res.send(fraseJson);
});
const getFraseRandom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const count = yield app_1.default.Frase.countDocuments();
        const randomIndex = Math.floor(Math.random() * count);
        const fraseRandom = yield app_1.default.Frase.findOne().skip(randomIndex);
        if (!fraseRandom) {
            return res.status(404).json({ message: 'Item not found' });
        }
        const fraseJson = JSON.stringify(fraseRandom); // Convert the Mongoose document to JSON
        res.status(200).send(fraseJson);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
const fraseControl = {
    getFrases,
    getFraseRandom
};
exports.default = fraseControl;
