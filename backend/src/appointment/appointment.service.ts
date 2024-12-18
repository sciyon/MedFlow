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

    const existingAppointment = await this.prisma.appointment.findFirst({
      where: {
        date_appointment: data.date_appointment,
        patient_id: data.patient_id, 
      },
    });

    if (existingAppointment) {
      throw new HttpException('Clinic is at maximum capacity', HttpStatus.BAD_REQUEST);
    }

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

  getAppointmentById(id: number){
    return this.prisma.appointment.findUnique({
      where: { id }
    })
  }

  async updateAppointmentById(id: number, data: Prisma.AppointmentUpdateInput){
    const appointment = await this.getAppointmentById(id)
    if(!appointment) throw new HttpException('Appointment Not Found', 404)
    
    return this.prisma.appointment.update({
      where: { id }, 
      data
    })
  }

  async getAllAppointments(filter: {
    status?: Appointment_Status;
    past?: boolean;
  }) {
    const { status, past } = filter;
  
    const currentDate = new Date();
  
    let where: Prisma.AppointmentWhereInput = {};
  
    // Apply filter for past or upcoming appointments
    if (past !== undefined) {
      if (past) {
        where.date_appointment = {
          lte: currentDate, // Appointments that have already occurred
        };
      } else {
        where.date_appointment = {
          gte: currentDate, // Appointments that are upcoming
        };
      }
    }
  
    // Apply filter for status if provided
    if (status) {
      where.status = status;
    }
  
    return this.prisma.appointment.findMany({
      where,
      orderBy: {
        date_appointment: 'asc', // Order by date (ascending)
      },
    });
  }

  /*
    Example usage of getAllAppointments
  const pastConfirmedAppointments = await this.appointmentService.getAllAppointments({
    status: Appointment_Status.CONFIRMED,
    past: true, // past appointments
  });

  const upcomingPendingAppointments = await this.appointmentService.getAllAppointments({
    status: Appointment_Status.PENDING,
    past: false, // upcoming appointments
  });

  const upcomingAppointments = await this.appointmentService.getAllAppointments({
    past: false, // upcoming appointments, any status
  });

  const pastAppointments = await this.appointmentService.getAllAppointments({
    past: true, // past appointments, any status
  });
  */
  
}
