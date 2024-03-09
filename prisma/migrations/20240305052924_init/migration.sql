/*
  Warnings:

  - Made the column `endDate` on table `Experience` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Experience" ALTER COLUMN "startDate" SET DATA TYPE TEXT,
ALTER COLUMN "endDate" SET NOT NULL,
ALTER COLUMN "endDate" SET DATA TYPE TEXT;
