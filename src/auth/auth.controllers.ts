

import { Controller, Get, Render, Res, HttpService, Next, Req, UseGuards, Post, Request, Body, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/common/guards/local-auth.guard';
import { StaffService } from 'src/staff/staff.service';
import { AuthService } from './auth.service';

import { Response } from 'express';

@Controller('')
export class AuthController {
    constructor(private http: HttpService, private staffService: StaffService, private authService: AuthService) { }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Res() res: Response, @Req() req): any {
        return res.redirect('/admin/dashboard');
    }
}
