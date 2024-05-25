/*
  Warnings:

  - You are about to drop the column `isPublic` on the `Community` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Community" DROP COLUMN "isPublic",
ADD COLUMN     "isPublicRead" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPublicWrite" BOOLEAN NOT NULL DEFAULT false;
