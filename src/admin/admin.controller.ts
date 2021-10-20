import { Controller, Get, Render, Res, HttpService, Next, Req, UseGuards, Post, Request, Body, Param, Put, UseInterceptors, UploadedFile, HttpStatus, UploadedFiles } from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

import { json, Response } from 'express';
import { extname } from 'path';



import { diskStorage } from 'multer';

/* Guards */
import { RolesGuard } from '../common/guards/role.guard';


/* Services */
import { StaffService } from '../staff/staff.service';
import { BarService } from '../bar/bar.service';
import { EventsService } from '../events/events.service';
import { GalleryService } from 'src/gallery/gallery.service';

export const editFileName = (req, file, callback) => {
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
    callback(null, `${name}-${randomName}${fileExtName}`);
};

export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};


@Controller('')
export class AdminController {
    constructor(
        private eventsService: EventsService,
        private staffService: StaffService,
        private barService: BarService,
        private galleryService: GalleryService
    ) { }

    /* Login */
    @Get('/')
    @Render('admin/index')
    async index() { }


    /* Gallery */
    @UseGuards(RolesGuard)
    @Get('/staff')
    async staffing(@Res() res: Response, @Req() request) {
        let staff = await this.staffService.findAll();
        return res.render(
            'admin/staff/index',
            { layout: 'base-admin', staff },
        );
    }

    @UseGuards(RolesGuard)
    @Get('/staff/add')
    async add(@Res() res: Response, @Req() request) {
        return res.render(
            'admin/staff/add',
            { layout: 'base-admin' },
        );
    }

    @UseGuards(RolesGuard)
    @Get('/staff/:id')
    async staff(@Res() res: Response, @Param('id') id: number) {
        const staff = await this.staffService.findById(id);
        return res.render(
            'admin/staff/edit',
            { layout: 'base-admin', staff },
        );
    }

    @UseGuards(RolesGuard)
    @Put('/staff/')
    @UseInterceptors(FileFieldsInterceptor([
        {
            name: 'photo',
            maxCount: 1,
        },
        {
            name: 'cutout',
            maxCount: 1,
        },
        {
            name: 'logo',
            maxCount: 1,
        },
    ],
        {
            storage: diskStorage({
                destination: './public/uploads/',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        })
    )
    async updateStaff(@Res() res: Response, @Body() staff: any, @UploadedFiles() files): Promise<any> {
        if (files) {
            if (files['photo']) {
                staff.photo = `/uploads/${files['photo'][0].filename}`;
            }

            if (files['cutout']) {
                staff.cutout = `/uploads/${files['cutout'][0].filename}`;
            }

            if (files['logo']) {
                staff.logo = `/uploads/${files?.['logo'][0].filename}`;
            }
        }

        const user = await this.staffService.update(staff);
        return res.status(HttpStatus.ACCEPTED).json({ message: 'updated' });
    }

    @UseGuards(RolesGuard)
    @Post('/staff/add')
    @UseInterceptors(
        FileFieldsInterceptor([
            {
                name: 'photo',
                maxCount: 1,
            },
            {
                name: 'cutout',
                maxCount: 1,
            },
            {
                name: 'logo',
                maxCount: 1,
            },
        ],
            {
                storage: diskStorage({
                    destination: './public/uploads/',
                    filename: editFileName,
                }),
                fileFilter: imageFileFilter,
            })
    )
    async addStaff(@Res() res: Response, @Body() staff: any, @UploadedFiles() files): Promise<any> {
        if (files) {
            if (files['photo']) {
                staff.photo = `/uploads/${files['photo'][0].filename}`;
            }

            if (files['cutout']) {
                staff.cutout = `/uploads/${files['cutout'][0].filename}`;
            }

            if (files['logo']) {
                staff.logo = `/uploads/${files?.['logo'][0].filename}`;
            }
        }

        const user = await this.staffService.add(staff);
        return res.status(HttpStatus.ACCEPTED).json({ message: 'Added Staff' });
    }

    /* Bar */
    @UseGuards(RolesGuard)
    @Get('/bar')
    async bar(@Res() res: Response) {
        const menu = await this.barService.findAll();
        return res.render(
            'admin/bar/index',
            { layout: 'base-admin', menu },
        );
    }

    @UseGuards(RolesGuard)
    @Post('/bar/add')
    @UseInterceptors(AnyFilesInterceptor())
    async newItem(@Res() res: Response, @Body() item: any): Promise<any> {

        const menu = await this.barService.add(item);
        return res.status(HttpStatus.ACCEPTED).json({ message: 'Added Item' });
    }

    @UseGuards(RolesGuard)
    @Get('/bar/add/')
    async addItem(@Res() res: Response, @Req() request) {
        return res.render(
            'admin/bar/add',
            { layout: 'base-admin' },
        );
    }

    @UseGuards(RolesGuard)
    @Get('/bar/:id')
    async editItem(@Res() res: Response, @Param('id') id: number) {
        const item = await this.barService.findById(id);
        return res.render(
            'admin/bar/edit',
            { layout: 'base-admin', item },
        );
    }

    @UseGuards(RolesGuard)
    @Put('/bar/')
    @UseInterceptors(AnyFilesInterceptor())
    async updateBar(@Res() res: Response, @Body() bar: any): Promise<any> {
        const item = await this.barService.update(bar);
        return res.status(HttpStatus.ACCEPTED).json({ message: 'updated' });
    }

    /* Events */
    @UseGuards(RolesGuard)
    @Get('/events/')
    async events(@Res() res: Response) {
        const events = await this.eventsService.findAll();
        return res.render(
            'admin/events/index',
            { layout: 'base-admin', events, eventsJSON: JSON.stringify(events) },
        );
    }

    @UseGuards(RolesGuard)
    @Post('/events/add')
    async addEvent(@Res() res: Response, @Body() event: any): Promise<any> {

        await this.eventsService.add(event);
        return res.status(HttpStatus.ACCEPTED).json({ event });
    }

    @UseGuards(RolesGuard)
    @Get('/events/add/')
    async addEventIndex(@Res() res: Response, @Req() request) {
        return res.render(
            'admin/events/add',
            { layout: 'base-admin' },
        );
    }

    @UseGuards(RolesGuard)
    @Get('/events/:id')
    async editEvent(@Res() res: Response, @Param('id') id: number) {
        const event = await this.eventsService.findById(id);
        return res.render(
            'admin/events/edit',
            { layout: 'base-admin', event },
        );
    }

    @UseGuards(RolesGuard)
    @Put('/events/update/')
    @UseInterceptors(AnyFilesInterceptor())
    async updateEvent(@Res() res: Response, @Body() event: any): Promise<any> {
        delete event.schedule;

        const item = await this.eventsService.update(event);
        return res.status(HttpStatus.ACCEPTED).json({ message: 'updated' });
    }

    /* Gallery */
    @UseGuards(RolesGuard)
    @Get('/gallery')
    async gallery(@Res() res: Response, @Req() request) {
        let gallery = await this.galleryService.findAll();
        return res.render(
            'admin/gallery/index',
            { layout: 'base-admin', gallery },
        );
    }

    @UseGuards(RolesGuard)
    @Get('/gallery/add')
    async addGallery(@Res() res: Response, @Req() request) {
        return res.render(
            'admin/gallery/add',
            { layout: 'base-admin' },
        );
    }

    @UseGuards(RolesGuard)
    @Get('/gallery/:id')
    async editPhoto(@Res() res: Response, @Param('id') id: number) {
        const photo = await this.galleryService.findById(id);
        return res.render(
            'admin/gallery/edit',
            { layout: 'base-admin', photo },
        );
    }

    @UseGuards(RolesGuard)
    @Put('/gallery/')
    @UseInterceptors(FileInterceptor('photo', {
        storage: diskStorage({
            destination: './public/uploads/gallery/',
            filename: editFileName,
        }),
        fileFilter: imageFileFilter,
    }))
    async updateGallery(@Res() res: Response, @Body() photo: any, @UploadedFile() file): Promise<any> {
        if (file) {
            photo.photo = `/uploads/gallery/${file.filename}`;
        }

        const image = await this.galleryService.update(photo);
        return res.status(HttpStatus.ACCEPTED).json({ message: 'Updated Photo in Gallery' });
    }

    @UseGuards(RolesGuard)
    @Post('/gallery/add')
    @UseInterceptors(FileInterceptor('photo', {
        storage: diskStorage({
            destination: './public/uploads/gallery/',
            filename: editFileName,
        }),
        fileFilter: imageFileFilter,
    }))
    async addPhoto(@Res() res: Response, @Body() photo: any, @UploadedFile() file): Promise<any> {

        if (file) {
            photo.photo = `/uploads/gallery/${file.filename}`;
        }

        const user = await this.galleryService.add(photo);
        return res.status(HttpStatus.ACCEPTED).json({ message: 'Added Photo to the Gallery' });
    }


    /* RP Menu */
    @UseGuards(RolesGuard)
    @Get('/rp')
    async menu(@Res() res: Response, @Req() request) {
        let gallery = await this.galleryService.findAll();
        return res.render(
            'admin/rp/index',
            { layout: 'base-admin', gallery },
        );
    }

    /* Dashboard */
    @UseGuards(RolesGuard)
    @Get('/dashboard/')
    async dashboard(@Res() res: Response) {
        return res.render(
            'admin/dashboard',
            { layout: 'base-admin' },
        );
    }
}


