import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GlobalController } from './global.controller';
import { Global } from './global.entity';
import { GlobalService } from './global.service';

@Module({
    imports: [TypeOrmModule.forFeature([Global]), HttpModule],
    providers: [GlobalService],
    controllers: [GlobalController],
})

export class StaffModule { }
