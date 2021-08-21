import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { ContestantsRO } from './contestants.ro';

@Entity()
export class Contestants {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'ingame_name',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    ingame_name: string;

    @Column({
        name: 'discord_name',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    discord_name: string;

    @Column({
        name: 'discord_id',
        type: 'int4',
        nullable: true
    })
    discord_id: string;

    @Column({
        name: 'created',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    created: Date;


    toResponseObject(): ContestantsRO {
        const { id, ingame_name, discord_id, discord_name, created } = this;
        const responseObject: ContestantsRO = { id, ingame_name, discord_name, discord_id, created };

        return responseObject;
    }
}
