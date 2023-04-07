import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import SongService from './song.service';

@Controller('song')
export class SongController {
  constructor(private readonly serivce: SongService) {}
}
