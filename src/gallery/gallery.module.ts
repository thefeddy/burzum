import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GalleryController } from './gallery.controller';
import { Gallery } from './gallery.entity';
import { GalleryService } from './gallery.service';

@Module({
    imports: [TypeOrmModule.forFeature([Gallery]), HttpModule],
    providers: [GalleryService],
    controllers: [GalleryController],
})

export class GalleryModule { }
