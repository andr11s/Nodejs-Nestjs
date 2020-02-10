import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class MessageEntity {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
     NickEntity: string;

     @Column()
     MessageEntity: string;
}
