import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerApiVersion } from 'mongodb';

import { PublicModule } from './app/public/public.module';
import { HomeModule } from './app/house/house.module';

dotenv.config();

const MONGODB_DATABASE = process.env.MONGODB_DATABASE || 'home-manager';
const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PASS = process.env.MONGODB_PASS || null;
const MONGODB_USER = process.env.MONGODB_USER || null;
const MONGODB_PORT = process.env.MONGODB_PORT || '27017';
const MONGODB_OPTIONS = process.env.MONGODB_OPTIONS || '';

const connectionUrl =
  process.env.NODE_ENV === 'production'
    ? `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_DATABASE}/${MONGODB_OPTIONS}`
    : `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DATABASE}`;

const options: any = {
  connectionName: 'home-manager',
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

@Module({
  imports: [
    MongooseModule.forRoot(connectionUrl, options),
    PublicModule,
    HomeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
