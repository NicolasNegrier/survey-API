-- CreateTable
CREATE TABLE `workers_days` (
    `worker_id` VARCHAR(191) NOT NULL,
    `day_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`worker_id`, `day_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `workers_days` ADD CONSTRAINT `workers_days_worker_id_fkey` FOREIGN KEY (`worker_id`) REFERENCES `workers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workers_days` ADD CONSTRAINT `workers_days_day_id_fkey` FOREIGN KEY (`day_id`) REFERENCES `days`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
