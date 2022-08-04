import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createUser } from './dto/createUser.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

    async getUsers() {
        try {
            return await this.userRepository.find()
        } catch (error) {
            
        }
    }

    async getUserById (id: number) {
        try {
            return await this.userRepository.findOne({
                where: {
                    id: id
                }
            })
        } catch (error) {
            
        }
    }

    async getUserByEmail(email: string) {
        try {
            return await this.userRepository.findOne({
                where: {
                    email: email
                }
            })
        } catch (error) {
            
        }
    }

    async getUserByEmailAndPassword(email: string, pass: string) {
        try {
            return await this.userRepository.findOne({
                where: {
                    email: email,
                    password: pass
                }
            })
        } catch (error) {
            
        }
    }

    async createUser (data: createUser) {
        try {
            const newUser: User = await this.userRepository.save(data)
            return newUser
        } catch (error) {
            
        }
    }
}
