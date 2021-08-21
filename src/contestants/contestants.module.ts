import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContestantsController } from './contestants.controller';
import { Contestants } from './contestants.entity';
import { ContestantsService } from './contestants.service';

@Module({
    imports: [TypeOrmModule.forFeature([Contestants]), HttpModule],
    providers: [ContestantsService],
    controllers: [ContestantsController],
})

export class StaffModule { }
