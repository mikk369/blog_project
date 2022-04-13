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
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User)
  posts: User;
}
