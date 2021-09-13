import { StaffRoleEnum } from 'src/enums/role.enums';
export class StaffDTO {
    readonly id: number;
    readonly username: string;
    readonly password: string;
    readonly discord_id: string;
    readonly name: string;
    readonly photo: string;
    readonly role: StaffRoleEnum;
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
    readonly role: StaffRoleEnum;
    readonly active: boolean;
    readonly description: string;
}

export class StaffCreateDTO {
    readonly name: string;
    readonly photo: string;
    readonly role: StaffRoleEnum;
    readonly active: string;
    readonly description: string;
}