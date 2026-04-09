import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { LoginResponse } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import type { AuthenticatedRequest } from '../types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: AuthenticatedRequest): LoginResponse {
    return this.authService.login(req.user);
  }
}
