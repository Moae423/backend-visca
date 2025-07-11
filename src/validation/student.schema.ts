import { gender } from "@prisma/client";
import z from "zod";

export const createStudentSchema = z.object({
  nisn: z
    .string()
    .min(5, { message: "Name must be at least 5 characters long" })
    .max(10, { message: "Name must be at most 50 characters long" }),
  username: z
    .string()
    .min(5, { message: "Name must be at least 5 characters long" })
    .max(25, { message: "Name must be at most 25 characters long" }),
  nama: z
    .string()
    .min(5, { message: "Name must be at least 5 characters long" })
    .max(50, { message: "Name must be at most 25 characters long" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  tempatLahir: z
    .string()
    .min(3, { message: "Tempat Lahir must be at least 3 characters long" }),
  tglLahir: z.preprocess(
    (arg) =>
      typeof arg === "string" || arg instanceof Date
        ? new Date(arg)
        : undefined,
    z.date({ message: "Invalid date of join" })
  ),
  gender: z.enum([gender.laki, gender.perempuan], {
    message: "Invalid gender",
  }),
  alamat: z
    .string()
    .min(3, { message: "Alamat must be at least 3 characters long" }),
  nohp: z
    .string()
    .min(3, { message: "No HP must be at least 3 characters long" })
    .regex(/^[0-9]+$/, { message: "No HP must be a number" }),
  teacher_Id: z.string(),
});
export const updateStudentSchema = createStudentSchema.partial();
