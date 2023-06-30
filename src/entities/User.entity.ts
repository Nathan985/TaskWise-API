import { Entity, Column } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class UserEntity extends BaseEntity {
  @Column({
    unique: true,
  })
  @ApiProperty({
    required: true,
    example: 'AbML4HO5ucgFsUJcU6DDCPetPPi1',
  })
  uid: string;

  @ApiProperty({
    required: true,
    example: 'taskwise@gmail.com',
  })
  @Column({
    unique: true,
  })
  email: string;

  @ApiProperty({
    required: false,
    example: true,
  })
  @Column({
    default: true,
  })
  active?: boolean;
}
