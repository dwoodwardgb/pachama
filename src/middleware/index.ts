import express from "express";
import { join } from "path";
import cors from "cors";
import logger from "./logger-middleware";
import { createDbMiddleware } from "./db-middleware";
import { Connection } from "typeorm";

const isProd = process.env.NODE_ENV === "production";

export const createMiddleware = (db: Connection) => [
  createDbMiddleware(db),
  cors({}),
  logger,
  express.static(join(__dirname, "..", "..", "client", "build")),
];
