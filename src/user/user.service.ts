import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/User.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private _userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const isEmailExists = await this._userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (isEmailExists) {
      throw new BadRequestException('email already exists!');
    }

    return await this._userRepository.save(createUserDto);
  }

  async findAll() {
    return await this._userRepository.find();
  }

  async findOne(id: number) {
    return await this._userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const isEmailExists = await this._userRepository.findOneBy({
      email: updateUserDto.email,
    });

    if (isEmailExists) {
      throw new BadRequestException('email already exists!');
    }

    await this._userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }
}
