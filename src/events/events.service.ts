import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';


import * as moment from 'moment';

import { Events } from './events.entity';
import { EventsDTO } from './events.dto';

import { Schedule } from '../schedule/schedule.entity';
import { ScheduleService } from '../schedule/schedule.service';
import { ScheduleDTO } from 'src/schedule/schedule.dto';

@Injectable()
export class EventsService {
    constructor(
        @InjectRepository(Events)
        private eventsRepository: Repository<Events>,
        private scheduleService: ScheduleService
    ) { }

    async findAll(): Promise<Events[]> {
        return await this.eventsRepository.find({
            relations: ['staff', 'schedule'],
            order: { date: 'ASC' }
        });
    }

    async findThisWeeks(): Promise<Events[]> {

        var startOfWeek = moment().startOf('isoWeek').toDate();
        var endOfWeek = moment().endOf('isoWeek').toDate();

        return await this.eventsRepository.find({
            where: { date: Between(startOfWeek, endOfWeek) },
            relations: ['staff', 'schedule'],
            order: { date: 'ASC' }
        });
    }

    async findById(id: number): Promise<Events> {
        return this.eventsRepository.findOne({
            where: { id },
            relations: ['staff', 'schedule'],

        });
    }

    async findByDate(date: Date): Promise<Events> {
        return this.eventsRepository.findOne({
            where: { date }
        });
    }

    async add(event: EventsDTO): Promise<Events> {
        return await this.eventsRepository.save(event);
    }

    async update(event: EventsDTO): Promise<Events> {
        console.log(event);
        return await this.eventsRepository.save({ ...event, id: Number(event.id) })
    }

}
