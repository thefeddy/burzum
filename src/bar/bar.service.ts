import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bar } from './bar.entity';
import { BarDTO } from './bar.dto';

@Injectable()
export class BarService {
    constructor(
        @InjectRepository(Bar)
        private imagesRepository: Repository<Bar>,
        private http: HttpService
    ) { }

    async findAll(): Promise<Bar[]> {
        return await this.imagesRepository.find();
    }


    async add(image: Bar): Promise<Bar> {
        const { id } = image;
        return;
        //return await this.imagesRepository.save({ ...image, statusCode: HttpStatus.ACCEPTED });
    }

}
