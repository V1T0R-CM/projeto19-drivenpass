/*
  Warnings:

  - A unique constraint covering the columns `[credentialTitle,accountId]` on the table `Credentials` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Credentials_credentialTitle_accountId_key" ON "Credentials"("credentialTitle", "accountId");
