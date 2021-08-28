import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Staff } from './staff.entity';
import { StaffDTO } from './staff.dto';

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

    async add(image: StaffDTO): Promise<Staff> {
        const { id } = image;
        return;
        //return await this.imagesRepository.save({ ...image, statusCode: HttpStatus.ACCEPTED });
    }

}
