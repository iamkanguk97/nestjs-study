import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));   // useStaticAssets (public)
  app.setBaseViewsDir(join(__dirname, '..', 'views'));   // 템플릿 엔진을 어느 폴더에 놓을 것인지?
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT);
}
bootstrap();
