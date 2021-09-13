import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';

import { Staff } from './staff.entity';
import { StaffCreateDTO, StaffDTO, StaffUpdateDTO } from './staff.dto';

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

    async findAllActive(): Promise<Staff[]> {
        return await this.staffRepository.find({
            where: { active: 'true' }
        });
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

    async add(staff: StaffCreateDTO): Promise<Staff> {
        const { name } = staff;
        console.log(staff);
        const staffing = await this.staffRepository.findOne({
            where: { name },
        });

        if (staffing) {
            throw new HttpException('Staff Already Entered', HttpStatus.FOUND);
        }

        return await this.staffRepository.save({ ...staff });
    }

}
