import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
    JoinTable
} from 'typeorm';


import { BookingsRO } from './bookings.ro';
import { Staff } from '../staff/staff.entity';
import { Events } from '../events/events.entity';
import { Rooms } from '../rooms/rooms.entity';

@Entity()
export class Bookings {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    name: string;

    @ManyToMany(() => Staff)
    @JoinTable({ name: "bookings_staff" })
    staff: Staff[];

    @OneToOne(() => Events)
    @JoinColumn()
    event: number;

    @OneToOne(() => Rooms, rooms => rooms.id)
    @JoinColumn()
    room: number;

    @OneToOne(() => Rooms, rooms => rooms.price)
    @JoinColumn()
    price: number;

    @Column({
        name: 'start',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    start: Date;

    @Column({
        name: 'end',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    end: Date;


    toResponseObject(): BookingsRO {
        const { id, name, event, room, start, end, price } = this;
        const responseObject: BookingsRO = { id, name, staff: { id }, event, room, start, end, price };

        return responseObject;
    }
}
