import { Controller, Body, Post, UsePipes, ValidationPipe, Get, Param, ParseIntPipe, HttpException, Patch, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/CreateUser.dto";
import { UpdateUserDto } from "./dtos/UpdateUser.dto";
import { CreateUserDataDto } from "./dtos/CreateUserData.dto";

@Controller('users')
export class UsersController{
  constructor(private usersService: UsersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create_user(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create_user(createUserDto)
  }

  @Post('data')
  @UsePipes(ValidationPipe)
  create_user_data(@Body() createUserDataDto: CreateUserDataDto) {
    return this.usersService.create_user_data(createUserDataDto)
  }

  @Get()
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