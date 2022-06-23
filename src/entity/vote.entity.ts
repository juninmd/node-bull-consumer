import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Candidate } from './candidate.entity';

@Entity()
export class Vote {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  partyNumber: number

  @ManyToOne(type => Candidate)
  @JoinColumn({ name: "partyNumber" })
  Candidate: Candidate;

}