import { Body, Controller, Post } from '@nestjs/common';
import { createUser } from 'src/user/dto/createUser.dto';
import { AuthService } from './auth.service';
import { signInDto } from './dto/signIn.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('/signup')
    signUp(@Body() data: createUser) {
        return this.authService.signUp(data)
    }

    @Post('/signin')
    signIn(@Body() data: signInDto) {
        return this.authService.signIn(data)
    }
}   
