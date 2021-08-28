import { RoleRO } from '../role/role.ro';

export class StaffRO {
    id: number;
    username: string;
    password: string;
    name: string;
    photo: string;
    role: string;
    joined: Date;
    active: string;
    stream: string;
    description: string;
}

export class StaffIdRO {
    id: number;
}

