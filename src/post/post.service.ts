import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { createPostDto } from './dto/createPost.dto';
import { Post } from './post.model';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private readonly postRepository: Repository<Post>,
        private readonly userService: UserService
    ) {}

    async getPosts(id: number) {
        const user = await this.userService.getUserById(id) //TODO: Избавиться от этой хуйни везде где можно
        return await this.postRepository.find({
            where: {
                user: user
            }
        })
    }

    async getPost(id: number) {
        try {
            return await this.postRepository.findOne({
                where: {
                    id: id
                }
            })
        } catch (error) {
            
        }
    }

    async createPost(data: createPostDto) {
        return await this.postRepository.save(data)
    }
}
