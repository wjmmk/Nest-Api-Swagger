import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './core/user/user.module';
import { ConfigModule } from './config/config.module';
import { UserEntity } from './core/user/user.entity';


@Module({
  imports: [
    //ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '9783238',
      database: 'endpoints',
      entities: [UserEntity],
      synchronize: true,
    }),        
    UsersModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
