import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EventsController } from './events.controller';
import { Events } from './events.entity';
import { EventsService } from './events.service';

@Module({
    imports: [TypeOrmModule.forFeature([Events]), HttpModule],
    providers: [EventsService],
    controllers: [EventsController],
})

export class StaffModule { }
