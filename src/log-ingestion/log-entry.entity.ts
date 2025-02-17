import { Field, ObjectType, ID } from "@nestjs/graphql";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "@src/auth/user.entity";
import { AnalyzedLog } from "@src/ai-analysis/analyzed-log.entry";

@ObjectType()
@Entity()
export class LogEntry {
  @Field(() => ID as number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  message: string;

  @Field()
  @Column()
  level: string; // e.g., info, warning, error

  @Field()
  @Column()
  timestamp: Date;

  @ManyToOne(() => User, (user) => user.logs)
  user: User;

  @OneToMany(() => AnalyzedLog, (analyzedLog) => analyzedLog.logEntry)
  analyses: AnalyzedLog[];
}
