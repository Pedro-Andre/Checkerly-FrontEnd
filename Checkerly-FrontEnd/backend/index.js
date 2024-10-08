"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const ouvinte_1 = __importDefault(require("./ouvinte"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const mongoUrl = "mongodb+srv://checkerly:rU32JNG2XOduDjEy@checkerly.g99lj.mongodb.net/";
mongoose_1.default
    .connect(mongoUrl)
    .then(() => console.log("Conectado ao banco de dados"));
require("./ouvinte");
app.post("http://localhost:8080/users", async (req, res) => {
    const { ouvinteName, ouvinteEmail, ouvintePass, ouvinteTel } = req.body;
    try {
        await ouvinte_1.default.create({
            ouvinteName,
            ouvinteEmail,
            ouvintePass,
            ouvinteTel,
        });
        res.send({ status: "ok" });
    }
    catch (error) {
        res.send({ status: "error" });
    }
});
// !!!! ANTERIOR !!!!
// app.post("registro/registro-ouvinte", async (req, res) => {
//   OuvinteModel.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.json(err));
// });
const port = 5173;
app.listen(port, () => {
    console.log(`
    === Servidor rodando na porta ${port} ===
    `);
});
