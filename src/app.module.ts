import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {
  CONTROLLERS,
  ControllersModule,
} from './controllers/controllers.module';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionsFilter } from './exceptions.filter';
import { AuthenticationMiddleware } from './auth/middlewares/authentication.middleware';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';

const PATH_EXCLUDE_JWT_AUTH = ['/register', '/login'];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ControllersModule,
    AuthModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [{ provide: APP_FILTER, useClass: ExceptionsFilter }, JwtStrategy],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .exclude(...PATH_EXCLUDE_JWT_AUTH)
      .forRoutes(...CONTROLLERS);
  }
}
