
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Heroes API')
    .setDescription('The heroes API description')
    .setVersion('1.0')
    .addTag('heroes', 'servicios de Heroes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('document', app, document, {
    jsonDocumentUrl: 'api/v1/document-json',
    yamlDocumentUrl: 'api/v1/document-yaml',
    customSiteTitle: 'Heroes API',
  });
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
