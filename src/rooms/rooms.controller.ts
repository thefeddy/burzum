import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

import { RoomsService } from './rooms.service';

@Controller('')
export class RoomController {
    constructor(private http: HttpService) { }

    @Get('/')
    @Render('events/index')
    index(@Res() res: Response) { }
}
