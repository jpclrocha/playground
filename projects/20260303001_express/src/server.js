import express from 'express';
import produtosRouter from "./routes/produtos.routes.js";
import usuariosRouter from "./routes/usuarios.routes.js";

const app = express();
app.use(express.json())

app.use('/usuarios', usuariosRouter);

app.use("/produtos", produtosRouter)

app.listen(3000);