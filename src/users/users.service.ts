import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, Admin, Role } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { hash } from 'bcrypt';
import { RoleEnum } from 'src/users/user.entity';

@Injectable()
export class RoleService {
  constructor(@InjectRepository(Role) private repo: Repository<Role>) {}

  async getUserRole(role: RoleEnum) {
    const user = await this.repo.findOne({
      where: {
        role,
      },
    });

    if (!user)
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    return user;
  }
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private repo: Repository<User>,
    private roleService: RoleService,
  ) {}

  async signup(userData: CreateUserDto, role: RoleEnum) {
    const { password } = userData;
    const hashedPassword = await hash(password, 10);
    const userRole = await this.roleService.getUserRole(role);

    const newUser = { ...userData, password: hashedPassword };
    const user = this.repo.create(newUser);
    user.role = userRole;

    return this.repo.save(user);
  }
}

@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private repo: Repository<Admin>) {}
}
