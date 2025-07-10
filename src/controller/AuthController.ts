import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { generateToken } from "../utils/jwt";
import { LoginService } from "../services/AuthServices";
export const LoginController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, password } = req.body;

  try {
    const teacher = await LoginService(email);
    if (!teacher) {
      res.status(400).json({ message: "Email Tidak Terdaftar" });
      return;
    }

    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      res.status(400).json({ message: "Password Salah" });
      return;
    }

    const token = generateToken({ teacherId: teacher.id }); // naming lebih jelas
    res.status(200).json({
      data: {
        token: token,
        message: "Login Successfully!!",
        success: true,
        error: {},
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
