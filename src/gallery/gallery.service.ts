import { Injectable, HttpException, HttpStatus, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Gallery } from './gallery.entity';
import { GalleryDTO } from './gallery.dto';

@Injectable()
export class GalleryService {
    constructor(
        @InjectRepository(Gallery)
        private galleryRepository: Repository<Gallery>,
    ) { }

    async findAll(): Promise<Gallery[]> {
        return await this.galleryRepository.find({
            order: { created: 'ASC' }
        });
    }

    async findById(id: number): Promise<Gallery> {
        return this.galleryRepository.findOne({
            where: { id },
        });
    }

    async findByDate(date: Date): Promise<Gallery> {
        return this.galleryRepository.findOne({
            where: { date },
        });
    }

    async add(gallery: GalleryDTO): Promise<Gallery> {
        return await this.galleryRepository.save(gallery);
    };

    async update(gallery: GalleryDTO): Promise<Gallery> {
        return await this.galleryRepository.save({ ...gallery, id: Number(gallery.id) });
    };

    async findWithLimit(limit: number): Promise<Gallery[]> {
        console.log(limit)
        return await this.galleryRepository.find({
            take: limit,
            order: { created: 'ASC' }
        });
    }

}
