import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { PrismaModule } from "src/prisma/prisma.module";
import { AppointmentController } from './appointment.controller';

@Module({
  imports: [PrismaModule],
  exports: [AppointmentService],
  providers: [AppointmentService],
  controllers: [AppointmentController],
})
export class AppointmentModule {}
