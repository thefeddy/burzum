import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';
import { StaffService } from 'src/staff/staff.service';

import { BarService } from './bar.service';

@Controller('')
export class BarController {
    constructor(private barService: BarService, private staffService: StaffService) { }

    @Get('/')
    @Render('bar/index')
    async index(@Res() res: Response) {

        const items = await this.barService.findAllActive();
        const bartenders = await this.staffService.findBartenders();
        console.log(bartenders)
        let drinks = [];
        let food = [];

        for (const item of items) {
            if (item.active === 'true') {
                if (item.type === 'food') {
                    food.push(item);
                }
                if (item.type === 'drink') {
                    drinks.push(item);
                }
            }
        }
        return { drinks, food, bartenders };
    }
}
