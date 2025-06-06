import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;

  console.log(`Running on locahost:${PORT}`);
  await app.listen(PORT);
}

bootstrap();
