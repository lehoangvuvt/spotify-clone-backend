import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { logError } from 'src/utils/utils';
import { RES_CODE } from '../consts/responseCode';
import Song from './entities/song.entity';

@Injectable()
class SongService {
  constructor(
    @InjectRepository(Song) private songRepository: Repository<Song>,
  ) {}
}

export default SongService;
