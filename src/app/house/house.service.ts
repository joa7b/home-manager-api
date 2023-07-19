import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { House } from '@domain/entities/house.entity';

@Injectable()
export class HouseService {
  constructor(
    @InjectModel(House.name, 'home-manager')
    private houseModel: Model<House>,
  ) {}

  async findAll(houseId: string): Promise<House[]> {
    const houses: House[] = await this.houseModel.find({
      ownerId: houseId,
      deletedAt: null,
    });

    return houses;
  }
}
