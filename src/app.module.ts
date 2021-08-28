import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RouterModule, Routes } from 'nest-router';


/* Services */
import { DiscordService } from './discord/discord.service';

/* Modules */
import { DiscordModule } from './discord/discord.module';
import { BurzumModule } from './burzum/burzum.module';
import { BarModule } from './bar/bar.module';
import { StaffModule } from './staff/staff.module';

/* Entities */
import { Staff } from './staff/staff.entity';
import { Role } from './role/role.entity';
import { Events } from './events/events.entity';

import { Contests } from './contests/contests.entity';
import { Contestants } from './contestants/contestants.entity';
import { Bar } from './bar/bar.entity';

import { Rooms } from './rooms/rooms.entity';
import { Room } from './room/room.entity';

import { Bookings } from './bookings/bookings.entity';

const routes: Routes = [
    {
        path: '/',
        module: BurzumModule,
    },
    {
        path: '/bar',
        module: BarModule,
    },
    {
        path: '/staff',
        module: StaffModule,
    },
];

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'postgres',
                host: process.env.TYPEORM_HOST,
                port: Number(process.env.TYPEORM_PORT),
                username: process.env.TYPEORM_USERNAME,
                password: process.env.TYPEORM_PASSWORD,
                database: process.env.TYPEORM_DATABASE,
                entities: [Staff, Role, Events, Contests, Bar, Rooms, Room, Bookings, Contestants],
                synchronize: true,
            }),
        }),
        RouterModule.forRoutes(routes),
        BurzumModule,
        BarModule,
        StaffModule,
        HttpModule,
        DiscordModule
    ],
    controllers: [],
    providers: [DiscordService],
})

export class AppModule { }