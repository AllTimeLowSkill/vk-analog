import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/user/user.model';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    JwtModule.register({
    secret: process.env.JWT_SECRET || 'QWER',
    signOptions: {
      expiresIn: '24h'
    }
  }),
  forwardRef(() => UserModule), 
  User],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [
    JwtModule
  ]
})
export class AuthModule {}
