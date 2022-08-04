import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.APP_PORT || 5000 
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api')
  app.enableCors()
  await app.listen(port, () => {
    console.log(`Server has been started on port: ${port}`)
  });
}
bootstrap();
