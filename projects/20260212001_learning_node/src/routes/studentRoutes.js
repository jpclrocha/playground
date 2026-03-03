import { getStudent } from "../controllers/studentController.js";

export function registerStudentRoutes(app) {
	app.get("/students/:id", getStudent);
}
