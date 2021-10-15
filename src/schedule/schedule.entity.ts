import { Events } from 'src/events/events.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import { ScheduleRO } from './schedule.ro';


@Entity()
export class Schedule {
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
    })
    description: string;

    @Column({
        name: 'start',
        type: "time",
        nullable: true,
    })
    start: Date;

    @Column({
        name: 'end',
        type: "time",
        nullable: true,
    })
    end: Date;

    @Column({
        name: 'location',
        type: 'varchar',
    })
    location: string;

    @ManyToOne(() => Events, events => events.id)
    event: Events

    toResponseObject(): ScheduleRO {
        const { id, name, description, start, end, location } = this;
        const responseObject: ScheduleRO = { id, name, description, start, end, location };

        return responseObject;
    }
}
