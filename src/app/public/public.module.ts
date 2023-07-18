import { Module } from '@nestjs/common';

import { PublicController } from './public.controller';

@Module({
  imports: [],
  controllers: [PublicController],
  providers: [],
})
export class PublicModule {}