// auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module'; // Import your Users module
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn:  "3600s"
      }
    })
  ],
  providers: [AuthService, UsersService, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
