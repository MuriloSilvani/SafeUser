import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userData: {
    name: string;
    email: string;
    password: string;
    cpf?: string;
    phone?: string;
  }): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: userData.email },
    });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = new User();
    user.name = userData.name;
    user.email = userData.email;
    user.password = hashedPassword;
    if (userData.cpf) user.cpf = user.setEncryptedData(userData.cpf);
    if (userData.phone) user.phone = user.setEncryptedData(userData.phone);

    return this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(
    id: number,
    updateData: Partial<{ name: string; cpf?: string; phone?: string }>,
  ): Promise<User> {
    const user = await this.findById(id);
    if (updateData.name) user.name = updateData.name;
    if (updateData.cpf) user.cpf = user.setEncryptedData(updateData.cpf);
    if (updateData.phone) user.phone = user.setEncryptedData(updateData.phone);
    return this.userRepository.save(user);
  }

  async changePassword(id: number, newPassword: string): Promise<void> {
    const user = await this.findById(id);
    user.password = await bcrypt.hash(newPassword, 10);
    await this.userRepository.save(user);
  }

  async validatePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  // Decrypt data for response
  getUserData(user: User): {
    id: number;
    name: string;
    email: string;
    cpf: string | null;
    phone: string | null;
    createdAt: Date;
    updatedAt: Date;
  } {
    const data = { ...user };
    if (data.cpf) data.cpf = user.getDecryptedData(data.cpf);
    if (data.phone) data.phone = user.getDecryptedData(data.phone);
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phone: data.phone,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    };
  }
}
