import { OmitType, PartialType } from '@nestjs/swagger';
import { UserEntity } from 'src/entities/User.entity';

export class UpdateUserDto extends PartialType(
  OmitType(UserEntity, ['uid', 'id'] as const),
) {}
