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

@Entity()
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;
  @Column()
  authorId!: string;
  @Column('uuid', { nullable: true })
  parentId?: string;
  @Column()
  name: string;
  @ManyToMany(() => Post)
  posts: Post;
}
