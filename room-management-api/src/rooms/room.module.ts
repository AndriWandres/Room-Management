import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './room.entity';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AppGateway } from 'src/app.gateway';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Room])
  ],
  providers: [RoomService, AppGateway],
  controllers: [RoomController]
})
export class RoomModule { }
