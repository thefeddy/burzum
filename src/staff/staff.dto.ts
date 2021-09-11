import { RoleDTO } from '../role/role.dto';

export class StaffDTO {
    readonly id: number;
    readonly username: string;
    readonly password: string;
    readonly discord_id: string;
    readonly name: string;
    readonly photo: string;
    readonly role: string;
    readonly joined: Date;
    readonly active: boolean;
    readonly description: string;
    readonly superuser: number;
}

export class StaffUpdateDTO {
    readonly id: number;
    readonly discord_id: string;
    readonly name: string;
    readonly photo: string;
    readonly role: string;
    readonly active: boolean;
    readonly description: string;
}