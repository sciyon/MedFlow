-- CreateTable
CREATE TABLE `PrescriptionData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `notes` VARCHAR(191) NOT NULL,
    `medicine_name` VARCHAR(191) NOT NULL,
    `days_to_take` INTEGER NOT NULL,
    `drug_quantity` INTEGER NOT NULL,
    `dosage` VARCHAR(191) NOT NULL,
    `date_created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `prescription_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PrescriptionData` ADD CONSTRAINT `PrescriptionData_prescription_id_fkey` FOREIGN KEY (`prescription_id`) REFERENCES `Prescription`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
