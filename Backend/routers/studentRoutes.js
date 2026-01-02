//importing the student controller
import { getStudents,addStudent, getStudentById ,addStudents,updateStudents,updateStudentsStatus, deleteAllStudents} from "../controllers/studentController.js";
import express from "express";
//creating the router
const router = express.Router();
router.get('/get-students',getStudents);
router.post('/add-student',addStudent);
router.post('/add-students',addStudents);
router.get('/get-students-by-id/:userid',getStudentById);
router.put('/update-students/:id',updateStudents);
router.put("/update-students-status", updateStudentsStatus);
router.delete("/delete-data",deleteAllStudents);
export default router;