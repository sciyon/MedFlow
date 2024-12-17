import { Body, Controller, ValidationPipe, Post, UsePipes, UseGuards, HttpException } from '@nestjs/common';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { CreateAppointmentDto } from './dtos/CreateAppointment.dto';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
@UseGuards(RolesGuard) // Combine JWT and Roles Guard
export class AppointmentController {
  constructor(private appointmentService: AppointmentService){}

  @Post('create')
  @UseGuards(RolesGuard)
  @Roles('PATIENT','ASSISTANT','DOCTOR')
  @UsePipes(ValidationPipe)
  async create_appointment(@Body() createAppointmentDto: CreateAppointmentDto){
    try{
      return await this.appointmentService.create_appointment(createAppointmentDto);
    }catch(error){
      throw new HttpException(error.response, error.status);
    }
  }
}
