/*
  Warnings:

  - You are about to drop the column `userId` on the `Plan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_userId_fkey";

-- DropIndex
DROP INDEX "Plan_userId_key";

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "planId" INTEGER;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
