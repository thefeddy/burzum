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
        length: 255
    })
    name: string;

    @Column({
        name: 'description',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    description: string;

    @Column({
        name: 'price',
        type: 'int4',
        nullable: true
    })
    price: number;

    @Column({
        name: 'active',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    active: string;

    @ManyToOne(() => Room)
    @JoinColumn()
    type: number;

    toResponseObject(): RoomsRO {
        const { id, name, description, price, type, active } = this;
        const responseObject: RoomsRO = { id, name, description, price, type, active };

        return responseObject;
    }
}
