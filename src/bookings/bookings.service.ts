import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bookings } from './bookings.entity';
import { BookingsDTO } from './bookings.dto';

@Injectable()
export class BookingsService {
    constructor(
        @InjectRepository(Bookings)
        private imagesRepository: Repository<Bookings>,
        private http: HttpService
    ) { }

    async findAll(): Promise<Bookings[]> {
        return await this.imagesRepository.find();
    }


    async add(image: Bookings): Promise<Bookings> {
        const { id } = image;
        return;
        //return await this.imagesRepository.save({ ...image, statusCode: HttpStatus.ACCEPTED });
    }

}
