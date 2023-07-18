import path from 'path';
import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PublicModule } from './app/public/public.module';

dotenv.config();

const MONGODB_DATABASE = process.env.MONGODB_DATABASE || 'watermark';
const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PASS = process.env.MONGODB_PASS || null;
const MONGODB_USER = process.env.MONGODB_USER || null;
const MONGODB_PORT = process.env.MONGODB_PORT || '27017';

const connectionUrl =
  process.env.NODE_ENV === 'production'
    ? `mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`
    : `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`;

const options: any = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

if (process.env.NODE_ENV === 'production') {
  options.ssl = true;
  // options.sslValidate = true;
  options.sslCA = path.join(__dirname, '..', 'global-bundle.pem');
}
@Module({
  imports: [
    MongooseModule.forRoot(connectionUrl, options),
    PublicModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}