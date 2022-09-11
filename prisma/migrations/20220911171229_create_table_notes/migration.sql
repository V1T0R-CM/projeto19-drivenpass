-- CreateTable
CREATE TABLE "Notes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" VARCHAR(1000) NOT NULL,
    "accountId" INTEGER NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Notes_title_key" ON "Notes"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Notes_title_accountId_key" ON "Notes"("title", "accountId");

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
