/*
  Warnings:

  - You are about to drop the column `emai` on the `tb_users` table. All the data in the column will be lost.
  - Added the required column `email` to the `tb_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_users" DROP COLUMN "emai",
ADD COLUMN     "email" TEXT NOT NULL;
