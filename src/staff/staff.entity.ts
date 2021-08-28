import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    ManyToOne
} from 'typeorm';

import { StaffRO } from './staff.ro';

import { StaffRoleEnum } from '../enums/role.enums';

@Entity()
export class Staff {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'username',
        type: 'varchar',
        nullable: true,
        length: 255,
        select: false
    })
    username: string;


    @Column({
        name: 'password',
        type: 'varchar',
        nullable: true,
        length: 255,
        select: false
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
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    joined: Date;

    @Column({ nullable: true })
    role: StaffRoleEnum;

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

    @Column({
        name: 'description',
        type: 'varchar',
        nullable: true
    })
    description: string;

    toResponseObject(): StaffRO {
        const { id, username, password, name, role, photo, joined, active, stream, description } = this;
        const responseObject: StaffRO = { id, username, password, name, role, photo, joined, active, stream, description };

        return responseObject;
    }
}
