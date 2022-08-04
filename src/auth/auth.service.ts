import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createUser } from 'src/user/dto/createUser.dto';
import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';
import { signInDto } from './dto/signIn.dto';


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    private generateToken(user: User) {
        const payload = { email: user.email, id: user.id }
        
        return {
            token: this.jwtService.sign(payload)
        }
    }

    async signUp(data: createUser) {
        try {
            const isUserCreated = await this.userService.getUserByEmail(data.email)

            if(isUserCreated) {
                throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN)
            }

            const newUser = await this.userService.createUser(data)
            return this.generateToken(newUser)
            
        } catch (error) {
            
        }
    }

    async signIn(data: signInDto) {
        const isUserCreated = await this.userService.getUserByEmailAndPassword(data.email, data.password)
        return this.generateToken(isUserCreated)  
    }
}
