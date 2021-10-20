import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';
import { StaffService } from 'src/staff/staff.service';

import { BarService } from '../bar/bar.service';
import { GalleryService } from '../gallery/gallery.service';

@Controller('')
export class MenuController {
    constructor(
        private barService: BarService,
        private staffService: StaffService
    ) { }

    @Get('/')
    @Render('menu/index')
    async index(@Res() res: Response) {
        const bartenders = await this.staffService.findBartenders();
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

        return { bartenders, food, drinks }

    }
}
