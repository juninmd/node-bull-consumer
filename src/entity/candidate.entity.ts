import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Candidate {
  @PrimaryColumn()
  partyNumber: number;

  @Column()
  name: string;
}
