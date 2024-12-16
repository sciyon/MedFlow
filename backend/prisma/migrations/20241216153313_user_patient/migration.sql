/*
  Warnings:

  - You are about to drop the column `clinic_id` on the `appointment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `appointment` DROP FOREIGN KEY `Appointment_clinic_id_fkey`;

-- AlterTable
ALTER TABLE `appointment` DROP COLUMN `clinic_id`;
