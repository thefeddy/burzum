import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContestsController } from './contests.controller';
import { Contests } from './contests.entity';
import { ContestService } from './contests.service';

@Module({
    imports: [TypeOrmModule.forFeature([Contests]), HttpModule],
    providers: [ContestService],
    controllers: [ContestsController],
})

export class StaffModule { }
