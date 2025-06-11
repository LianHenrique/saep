import express from "express";
const app = express();
const port = 5000;

import cors from "cors";
import { buscarUsuarios, criarUsuario } from "./controllers/usuarioController.js";

const corsOptions = {
  origin: "http://localhost:5173",
  credetials: true,
  optionSucessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// rota livros
import { criarLivro, buscarLivrosPorId, buscarLivros, deletarLivro, editarLivro } from "./controllers/livroController.js"
app.get("/livros", buscarLivros)
app.post("/livros", criarLivro)
app.get("/livros/:id", deletarLivro)
app.get("/livros/:id", editarLivro)
app.get("/livros/:id", buscarLivrosPorId)
app.get("/livros", buscarLivrosPorId)

app.get("/", (req, res) => {
    res.status(200).send("Tá funcionando")
})

app.listen(port, () => {
    console.log("Servidor iniciado na porta 5000");
})

app.get("/usuarios", buscarUsuarios)
app.post("/usuarios", criarUsuario)