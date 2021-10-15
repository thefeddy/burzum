import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Schedule } from './schedule.entity';
import { ScheduleDTO } from './schedule.dto';

@Injectable()
export class ScheduleService {
    constructor(
        @InjectRepository(Schedule)
        private scheduleRepository: Repository<Schedule>,
    ) { }

    async findAll(): Promise<Schedule[]> {
        return await this.scheduleRepository.find();
    }

    async findByDate(date: Date): Promise<Schedule> {
        return this.scheduleRepository.findOne({
            where: { date },
        });
    }

    async update(schedule: ScheduleDTO): Promise<Schedule> {
        console.log(schedule)
        return await this.scheduleRepository.save({ ...schedule, id: Number(schedule.id) });
    };

}
