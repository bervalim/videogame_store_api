import "reflect-metadata";
import "express-async-errors";
import { PrismaClient } from "@prisma/client";
import express, { Application } from "express";
import cors from "cors";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { allRoutes } from "./routers";

export const prisma = new PrismaClient();

export const app: Application = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/", allRoutes);

app.use(handleErrors);
