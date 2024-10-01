/*
  Warnings:

  - Added the required column `maxProjects` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxTestimonialsPerProject` to the `Plan` table without a default value. This is not possible if the table is not empty.
  - Made the column `planId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_planId_fkey";

-- AlterTable
CREATE SEQUENCE metrics_id_seq;
ALTER TABLE "Metrics" ADD COLUMN     "totalTestimonials" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "id" SET DEFAULT nextval('metrics_id_seq');
ALTER SEQUENCE metrics_id_seq OWNED BY "Metrics"."id";

-- AlterTable
ALTER TABLE "Plan" ADD COLUMN     "maxProjects" INTEGER NOT NULL,
ADD COLUMN     "maxTestimonialsPerProject" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "planId" SET NOT NULL,
ALTER COLUMN "planId" SET DEFAULT 1;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
