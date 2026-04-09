import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

interface JwtPayload {
  email: string;
  sub: number;
}

interface LoginResponse {
  access_token: string;
}

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<{ id: number; email: string } | null> {
    const user = await this.userService.findByEmail(email);
    if (
      user &&
      (await this.userService.validatePassword(password, user.password))
    ) {
      return { id: user.id, email: user.email };
    }
    return null;
  }

  login(user: { id: number; email: string }): LoginResponse {
    const payload: JwtPayload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
