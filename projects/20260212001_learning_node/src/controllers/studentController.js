import { findStudentById } from "../services/studentService.js";

export function getStudent(req, res) {
	const student = findStudentById(req.params.id);
	res.json(student);
}
