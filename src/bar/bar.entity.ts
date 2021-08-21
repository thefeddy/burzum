import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { BarRO } from './bar.ro';

@Entity()
export class Bar {
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
        name: 'items',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    items: string;

    @Column({
        name: 'active',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    active: string;

    @Column({
        name: 'price',
        type: 'int4',
        nullable: true
    })
    price: number;


    @Column({
        name: 'type',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    type: string;

    toResponseObject(): BarRO {
        const { id, name, items, active, price, type } = this;
        const responseObject: BarRO = { id, name, items, active, price, type };

        return responseObject;
    }
}
