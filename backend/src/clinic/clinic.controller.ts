import { Controller, UsePipes, ValidationPipe, Post, Get, Patch, Body, UseGuards, ParseIntPipe, Param } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicDto } from './dto/clinic.dto';
import { Roles } from "src/auth/decorator/roles.decorator";
import { RolesGuard } from "src/auth/guard/roles.guard";

@Controller('clinic')
export class ClinicController {
  constructor(private clinicService: ClinicService){}

  @Post()
  @UseGuards(RolesGuard)
  @Roles('DOCTOR')
  @UsePipes(new ValidationPipe({ transform: true }))
  async setupClinic(
    @Body() clinicDto: ClinicDto
  ){
    return await this.clinicService.setupClinic(clinicDto);
  }

  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles('DOCTOR')
  async getClinic(
    @Param('id', ParseIntPipe) id: number,
  ){
    return await this.clinicService.getClinic(id);
  }

  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles('DOCTOR')
  async updateClinic(
    @Param('id', ParseIntPipe) id: number,
    @Body() clinicDto: ClinicDto
  ){
    return await this.clinicService.updateClinic(id, clinicDto);
  }

}
