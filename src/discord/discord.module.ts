import { Module, HttpModule } from '@nestjs/common';
import { DiscordController } from './discord.controller';
import { DiscordService } from './discord.service';

@Module({
    imports: [HttpModule],
    providers: [DiscordService],
    exports: [DiscordService],
    controllers: [DiscordController]
})
export class DiscordModule { }