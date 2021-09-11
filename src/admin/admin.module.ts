import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthService } from '../auth/auth.service';
import { AdminController } from './admin.controller';


import { Staff } from 'src/staff/staff.entity';
import { StaffService } from 'src/staff/staff.service';


@Module({
    imports: [HttpModule, TypeOrmModule.forFeature([Staff])],
    providers: [StaffService],
    controllers: [AdminController],
})

export class AdminModule { }
