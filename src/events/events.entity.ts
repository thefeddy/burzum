import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    JoinTable,
    OneToMany,
    ManyToOne,
    ManyToMany
} from 'typeorm';

import { EventRO } from './events.ro';
import { Contests } from '../contests/contests.entity';
import { Staff } from '../staff/staff.entity';
import { Schedule } from '../schedule/schedule.entity';

@Entity()
export class Events {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'date',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    date: Date;

    @OneToMany(() => Schedule, (schedule) => schedule.event, { cascade: true, onUpdate: 'CASCADE' })
    schedule: Schedule[];

    @ManyToOne(() => Staff, staff => staff.id)
    @JoinColumn()
    staff: Staff;

}
