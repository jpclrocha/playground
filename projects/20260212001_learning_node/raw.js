import http from "node:http";

const hostname = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {

   switch (req.url) {
      case "/":
         res.setHeader('Content-Type', 'text/html; charset=utf-8');
         res.end('<h1>Olá, Mundo! Servidor Node.js simples rodando.</h1>');
         break;
      case "/health":
         res.writeHead(200, { 'Content-Type': 'application/json' });
         res.end(JSON.stringify({ status: 'ok' }));
         break;
      default:
         res.writeHead(404);
         res.end();
         break;
   }
})

server.listen(port, hostname, () => {
   console.log(`Servidor rodando em http://${hostname}:${port}/`);
})