import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Appointment_Status } from '@prisma/client';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService){}

  async create_appointment(data: Prisma.AppointmentCreateInput) {
    const conflictingAppointments = await this.prisma.appointment.findMany({
      where: { 
        date_appointment: data.date_appointment, 
        status: Appointment_Status.APPROVED
      },
    });
  
    const clinic = await this.prisma.clinic.findUnique({
      where: { id: 1 },
    });
  
    if (!clinic || !clinic.max_capacity) {
      throw new HttpException("Clinic capacity information is unavailable.", 500);
    }
  
    if (conflictingAppointments.length >= clinic.max_capacity) {
      throw new HttpException(
        "Clinic is at maximum capacity on requested date and time.",
        409,
      );
    }
  
    return this.prisma.appointment.create({
      data,
    });
  }
}
