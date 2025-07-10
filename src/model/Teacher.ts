import { Student } from "./Student";

type Gender = {
  male: "laki";
  female: "perempuan";
};
type statusPegawai = {
  pns: "pns";
  kontrak: "kontrak";
};
export type Teacher = {
  id: string;
  name: string;
  email: string;
  password: string;
  tempatLahir: string;
  tglLahir: string;
  gender: Gender;
  alamat: string;
  nohp: string;
  tgl_join: string;
  status: statusPegawai;
  createAt: string;
  updateAt: string;
  student: Student[];
};
