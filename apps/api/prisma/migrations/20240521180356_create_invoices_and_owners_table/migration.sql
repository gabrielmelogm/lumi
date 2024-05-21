-- CreateTable
CREATE TABLE "owners" (
    "id" TEXT NOT NULL,
    "n_client" TEXT NOT NULL,

    CONSTRAINT "owners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "id" TEXT NOT NULL,
    "month" TIMESTAMP(3) NOT NULL,
    "electricity_qtd" INTEGER NOT NULL,
    "electricity_total" DOUBLE PRECISION NOT NULL,
    "exemptEnergy_qtd" INTEGER NOT NULL,
    "exemptEnergy_total" DOUBLE PRECISION NOT NULL,
    "compensatedEnergy_qtd" INTEGER NOT NULL,
    "compensatedEnergy_total" DOUBLE PRECISION NOT NULL,
    "contribution" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "owners_n_client_key" ON "owners"("n_client");

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "owners"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
