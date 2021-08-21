import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn
} from 'typeorm';

import { StaffRO } from './staff.ro';
import { Role } from '../role/role.entity';

@Entity()
export class Staff {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'username',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    username: string;

    @Column({
        name: 'password',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    password: string;


    @Column({
        name: 'name',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    name: string;

    @Column({
        name: 'photo',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    photo: string;


    @Column({
        name: 'joined',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    joined: Date;

    @OneToOne(() => Role)
    @JoinColumn()
    role: number;

    @Column({
        name: 'active',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    active: string;

    @Column({
        name: 'stream',
        type: 'varchar',
        nullable: true,
        length: 255
    })
    stream: string;

    toResponseObject(): StaffRO {
        const { id, username, password, name, role, photo, joined, active, stream } = this;
        const responseObject: StaffRO = { id, username, password, name, role, photo, joined, active, stream };

        return responseObject;
    }
}
