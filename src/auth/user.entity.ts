import { Field, ObjectType, ID } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { LogEntry } from "@src/log-ingestion/log-entry.entity";

@ObjectType()
@Entity()
export class User {
  @Field(() => ID as number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;

  @OneToMany(() => LogEntry, (logEntry) => logEntry.user)
  logs: LogEntry[];
}
