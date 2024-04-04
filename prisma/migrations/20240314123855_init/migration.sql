/*
  Warnings:

  - You are about to drop the `planning_slot` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `slot_id` to the `plannings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `planning_slot` DROP FOREIGN KEY `planning_slot_planning_id_fkey`;

-- DropForeignKey
ALTER TABLE `planning_slot` DROP FOREIGN KEY `planning_slot_slot_id_fkey`;

-- AlterTable
ALTER TABLE `plannings` ADD COLUMN `slot_id` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `planning_slot`;

-- AddForeignKey
ALTER TABLE `plannings` ADD CONSTRAINT `plannings_slot_id_fkey` FOREIGN KEY (`slot_id`) REFERENCES `slots`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
