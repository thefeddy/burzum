import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

@Controller('')
export class BurzumController {
    constructor(private http: HttpService) { }

    @Get('/')
    @Render('burzum/index')
    index(@Res() res: Response) { }
}
