// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; 
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validate_user(email: string, password: string){
    const user = await this.usersService.get_user_by_email(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { 
      email: user.email, 
      role: user.id, 
      id: user.id 
    };

    return {
      ...user,
      accessToken: this.jwtService.sign(payload)
    }
  }

}
