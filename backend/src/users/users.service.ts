import { HttpException, Injectable, HttpStatus } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcryptjs'; // Import bcrypt

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async create_user(data: Prisma.UserCreateInput) {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: data.email }
      });
      if (existingUser) {
        throw new HttpException('Email already in use', HttpStatus.BAD_REQUEST);
      }

      const hashedPassword = await bcrypt.hash(data.password, 10); 
      data.password = hashedPassword;

      return this.prisma.user.create({ data });
    } catch (error) {
      console.error('Error creating user:', error);
        throw new HttpException(
        "Error creating user",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createPatient(data: Prisma.UserdataCreateInput) {
    try {
        const userId = (data.user as { connect: { id: number } })?.connect?.id;


        // Check if the user exists through the relation
        const userExists = await this.prisma.user.findUnique({
            where: { id: userId },
        });

        if (!userExists) {
            throw new HttpException('Patient Not Found', HttpStatus.NOT_FOUND);
        }

        //Check if user data already exists with the user id
        const existingUserdata = await this.prisma.userdata.findUnique({
            where: { user_id: userId },
        });


        if (existingUserdata) {
            throw new HttpException('User data already exists for this user', HttpStatus.CONFLICT);
        }
        // Convert the date string to Date object if it's still a string
        if (typeof data.birth_date === 'string') {
            data.birth_date = new Date(data.birth_date);
        }

        // Create userdata directly, using the connection
        return this.prisma.userdata.create({ data });
    } catch (error) {
        console.error('Error creating user data:', error);
        if (error instanceof HttpException) {
             throw error; // Re-throw the HttpException
        }
        throw new HttpException(
            "Error creating user data",
            HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }
}

  async get_users() {
    try {
      return await this.prisma.user.findMany({ include: { user_data: true } });
    } catch(error) {
      console.error('Error getting users:', error);
          throw new HttpException(
              "Error getting users",
              HttpStatus.INTERNAL_SERVER_ERROR,
          );
    }
  }

  async get_user_by_email(email: string) {
    try {
      const findUser = await this.prisma.user.findFirst({
          where: { email },
      });
      if (!findUser) throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
      return findUser;
    } catch (error) {
      console.error('Error getting user by email:', error);
      throw new HttpException(
        "Error getting user by email",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async get_user_by_id(id: number){
    try{
      const user = await this.prisma.user.findUnique({
        where : { id },
          include : {
            user_data: true
          }
      });
      return user
    } catch (error) {
      console.error('Error getting user by id:', error);
      throw new HttpException(
        "Error getting user by id",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update_user_by_id(id: number, data: Prisma.UserUpdateInput) {
    try {
      const findUser = await this.get_user_by_id(id)
      if(!findUser){
        throw new HttpException('User Not Found', HttpStatus.NOT_FOUND)
      } 

      if(data.email){
        const findUser = await this.prisma.user.findUnique({
            where: { email: data.email as string},
        })
          if(findUser) throw new HttpException('Email already in use', HttpStatus.BAD_REQUEST)
      }
      return this.prisma.user.update({ where: { id }, data });
    }
    catch(error){
      console.error('Error updating user by id:', error);
      throw new HttpException(
        "Error updating user by id",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateUserData(id: number, data: Prisma.UserdataUpdateInput){
    try {
      const patient = await this.prisma.userdata.findUnique({
        where: { id: id}
      })
      if(!patient){
        throw new HttpException('Patient does not exist', HttpStatus.BAD_REQUEST);
      }

      return await this.prisma.userdata.update({ where: { id }, data })

    } catch (error) {
      console.error('Error updating patient data:', error);
      throw new HttpException(
        "Error updating patient data:",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async delete_user_by_id(id: number) {
    try {
      const user = await this.get_user_by_id(id);
      if(!user) throw new HttpException("User Not Found!", HttpStatus.NOT_FOUND);

      return await this.prisma.user.delete({ where : { id } })

    } catch (error) {
      console.error('Error deleting user by id:', error);
      throw new HttpException(
        "Error deleting user by id",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllPatients(){
    try {
      return await this.prisma.userdata.findMany({ });
    } catch(error) {
      console.error('Error fetching all patients:', error);
        throw new HttpException(
          "Error fetching all patients",
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }
  }

  async getPatient(id: number){
    try {
      const patient = await this.prisma.userdata.findUnique({
        where: { id: id }
      })
      if(!patient){
        throw new HttpException("Patient Not Found!", HttpStatus.NOT_FOUND);
      }

      return patient

    } catch (error) {
      console.error('Error fetching patient id:', error);
      throw new HttpException(
        "Error fetching patient information",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updatePatient(id: number, data: Prisma.UserdataUpdateInput){
    try {
      const patient = await this.prisma.userdata.findUnique({
        where: { id: id }
      })
      if(!patient){
        throw new HttpException("Patient Not Found!", HttpStatus.NOT_FOUND);
      }

      return this.prisma.userdata.update({
        where: { id },
        data
      })

    } catch (error) {
      console.error('Error updating patient id:', error);
      throw new HttpException(
        "Error updating patient information",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}