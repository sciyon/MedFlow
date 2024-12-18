-- DropForeignKey
ALTER TABLE `appointment` DROP FOREIGN KEY `Appointment_patient_id_fkey`;

-- AlterTable
ALTER TABLE `appointment` MODIFY `patient_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
