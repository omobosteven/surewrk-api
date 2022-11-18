import { Body, Controller, Post } from '@nestjs/common';
import { UsersService, AdminService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private adminService: AdminService
  ) {}

  @Post('/signup')
  async createUser(@Body() body: CreateUserDto) {
    console.log({ body });

    return 'signup';
  }
}
