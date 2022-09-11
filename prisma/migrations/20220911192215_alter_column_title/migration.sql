/*
  Warnings:

  - You are about to alter the column `title` on the `Notes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.

*/
-- DropIndex
DROP INDEX "Notes_title_key";

-- AlterTable
ALTER TABLE "Notes" ALTER COLUMN "title" SET DATA TYPE VARCHAR(50);
