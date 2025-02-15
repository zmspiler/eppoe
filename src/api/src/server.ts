import { logger } from '@/logger';
import { Environment } from '@/environment';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { appRouter } from '@/router';
import { createContext } from '@/trpc';
import pino from 'pino-http';

const server = express();

server.use(pino());
server.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

server.listen(Environment.port, Environment.host, () => {
  logger.info(`Server listening on ${Environment.host}:${Environment.port}`);
});
