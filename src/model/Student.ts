import { Teacher } from "./Teacher";

enum Gender {
  male = "laki",
  female = "perempuan",
}
export type Student = {
  id: string;
  nisn: string;
  username: string;
  nama: string;
  password: string;
  tempatLahir: string;
  tglLahir: Date; // This matches your Prisma DateTime field
  gender: Gender;
  alamat: string;
  nohp: string;
  teacher_Id: string;
  createAt: Date;
  updateAt: Date;
  teacher: Teacher; // relation with table Teacher
};
