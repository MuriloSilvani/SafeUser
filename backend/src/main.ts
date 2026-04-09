import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables FIRST
dotenv.config({ path: path.join(__dirname, '../.env') });

// Hardcoded fallbacks for production
process.env.JWT_SECRET = process.env.JWT_SECRET || 'supersecretkeyforjwt';
process.env.DATABASE_URL = process.env.DATABASE_URL || 'sqlite:./database.sqlite';
process.env.ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'abcdefghijklmnopqrstuvwx1234567890';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors(); // For frontend integration
  await app.listen(process.env.PORT ?? 3001); // Change to 3001
}

void bootstrap();
