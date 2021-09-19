import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminController } from './admin.controller';


import { Staff } from '../staff/staff.entity';
import { Bar } from 'src/bar/bar.entity';


import { StaffService } from '../staff/staff.service';
import { BarService } from '../bar/bar.service';



@Module({
    imports: [HttpModule, TypeOrmModule.forFeature([Staff]), TypeOrmModule.forFeature([Bar])],
    providers: [StaffService, BarService],
    controllers: [AdminController],
})

export class AdminModule { }
