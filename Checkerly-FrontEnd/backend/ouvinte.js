"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const OuvinteSchema = new mongoose_1.default.Schema({
    nome: String,
    email: String,
    senha: String,
    numCelular: Number,
}, {
    collection: "user",
});
const OuvinteModel = mongoose_1.default.model("user", OuvinteSchema);
exports.default = OuvinteModel;
