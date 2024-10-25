import { Router } from "express";
import roleMiddleware from "../Middleware/role.js";
import ensureAuthenticated from "../Middleware/ensure.js";
// adminRoutes.js

import adminController from '../Controllers/adminController.js';

const { addStudent, updateStudent, deleteStudent, getAllStudents, updateTeacher, getAllTeacher, addTeacher, updateAdmin,addAdmin } = adminController;

const router = Router();

router.put("/:id",ensureAuthenticated,roleMiddleware('admin'),updateStudent);
router.delete("/:id",ensureAuthenticated,roleMiddleware('admin'),deleteStudent);
router.get("/",ensureAuthenticated,roleMiddleware('admin'),getAllStudents);
router.put("/:id",ensureAuthenticated,roleMiddleware('admin'),updateTeacher);
router.get("/",ensureAuthenticated,roleMiddleware('admin'),getAllTeacher);
router.put("/",ensureAuthenticated,roleMiddleware('admin'),updateAdmin);
router.post("/",addAdmin);

export default router;
