import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { House } from '@domain/entities/house.entity';

import { HouseSchema } from '@infra/mongodb/schema/house.schema';
import { HouseController } from './house.controller';
import { HouseService } from './house.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: House.name, schema: HouseSchema }], 'home-manager'),
  ],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HomeModule {}
