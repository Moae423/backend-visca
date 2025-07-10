import express from "express";
import * as StudentController from "../controller/StudentController";
import * as TeacherController from "../controller/TeacherController";
const Router = express.Router();

Router.get("/student", StudentController.getAllStudentController);
Router.get("/student/:id", StudentController.getStudentByIdController);
Router.post("/student", StudentController.createStudentController);
Router.put("/student/:id", StudentController.updateStudentController);
Router.delete("/student/:id", StudentController.deleteStudentController);

// teacher
Router.post("/teacher", TeacherController.createTeacher);
Router.get("/teacher/:id", TeacherController.getTeacherById);
Router.get("/teacher", TeacherController.getAllTeacher);
Router.put("/teacher/:id", TeacherController.updateTeacher);
Router.delete("/teacher/:id", TeacherController.deleteTeacher);
export default Router;
