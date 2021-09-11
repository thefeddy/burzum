import { Controller, Get, Render, Res, HttpService, Next, Req, UseGuards, Post, Request, Body, Param, Put, UseInterceptors, UploadedFile, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { response, Response } from 'express';

import { RolesGuard } from '../common/guards/role.guard';

import { StaffService } from '../staff/staff.service';

@Controller('')
export class AdminController {
    constructor(private http: HttpService, private staffService: StaffService) { }


    @Get('/')
    @Render('admin/index')
    async index(@Res() res: Response) {

    }


    @Get('/staff')
    async staffing(@Res() res: Response, @Req() request) {
        const staff = await this.staffService.findAll();
        return res.render(
            'admin/staff',
            { layout: 'base-admin', staff },
        );
    }

    @Get('/staff/:id')
    async staff(@Res() res: Response, @Param('id') id: number) {
        const staff = await this.staffService.findById(id);
        return res.render(
            'admin/staff-edit',
            { layout: 'base-admin', staff },
        );
    }
    // @UseGuards(RolesGuard)
    @Put('/staff/:id')
    async updateStaff(@Res() res: Response, @Body() staff: any): Promise<any> {
        const user = await this.staffService.update(staff);
        return res.status(HttpStatus.OK).json(user);
    }

    // @UseGuards(RolesGuard)
    @Get('/dashboard')

    async dashboard(@Res() res: Response) {
        return res.render(
            'admin/dashboard',
            { layout: 'base-admin' },
        );
    }
}


