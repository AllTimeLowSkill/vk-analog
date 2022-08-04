import { User } from "src/user/user.model";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    title: string

    @Column()
    content: string

    @ManyToOne(() => User, (user) => user.post)
    user: User
}