import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

import { BarService } from './bar.service';

@Controller('')
export class BarController {
    constructor(private barService: BarService, private http: HttpService) { }

    @Get('/')
    @Render('bar/index')
    async index(@Res() res: Response) {

        const items = await this.barService.findAll();
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
        return { drinks, food };
    }
}
