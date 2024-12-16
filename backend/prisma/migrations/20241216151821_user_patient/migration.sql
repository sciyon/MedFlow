/*
  Warnings:

  - You are about to alter the column `title` on the `appointment` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `name` on the `clinic` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `email` on the `clinic` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `phone_number` on the `clinic` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - You are about to alter the column `provider` on the `insurance` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `policy_number` on the `insurance` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `status` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.
  - You are about to drop the column `age` on the `userdata` table. All the data in the column will be lost.
  - You are about to alter the column `first_name` on the `userdata` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `middle_name` on the `userdata` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `last_name` on the `userdata` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `sex` on the `userdata` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to alter the column `mobile` on the `userdata` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - You are about to alter the column `landline` on the `userdata` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(15)`.
  - A unique constraint covering the columns `[email]` on the table `Clinic` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `appointment` ADD COLUMN `clinic_id` INTEGER NULL,
    MODIFY `title` VARCHAR(100) NOT NULL,
    MODIFY `images` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `clinic` MODIFY `name` VARCHAR(100) NOT NULL,
    MODIFY `address` VARCHAR(255) NOT NULL,
    MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `phone_number` VARCHAR(15) NOT NULL;

-- AlterTable
ALTER TABLE `insurance` MODIFY `provider` VARCHAR(100) NOT NULL,
    MODIFY `policy_number` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `prescription` MODIFY `notes` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `status` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `userdata` DROP COLUMN `age`,
    MODIFY `first_name` VARCHAR(50) NOT NULL,
    MODIFY `middle_name` VARCHAR(50) NOT NULL,
    MODIFY `last_name` VARCHAR(50) NOT NULL,
    MODIFY `sex` ENUM('MALE', 'FEMALE', 'OTHER') NOT NULL,
    MODIFY `address` VARCHAR(255) NOT NULL,
    MODIFY `mobile` VARCHAR(15) NOT NULL,
    MODIFY `landline` VARCHAR(15) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Clinic_email_key` ON `Clinic`(`email`);

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_clinic_id_fkey` FOREIGN KEY (`clinic_id`) REFERENCES `Clinic`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Insurance` ADD CONSTRAINT `Insurance_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prescription` ADD CONSTRAINT `Prescription_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prescription` ADD CONSTRAINT `Prescription_doctor_id_fkey` FOREIGN KEY (`doctor_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
