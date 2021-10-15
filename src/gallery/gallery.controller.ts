import { Controller, Get, Render, Res } from '@nestjs/common';
import { GalleryService } from './gallery.service';


@Controller('')
export class GalleryController {
    constructor(private galleryService: GalleryService) { }

    @Get('/')
    @Render('gallery/index')
    async index() {
        const gallery = await this.galleryService.findAll();

        console.log(gallery)
        return { gallery };
    }
}
