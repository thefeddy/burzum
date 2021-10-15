import { Controller, Get, Render, Res, HttpService } from '@nestjs/common';

import { Response } from 'express';

import { EventsService } from './events.service';

@Controller('')
export class EventsController {
    constructor(private eventsService: EventsService) { }

    @Get('/')
    @Render('events/index')
    async index(@Res() res: Response) {
        const events = await this.eventsService.findThisWeeks();
        return { events }
    }
}
