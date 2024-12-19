import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppointmentModule } from './appointment/appointment.module';
import { ClinicModule } from './clinic/clinic.module';
import { PatientController } from './patient/patient.controller';

@Module({
  imports: [UsersModule, AuthModule, AppointmentModule, ClinicModule],
  controllers: [AppController, PatientController],
  providers: [AppService],
})
export class AppModule {}
