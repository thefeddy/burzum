import { Events } from 'src/events/events.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import { GalleryRO } from './gallery.ro';


@Entity()
export class Gallery {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'photo',
        type: 'varchar',
        nullable: true
    })
    photo: string;

    @Column({
        name: 'created',
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    created: Date;

    @Column({
        name: 'author',
        type: 'varchar',
        nullable: true
    })
    author: string;

    toResponseObject(): GalleryRO {
        const { id, photo, created, author } = this;
        const responseObject: GalleryRO = { id, photo, created, author };

        return responseObject;
    }
}
