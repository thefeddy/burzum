import { Injectable, UnauthorizedException } from '@nestjs/common';
import { StaffService } from '../staff/staff.service';


@Injectable()
export class AuthService {
    constructor(private staffService: StaffService) {

    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.staffService.findOne(username);

        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

}