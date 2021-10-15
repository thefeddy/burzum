
import { Schedule } from '../schedule/schedule.entity';
import { Staff } from '../staff/staff.entity';
export class EventsDTO {
    readonly id: number;
    readonly date: Date;
    readonly staff: Staff;

}