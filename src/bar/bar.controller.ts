import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

import { BarService } from './bar.service';

@Controller('')
export class BarController {
    constructor(private http: HttpService) { }

    @Get('/')
    @Render('events/index')
    index(@Res() res: Response) { }
}
