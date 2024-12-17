// src/appointment/appointment.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Appointment_Status } from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}

  async createAppointment(data: {
    title: string;
    description: string;
    images?: string | null;
    date_appointment: Date;
    status?: Appointment_Status;
    patient_id: number;
  }) {
    // Check if the patient exists
    const patient = await this.prisma.user.findUnique({
      where: { id: data.patient_id },
    });

    if (!patient) {
      throw new HttpException('Patient not found', HttpStatus.BAD_REQUEST);
    }

    // Create the appointment
    return this.prisma.appointment.create({
      data: {
        title: data.title,
        description: data.description,
        images: data.images || null,
        date_appointment: data.date_appointment,
        status: data.status || Appointment_Status.PENDING,
        patient: {
          connect: { id: data.patient_id },
        },
      },
    });
  }
}
