-- CreateTable
CREATE TABLE "Training_discipline" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bodypartId" INTEGER NOT NULL,

    CONSTRAINT "Training_discipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutLog" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bodypartId" INTEGER NOT NULL,
    "training_disciplineId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "weight" INTEGER NOT NULL,
    "rep" INTEGER NOT NULL,
    "RM" INTEGER NOT NULL,
    "memo" TEXT NOT NULL,

    CONSTRAINT "WorkoutLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Training_discipline_name_key" ON "Training_discipline"("name");

-- AddForeignKey
ALTER TABLE "Training_discipline" ADD CONSTRAINT "Training_discipline_bodypartId_fkey" FOREIGN KEY ("bodypartId") REFERENCES "Bodypart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutLog" ADD CONSTRAINT "WorkoutLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutLog" ADD CONSTRAINT "WorkoutLog_bodypartId_fkey" FOREIGN KEY ("bodypartId") REFERENCES "Bodypart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutLog" ADD CONSTRAINT "WorkoutLog_training_disciplineId_fkey" FOREIGN KEY ("training_disciplineId") REFERENCES "Training_discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
