/*
  Warnings:

  - You are about to drop the column `level` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Skill` table. All the data in the column will be lost.
  - You are about to drop the column `proficiency` on the `Skill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "level",
DROP COLUMN "name",
DROP COLUMN "proficiency";

-- CreateTable
CREATE TABLE "Technical" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "proficiency" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "Technical_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professional" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "proficiency" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "Professional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Other" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "proficiency" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "skillId" TEXT NOT NULL,

    CONSTRAINT "Other_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "technologies" TEXT[],
    "description" TEXT NOT NULL,
    "hostLink" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "githubLink" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Technical" ADD CONSTRAINT "Technical_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professional" ADD CONSTRAINT "Professional_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Other" ADD CONSTRAINT "Other_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
