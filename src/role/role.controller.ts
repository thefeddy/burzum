import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

import { RoleService } from './role.service';

@Controller('')
export class RoleController {
    constructor(private http: HttpService) { }

    @Get('/')
    @Render('events/index')
    index(@Res() res: Response) { }
}
