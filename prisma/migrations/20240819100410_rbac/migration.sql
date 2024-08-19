/*
  Warnings:

  - You are about to drop the column `name` on the `role` table. All the data in the column will be lost.
  - Added the required column `modelName` to the `role` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Operation" AS ENUM ('list', 'get', 'create', 'update', 'delete', 'search', 'onCreate', 'onUpdate', 'onDelete');

-- AlterTable
ALTER TABLE "role" DROP COLUMN "name",
ADD COLUMN     "allowedOperations" "Operation"[],
ADD COLUMN     "modelName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "roleId" TEXT;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "permission"("id") ON DELETE SET NULL ON UPDATE CASCADE;
