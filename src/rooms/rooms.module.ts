import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoomController } from './rooms.controller';
import { Rooms } from './rooms.entity';
import { RoomsService } from './rooms.service';

@Module({
    imports: [TypeOrmModule.forFeature([Rooms]), HttpModule],
    providers: [RoomsService],
    controllers: [RoomController],
})

export class StaffModule { }
