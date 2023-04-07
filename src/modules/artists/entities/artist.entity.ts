import Song from 'src/modules/song/entities/song.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class Artist extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  SID: string;

  @Column('varchar', { nullable: false, length: 255 })
  NAME: string;

  @ManyToMany(() => Song)
  @JoinTable({ name: 'artist_song' })
  songs: Song[];
}
