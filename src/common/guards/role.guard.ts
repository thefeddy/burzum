import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {

        const request = context.switchToHttp().getRequest();

        // const result = (await super.canActivate(context) as boolean);
        // await super.logIn(request);
        // return result;
        return request.isAuthenticated();
        // const role = this.reflector.get<string>('role', context.getHandler());
        // if (!role) {
        //     return true;
        // }
        // const request = context.switchToHttp().getRequest();
        // const user = request.user;
        // const hasRole = () => user.superuser === 1;

        // return user && user.superuser && hasRole();
    }
}
