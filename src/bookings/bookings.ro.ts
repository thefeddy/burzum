import { StaffIdRO } from '../staff/staff.ro';

export class BookingsRO {
    id: number;
    name: string;
    staff: StaffIdRO;
    start: Date;
    end: Date;
    event: number;
    room: number;
    price: number;
}
