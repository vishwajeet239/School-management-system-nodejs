import { Router } from "express";
import studentController from '../Controllers/studentController.js';
import adminController from "../Controllers/adminController.js";
import teacherController from "../Controllers/teacherController.js";
import roleMiddleware from "../Middleware/role.js"
import ensureAuthenticated from "../Middleware/ensure.js"

const { updateStudent, getStudent } = studentController;
const {addStudentByAdmin}=adminController
const {addStudent}=teacherController
const router = Router();

router.put('/update',ensureAuthenticated,roleMiddleware('student'),updateStudent);

router.get('/me',ensureAuthenticated,roleMiddleware('student'),getStudent);
router.post("/",roleMiddleware('admin'),addStudentByAdmin);
router.post("/student",ensureAuthenticated,roleMiddleware('teacher'),addStudent);


export default router;