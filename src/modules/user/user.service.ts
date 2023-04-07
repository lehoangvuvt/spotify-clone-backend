import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/user.entity';
import { Repository } from 'typeorm';
import UserDTO from './dtos/user.dto';
import { logError } from 'src/utils/utils';
import { RES_CODE } from '../consts/responseCode';
import { hashSync, compareSync } from 'bcrypt';
import { CustomResponse } from 'src/types/types';
import LoginDTO from './dtos/login.dto';

@Injectable()
class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getAllUser(): Promise<Array<User>> {
    let users: Array<User> = [];
    try {
      users = await this.userRepository.find();
    } catch (err) {
      logError(this.constructor.name, this.getAllUser.name, err.toString());
    }
    return users;
  }

  async register(user: UserDTO): Promise<CustomResponse<User>> {
    const { NAME, AGE, EMAIL, PASSWORD } = user;

    try {
      await this.userRepository.findOneOrFail({ where: { EMAIL } });
      return {
        data: null,
        message: 'Email already existed',
        code: RES_CODE.INTERNAL_SERVER_ERROR,
      };
    } catch (error) {
      const hashedPassword = hashSync(PASSWORD, 10);
      const newUser = this.userRepository.create({
        NAME,
        AGE,
        EMAIL,
        HASH_PASSWORD: hashedPassword,
      });
      await newUser.save();
      return {
        data: newUser,
        message: 'Success',
        code: RES_CODE.SUCCESS,
      };
    }
  }

  async login(loginDTO: LoginDTO): Promise<CustomResponse<User>> {
    const { EMAIL: email, PASSWORD: password } = loginDTO;
    const user = await this.userRepository.findOne({ where: { EMAIL: email } });

    const message = 'Wrong username or password';
    const code = RES_CODE.NOT_FOUND;
    const data = null;

    const response =
      user && compareSync(password, user.HASH_PASSWORD)
        ? {
            code: RES_CODE.SUCCESS,
            data: { ...user, HASH_PASSWORD: undefined },
            message: 'Success',
          }
        : { code, data, message };

    return response;
  }
}

export default UserService;
