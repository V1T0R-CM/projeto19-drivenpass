-- CreateTable
CREATE TABLE "Wifis" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "wifiTitle" TEXT NOT NULL,
    "accountId" INTEGER NOT NULL,

    CONSTRAINT "Wifis_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Wifis" ADD CONSTRAINT "Wifis_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
