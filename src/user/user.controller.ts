import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { createUser } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}
    
    //@UseGuards(JwtAuthGuard)
    @Get()
    getUsers() {
        return this.userService.getUsers()
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(Number(id))
    }

    @Post()
    createUser(@Body() data: createUser) {
        return this.userService.createUser(data)
    }
}
