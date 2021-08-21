import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Contestants } from './contestants.entity';
import { ContestantsDTO } from './contestants.dto';

@Injectable()
export class ContestantsService {
    constructor(
        @InjectRepository(Contestants)
        private imagesRepository: Repository<Contestants>,
        private http: HttpService
    ) { }

    async findAll(): Promise<Contestants[]> {
        return await this.imagesRepository.find();
    }

    async findByDate(date: Date): Promise<Contestants> {
        return this.imagesRepository.findOne({
            where: { date },
        });
    }

    async add(image: Contestants): Promise<Contestants> {
        const { id } = image;
        return;
        //return await this.imagesRepository.save({ ...image, statusCode: HttpStatus.ACCEPTED });
    }

}
