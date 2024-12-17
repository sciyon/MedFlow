// create-appointment.dto.ts
import { IsInt, IsNotEmpty, IsString, IsOptional, IsDateString, MaxLength, IsEnum } from 'class-validator';
import { Appointment_Status } from '@prisma/client';

export class CreateAppointmentDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  // Ensure `images` is either string or null
  @IsOptional()
  @IsString()
  images?: string | null;  // Make it explicitly null-able

  @IsNotEmpty()
  @IsDateString()
  date_appointment: Date;

  @IsOptional()
  @IsEnum(Appointment_Status)
  status?: Appointment_Status;

  @IsNotEmpty()
  @IsInt()
  patient_id: number;

  // Map to Prisma's expected patient relation
  @IsOptional()
  patient: {
    connect: { id: number };
  };
}
