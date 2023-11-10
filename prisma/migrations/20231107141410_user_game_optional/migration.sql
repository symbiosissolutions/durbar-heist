-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_gameId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "gameId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE SET NULL ON UPDATE CASCADE;
