-- AlterTable
ALTER TABLE `appointment` MODIFY `status` ENUM('FINISHED', 'PENDING', 'APPROVED', 'DENIED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `nouserappointment` MODIFY `status` ENUM('FINISHED', 'PENDING', 'APPROVED', 'DENIED') NOT NULL DEFAULT 'PENDING';
