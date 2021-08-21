import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';

import { RoleRO } from './role.ro';

@Entity()
export class Role {
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
        name: 'active',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    active: string;

    toResponseObject(): RoleRO {
        const { id, name, active } = this;
        const responseObject: RoleRO = { id, name, active };

        return responseObject;
    }
}
