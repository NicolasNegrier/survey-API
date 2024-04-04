/*
  Warnings:

  - Added the required column `created_at` to the `plannings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `plannings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `workers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `workers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plannings` ADD COLUMN `created_at` DATETIME(3) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `workers` ADD COLUMN `created_at` DATETIME(3) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;
