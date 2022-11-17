import { Module } from '@nestjs/common';
import { UsersController } from 'src/users/users.controller';
import { UsersService, AdminService } from 'src/users/users.service';
import { User, Admin, Role } from 'src/users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User, Admin, Role])],
  controllers: [UsersController],
  providers: [UsersService, AdminService],
})
export class UsersModule {}
