/*
  Warnings:

  - You are about to drop the column `isSmallGroup` on the `Community` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "CommunityCategory" AS ENUM ('WORK', 'PROJECT', 'CLUB');

-- AlterTable
ALTER TABLE "Community" DROP COLUMN "isSmallGroup",
ADD COLUMN     "category" "CommunityCategory" NOT NULL DEFAULT 'WORK';
