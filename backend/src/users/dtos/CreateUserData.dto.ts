import { Gender } from "@prisma/client";
import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from "class-validator";

export class CreateUserDataDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsOptional() // Mark as optional if middle name isn't always required
  middle_name?: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsDateString() // For ISO date string validation
  @IsNotEmpty()
  birth_date: string;

  @IsEnum(Gender) // Restrict to specific values
  @IsNotEmpty()
  sex: Gender;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @Length(10, 15) // Example: Restrict mobile number length
  @IsNotEmpty()
  mobile: string;

  @IsString()
  @IsOptional() // Make optional if not mandatory
  @Length(7, 15) // Adjust length range for landline numbers
  landline?: string;

  @IsNotEmpty()
  user: { connect: { id: number } }; 
}