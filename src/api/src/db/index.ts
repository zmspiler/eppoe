import { drizzle } from 'drizzle-orm/node-postgres';
import { Environment } from '@/environment';

export const db = drizzle(Environment.databaseUrl);
