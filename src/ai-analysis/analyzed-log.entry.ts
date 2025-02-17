import { Field, ObjectType, ID } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { LogEntry } from "@src/log-ingestion/log-entry.entity";

@ObjectType()
@Entity()
export class AnalyzedLog {
  @Field(() => ID as number)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  analysisResult: string;

  @Field()
  @Column()
  modelUsed: string; // e.g., "GPT-4", "BERT"

  @Field()
  @Column()
  timestamp: Date;

  @ManyToOne(() => LogEntry, (logEntry) => logEntry.analyses)
  logEntry: LogEntry;
}
