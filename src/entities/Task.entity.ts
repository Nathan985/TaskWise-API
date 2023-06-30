import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { UserEntity } from './User.entity';
import { TaskStatusEntity } from './TaskStatus.entity';

@Entity()
export class TaskEntity extends BaseEntity {
  @OneToOne(() => UserEntity)
  @JoinColumn()
  idUser: UserEntity;

  @Column()
  body: string;

  @Column()
  text: string;

  @Column()
  deadline?: Date;

  @Column({
    default: false,
  })
  finished?: boolean;

  @OneToOne(() => TaskStatusEntity)
  @JoinColumn()
  status: TaskStatusEntity;
}
