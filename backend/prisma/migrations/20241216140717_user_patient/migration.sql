/*
  Warnings:

  - You are about to drop the `patient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `patient` DROP FOREIGN KEY `Patient_user_id_fkey`;

-- DropTable
DROP TABLE `patient`;

-- CreateTable
CREATE TABLE `Userdata` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `middle_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `birth_date` DATETIME(3) NOT NULL,
    `age` INTEGER NOT NULL,
    `sex` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `mobile` VARCHAR(191) NOT NULL,
    `landline` VARCHAR(191) NOT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_modified` DATETIME(3) NOT NULL,
    `user_id` INTEGER NOT NULL,

    UNIQUE INDEX `Userdata_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Userdata` ADD CONSTRAINT `Userdata_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
