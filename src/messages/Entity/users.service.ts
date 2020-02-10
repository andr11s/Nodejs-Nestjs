import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'

import { UserEntity } from '../Entity/user.entity'
import  { CreateUserDto } from '../dto/create-user-dto'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
            private readonly UserRepository: Repository<UserEntity>,
    ){}

    async getAllUser(): Promise<UserEntity[]>{
        return await this.UserRepository.find();
    }

    async createUser(NewUser: CreateUserDto): Promise<UserEntity>{
        let NewUserResul = new UserEntity();
        NewUserResul.Username = NewUser.UserName
        NewUserResul.UserLastName = NewUser.UserLastName
        NewUserResul.UserGenere = NewUser.UserGenere
        NewUserResul.UserAge = NewUser.UserAge
        
        return await this.UserRepository.save(NewUserResul);
    }

    async UpdateUser(idUser: number, UpdateUser: CreateUserDto): Promise<UserEntity>{
        let NewUserResul = await this.UserRepository.findOne(idUser);
        NewUserResul.Username = UpdateUser.UserName
        NewUserResul.UserLastName = UpdateUser.UserLastName
        NewUserResul.UserGenere = UpdateUser.UserGenere
        NewUserResul.UserAge = UpdateUser.UserAge

        return await this.UserRepository.save(NewUserResul)
    }

    async DeleteUser(idUser: number, DeleteUser: CreateUserDto): Promise<any>{
        return await this.UserRepository.delete(idUser);
    }

}
