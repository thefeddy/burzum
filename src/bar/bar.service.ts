import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Bar } from './bar.entity';
import { BarDTO } from './bar.dto';

@Injectable()
export class BarService {
    constructor(
        @InjectRepository(Bar)
        private barRepository: Repository<Bar>
    ) { }

    async findAll(): Promise<Bar[]> {
        return await this.barRepository.find({
            order: { id: 'ASC' }
        });
    }

    async findAllActive(): Promise<Bar[]> {
        return await this.barRepository.find({
            where: { active: 'true' },
            order: { id: 'ASC' }
        });
    }

    async add(item: BarDTO): Promise<Bar> {
        const { name } = item;

        const menu = await this.barRepository.findOne({
            where: { name }
        });

        if (menu) {
            throw new HttpException('This menu item already exists', HttpStatus.FOUND);
        }

        return await this.barRepository.save({ ...item });
    }

    async findById(id: number): Promise<Bar> {
        return this.barRepository.findOne({
            where: { id },
        });
    }


    async update(bar: any): Promise<Bar> {
        return await this.barRepository.save({ ...bar, id: Number(bar.id) })
    }

}
