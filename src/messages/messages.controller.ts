import { Controller, Get, Post, Body, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMessgesDto } from './dto/create-messages-dto'
import { MessageService } from './Entity/message.service';


@Controller('messages')
export class MessagesController {
    constructor( 
        private readonly MessageService:  MessageService){}


    @Post()
     createMessage(@Body() CreateMessagesDto : CreateMessgesDto, @Res() response){
            
            let resl= this.MessageService.createdMessage(CreateMessagesDto).then(message =>{
                response.status(HttpStatus.CREATED).json({message})
            }).catch(()=>{
                response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al crear el mensaje '})
            });
    }

    @Get()
    GetAllMessages(@Res() response){
        this.MessageService.getAll().then(message  =>{
            response.status(HttpStatus.OK).json(message);
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al actualizar el mensaje'})
        });
    }

    @Put(':id')
    UpdateMessages(@Body() UpdateMessgesDto: CreateMessgesDto, @Res() response, @Param('id') idMessage){
        this.MessageService.UpdateMessage(idMessage, UpdateMessgesDto).then( message=>{
            response.status(HttpStatus.OK).json({message});
        }).catch(()=>
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al actulizar el mensaje'})
        )
    }

    @Delete(':id')
    DeleteMessages(@Res() response , @Param('id') idMessage){
        this.MessageService.DeleteMessage(idMessage).then( message =>{
            response.status(HttpStatus.OK).json({message})
        }).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al Elimnar el mensaje'})

        })
    }

}
