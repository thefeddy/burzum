import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { EventsController } from './events.controller';
import { Events } from './events.entity';
import { EventsService } from './events.service';


import { ScheduleService } from '../schedule/schedule.service';
import { Schedule } from '../schedule/schedule.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Events]), TypeOrmModule.forFeature([Schedule]), HttpModule],
    providers: [EventsService, ScheduleService],
    controllers: [EventsController],
})

export class EventsModule { }
