import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BurzumController } from './burzum.controller';

import { Bar } from 'src/bar/bar.entity';
import { BarService } from 'src/bar/bar.service';
@Module({
    imports: [TypeOrmModule.forFeature([Bar]), HttpModule],
    providers: [BarService],
    controllers: [BurzumController],
})

export class BurzumModule { }
