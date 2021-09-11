import { HttpModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';


import { Staff } from '../staff/staff.entity';
import { StaffService } from '../staff/staff.service';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controllers';

import { LocalStrategy } from './strategy/local.strategy';

import { SessionSerializer } from './session.serializer';

@Module({
    imports: [
        HttpModule,
        PassportModule.register({ session: true }),
        TypeOrmModule.forFeature([Staff]),
    ],
    providers: [StaffService, AuthService, LocalStrategy, SessionSerializer],
    controllers: [AuthController],
    exports: []
})
export class AuthModule { }
