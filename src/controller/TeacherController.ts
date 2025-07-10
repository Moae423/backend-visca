import { Request, Response } from "express";
import * as TeacherServices from "../services/TeacherServices";

export const getAllTeacher = async (req: Request, res: Response) => {
  try {
    const teacher = await TeacherServices.getAllTeacher();
    res.status(200).json({
      message: "Data Berhasil Diambil", // Ubah dari "Ditambahkan" ke "Diambil"
      data: { teacher },
      success: true,
      error: {},
    });
    return;
  } catch (error) {
    console.error("Error fetching students:", error); // Log error untuk debugging
    res.status(500).json({
      message: "Data Gagal Diambil", // Ubah dari "Ditambahkan" ke "Diambil"
      data: {},
      success: false,
      error: {
        message: error instanceof Error ? error.message : "Unknown error",
      },
    });
    return; // Add this return statement
  }
};
export const getTeacherById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const teacher = await TeacherServices.getTeacherByIdServices(id);
    res.status(200).json({
      message: "Data Berhasil Diambil",
      data: { teacher },
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

export const createTeacher = async (req: Request, res: Response) => {
  try {
    const teacher = await TeacherServices.createTeacherInput(req.body);
    res.status(200).json({
      message: "Data has been created",
      data: { teacher },
      success: true,
      error: {},
    });
  } catch (error) {
    console.error("Error creating teacher:", error);
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

export const updateTeacher = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const teacherData = req.body;

  try {
    // 1️⃣ Cek apakah id ada di params
    if (!id) {
      res.status(400).json({
        message: "ID not provided",
        success: false,
        error: { message: "ID is required" },
      });
    }

    // 2️⃣ Cari teacher by id
    const teacher = await TeacherServices.getTeacherByIdServices(id);
    if (!teacher) {
      res.status(404).json({
        message: "Teacher not found",
        success: false,
        error: { message: "Teacher not found" },
      });
    }

    // 3️⃣ Update
    const updatedTeacher = await TeacherServices.updateTeacherServices(
      id,
      teacherData
    );

    res.status(200).json({
      message: "Teacher updated successfully",
      data: { updatedTeacher },
      success: true,
      error: {},
    });
  } catch (error) {
    console.error("Error updating teacher:", error);
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

export const deleteTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: "ID not Founded!",
      success: false,
      error: { message: "ID is required" },
    });
  }
  try {
    const getTeacher = await TeacherServices.getTeacherByIdServices(id);
    if (!getTeacher) {
      res.status(400).json({
        message: "Data Teacher Not Found! ",
        data: {},
        success: false,
        error: { message: "Data Gagal Dihapus" },
      });
    }
    const teacherDelete = await TeacherServices.deleteTeacherServices(id);
    res.status(201).json({
      message: "Teacher deleted successfully",
      data: { teacherDelete },
      success: true,
      error: {},
    });
  } catch (error) {
    res.status(400).json({
      message: "Teacher deleted failed",
      data: {},
      success: false,
      error: { error },
    });
  }
};
