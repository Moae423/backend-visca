import { gender, statusPegawai } from "@prisma/client";
import z from "zod";

export const createTeacherSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(50, { message: "Name must be at most 50 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  tempatLahir: z
    .string()
    .min(3, { message: "Tempat Lahir must be at least 3 characters long" }),
  tglLahir: z.preprocess(
    (arg) =>
      typeof arg === "string" || arg instanceof Date
        ? new Date(arg)
        : undefined,
    z.date({ message: "Invalid date of tanggal lahir" })
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
  tgl_join: z.preprocess(
    (arg) =>
      typeof arg === "string" || arg instanceof Date
        ? new Date(arg)
        : undefined,
    z.date({ message: "Invalid date of tanggal join" })
  ),
  status: z.enum([statusPegawai.kontrak, statusPegawai.pns], {
    message: "Invalid status",
  }),
});

export const updateTeacherSchema = createTeacherSchema.partial();

export const loginTeacherSchema = z.object({
  email: z
    .string()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
