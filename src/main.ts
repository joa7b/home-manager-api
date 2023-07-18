import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      methods: 'GET,HEAD,OPTIONS,POST,PUT,DEL',
    },
  });
  await app.listen(3000);
}
bootstrap();