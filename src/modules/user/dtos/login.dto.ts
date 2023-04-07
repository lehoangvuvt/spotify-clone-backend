import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export default class LoginDTO {
  @IsNotEmpty()
  @IsEmail()
  EMAIL: string;

  @IsNotEmpty()
  @MinLength(10)
  PASSWORD: string;
}
