import express from "express";
import { LoginController } from "../controller/AuthController";
import * as TeacherController from "../controller/TeacherController";
const router = express.Router();

router.post("/login", LoginController);
export default router;
