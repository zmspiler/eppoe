import {createHTTPServer} from "@trpc/server/adapters/standalone";
import {appRouter} from "@/router";
import {logger} from "@/logger";
import {Environment} from "@/environment";

const server = createHTTPServer({
  router: appRouter,
})

server.listen(Environment.port, Environment.host, () => {
  logger.info(`Server listening on ${Environment.host}:${Environment.port}`);
})