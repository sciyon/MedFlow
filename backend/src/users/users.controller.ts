import { Controller, Body, Post, UsePipes, ValidationPipe, Get, Param, ParseIntPipe, HttpException, Patch, Delete, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { UpdateUserDto } from "./dtos/UpdateUser.dto";
import { CreateUserDataDto } from "./dtos/CreateUserData.dto";
import { Roles } from "src/auth/decorator/roles.decorator";
import { RolesGuard } from "src/auth/guard/roles.guard";
import { AuthGuard } from '@nestjs/passport';
import { UpdateUserdataDto } from "./dtos/UpdateUserData.dto";

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

  @Post('patient')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('PATIENT')
  @UsePipes(ValidationPipe)
  create_user_data(
    @Body() createUserDataDto: CreateUserDataDto
  ) {
    return this.usersService.createPatient(createUserDataDto)
  }

  @Get('patient')
  @UseGuards(RolesGuard)
  @Roles('ASSISTANT', 'DOCTOR', 'PATIENT')
  getPatients(){
    return this.usersService.getAllPatients()
  }

  @Get()
  @UseGuards(RolesGuard)
  @Roles('ASSISTANT', 'DOCTOR')
  get_users(){
    return this.usersService.get_users()
  }

  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles('ASSISTANT', 'DOCTOR', 'PATIENT')
  async get_user_by_id(@Param('id', ParseIntPipe) id: number){
    const user = await this.usersService.get_user_by_id(id)
    if(!user) throw new HttpException('User Not Found!', 404)
    return user
  }
  
  @Get('patient/:id')
  @UseGuards(RolesGuard)
  @Roles('ASSISTANT', 'DOCTOR', 'PATIENT')
  async getPatientData(@Param('id', ParseIntPipe) id: number){
    const user = await this.usersService.getPatient(id)
    if(!user) throw new HttpException('User Not Found!', 404)
    return user
  }

  @Patch(':id')
  @UseGuards(RolesGuard)
  @Roles('ASSISTANT', 'DOCTOR', 'PATIENT')
  UpdateUser(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateUpdateUserDto: UpdateUserDto){
    return this.usersService.update_user_by_id(id, updateUpdateUserDto)
  }

  @Patch('patient/:id')
  @UseGuards(RolesGuard)
  @Roles('ASSISTANT', 'DOCTOR', 'PATIENT')
  updatePatient
  (
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateUserDataDto: UpdateUserdataDto
  ){
    return this.usersService.updatePatient(id, updateUserDataDto)
  }

  @Delete(':id')
  delete_user_by_id(@Param('id', ParseIntPipe) id: number){
    return this.usersService.delete_user_by_id(id)
  }


}