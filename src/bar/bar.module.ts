import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BarController } from './bar.controller';
import { Bar } from './bar.entity';
import { BarService } from './bar.service';

@Module({
    imports: [TypeOrmModule.forFeature([Bar]), HttpModule],
    providers: [BarService],
    controllers: [BarController],
})

export class BarModule { }
