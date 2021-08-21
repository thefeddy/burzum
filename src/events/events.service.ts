import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Events } from './events.entity';
import { EventsDTO } from './events.dto';

@Injectable()
export class EventsService {
    constructor(
        @InjectRepository(Events)
        private imagesRepository: Repository<Events>,
        private http: HttpService
    ) { }

    async findAll(): Promise<Events[]> {
        return await this.imagesRepository.find();
    }

    async findByDate(date: Date): Promise<Events> {
        return this.imagesRepository.findOne({
            where: { date },
        });
    }

    async add(image: EventsDTO): Promise<Events> {
        const { id } = image;
        return;
        //return await this.imagesRepository.save({ ...image, statusCode: HttpStatus.ACCEPTED });
    }

}
