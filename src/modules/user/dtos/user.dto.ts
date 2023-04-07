import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export default class UserDTO {
  @IsNotEmpty()
  @IsEmail()
  EMAIL: string;

  @IsNotEmpty()
  @MinLength(10)
  NAME: string;

  @IsNotEmpty()
  AGE: number;

  @IsNotEmpty()
  @MinLength(10)
  PASSWORD: string;
}
