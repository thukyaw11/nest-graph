-- AlterTable
ALTER TABLE "user" ADD COLUMN     "userImageId" TEXT;

-- CreateTable
CREATE TABLE "files" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "files_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_userImageId_fkey" FOREIGN KEY ("userImageId") REFERENCES "files"("id") ON DELETE SET NULL ON UPDATE CASCADE;
