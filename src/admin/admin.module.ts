import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminController } from './admin.controller';

import { Staff } from '../staff/staff.entity';
import { StaffService } from '../staff/staff.service';

import { Bar } from '../bar/bar.entity';
import { BarService } from '../bar/bar.service';

import { Events } from '..//events/events.entity';
import { EventsService } from '../events/events.service';

import { ScheduleService } from '../schedule/schedule.service';
import { Schedule } from '../schedule/schedule.entity';

import { Gallery } from '../gallery/gallery.entity';
import { GalleryService } from '../gallery/gallery.service';
@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([Staff]),
        TypeOrmModule.forFeature([Bar]),
        TypeOrmModule.forFeature([Events]),
        TypeOrmModule.forFeature([Schedule]),
        TypeOrmModule.forFeature([Gallery]),
    ],
    providers: [
        StaffService,
        BarService,
        EventsService,
        ScheduleService,
        GalleryService
    ],
    controllers: [AdminController],
})

export class AdminModule { }
