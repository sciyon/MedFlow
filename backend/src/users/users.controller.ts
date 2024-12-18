import { Controller, Body, Post, UsePipes, ValidationPipe, Get, Param, ParseIntPipe, HttpException, Patch, Delete, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { UpdateUserDto } from "./dtos/UpdateUser.dto";
import { CreateUserDataDto } from "./dtos/CreateUserData.dto";
import { Roles } from "src/auth/decorator/roles.decorator";
import { RolesGuard } from "src/auth/guard/roles.guard";

@Controller('users')
export class UsersController{
  constructor(private usersService: UsersService) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create_user(createUserDto);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  @Post('data')
  @UsePipes(ValidationPipe)
  create_user_data(@Body() createUserDataDto: CreateUserDataDto) {
    return this.usersService.create_user_data(createUserDataDto)
  }

  @Get()
  @UseGuards(RolesGuard)
  @Roles('ADMIN', 'DOCTOR')
  get_users(){
    return this.usersService.get_users()
  }
  

  @Get(':id')
  async get_user_by_id(@Param('id', ParseIntPipe) id: number){
    const user = await this.usersService.get_user_by_id(id)
    if(!user) throw new HttpException('User Not Found!', 404)
    return user
  }

  @Patch(':id')
  update_user_by_id(@Param('id', ParseIntPipe) id: number, @Body() updateUpdateUserDto: UpdateUserDto){
    return this.usersService.update_user_by_id(id, updateUpdateUserDto)
  }

  @Delete(':id')
  delete_user_by_id(@Param('id', ParseIntPipe) id: number){
    return this.usersService.delete_user_by_id(id)
  }


}