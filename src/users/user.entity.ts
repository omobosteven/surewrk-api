import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

export enum RoleEnum {
  SUPERADMIN = 'superadmin',
  ADMIN = 'admin',
  EDITOR = 'editor',
  PROVIDER = 'provider',
  CONSUMER = 'consumer',
}

@Entity()
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    type: 'enum',
    enum: RoleEnum,
  })
  role: RoleEnum;

  @OneToMany(() => Admin, (admin) => admin.role)
  admin: Admin[];

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}

export abstract class BaseDetails {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
@Entity()
export class Admin extends BaseDetails {
  @ManyToOne(() => Role, (role) => role.admin, {
    cascade: true,
  })
  role: Role;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  address: string;

  @Column()
  state: string;

  @ManyToOne(() => Role, (role) => role.users, {
    cascade: true,
  })
  role: Role;
}
