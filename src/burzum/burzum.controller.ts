import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

import { BarService } from 'src/bar/bar.service';

@Controller('')
export class BurzumController {
    constructor(private barService: BarService, private http: HttpService) { }

    @Get('/')
    @Render('burzum/index')
    async index(@Res() res: Response) {


    }
}
