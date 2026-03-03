import express from "express";
import { registerStudentRoutes } from "./routes/studentRoutes.js";

const app = express();
app.use(express.json());

registerStudentRoutes(app);

app.listen(3000, () => {
	console.log("Servidor executando em http://localhost:3000");
});
