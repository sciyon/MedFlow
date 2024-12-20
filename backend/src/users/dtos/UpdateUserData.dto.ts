import { IsString, IsOptional, IsDate, IsEnum, IsNotEmpty, Length, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { Gender } from '@prisma/client';

export class UpdateUserdataDto {

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  first_name: string;

  @IsString()
  @IsOptional()
  @Length(1, 50)
  middle_name?: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  last_name: string;

  @IsDate()
  @Type(() => Date)
  birth_date: Date;

    @IsEnum(Gender)
    sex: Gender;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  address: string;


  @IsString()
  @IsNotEmpty()
  @Length(1, 15)
  @Matches(/^(\+\d{1,3})?\d{5,15}$/, { message: 'Invalid mobile number format' })
  mobile: string;

  @IsString()
  @IsOptional()
  @Length(1, 15)
  @Matches(/^(\+\d{1,3})?\d{5,15}$/, { message: 'Invalid landline number format' })
  landline?: string;

}