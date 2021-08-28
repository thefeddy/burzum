import { RoleDTO } from '../role/role.dto';

export class StaffDTO {
    readonly id: number;
    readonly username: string;
    readonly password: string;
    readonly name: string;
    readonly photo: string;
    readonly role: string;
    readonly joined: Date;
    readonly active: boolean;
    readonly description: string;
}