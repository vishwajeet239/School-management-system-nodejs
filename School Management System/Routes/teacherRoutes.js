import { Router } from "express";
// teacherRoutes.js

import teacherController from '../Controllers/teacherController.js';
import adminController from "../Controllers/adminController.js";


import roleMiddleware from "../Middleware/role.js";
import ensureAuthenticated from "../Middleware/ensure.js";

const { addStudent, updateStudent, deleteStudent, getAllStudents, updateTeacher, getAllTeacher } = teacherController;
const {addTeacher}=adminController
const router = Router();

router.put("/student/:id",ensureAuthenticated,roleMiddleware('teacher'),updateStudent);
router.delete("/student/:id",ensureAuthenticated,roleMiddleware('teacher'),deleteStudent);
router.get("/student",ensureAuthenticated,roleMiddleware('teacher'),getAllStudents);
router.put("/",ensureAuthenticated,roleMiddleware('teacher'),updateTeacher);
router.get("/",ensureAuthenticated,roleMiddleware('teacher'),getAllTeacher);
router.post("/",ensureAuthenticated,roleMiddleware('admin'),addTeacher);


export default router;