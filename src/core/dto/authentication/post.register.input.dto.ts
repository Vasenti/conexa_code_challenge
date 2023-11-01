import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ROLES } from '../../entities/user';
import { Role } from '../../../auth/roles.enum';

export class PostRegisterInputDto {
  @ApiProperty({
    description: 'User nick name',
    example: 'Nicolai',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'User name',
    example: 'Nicolas',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Rodriguez',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'User email address',
    example: 'nicolai@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'password',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'User role',
    example: 'ROLE_1',
    enum: ROLES,
  })
  @IsNotEmpty()
  role: Role[];
}
