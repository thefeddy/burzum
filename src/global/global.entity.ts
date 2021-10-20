import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { ContestantsRO } from './global.ro';

@Entity()
export class Global {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'contact',
        type: 'varchar',
        nullable: true,
    })
    contact: string;

    @Column({
        name: 'djs',
        type: 'varchar',
        nullable: true,
    })
    djs: string;

    @Column({
        name: 'social_media',
        type: 'varchar',
        nullable: true,
    })
    social_media: string;

    toResponseObject(): ContestantsRO {
        const { contact, djs, social_media } = this;
        const responseObject: ContestantsRO = { contact, djs, social_media };

        return responseObject;
    }
}
