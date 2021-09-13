import { Controller, Get, Render, Res, HttpService, Next, Req, UseGuards, Post, Request, Body, Param, Put, UseInterceptors, UploadedFile, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { Response } from 'express';
import { extname } from 'path';

import { RolesGuard } from '../common/guards/role.guard';

import { StaffService } from '../staff/staff.service';

import { diskStorage } from 'multer';

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
    constructor(private http: HttpService, private staffService: StaffService) { }


    @Get('/')
    @Render('admin/index')
    async index() { }

    @UseGuards(RolesGuard)
    @Get('/staff')
    async staffing(@Res() res: Response, @Req() request) {
        let staff = await this.staffService.findAll();
        return res.render(
            'admin/staff',
            { layout: 'base-admin', staff },
        );
    }

    @UseGuards(RolesGuard)
    @Get('/staff/add')
    async add(@Res() res: Response, @Req() request) {
        return res.render(
            'admin/staff-add',
            { layout: 'base-admin' },
        );
    }

    @UseGuards(RolesGuard)
    @Get('/staff/:id')
    async staff(@Res() res: Response, @Param('id') id: number) {
        const staff = await this.staffService.findById(id);
        return res.render(
            'admin/staff-edit',
            { layout: 'base-admin', staff },
        );
    }

    @UseGuards(RolesGuard)
    @Put('/staff/')
    @UseInterceptors(FileInterceptor('photo', {
        storage: diskStorage({
            destination: './public/uploads/',
            filename: editFileName,
        }),
        fileFilter: imageFileFilter,
    }))
    async updateStaff(@Res() res: Response, @Body() staff: any, @UploadedFile() file): Promise<any> {
        if (file) {
            staff.photo = `/uploads/${file.filename}`;
        }

        const user = await this.staffService.update(staff);
        return res.status(HttpStatus.ACCEPTED).json({ message: 'updated' });
    }

    @UseGuards(RolesGuard)
    @Post('/staff/add')
    @UseInterceptors(FileInterceptor('photo', {
        storage: diskStorage({
            destination: './public/uploads/',
            filename: editFileName,
        }),
        fileFilter: imageFileFilter,
    }))
    async addStaff(@Res() res: Response, @Body() staff: any, @UploadedFile() file): Promise<any> {

        if (file) {
            staff.photo = `/uploads/${file.filename}`;
        }

        const user = await this.staffService.add(staff);
        return res.status(HttpStatus.ACCEPTED).json({ message: 'Added Staff' });
    }

    @UseGuards(RolesGuard)
    @Get('/dashboard')
    async dashboard(@Res() res: Response) {
        return res.render(
            'admin/dashboard',
            { layout: 'base-admin' },
        );
    }
}


