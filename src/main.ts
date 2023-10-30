import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ControllersModule } from './controllers/controllers.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerOptions = { docExpansion: 'none', filter: true };
  const swaggerDoc = SwaggerModule.createDocument(
    app,
    new DocumentBuilder().setTitle('Conexa API').setVersion('1.0').build(),
    { include: [ControllersModule] },
  );

  SwaggerModule.setup('api', app, swaggerDoc, { swaggerOptions });

  await app.listen(3000);
}
bootstrap();
