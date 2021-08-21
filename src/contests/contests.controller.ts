import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

import { ContestService } from './contests.service';

@Controller('')
export class ContestsController {
    constructor(private http: HttpService) { }

    @Get('/')
    @Render('contests/index')
    index(@Res() res: Response) { }
}
