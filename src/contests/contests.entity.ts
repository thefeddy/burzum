import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
} from 'typeorm';

import { ContestRO } from './contests.ro';
import { Contestants } from 'src/contestants/contestants.entity';

@Entity()
export class Contests {
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
        name: 'prize',
        type: 'int4',
        nullable: true
    })
    prize: number;

    @Column({
        name: 'winner',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    winner: string;


    @Column({
        name: 'buy_in',
        type: 'int4',
        nullable: true
    })
    buy_in: number;

    @Column({
        name: 'date',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    date: Date;

    @ManyToMany(() => Contestants)
    @JoinTable({ name: "contest_contestants" })
    contestants: Contestants[];


    toResponseObject(): ContestRO {
        const { id, name, description, prize, winner, buy_in, date } = this;
        const responseObject: ContestRO = { id, name, description, prize, winner, buy_in, date, contestants: { id } };

        return responseObject;
    }
}
