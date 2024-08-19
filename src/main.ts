import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import { ExpressAdapter, NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, new ExpressAdapter());
  app.enableCors({
    origin: '*',
    credentials: true,
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Content-Type',
      'X-Requested-With',
      'apollo-require-preflight',
    ],
  });
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //   }),
  // );

  app.use(
    "/graphql",
    graphqlUploadExpress({ maxFileSize: 10000000, maxFile: 10 }),
  );
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
