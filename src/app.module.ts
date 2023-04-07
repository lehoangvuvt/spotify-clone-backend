import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { DataSource } from 'typeorm';
import User from './modules/user/entities/user.entity';
import { SongModule } from './modules/song/song.module';
import Song from './modules/song/entities/song.entity';
import { ArtistModule } from './modules/artists/artist.module';
import Artist from './modules/artists/entities/artist.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'practice',
      entities: [User, Song, Artist],
      synchronize: true,
    }),
    UserModule,
    SongModule,
    ArtistModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
