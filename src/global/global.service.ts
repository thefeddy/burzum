import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Global } from './global.entity';
import { GlobalDTO } from './global.dto';

@Injectable()
export class GlobalService {
    constructor(
        @InjectRepository(Global)
        private globalRepository: Repository<Global>
    ) { }

    async findAll(): Promise<Global[]> {
        return await this.globalRepository.find();
    }

}
