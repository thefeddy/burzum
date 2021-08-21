import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookingsController } from './bookings.controller';
import { Bookings } from './bookings.entity';
import { BookingsService } from './bookings.service';

@Module({
    imports: [TypeOrmModule.forFeature([Bookings]), HttpModule],
    providers: [BookingsService],
    controllers: [BookingsController],
})

export class StaffModule { }
