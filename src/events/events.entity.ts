import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    JoinTable,
    OneToMany
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

    @OneToMany(() => Staff, staff => staff.id)
    public staff: Staff[];

    @OneToOne(() => Staff)
    @JoinColumn()
    dj: number;

    @OneToOne(() => Contests)
    @JoinColumn()
    contest: number;

    @OneToOne(() => Staff)
    @JoinColumn()
    bartender: number;

    @OneToOne(() => Bar)
    @JoinColumn()
    bar_menu: number;



    toResponseObject(): EventRO {
        const { id, name, start, end, dj, contest, bar_menu, bartender } = this;
        const responseObject: EventRO = { id, name, start, end, dj, contest, bar_menu, bartender };

        return responseObject;
    }
}
