
import { Schedule } from '../schedule/schedule.entity';
import { Staff } from '../staff/staff.entity';

export class EventRO {
    id: number;
    date: Date;
    staff: Staff;
}
