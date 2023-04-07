import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import UserService from './user.service';
import UserDTO from './dtos/user.dto';
import LoginDTO from './dtos/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly serivce: UserService) {}

  @Get('/get-all')
  async GetAllUsers() {
    const response = await this.serivce.getAllUser();
    return response;
  }

  @Post('/register')
  async register(@Body() userDTO: UserDTO, @Res() res: Response) {
    const response = await this.serivce.register(userDTO);
    return res.json(response);
  }

  @Post('/login')
  async login(@Body() loginDTO: LoginDTO, @Res() res: Response) {
    const response = await this.serivce.login(loginDTO);
    return res.json(response);
  }
}
