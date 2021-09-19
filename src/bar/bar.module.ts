import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from 'src/staff/staff.entity';
import { StaffService } from 'src/staff/staff.service';

import { BarController } from './bar.controller';
import { Bar } from './bar.entity';
import { BarService } from './bar.service';

@Module({
    imports: [TypeOrmModule.forFeature([Bar]), TypeOrmModule.forFeature([Staff]), HttpModule],
    providers: [BarService, StaffService],
    controllers: [BarController],
})

export class BarModule { }
