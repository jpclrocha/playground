import express from 'express';
import produtosRouter from "./routes/produtos.routes.js";
import usuariosRouter from "./routes/usuarios.routes.js";

const app = express();

// Middleware 1, logs (middleware de aplicacao)
app.use((req, res, next) => {
   console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

})

// Middleware 2, json parser (middleware de aplicacao)
app.use(express.json())

// Middleware 3 e 4, rotas (middleware de rota)
app.use('/usuarios', usuariosRouter);
app.use("/produtos", produtosRouter)

// Middleware de erro — DEVE ter 4 parâmetros
app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(err.statusCode || 500).json({
      erro: err.message || 'Erro interno do servidor',
   });
});

app.listen(3000);