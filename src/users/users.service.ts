import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, Admin } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}
}

@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private repo: Repository<Admin>) {}
}
