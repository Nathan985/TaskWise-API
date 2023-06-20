import { Entity, Column } from 'typeorm';
import { BaseEntity } from './Base.entity';

@Entity()
export class UserEntity extends BaseEntity {
  @Column({
    unique: true,
  })
  uid: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    default: true,
  })
  active?: boolean;
}
