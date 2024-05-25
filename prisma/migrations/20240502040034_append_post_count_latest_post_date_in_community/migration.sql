-- AlterTable
ALTER TABLE "Community" ADD COLUMN     "latestPostDate" TIMESTAMP(3),
ADD COLUMN     "postCount" INTEGER NOT NULL DEFAULT 0;
