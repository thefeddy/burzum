import { Catch, NotFoundException, ExceptionFilter, ArgumentsHost, InternalServerErrorException } from '@nestjs/common';


@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
    catch(_exception: NotFoundException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.render('404');
    }
}

