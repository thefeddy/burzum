import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoleController } from './role.controller';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@Module({
    imports: [TypeOrmModule.forFeature([Role]), HttpModule],
    providers: [RoleService],
    controllers: [RoleController],
})

export class StaffModule { }
