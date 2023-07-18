import { Module } from '@nestjs/common';

import { PublicModule } from './app/public/public.module';

@Module({
  imports: [PublicModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
