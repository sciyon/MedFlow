import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [PrismaModule],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService, JwtService],
})

export class UsersModule {}