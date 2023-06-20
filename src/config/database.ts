import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig = () =>
  ({
    type: 'postgres',
    database: process.env.DATABASE_DB,
    host: process.env.HOST_DB,
    password: process.env.PASS_DB,
    username: process.env.USER_DB,
    port: Number(process.env.PORT_DB),
    ssl: true,
    synchronize: true,
    entities: ['dist/entities/*.entity.js'],
  } as TypeOrmModuleOptions);

console.log(TypeOrmConfig);
