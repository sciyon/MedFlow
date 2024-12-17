import { Body, Controller, Post, UsePipes, ValidationPipe, HttpException, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/auth/decorator/roles.decorator';

@Controller('appointments')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGuard('jwt'), RolesGuard) // Protect route with JWT and RBAC
  @Roles('DOCTOR', 'ASSISTANT', 'PATIENT')
  async createAppointment(@Body() createAppointmentDto: CreateAppointmentDto) {
    try {
      return await this.appointmentService.createAppointment(createAppointmentDto);
    } catch (error) {
      throw new HttpException(error.message, error.status || 500);
    }
  }
}
