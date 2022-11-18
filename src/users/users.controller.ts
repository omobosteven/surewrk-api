import { Body, Controller, Post } from '@nestjs/common';
import { UsersService, AdminService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { RoleEnum } from 'src/users/user.entity';

@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private adminService: AdminService,
  ) {}

  @Post('/signup_consumer')
  async createUser(@Body() body: CreateUserDto) {
    const user = await this.usersService.signup(body, RoleEnum.CONSUMER);

    return user;
  }
}
