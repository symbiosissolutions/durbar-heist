-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Durbar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "passphrase" TEXT NOT NULL,
    "treasure" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Durbar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PromptInstruction" (
    "id" SERIAL NOT NULL,
    "instruction" TEXT NOT NULL,
    "durbarId" INTEGER NOT NULL,

    CONSTRAINT "PromptInstruction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Heist" (
    "id" SERIAL NOT NULL,
    "initiatorDurbarId" INTEGER NOT NULL,
    "targetDurbarId" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3),
    "endTime" TIMESTAMP(3),
    "attempts" INTEGER NOT NULL,
    "successful" BOOLEAN NOT NULL,

    CONSTRAINT "Heist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loot" (
    "id" SERIAL NOT NULL,
    "initiatorDurbarId" INTEGER NOT NULL,
    "targetDurbarId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "heistId" INTEGER NOT NULL,

    CONSTRAINT "Loot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "adminId" INTEGER NOT NULL,
    "inviteCode" TEXT NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startTime" TIMESTAMP(3),
    "endTime" TIMESTAMP(3),
    "duration" INTEGER NOT NULL,
    "maxAttemptPerHeist" INTEGER NOT NULL,
    "maxHeistDuration" INTEGER NOT NULL,
    "initialTreasure" INTEGER NOT NULL,
    "lootValue" INTEGER NOT NULL,
    "instructionUpdateCost" INTEGER NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_gameId_key" ON "User"("gameId");

-- CreateIndex
CREATE UNIQUE INDEX "Durbar_ownerId_key" ON "Durbar"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Loot_heistId_key" ON "Loot"("heistId");

-- CreateIndex
CREATE UNIQUE INDEX "Game_adminId_key" ON "Game"("adminId");

-- CreateIndex
CREATE UNIQUE INDEX "Game_inviteCode_key" ON "Game"("inviteCode");

-- CreateIndex
CREATE UNIQUE INDEX "Feedback_userId_key" ON "Feedback"("userId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Durbar" ADD CONSTRAINT "Durbar_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PromptInstruction" ADD CONSTRAINT "PromptInstruction_durbarId_fkey" FOREIGN KEY ("durbarId") REFERENCES "Durbar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Heist" ADD CONSTRAINT "Heist_initiatorDurbarId_fkey" FOREIGN KEY ("initiatorDurbarId") REFERENCES "Durbar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Heist" ADD CONSTRAINT "Heist_targetDurbarId_fkey" FOREIGN KEY ("targetDurbarId") REFERENCES "Durbar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loot" ADD CONSTRAINT "Loot_heistId_fkey" FOREIGN KEY ("heistId") REFERENCES "Heist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loot" ADD CONSTRAINT "Loot_initiatorDurbarId_fkey" FOREIGN KEY ("initiatorDurbarId") REFERENCES "Durbar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loot" ADD CONSTRAINT "Loot_targetDurbarId_fkey" FOREIGN KEY ("targetDurbarId") REFERENCES "Durbar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
