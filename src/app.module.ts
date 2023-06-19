import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/database';
import { TestAuthModule } from './test-auth/test-auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(TypeOrmConfig()),
    TestAuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
