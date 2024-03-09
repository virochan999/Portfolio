/*
  Warnings:

  - You are about to drop the column `hostLink` on the `Project` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `logo` to the `Other` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Professional` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostedLink` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logo` to the `Technical` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Other" ADD COLUMN     "logo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Professional" ADD COLUMN     "logo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "hostLink",
ADD COLUMN     "hostedLink" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "Technical" ADD COLUMN     "logo" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL,
    "profileId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "percentage" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Skill_profileId_key" ON "Skill"("profileId");

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
