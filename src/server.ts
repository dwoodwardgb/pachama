import express from "express";
import { seedDb } from "./api/forest-seed";
import { connect } from "./db";
import { createMiddleware } from "./middleware";
import router from "./routes";

const server = express();

export async function start() {
  const db = await connect();

  await seedDb(db);

  server.use(...createMiddleware(db));
  server.use(router);

  server.listen(process.env.PORT, () => {
    console.log(process.env.NODE_ENV, process.env.PORT);
  });
}
