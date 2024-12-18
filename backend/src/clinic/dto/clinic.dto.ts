import { IsEmail, IsNotEmpty, IsInt, IsString, MaxLength, IsNumber } from 'class-validator';

export class ClinicDto{

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  time_start: string;

  
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  time_end: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone_number: string;

  @IsNotEmpty()
  @IsNumber()
  max_capacity: number; 

}