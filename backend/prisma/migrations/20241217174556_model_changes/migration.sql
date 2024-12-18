/*
  Warnings:

  - Made the column `patient_id` on table `appointment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `appointment` DROP FOREIGN KEY `Appointment_patient_id_fkey`;

-- AlterTable
ALTER TABLE `appointment` MODIFY `patient_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
