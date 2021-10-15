import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

import { BarService } from 'src/bar/bar.service';
import { GalleryService } from 'src/gallery/gallery.service';

@Controller('')
export class BurzumController {
    constructor(private barService: BarService, private galleryService: GalleryService) { }

    @Get('/')
    @Render('burzum/index')
    async index(@Res() res: Response) {

        console.log('hai')

        const photos = await this.galleryService.findWithLimit(4);
        console.log(photos);

        return { photos }

    }
}
