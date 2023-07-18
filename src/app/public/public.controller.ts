import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('public')
export class PublicController {
  @Get('ping')
  async findAll(@Res() response: Response): Promise<Response> {
    try {
      response.status(200).send({
        success: true,
        message: 'pong',
      });
    } catch (err) {
      return response.status(404).send({
        success: false,
        message: err.message,
      });
    }
  }
}
