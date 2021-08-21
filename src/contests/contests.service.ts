import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Contests } from './contests.entity';
import { ContestDTO } from './contests.dto';

@Injectable()
export class ContestService {
    constructor(
        @InjectRepository(Contests)
        private imagesRepository: Repository<Contests>,
        private http: HttpService
    ) { }

    async findAll(): Promise<Contests[]> {
        return await this.imagesRepository.find();
    }

    async findByDate(date: Date): Promise<Contests> {
        return this.imagesRepository.findOne({
            where: { date },
        });
    }

    async add(image: ContestDTO): Promise<Contests> {
        const { id } = image;
        return;
        //return await this.imagesRepository.save({ ...image, statusCode: HttpStatus.ACCEPTED });
    }

}
