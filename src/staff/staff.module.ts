import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StaffController } from './staff.controller';
import { Staff } from './staff.entity';
import { StaffService } from './staff.service';

@Module({
    imports: [TypeOrmModule.forFeature([Staff]), HttpModule],
    providers: [StaffService],
    controllers: [StaffController],
})

export class StaffModule { }
