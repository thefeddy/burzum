import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';
import { StaffService } from 'src/staff/staff.service';

import { BarService } from '../bar/bar.service';
import { GalleryService } from '../gallery/gallery.service';

@Controller('')
export class BurzumController {
    constructor(
        private barService: BarService,
        private galleryService: GalleryService,
        private staffService: StaffService
    ) { }

    @Get('/')
    @Render('burzum/index')
    async index(@Res() res: Response) {
        const photos = await this.galleryService.findWithLimit(4);
        const featured = await this.staffService.findAllActiveFeatured();

        return { photos, featured }

    }
}
