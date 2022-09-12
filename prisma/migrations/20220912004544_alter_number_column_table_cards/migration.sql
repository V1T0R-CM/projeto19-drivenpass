/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `Cards` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cards_number_key" ON "Cards"("number");
