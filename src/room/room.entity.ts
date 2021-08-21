import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { RoomRO } from './room.ro';

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    name: string;

    @Column({
        name: 'active',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    active: string;

    toResponseObject(): RoomRO {
        const { id, name, active } = this;
        const responseObject: RoomRO = { id, name, active };

        return responseObject;
    }
}
