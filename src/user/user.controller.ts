import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FunctionFirebaseAuth } from '../auth/functions.auth.service';
import { FirebaseAuthGuard } from '../auth/auth.guard';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(FunctionFirebaseAuth)
  @ApiBearerAuth()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(FirebaseAuthGuard)
  @ApiBearerAuth()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(FirebaseAuthGuard)
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(FirebaseAuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
}
