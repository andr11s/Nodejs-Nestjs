import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    idUser: Number;

    @Column()
    Username: string;

    @Column()
    UserLastName: string

    @Column()
    UserGenere: string
    
    @Column()
    UserAge: number
}
