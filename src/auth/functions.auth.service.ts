import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class FunctionFirebaseAuth implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const tokenAPI = request.headers['authorization']?.replace('Bearer ', '');

    if (!tokenAPI)
      throw new UnauthorizedException('Authentication is required');

    const accessToken = process.env.FIREBASE_REST;

    if (accessToken != tokenAPI) {
      throw new UnauthorizedException('Invalid authorization token!');
    }

    return true;
  }
}
