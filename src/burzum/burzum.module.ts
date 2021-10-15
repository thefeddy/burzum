import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BurzumController } from './burzum.controller';

import { Bar } from '../bar/bar.entity';
import { BarService } from '../bar/bar.service';

import { Gallery } from '../gallery/gallery.entity';
import { GalleryService } from '../gallery/gallery.service';
@Module({
    imports: [TypeOrmModule.forFeature([Bar]), TypeOrmModule.forFeature([Gallery]), HttpModule],
    providers: [BarService, GalleryService],
    controllers: [BurzumController],
})

export class BurzumModule { }
