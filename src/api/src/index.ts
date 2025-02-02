import {createHTTPServer} from "@trpc/server/adapters/standalone";
import {appRouter} from "@/router";
import {logger} from "@/logger";
import {Environment} from "@/environment";

const server = createHTTPServer({
  router: appRouter,
})

server.listen(3000, Environment.host, () => {
  logger.info("Server is running on http://localhost:3000")
})