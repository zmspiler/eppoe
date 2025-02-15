import 'dotenv/config';
import * as process from 'node:process';
import { logger } from '@/logger';

export class Environment {
  public static isProduction = process.env.NODE_ENV === 'production';

  public static get databaseUrl() {
    const url = process.env.DATABASE_URL;

    if (!url) {
      logger.error('DATABASE_URL is not set');
      process.exit(1);
    }

    return url;
  }

  public static get host() {
    return this.isProduction ? '0.0.0.0' : '127.0.0.1';
  }

  public static get port() {
    return parseInt(process.env.PORT || '80');
  }
}
