import { UserController } from './messages/user.controller';
import { MessageService } from './messages/Entity/message.service';
import { MessagesController } from './messages/messages.controller';
import { MessageEntity } from './messages/Entity/message.entity';
import { UsersService } from './messages/Entity/users.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './messages/Entity/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([MessageEntity , UserEntity])
  ],
  controllers: [AppController, MessagesController, UserController],
  providers: [
        UsersService, 
        MessageService,
        AppService],
})
export class AppModule {}
