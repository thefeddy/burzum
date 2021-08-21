import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

import { ContestantsService } from './contestants.service';

@Controller('')
export class ContestantsController {
    constructor(private http: HttpService) { }

    @Get('/')
    @Render('contestants/index')
    index(@Res() res: Response) { }
}
