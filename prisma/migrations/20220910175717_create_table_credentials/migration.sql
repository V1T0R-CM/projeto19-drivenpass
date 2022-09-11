-- CreateTable
CREATE TABLE "Credentials" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "credentialTitle" TEXT NOT NULL,

    CONSTRAINT "Credentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Credentials_credentialTitle_key" ON "Credentials"("credentialTitle");
