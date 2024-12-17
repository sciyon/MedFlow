import { Body, Controller, ValidationPipe, Post, UsePipes, UseGuards, HttpException } from '@nestjs/common';
import { CreateAppointmentDto } from './dtos/CreateAppointment.dto';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService){}

  @Post('create')
  @UsePipes(ValidationPipe)
  async create_appointment(@Body() createAppointmentDto: CreateAppointmentDto){
    try{
      return await this.appointmentService.create_appointment(createAppointmentDto);
    }catch(error){
      throw new HttpException(error.response, error.status);
    }
  }
}
