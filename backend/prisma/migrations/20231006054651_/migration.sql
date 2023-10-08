-- CreateTable
CREATE TABLE "Bodypart" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Bodypart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bodypart_name_key" ON "Bodypart"("name");
