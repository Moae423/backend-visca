-- CreateEnum
CREATE TYPE "gender" AS ENUM ('laki', 'perempuan');

-- CreateEnum
CREATE TYPE "statusPegawai" AS ENUM ('pns', 'kontrak');

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tempatLahir" TEXT NOT NULL,
    "tglLahir" TIMESTAMP(3) NOT NULL,
    "gender" "gender" NOT NULL,
    "alamat" TEXT NOT NULL,
    "nohp" TEXT NOT NULL,
    "tgl_join" TIMESTAMP(3) NOT NULL,
    "status" "statusPegawai" NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "nisn" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "tempatLahir" TEXT NOT NULL,
    "tglLahir" TIMESTAMP(3) NOT NULL,
    "jenis_kelamin" "gender" NOT NULL,
    "alamat" TEXT NOT NULL,
    "nohp" TEXT NOT NULL,
    "teacher_Id" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_nisn_key" ON "Student"("nisn");

-- CreateIndex
CREATE UNIQUE INDEX "Student_username_key" ON "Student"("username");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_teacher_Id_fkey" FOREIGN KEY ("teacher_Id") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
