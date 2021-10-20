import { Module, HttpModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { APP_FILTER } from '@nestjs/core';

import { RouterModule, Routes } from 'nest-router';

/* Services */
import { DiscordService } from './discord/discord.service';

/* Modules */
import { DiscordModule } from './discord/discord.module';
import { BurzumModule } from './burzum/burzum.module';
import { BarModule } from './bar/bar.module';
import { StaffModule } from './staff/staff.module';
import { EventsModule } from './events/events.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
/* Entities */
import { Staff } from './staff/staff.entity';
import { Events } from './events/events.entity';

import { Contests } from './contests/contests.entity';
import { Contestants } from './contestants/contestants.entity';
import { Bar } from './bar/bar.entity';

import { Rooms } from './rooms/rooms.entity';
import { Room } from './room/room.entity';

import { Bookings } from './bookings/bookings.entity';

import { ScheduleModule } from './schedule/schedule.module';
import { Schedule } from './schedule/schedule.entity';

import { GalleryModule } from './gallery/gallery.module';
import { Gallery } from './gallery/gallery.entity';

import { Global } from './global/global.entity';

import { NotFoundExceptionFilter } from './common/filters/not-found';

const routes: Routes = [
    {
        path: '/',
        module: BurzumModule,
    },
    {
        path: '/menu',
        module: MenuModule,
    },
    {
        path: '/staff',
        module: StaffModule,
    },
    {
        path: '/events',
        module: EventsModule,
    },
    {
        path: '/gallery',
        module: GalleryModule
    },
    {
        path: '/admin',
        module: AdminModule,
    },
    {
        path: '/auth',
        module: AuthModule,
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
                entities: [Staff, Events, Contests, Bar, Rooms, Room, Bookings, Contestants, Schedule, Gallery, Global],
                synchronize: true,
            }),
        }),
        RouterModule.forRoutes(routes),
        MulterModule.register({
            dest: './public/uploads',
        }),

        AuthModule,
        BurzumModule,
        BarModule,
        StaffModule,
        AdminModule,
        HttpModule,
        EventsModule,
        DiscordModule,
        ScheduleModule,
        GalleryModule,
        MenuModule

    ],
    controllers: [],
    providers: [
        DiscordService,
        {
            provide: APP_FILTER,
            useClass: NotFoundExceptionFilter,
        }
    ]
})

export class AppModule { }