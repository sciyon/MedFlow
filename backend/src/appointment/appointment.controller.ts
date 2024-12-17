import { Body, Controller, Post, UsePipes, ValidationPipe, HttpException, UseGuards, Get, Query, Patch, ParseIntPipe, Param } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Appointment_Status } from '@prisma/client';

@Controller('appointments')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard('jwt'), RolesGuard) // Protect route with JWT and RBAC
  @Roles('DOCTOR', 'ASSISTANT', 'PATIENT')
  async createAppointment(
    @Body() createAppointmentDto: CreateAppointmentDto
  ) {
    try {
      return await this.appointmentService.createAppointment(createAppointmentDto);
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }

  @Get('all')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('DOCTOR', 'ASSISTANT')
  async getAllAppointments(
    @Query() filter: { status?: Appointment_Status, past?: boolean }
  ) {
    try {
      return await this.appointmentService.getAllAppointments(filter);
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }

  @Patch('update/:id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('DOCTOR', 'ASSISTANT', 'PATIENT')
  async updateAppointmentById(
    @Param('id', ParseIntPipe) id: number,
    @Body() createAppointmentDto: CreateAppointmentDto
  ) {
    try {
      return await this.appointmentService.updateAppointmentById(id, createAppointmentDto);
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('DOCTOR', 'ASSISTANT', 'PATIENT')
  async getAppointmentById(
    @Param('id', ParseIntPipe) id: number
  ) {
    try {
      return await this.appointmentService.getAppointmentById(id);
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
