// auth/auth.controller.ts
import { Controller, Post, Body, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/Login.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validate_user(loginDto.email, loginDto.password);
    if (!user) {
      throw new HttpException('Unauthorized', 401);
    }
    return this.authService.login(user);
  }
}
