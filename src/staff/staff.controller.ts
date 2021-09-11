import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

import { StaffService } from './staff.service';

@Controller('')
export class StaffController {
    constructor(private http: HttpService, private staffService: StaffService) { }

    @Get('/')
    @Render('staff/index')
    async index(@Res() res: Response) {
        const staff = await this.staffService.findAll();

        return { staff };
    }
}
