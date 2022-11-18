import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsString()
  address: string;

  @IsString()
  state: string;
}
