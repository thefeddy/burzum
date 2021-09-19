import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    JoinTable,
    OneToMany,
    ManyToOne
} from 'typeorm';

import { EventRO } from './events.ro';
import { Contests } from '../contests/contests.entity';
import { Staff } from '../staff/staff.entity';
import { Bar } from '../bar/bar.entity';

@Entity()
export class Events {
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
        name: 'date',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    date: Date;

    @OneToMany(() => Staff, staff => staff.id)
    public staff: Staff[];

    @ManyToOne(() => Staff)
    @JoinColumn()
    dj: number;

    @ManyToOne(() => Contests)
    @JoinColumn()
    contest: number;

    toResponseObject(): EventRO {
        const { id, name, date, dj, contest } = this;
        const responseObject: EventRO = { id, name, date, dj, contest };

        return responseObject;
    }
}
