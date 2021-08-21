import { Module, HttpModule } from '@nestjs/common';

import { BurzumController } from './burzum.controller';

@Module({
    imports: [HttpModule],
    providers: [],
    controllers: [BurzumController],
})

export class BurzumModule { }
