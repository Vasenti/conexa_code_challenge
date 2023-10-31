import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ControllersModule } from './controllers/controllers.module';
import { vPipe } from './validation-pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(vPipe);

  const swaggerOptions = {
    docExpansion: 'none',
    filter: true,
    persistAuthorization: true,
  };
  const swaggerDoc = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Conexa API')
      .setVersion('1.0')
      .addBearerAuth()
      .build(),
    { include: [ControllersModule] },
  );

  SwaggerModule.setup('api', app, swaggerDoc, { swaggerOptions });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
