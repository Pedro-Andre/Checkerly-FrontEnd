import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import OuvinteModel from "./ouvinte";

const app = express();
app.use(cors());
app.use(express.json());

const mongoUrl = process.env.VITE_DB_URL as string;

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Conectado ao banco de dados"));

require("./ouvinte");
app.post("http://localhost:8080/users", async (req, res) => {
  const { ouvinteName, ouvinteEmail, ouvintePass, ouvinteTel } = req.body;
  try {
    await OuvinteModel.create({
      ouvinteName,
      ouvinteEmail,
      ouvintePass,
      ouvinteTel,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

const port = 5173;
app.listen(port, () => {
  console.log(`
    === Servidor rodando na porta ${port} ===
    `);
});
