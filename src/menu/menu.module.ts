import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MenuController } from './menu.controller';

import { Bar } from '../bar/bar.entity';
import { BarService } from '../bar/bar.service';

import { Staff } from '../staff/staff.entity';
import { StaffService } from '../staff/staff.service';
@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([Bar]),
        TypeOrmModule.forFeature([Staff]),
    ],
    providers: [BarService, StaffService],
    controllers: [MenuController],
})

export class MenuModule { }
