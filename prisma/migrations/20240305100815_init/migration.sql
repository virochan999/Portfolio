/*
  Warnings:

  - Added the required column `company` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "company" TEXT NOT NULL;
