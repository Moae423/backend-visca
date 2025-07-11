import express from "express";
import * as StudentController from "../controller/StudentController";
import * as TeacherController from "../controller/TeacherController";
import { authenticateToken } from "../middlewares/AuthMiddleware";
import { validate } from "../middlewares/Validate";
import { createTeacherSchema } from "../validation/teacher.schema";
import {
  createStudentSchema,
  updateStudentSchema,
} from "../validation/student.schema";
const Router = express.Router();

Router.use(authenticateToken);
Router.get("/student", StudentController.getAllStudentController);
Router.get("/student/:id", StudentController.getStudentByIdController);
Router.post(
  "/student",
  validate(createStudentSchema),
  StudentController.createStudentController
);
Router.put(
  "/student/:id",
  validate(updateStudentSchema),
  StudentController.updateStudentController
);
Router.delete("/student/:id", StudentController.deleteStudentController);

// teacher
Router.post(
  "/teacher",
  validate(createTeacherSchema),
  TeacherController.createTeacher
);
Router.get("/teacher/:id", TeacherController.getTeacherById);
Router.get("/teacher", TeacherController.getAllTeacher);
Router.put("/teacher/:id", TeacherController.updateTeacher);
Router.delete("/teacher/:id", TeacherController.deleteTeacher);
export default Router;
