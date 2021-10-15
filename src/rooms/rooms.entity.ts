import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    ManyToOne
} from 'typeorm';

import { RoomsRO } from './rooms.ro';
import { Room } from '../room/room.entity';

@Entity()
export class Rooms {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: true,
    })
    name: string;

    @Column({
        name: 'description',
        type: 'varchar',
        nullable: true,
    })
    description: string;

    @Column({
        name: 'price',
        type: 'int4',
    })
    price: number;

    @Column({
        name: 'active',
        type: 'varchar',
        default: () => "true"
    })
    active: string;

    @Column({
        name: 'photo',
        type: 'varchar',
    })
    photo: string;

    toResponseObject(): RoomsRO {
        const { id, name, description, price, active, photo } = this;
        const responseObject: RoomsRO = { id, name, description, price, active, photo };

        return responseObject;
    }
}
