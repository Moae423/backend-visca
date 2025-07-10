import prisma from "../lib/Prisma";
import bcrypt from "bcrypt";
import { Student } from "@prisma/client";

export const getAllStudentServices = async () => {
  return prisma.student.findMany({
    select: {
      id: true,
      nisn: true,
      username: true,
      nama: true,
      password: true,
      tempatLahir: true,
      tglLahir: true,
      gender: true,
      alamat: true,
      nohp: true,
      createAt: true,
      updateAt: true,
    },
  });
};

export const getStudentByIdServices = async (id: string) => {
  return await prisma.student.findUnique({
    where: { id },
    select: {
      id: true,
      nisn: true,
      username: true,
      nama: true,
      password: true,
      tempatLahir: true,
      tglLahir: true,
      gender: true,
      alamat: true,
      nohp: true,
      createAt: true,
      updateAt: true,
    },
  });
};
export const createStudentServices = async (data: Student) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return await prisma.student.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
};

export const updateStudentServices = async (id: string, data: Student) => {
  return prisma.student.update({
    where: { id },
    data,
  });
};

export const deleteStudentServices = async (id: string) => {
  return prisma.student.delete({
    where: { id },
  });
};
