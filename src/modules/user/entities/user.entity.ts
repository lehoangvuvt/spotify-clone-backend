import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  SID: string;

  @Column('varchar', { nullable: false, unique: true, length: 255 })
  EMAIL: string;

  @Column('varchar', { nullable: false, length: 100 })
  HASH_PASSWORD: string;

  @Column('text', { nullable: true })
  NAME: string;

  @Column('decimal', { nullable: true })
  AGE: number;
}

export default User;
