export class StaffDTO {
    readonly id: number;
    readonly username: string;
    readonly password: string;
    readonly name: string;
    readonly photo: string;
    readonly role: number;
    readonly joined: Date;
    readonly active: boolean;
}