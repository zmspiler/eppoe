import { createHTTPServer } from '@trpc/server/adapters/standalone';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from '@/router';
import { logger } from '@/logger';
import { Environment } from '@/environment';

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = Awaited<ReturnType<typeof createContext>>;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(Environment.port, Environment.host, () => {
  logger.info(`Server listening on ${Environment.host}:${Environment.port}`);
});
