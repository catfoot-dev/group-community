-- DropForeignKey
ALTER TABLE "Community" DROP CONSTRAINT "Community_managerId_fkey";

-- AlterTable
ALTER TABLE "Community" ALTER COLUMN "managerId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
