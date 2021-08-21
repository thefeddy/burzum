import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Rooms } from './rooms.entity';
import { RoomsDTO } from './rooms.dto';

@Injectable()
export class RoomsService {
    constructor(
        @InjectRepository(Rooms)
        private imagesRepository: Repository<Rooms>,
        private http: HttpService
    ) { }

    async findAll(): Promise<Rooms[]> {
        return await this.imagesRepository.find();
    }


    async add(image: Rooms): Promise<Rooms> {
        const { id } = image;
        return;
        //return await this.imagesRepository.save({ ...image, statusCode: HttpStatus.ACCEPTED });
    }

}
