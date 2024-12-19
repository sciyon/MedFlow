  import { Injectable, HttpException, NotFoundException, InternalServerErrorException } from '@nestjs/common';
  import { PrismaService } from 'src/prisma/prisma.service';
  import { Prisma } from '@prisma/client';


  @Injectable()
  export class ClinicService {
    constructor(private prisma: PrismaService) {}

    async setupClinic(data: Prisma.ClinicCreateInput){
      return this.prisma.clinic.create({ data })
    }

    async getClinic(id: number){
      const clinic = this.prisma.clinic.findFirst({ where: { id } })

      if(!clinic){
        throw new HttpException('Clinic Not Found', 404)
      }

      return clinic;
    }

    async updateClinic(id: number, data: Prisma.ClinicUpdateInput){
      const clinic = this.prisma.clinic.findFirst({ where: { id } })

      if(!clinic){
        throw new NotFoundException('Clinic not found');
      }
      
      try {
        return this.prisma.clinic.update({ where: { id }, data})

      } catch (error) {
        throw new InternalServerErrorException('Failed to update clinic data')
      }
    }

  }
