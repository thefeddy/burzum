import { StaffIdRO } from '../staff/staff.ro';

export class EventRO {
    id: number;
    name: string;
    start: Date;
    end: Date;
    dj: number;

    contest: number;
    bar_menu: number;
    bartender: number;
}
