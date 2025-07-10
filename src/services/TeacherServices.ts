import prisma from "../lib/Prisma";
import bcrypt from "bcrypt";
import { Teacher } from "@prisma/client";

export const createTeacherInput = async (data: Teacher) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const teacher = await prisma.teacher.create({
    data: {
      ...data,
      password: hashedPassword,
    },
  });
  return teacher;
};

export const getTeacherByIdServices = async (id: string) => {
  const teacher = await prisma.teacher.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      tempatLahir: true,
      tglLahir: true,
      gender: true,
      alamat: true,
      nohp: true,
      tgl_join: true,
      status: true,
      createAt: true,
      updateAt: true,
    },
  });
  return teacher;
};

export const getAllTeacher = async () => {
  return prisma.teacher.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      tempatLahir: true,
      tglLahir: true,
      gender: true,
      alamat: true,
      nohp: true,
      tgl_join: true,
      status: true,
      createAt: true,
      updateAt: true,
    },
  });
};

export const updateTeacherServices = async (id: string, data: Teacher) => {
  return prisma.teacher.update({
    where: { id },
    data,
  });
};
export const deleteTeacherServices = async (id: string) => {
  return prisma.teacher.delete({
    where: { id },
  });
};
