import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BurzumController } from './burzum.controller';

import { Bar } from '../bar/bar.entity';
import { BarService } from '../bar/bar.service';

import { Gallery } from '../gallery/gallery.entity';
import { GalleryService } from '../gallery/gallery.service';

import { Staff } from '../staff/staff.entity';
import { StaffService } from '../staff/staff.service';
@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([Bar]),
        TypeOrmModule.forFeature([Gallery]),
        TypeOrmModule.forFeature([Staff]),
    ],
    providers: [BarService, GalleryService, StaffService],
    controllers: [BurzumController],
})

export class BurzumModule { }
