import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { UserEntity } from './User.entity';

@Entity()
export class TaskStatusEntity extends BaseEntity {
  @Column({
    unique: true,
  })
  status: string;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  User: UserEntity;
}
