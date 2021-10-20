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
    @PrimaryGeneratedColumn('increment')
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
        name: 'discord_id',
        type: 'varchar',
        nullable: true,
        length: 255,
        select: false,
    })
    discord_id: string;

    @Column({
        name: 'name',
        type: 'varchar',
        length: 255
    })
    name: string;

    @Column({
        name: 'photo',
        type: 'varchar',
        nullable: true
    })
    photo: string;


    @Column({
        name: 'joined',
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    joined: Date;

    @Column()
    role: StaffRoleEnum;

    @Column({
        name: 'active',
        type: 'varchar',
        default: () => 'true',
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

    @Column({
        name: 'superuser',
        type: 'int4',
        default: () => 0,
        select: false
    })
    superuser: number;

    @Column({
        name: 'featured',
        type: 'varchar',
        default: () => 'false',

    })
    featured: string;

    @Column({
        name: 'logo',
        type: 'varchar',
        nullable: true
    })
    logo: string;

    @Column({
        name: 'cutout',
        type: 'varchar',
        nullable: true
    })
    cutout: string;

    toResponseObject(): StaffRO {
        const {
            id,
            username,
            password,
            name,
            role,
            photo,
            joined,
            active,
            stream,
            description,
            superuser,
            discord_id,
            featured,
            logo,
            cutout
        } = this;

        const responseObject: StaffRO = {
            id,
            username,
            password,
            name,
            role,
            photo,
            joined,
            active,
            stream,
            description,
            superuser,
            discord_id,
            featured,
            logo,
            cutout
        };

        return responseObject;
    }
}
