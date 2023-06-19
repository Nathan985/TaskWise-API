import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ passReqToCallback: true });
  }

  async authenticate(req: Request) {
    const authorization = req.headers.authorization;
    const accessToken = authorization.replace('Bearer ', '');

    const user = await this.authService.AuthenticateUser(accessToken);
    if (!user) {
      this.error(new UnauthorizedException());
    }
    this.success(user);
  }
}
