import {Controller,Post,Body,Res,HttpStatus,Put,Param,Delete,Get,} from '@nestjs/common';
import { UsersService } from './Entity/users.service';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UsersService) {}

  @Get()
  GetAllUser(@Res() response) {
    this.UserService.getAllUser()
      .then(message => {
        response.status(HttpStatus.OK).json({ message });
      })
      .catch(() => {
        response
          .statu(HttpStatus.FORBIDDEN)
          .json({ message: 'Error con los usuario' });
      });
  }

  @Post()
  createuser(@Body() CreateUserDto: CreateUserDto, @Res() response) {
    let UserResl = this.UserService.createUser(CreateUserDto)
      .then(message => {
        response.status(HttpStatus.OK).json({ message });
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: 'Erro al guardar un usuaro' });
      });
  }

  @Put(':id')
  UpdateUser(
    @Body() UpdateUser: CreateUserDto,
    @Res() response,
    @Param('id') idUser,
  ) {
    this.UserService.UpdateUser(idUser, UpdateUser)
      .then(message => {
        response.status(HttpStatus.OK).json({ message });
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: 'Error al actualizar usuario' });
      });
  }

  @Delete(':id')
  DeteleUser(
    @Body() DeleteUser: CreateUserDto,
    @Res() response,
    @Param('id') idUser,
  ) {
    this.UserService.DeleteUser(idUser, DeleteUser)
      .then(message => {
        response.status(HttpStatus.OK).json({ message });
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: 'Error al elimnar usuario' });
      });
  }
}
