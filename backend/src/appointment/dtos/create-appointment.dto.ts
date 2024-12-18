// src/appointment/dtos/create-appointment.dto.ts
import { IsInt, IsNotEmpty, IsOptional, IsString, IsDateString, MaxLength, IsEnum } from 'class-validator';
import { Appointment_Status } from '@prisma/client';

export class CreateAppointmentDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  images?: string | null; // Optional field

  @IsNotEmpty()
  @IsDateString()
  date_appointment: Date;

  @IsOptional()
  @IsEnum(Appointment_Status)
  status?: Appointment_Status; // Optional, defaults to PENDING

  @IsNotEmpty()
  @IsInt()
  patient_id: number; // Mandatory patient relation
}
