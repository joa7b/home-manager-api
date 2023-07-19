import { Controller, Get, Res, Req, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';

import { HouseService } from './house.service';
import { House } from '@domain/entities/house.entity';

@Controller('house')
export class HouseController {
  constructor(private houseService: HouseService) {}

  @Get()
  async findAll(@Res() response: Response, @Req() request: Request) {
    try {
      const house: House = request['currenthouse'];

      if (!house) {
        throw new NotFoundException('house does not exist!');
      }

      const watermarks: House[] = await this.houseService.findAll(house._id);

      if (!watermarks) {
        throw new NotFoundException('You do not have any watermarks!');
      }

      return response.status(200).send({
        success: true,
        watermarks,
      });
    } catch (err) {
      return response.status(404).send({
        success: false,
        message: err.message,
      });
    }
  }
}
