import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

import { StaffService } from './staff.service';

@Controller('')
export class StaffController {
    constructor(private http: HttpService) { }

    @Get('/')
    @Render('staff/index')
    index(@Res() res: Response) { }
}
