import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createPostDto } from './dto/createPost.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(
        private readonly postService: PostService
    ) {}

    @Post()
    getPosts(@Body() id: string) {
        return this.postService.getPosts(Number(id))
    }

    @Get(':id')
    getPost(@Param('id') id: string) {
        return this.postService.getPost(Number(id))
    }
    
    @Post('/create')
    createPost(@Body() data: createPostDto) {
        return this.postService.createPost(data)
    }
}
