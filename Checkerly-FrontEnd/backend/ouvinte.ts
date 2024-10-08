import mongoose from "mongoose";

const OuvinteSchema = new mongoose.Schema(
  {
    nome: String,
    email: String,
    senha: String,
    numCelular: Number,
  },
  {
    collection: "user",
  }
);

const OuvinteModel = mongoose.model("user", OuvinteSchema);

export default OuvinteModel;
