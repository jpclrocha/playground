import compression from 'compression';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import produtosRouter from "./routes/produtos.routes.js";
import usuariosRouter from "./routes/usuarios.routes.js";

const app = express();

app.use(helmet())

app.use(cors({
   origin: ['http://localhost:3000'],
   methods: ['GET', "POST", "PUT", "DELETE"],
   allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use(compression({
   level: 6,        // Nível de compressão: 0 (nenhum) a 9 (máximo). 6 é o padrão.
   threshold: 1024, // Só comprime respostas maiores que 1 KB
   filter: (req, res) => {
      // Não comprime se o cliente enviar o cabeçalho x-no-compression
      if (req.headers['x-no-compression']) return false;
      return compression.filter(req, res); // Comportamento padrão para os demais casos
   },
}))

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const limiteGeral = rateLimit({
   windowMs: 15 * 60 * 1000,
   max: 100,
   message: { erro: 'Muitas requisições. Tente novamente em 15 minutos.' },
   standardHeaders: true,  // Inclui headers RateLimit-* na resposta
   legacyHeaders: false,
});

app.use('/usuarios', limiteGeral);
app.use('/produtos', limiteGeral);

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