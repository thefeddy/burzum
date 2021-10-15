import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ScheduleController } from './schedule.controller';
import { Schedule } from './schedule.entity';
import { ScheduleService } from './schedule.service';

@Module({
    imports: [TypeOrmModule.forFeature([Schedule]), HttpModule],
    providers: [ScheduleService],
    controllers: [ScheduleController],
})

export class ScheduleModule { }
