import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

import { BookingsService } from './bookings.service';

@Controller('')
export class BookingsController {
    constructor(private http: HttpService) { }

    @Get('/')
    @Render('events/index')
    index(@Res() res: Response) { }
}
