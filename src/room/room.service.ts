import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Room } from './room.entity';
import { RoomDTO } from './room.dto';

@Injectable()
export class RoomService {
    constructor(
        @InjectRepository(Room)
        private imagesRepository: Repository<Room>,
        private http: HttpService
    ) { }

    async findAll(): Promise<Room[]> {
        return await this.imagesRepository.find();
    }


    async add(image: Room): Promise<Room> {
        const { id } = image;
        return;
        //return await this.imagesRepository.save({ ...image, statusCode: HttpStatus.ACCEPTED });
    }

}
