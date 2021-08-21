import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bar } from './bar.entity';
import { BarDTO } from './bar.dto';

@Injectable()
export class BarService {
    constructor(
        @InjectRepository(Bar)
        private barRepository: Repository<Bar>,
        private http: HttpService
    ) { }

    async findAll(): Promise<Bar[]> {
        return await this.barRepository.find();
    }


    async add(item: Bar): Promise<Bar> {
        const { id } = item;
        return;
        //return await this.imagesRepository.save({ ...image, statusCode: HttpStatus.ACCEPTED });
    }

}
