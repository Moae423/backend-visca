import { Request, Response } from "express";
import * as StudentServices from "../services/StudentServices";
import prisma from "../lib/Prisma";

export const getAllStudentController = async (req: Request, res: Response) => {
  try {
    const student = await StudentServices.getAllStudentServices();
    res.status(200).json({
      message: "Data Student Has Been Found!",
      data: { student },
      success: true,
      error: {},
    });
    return;
  } catch (error) {
    res.status(200).json({
      message: "Data Student Hasn't Been Found!",
      data: {},
      success: true,
      error: { error },
    });
    return;
  }
};

export const getStudentByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const student = await StudentServices.getStudentByIdServices(id);
    res.status(200).json({
      message: "Data Student Has Been Found!",
      data: { student },
      success: true,
      error: {},
    });
    return;
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({
      message: "Data Gagal Diambil",
      data: {},
      success: false,
      error: {
        message: error instanceof Error ? error.message : "Unknown error",
      },
    });
    return;
  }
};

export const createStudentController = async (req: Request, res: Response) => {
  try {
    const studentId = await prisma.student.findUnique({
      where: { nisn: req.body.nisn },
    });
    if (studentId) {
      res.status(400).json({
        message: "NISN already exists",
        success: false,
        error: { message: "NISN already exists" },
      });
      return;
    }
    const student = await StudentServices.createStudentServices(req.body);
    res.status(200).json({
      message: "Data has been created",
      data: { student },
      success: true,
      error: {},
    });
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({
      message: "Data Gagal Ditambahkan",
      data: {},
      success: false,
      error: {
        message: error instanceof Error ? error.message : "Unknown error",
      },
    });
  }
};

export const updateStudentController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const studentData = req.body;

  try {
    if (!id) {
      res.status(400).json({
        message: "ID not provided",
        success: false,
        error: { message: "ID is required" },
      });
    }

    const student = await StudentServices.getStudentByIdServices(id);
    if (!student) {
      res.status(404).json({
        message: "student not found",
        success: false,
        error: { message: "student not found" },
      });
    }

    const updatedStudent = await StudentServices.updateStudentServices(
      id,
      studentData
    );

    res.status(200).json({
      message: "student updated successfully",
      data: { updatedStudent },
      success: true,
      error: {},
    });
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({
      message: "Update failed",
      data: {},
      success: false,
      error: {
        message: error instanceof Error ? error.message : "Unknown error",
      },
    });
  }
};

export const deleteStudentController = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: "ID not Founded!",
      success: false,
      error: { message: "ID is required" },
    });
  }
  try {
    const getStudent = await StudentServices.getStudentByIdServices(id);
    if (!getStudent) {
      res.status(400).json({
        message: "Data Student Not Found! ",
        data: {},
        success: false,
        error: { message: "Data Gagal Dihapus" },
      });
    }
    const studentDelete = await StudentServices.deleteStudentServices(id);
    res.status(201).json({
      message: "student deleted successfully",
      data: { studentDelete },
      success: true,
      error: {},
    });
  } catch (error) {
    res.status(400).json({
      message: "student deleted failed",
      data: {},
      success: false,
      error: {
        message: error instanceof Error ? error.message : "Unknown error",
      },
    });
  }
};
