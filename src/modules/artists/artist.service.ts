import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { logError } from 'src/utils/utils';
import { RES_CODE } from '../consts/responseCode';
import Artist from './entities/artist.entity';

@Injectable()
class ArtistService {
  constructor(
    @InjectRepository(Artist) private artistRepository: Repository<Artist>,
  ) {}
}

export default ArtistService;
