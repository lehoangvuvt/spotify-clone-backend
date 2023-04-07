import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import SongService from './artist.service';

@Controller('song')
export class ArtistController {
  constructor(private readonly serivce: SongService) {}
}
