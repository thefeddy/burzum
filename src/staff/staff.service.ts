import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';

import { Staff } from './staff.entity';
import { StaffDTO, StaffUpdateDTO } from './staff.dto';

@Injectable()
export class StaffService {
    constructor(
        @InjectRepository(Staff)
        private staffRepository: Repository<Staff>,
        private http: HttpService
    ) { }

    async findAll(): Promise<Staff[]> {
        return await this.staffRepository.find();
    }

    async findByDate(date: Date): Promise<Staff> {
        return this.staffRepository.findOne({
            where: { date },
        });
    }

    async findById(id: number): Promise<Staff> {
        return this.staffRepository.findOne({
            where: { id },
        });
    }

    async add(image: StaffDTO): Promise<Staff> {
        return;
        //return await this.imagesRepository.save({ ...image, statusCode: HttpStatus.ACCEPTED });
    }

    async findOne(username: string): Promise<Staff | undefined> {
        const staff = await getRepository(Staff)
            .createQueryBuilder('staff')
            .where('staff.username = :username', { username: username })
            .addSelect('staff.password')
            .addSelect('staff.username')
            .addSelect('staff.superuser')
            .getOne();
        return staff;
    }

    async update(staff: any): Promise<Staff> {
        console.log(staff);
        return await this.staffRepository.save({ ...staff, id: Number(staff.id) })
    }

}
