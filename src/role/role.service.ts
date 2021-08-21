import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Role } from './role.entity';
import { RoleDTO } from './role.dto';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private imagesRepository: Repository<Role>,
        private http: HttpService
    ) { }

    async findAll(): Promise<Role[]> {
        return await this.imagesRepository.find();
    }


    async add(image: Role): Promise<Role> {
        const { id } = image;
        return;
        //return await this.imagesRepository.save({ ...image, statusCode: HttpStatus.ACCEPTED });
    }

}
