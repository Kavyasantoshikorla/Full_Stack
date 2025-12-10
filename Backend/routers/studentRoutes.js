//importing the student controller
import { getStudents,addStudent } from "../controllers/studentController.js";
import express from "express";
//creating the router
const router = express.Router();
router.get('/get-students',getStudents);
router.post('/add-student',addStudent);
export default router;