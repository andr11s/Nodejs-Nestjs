import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MessageEntity } from '../Entity/message.entity';
import { CreateMessgesDto } from '../dto/create-messages-dto';

@Injectable()
export class MessageService {
        constructor(
            @InjectRepository(MessageEntity)
                private readonly messageRepository: Repository <MessageEntity>,
        ) {}

        async getAll(): Promise<MessageEntity[]> {
            return await this.messageRepository.find();
        }

        async createdMessage(NewMessage : CreateMessgesDto): Promise<MessageEntity> {
            let NewMessaResul = new MessageEntity();
            NewMessaResul.NickEntity = NewMessage.nick
            NewMessaResul.MessageEntity = NewMessage.messages
            
            return await this.messageRepository.save(NewMessaResul)
        }

        async UpdateMessage(idMessage: number, UpdateNewMessage: CreateMessgesDto): Promise<MessageEntity>{
            let MessageUpdate = await this.messageRepository.findOne(idMessage);
            MessageUpdate.NickEntity = UpdateNewMessage.nick;
            MessageUpdate.MessageEntity = UpdateNewMessage.messages;

            return  await this.messageRepository.save(MessageUpdate);
        }

        async DeleteMessage(idMessage: number): Promise<any>{
            return  await this.messageRepository.delete(idMessage);
        }
}

