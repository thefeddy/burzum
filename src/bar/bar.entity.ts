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

    toResponseObject(): BarRO {
        const { id, name, items, active } = this;
        const responseObject: BarRO = { id, name, items, active };

        return responseObject;
    }
}
