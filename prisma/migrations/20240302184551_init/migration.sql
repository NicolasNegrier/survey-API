-- CreateTable
CREATE TABLE `plannings` (
    `id` CHAR(36) NOT NULL,
    `day_id` VARCHAR(191) NOT NULL,
    `service_id` VARCHAR(191) NOT NULL,
    `worker_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `days` (
    `id` CHAR(36) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `slots` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `planning_slot` (
    `created_at` DATETIME(3) NOT NULL,
    `planning_id` VARCHAR(191) NOT NULL,
    `slot_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`planning_id`, `slot_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `services` (
    `id` CHAR(36) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workers` (
    `id` CHAR(36) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `plannings` ADD CONSTRAINT `plannings_day_id_fkey` FOREIGN KEY (`day_id`) REFERENCES `days`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plannings` ADD CONSTRAINT `plannings_service_id_fkey` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plannings` ADD CONSTRAINT `plannings_worker_id_fkey` FOREIGN KEY (`worker_id`) REFERENCES `workers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `planning_slot` ADD CONSTRAINT `planning_slot_planning_id_fkey` FOREIGN KEY (`planning_id`) REFERENCES `plannings`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `planning_slot` ADD CONSTRAINT `planning_slot_slot_id_fkey` FOREIGN KEY (`slot_id`) REFERENCES `slots`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
