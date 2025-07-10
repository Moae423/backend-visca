import prisma from "../lib/Prisma";

export const LoginService = async (email: string) => {
  const user = await prisma.teacher.findUnique({ where: { email } });
  return user;
};
