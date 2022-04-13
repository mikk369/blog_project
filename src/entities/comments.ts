import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToMany
} from 'typeorm';
import Post from './Post';
import User from './User';

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  title: string;
  @Column()
  context: string;
  @ManyToMany(() => Post)
  posts: Post;
}
