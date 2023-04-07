import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Song extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  SID: string;

  @Column('varchar', { nullable: false, length: 255 })
  NAME: string;

  @Column('datetime', { nullable: true })
  PUBLISHED_DATE: Date;

  @Column('varchar', { nullable: true })
  LYRIC: string;
}
