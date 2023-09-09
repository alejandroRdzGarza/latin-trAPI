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
const mongoose_1 = require("mongoose");
const express_1 = __importDefault(require("express"));
const frasesRoutes_1 = __importDefault(require("./routes/frasesRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
// 2. Create a Schema corresponding to the document interface.
const frasesSchema = new mongoose_1.Schema({
    frase: { type: String, required: true },
    cancion: { type: String, required: true },
    autor: { type: String, required: true }
});
// 3. Create a Model.
const Frase = (0, mongoose_1.model)('Frase', frasesSchema);
run().catch(err => console.log(err));
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        // 4. Connect to MongoDB
        yield (0, mongoose_1.connect)('mongodb://127.0.0.1:27017/trapDB');
        //   const frase = new Frase({
        //     frase: "Bebecita",
        //     cancion: "Muchas",
        //     autor: "Anuel AA"
        //   });
        //   await frase.save();
        //   console.log(frase.frase);
    });
}
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', frasesRoutes_1.default.routes);
app.listen(4000, () => {
    console.log(`Server Running on http://localhost:4000`);
});
// mongoose.connection.close().then(() => {
//     console.log('MongoDB connection closed');
//   });
exports.default = { app, Frase };
