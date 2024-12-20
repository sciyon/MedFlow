-- CreateTable
CREATE TABLE `NoUserAppointment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `images` TEXT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `date_appointment` DATETIME(3) NOT NULL,
    `date_modified` DATETIME(3) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `email_address` VARCHAR(191) NULL,
    `status` ENUM('PENDING', 'APPROVED', 'DENIED') NOT NULL DEFAULT 'PENDING',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
