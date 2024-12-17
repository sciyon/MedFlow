// src/appointment/appointment.controller.ts
import { Body, Controller, Post, UsePipes, ValidationPipe, HttpException } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  async createAppointment(@Body() createAppointmentDto: CreateAppointmentDto) {
    try {
      return await this.appointmentService.createAppointment(createAppointmentDto);
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
