import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationModule } from '../core/use_cases/authentication/authentication.module';
import { FilmsController } from './films.controller';
import { FilmsModule } from '../core/use_cases/films/films.module';

export const CONTROLLERS = [AuthenticationController, FilmsController];

@Module({
  imports: [AuthenticationModule, FilmsModule],
  controllers: CONTROLLERS,
})
export class ControllersModule {}
