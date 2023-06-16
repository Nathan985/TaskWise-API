import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/database';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(TypeOrmConfig())],
  controllers: [],
  providers: [],
})
export class AppModule {}
