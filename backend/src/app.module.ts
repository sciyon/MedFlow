import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppointmentModule } from './appointment/appointment.module';
import { ClinicService } from './clinic/clinic.service';
import { ClinicController } from './clinic/clinic.controller';
import { ClinicModule } from './clinic/clinic.module';

@Module({
  imports: [UsersModule, AuthModule, AppointmentModule, ClinicModule],
  controllers: [AppController, ClinicController],
  providers: [AppService, ClinicService],
})
export class AppModule {}
