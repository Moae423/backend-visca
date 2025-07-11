import express from "express";
import { LoginController } from "../controller/AuthController";
import * as TeacherController from "../controller/TeacherController";
import { validate } from "../middlewares/Validate";
import { loginTeacherSchema } from "../validation/teacher.schema";
const router = express.Router();

router.post("/login", validate(loginTeacherSchema), LoginController);
export default router;
